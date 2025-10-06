// Main content script that runs on Twitter/X pages

// Configuration
const CONFIG = {
  // Selectors for Twitter/X post elements
  SELECTORS: {
    POST: 'article[data-testid="tweet"], article[data-testid="tweetDetail"]',
    POST_TEXT: 'div[data-testid="tweetText"]',
    POST_AUTHOR: 'div[data-testid="User-Name"] a[role="link"]:last-child',
    REPLY_BUTTON: 'div[role="button"][data-testid="reply"], [data-testid="reply"]',
    REPLY_BOX: 'div[data-testid="tweetTextarea_0"], [data-testid="tweetTextarea_0"]',
  },
  BUTTON_CLASS: 'ai-reply-btn',
  BUTTON_LOADING_CLASS: 'ai-reply-btn-loading',
  BUTTON_ICON: 'images/grok.png',
};

function isContextInvalidatedError(message) {
  if (!message) return false;
  const m = message.toLowerCase();
  return m.includes('extension context invalidated') || m.includes('context invalidated');
}

function getSettings(keys) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(keys, (result) => {
        const err = chrome.runtime && chrome.runtime.lastError ? chrome.runtime.lastError : null;
        if (err) {
          reject(new Error(err.message || 'Failed to read settings'));
        } else {
          resolve(result || {});
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

function setLocal(key, value) { try { chrome.storage.local.set({ [key]: value }); } catch {} }
function getLocal(keys) { return new Promise((resolve) => { try { chrome.storage.local.get(keys, (r) => resolve(r || {})); } catch { resolve({}); } }); }

function waitForElement(selector, timeoutMs = 2500, intervalMs = 100) {
  return new Promise((resolve) => {
    const start = Date.now();
    const timer = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) { clearInterval(timer); resolve(el); }
      else if (Date.now() - start >= timeoutMs) { clearInterval(timer); resolve(null); }
    }, intervalMs);
  });
}

// Performance: Visible-only processing with WeakSet
const PROCESSED_POSTS = new WeakSet();
const postObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting && e.target && !PROCESSED_POSTS.has(e.target)) {
      PROCESSED_POSTS.add(e.target);
      addAIReplyButton(e.target);
    }
  });
}, { root: null, rootMargin: '200px', threshold: 0 });

// Safety: rate-limit + jitter
let lastActionAt = 0;
function canAct() {
  const now = Date.now();
  if (now - lastActionAt < 1500) return false;
  lastActionAt = now;
  return true;
}
function jitter(msMin = 120, msJitter = 230) {
  return new Promise(r => setTimeout(r, msMin + Math.random() * msJitter));
}

function sanitizeReply(text) {
  if (!text) return '';
  let t = text
    .replace(/\s*\[[0-9,\s]+\]\s*$/g, '')
    .replace(/\s*https?:\/\/\S+$/gi, '')
    .replace(/\n+/g, ' ')
    .trim();
  if (t.length > 280) t = t.slice(0, 277).trimEnd() + '…';
  return t;
}

// Add AI reply button to each post
function addAIReplyButton(postElement) {
  if (postElement.querySelector(`.${CONFIG.BUTTON_CLASS}`)) return;
  const replyButton = postElement.querySelector(CONFIG.SELECTORS.REPLY_BUTTON);
  if (!replyButton) return;
  const aiButton = document.createElement('div');
  aiButton.className = CONFIG.BUTTON_CLASS;
  const img = document.createElement('img');
  img.src = chrome.runtime.getURL(CONFIG.BUTTON_ICON);
  img.alt = 'AI Reply';
  aiButton.appendChild(img);
  const buttonContainer = replyButton.parentElement;
  if (buttonContainer) buttonContainer.parentNode.insertBefore(aiButton, buttonContainer.nextSibling);
  else replyButton.parentNode.appendChild(aiButton);
  aiButton.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (!canAct()) { alert('Slow down a bit to stay safe.'); return; }
    await jitter();
    handleAIReplyClick(postElement, aiButton);
  });
}

async function handleAIReplyClick(postElement, button) {
  try {
    button.classList.add(CONFIG.BUTTON_LOADING_CLASS);
    const postTextElement = postElement.querySelector(CONFIG.SELECTORS.POST_TEXT);
    const authorElement = postElement.querySelector(CONFIG.SELECTORS.POST_AUTHOR);
    if (!postTextElement) throw new Error('Could not find post text');
    const postText = postTextElement.textContent.trim();
    const author = authorElement ? authorElement.textContent.trim() : 'the author';

    let settings;
    try {
      settings = await getSettings(['personaPrompt', 'promptPreset']);
    } catch (e) {
      if (isContextInvalidatedError(e.message)) { alert('Extension updated. Reloading…'); window.location.reload(); return; }
      throw e;
    }

    const presets = (typeof window !== 'undefined' && window.BUILT_IN_PROMPTS) ? window.BUILT_IN_PROMPTS : {};
    const chosenPreset = presets[settings.promptPreset || 'prompt2'] || presets['prompt2'] || '';
    const baseInstruction = (settings.personaPrompt && settings.personaPrompt.trim()) ? settings.personaPrompt.trim() : (chosenPreset || 'Reply briefly like a real human and keep it natural.');
    const systemInstruction = `${baseInstruction}\n\nHard rule: Do not include citations, references, links, or bracketed numbers like [1], [2], [3]. Do not append sources or footnotes.`;
    const prompt = `Tweet: "${postText}"\n\nReply:`;

    // Ask background to generate (centralized throttling and keys)
    const replyText = await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ type: 'gen', payload: { systemInstruction, prompt } }, (res) => {
        if (chrome.runtime.lastError) return reject(new Error('Generation failed.'));
        if (res?.error) return reject(new Error(res.error));
        resolve(res?.text || '');
      });
    });

    const reply = sanitizeReply(replyText);

    const replyButtonEl = postElement.querySelector(CONFIG.SELECTORS.REPLY_BUTTON);
    if (replyButtonEl) replyButtonEl.click();
    const replyBox = await waitForElement(CONFIG.SELECTORS.REPLY_BOX, 2500, 100);
    if (!replyBox) throw new Error('Could not open reply box');
    replyBox.focus();
    document.execCommand('insertText', false, reply);
  } catch (error) {
    console.error('Error handling AI reply click:', error);
    alert(`Error: ${error.message}`);
  } finally {
    button.classList.remove(CONFIG.BUTTON_LOADING_CLASS);
  }
}

function initObserver() {
  document.querySelectorAll(CONFIG.SELECTORS.POST).forEach(p => postObserver.observe(p));
  const observer = new MutationObserver((mut) => {
    mut.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.matches && node.matches(CONFIG.SELECTORS.POST)) postObserver.observe(node);
          else if (node.querySelectorAll) node.querySelectorAll(CONFIG.SELECTORS.POST).forEach(p => postObserver.observe(p));
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initObserver); } else { initObserver(); }

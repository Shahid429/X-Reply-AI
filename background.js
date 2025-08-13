chrome.commands.onCommand.addListener(async (command) => {
  if (command !== 'generate-reply') return;
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.id) {
      chrome.tabs.sendMessage(tab.id, { type: 'trigger-generate-reply' });
    }
  } catch (e) {
    // ignore
  }
});

function isTransient(message) {
  if (!message) return false;
  const m = message.toLowerCase();
  return m.includes('overloaded') || m.includes('rate limit') || m.includes('too many requests') || m.includes('quota') || m.includes('temporarily unavailable') || m.includes('unavailable') || m.includes('try again later');
}

function getSync(keys) {
  return new Promise((resolve) => {
    try { chrome.storage.sync.get(keys, (res) => resolve(res || {})); } catch { resolve({}); }
  });
}

function getLocal(keys) {
  return new Promise((resolve) => {
    try { chrome.storage.local.get(keys, (res) => resolve(res || {})); } catch { resolve({}); }
  });
}

function setLocal(obj) {
  try { chrome.storage.local.set(obj); } catch {}
}

async function withTimeoutFetch(url, options, timeoutMs = 8000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

async function callGemini(apiKey, model, systemInstruction, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;
  const res = await withTimeoutFetch(url, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [ { parts: [ { text: systemInstruction }, { text: prompt } ] } ], generationConfig: { temperature: 0.7, maxOutputTokens: 60, topP: 0.8, topK: 40 } })
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`; try { const j = await res.json(); msg = j.error?.message || msg; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
}

async function callOpenAI(apiKey, model, systemInstruction, prompt) {
  const res = await withTimeoutFetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ model, temperature: 0.7, max_tokens: 60, messages: [ { role: 'system', content: systemInstruction }, { role: 'user', content: prompt } ] })
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`; try { const j = await res.json(); msg = j.error?.message || msg; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || '';
}

async function callPerplexity(apiKey, model, systemInstruction, prompt) {
  const res = await withTimeoutFetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ model, temperature: 0.7, max_tokens: 60, messages: [ { role: 'system', content: systemInstruction }, { role: 'user', content: prompt } ] })
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`; try { const j = await res.json(); msg = j.error?.message || msg; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || '';
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || msg.type !== 'gen') return;
  (async () => {
    try {
      const { systemInstruction, prompt } = msg.payload || {};
      const settings = await getSync(['geminiApiKeys', 'openaiApiKeys', 'perplexityApiKeys', 'geminiModel', 'openaiModel', 'perplexityModel']);
      const geminiKeys = Array.isArray(settings.geminiApiKeys) ? settings.geminiApiKeys : [];
      const openaiKeys = Array.isArray(settings.openaiApiKeys) ? settings.openaiApiKeys : [];
      const perplexityKeys = Array.isArray(settings.perplexityApiKeys) ? settings.perplexityApiKeys : [];
      if (!geminiKeys.length && !openaiKeys.length && !perplexityKeys.length) throw new Error('No API keys configured');
      const geminiModel = settings.geminiModel || 'gemini-1.5-flash';
      const openaiModel = settings.openaiModel || 'gpt-4o-mini';
      const perplexityModel = settings.perplexityModel || 'sonar';

      // Providers in fixed order; prioritize last working
      const last = await getLocal(['lastWorkingProvider', 'lastWorkingKey']);
      const providers = [
        { name: 'gemini', keys: geminiKeys, model: geminiModel, fn: callGemini },
        { name: 'openai', keys: openaiKeys, model: openaiModel, fn: callOpenAI },
        { name: 'perplexity', keys: perplexityKeys, model: perplexityModel, fn: callPerplexity },
      ].filter(p => p.keys.length);
      if (last.lastWorkingProvider && last.lastWorkingKey) {
        const idx = providers.findIndex(p => p.name === last.lastWorkingProvider && p.keys.includes(last.lastWorkingKey));
        if (idx > 0) providers.unshift(providers.splice(idx, 1)[0]);
      }

      let lastErr;
      for (const p of providers) {
        for (let i = 0; i < p.keys.length; i++) {
          const key = p.keys[i];
          try {
            const text = await p.fn(key, p.model, systemInstruction, prompt);
            if (text && text.trim().length) {
              setLocal({ lastWorkingProvider: p.name, lastWorkingKey: key });
              sendResponse({ text });
              return;
            }
          } catch (e) {
            lastErr = e;
            if (isTransient(e?.message)) {
              await new Promise(r => setTimeout(r, 250 + i * 200));
            }
            continue;
          }
        }
      }
      throw new Error(lastErr?.message || 'All providers failed');
    } catch (e) {
      sendResponse({ error: e?.message || 'Generation failed' });
    }
  })();
  return true;
}); 
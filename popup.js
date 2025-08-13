document.addEventListener('DOMContentLoaded', function() {
  const statusElement = document.getElementById('status');
  const statusText = document.getElementById('statusText');
  const openOptionsBtn = document.getElementById('openOptions');
  const openTwitterBtn = document.getElementById('openTwitter');
  const versionElement = document.getElementById('version');

  // Set version text once (manifest version is static here)
  if (versionElement) {
    versionElement.textContent = 'v1.0.0';
  }

  // Check if any API key is set
  try {
    chrome.storage.sync.get(['geminiApiKeys', 'openaiApiKeys', 'perplexityApiKeys'], function(result) {
      const hasGemini = Array.isArray(result.geminiApiKeys) && result.geminiApiKeys.length > 0;
      const hasOpenAI = Array.isArray(result.openaiApiKeys) && result.openaiApiKeys.length > 0;
      const hasPerplexity = Array.isArray(result.perplexityApiKeys) && result.perplexityApiKeys.length > 0;
      if (hasGemini || hasOpenAI || hasPerplexity) {
        setStatus('connected', 'API keys configured and ready!');
      } else {
        setStatus('disconnected', 'Add at least one API key in settings.');
      }
    });
  } catch (e) {
    setStatus('disconnected', 'Unable to read settings.');
  }

  // Open options in a compact popup window
  openOptionsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    try {
      chrome.windows.create({ url: 'options.html', type: 'popup', width: 460, height: 720 });
    } catch {
      try { chrome.runtime.openOptionsPage(); } catch {}
    }
    window.close();
  });

  // Open Twitter in a new tab
  openTwitterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    try { chrome.tabs.create({ url: 'https://twitter.com' }); } catch {}
    window.close();
  });

  // Set status with appropriate styling
  function setStatus(type, message) {
    statusElement.className = 'status ' + type;
    statusText.textContent = message;
    
    // Set appropriate icon
    const icon = statusElement.querySelector('.status-icon');
    icon.textContent = type === 'connected' ? '✅' : '⚠️';
  }
});

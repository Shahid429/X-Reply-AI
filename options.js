document.addEventListener('DOMContentLoaded', function() {
  const geminiKeysInput = document.getElementById('geminiKeys');
  const openaiKeysInput = document.getElementById('openaiKeys');
  const perplexityKeysInput = document.getElementById('perplexityKeys');
  const geminiModelSelect = document.getElementById('geminiModel');
  const openaiModelSelect = document.getElementById('openaiModel');
  const perplexityModelSelect = document.getElementById('perplexityModel');
  const saveButton = document.getElementById('save');
  const statusElement = document.getElementById('status');
  const helpLink = document.getElementById('helpLink');
  const personaTextarea = document.getElementById('persona');
  const presetSelect = document.getElementById('preset');

  function parseKeys(text) {
    return text.split(/\r?\n/).map(k => k.trim()).filter(k => k.length > 0);
  }

  function joinKeys(keys) {
    return (keys || []).join('\n');
  }

  // Load saved settings
  chrome.storage.sync.get([
    'geminiApiKeys', 'openaiApiKeys', 'perplexityApiKeys',
    'geminiModel', 'openaiModel', 'perplexityModel',
    'personaPrompt', 'promptPreset'
  ], function(result) {
    geminiKeysInput.value = joinKeys(result.geminiApiKeys);
    openaiKeysInput.value = joinKeys(result.openaiApiKeys);
    perplexityKeysInput.value = joinKeys(result.perplexityApiKeys);

    if (result.geminiModel) geminiModelSelect.value = result.geminiModel;
    if (result.openaiModel) openaiModelSelect.value = result.openaiModel;
    if (result.perplexityModel) perplexityModelSelect.value = result.perplexityModel;

    if (result.personaPrompt) personaTextarea.value = result.personaPrompt;
    if (result.promptPreset) presetSelect.value = result.promptPreset;

    showStatus('Settings loaded successfully.', 'success');
  });

  // Save settings
  saveButton.addEventListener('click', function() {
    const geminiKeys = parseKeys(geminiKeysInput.value);
    const openaiKeys = parseKeys(openaiKeysInput.value);
    const perplexityKeys = parseKeys(perplexityKeysInput.value);
    const geminiModel = geminiModelSelect.value;
    const openaiModel = openaiModelSelect.value;
    const perplexityModel = perplexityModelSelect.value;
    const persona = personaTextarea.value.trim();
    const promptPreset = presetSelect.value;

    if (geminiKeys.length === 0 && openaiKeys.length === 0 && perplexityKeys.length === 0) {
      showStatus('Please enter at least one API key (Gemini, OpenAI, or Perplexity).', 'error');
      return;
    }

    // Basic validation (non-exhaustive)
    const invalidGemini = geminiKeys.some(k => !k.startsWith('AIzaSy') || k.length < 30);
    const invalidOpenai = openaiKeys.some(k => !/^sk-/.test(k));
    const invalidPerplexity = perplexityKeys.some(k => !/^pplx-/.test(k));
    if (invalidGemini) { showStatus('One or more Gemini keys look invalid.', 'error'); return; }
    if (invalidOpenai) { showStatus('One or more OpenAI keys look invalid.', 'error'); return; }
    if (invalidPerplexity) { showStatus('One or more Perplexity keys look invalid.', 'error'); return; }

    chrome.storage.sync.set({ 
      geminiApiKeys: geminiKeys,
      openaiApiKeys: openaiKeys,
      perplexityApiKeys: perplexityKeys,
      geminiModel,
      openaiModel,
      perplexityModel,
      personaPrompt: persona,
      promptPreset: promptPreset
    }, function() {
      if (chrome.runtime.lastError) {
        showStatus('Error saving settings: ' + chrome.runtime.lastError.message, 'error');
      } else {
        showStatus('Settings saved successfully!', 'success');
      }
    });
  });

  // Open help documentation
  helpLink.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://ai.google.dev/gemini-api/docs', active: true });
  });

  function showStatus(message, type = 'info') {
    statusElement.textContent = message;
    statusElement.className = '';
    statusElement.classList.add(type);
    statusElement.style.display = 'block';
    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(() => { statusElement.style.display = 'none'; }, 5000);
  }
});

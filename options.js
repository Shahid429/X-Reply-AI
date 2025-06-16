document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('apiKey');
  const toneSelect = document.getElementById('tone');
  const saveButton = document.getElementById('save');
  const statusElement = document.getElementById('status');
  const helpLink = document.getElementById('helpLink');

  // Load saved settings
  chrome.storage.sync.get(['geminiApiKey', 'tone'], function(result) {
    if (result.geminiApiKey) {
      apiKeyInput.value = result.geminiApiKey;
    }
    if (result.tone) {
      toneSelect.value = result.tone;
    }
    showStatus('Settings loaded successfully.', 'success');
  });

  // Save settings
  saveButton.addEventListener('click', function() {
    const apiKey = apiKeyInput.value.trim();
    const tone = toneSelect.value;
    
    if (!apiKey) {
      showStatus('Please enter your Gemini API key.', 'error');
      return;
    }
    
    // Basic validation for API key format (starts with 'AIzaSy' and is at least 30 characters)
    if (!apiKey.startsWith('AIzaSy') || apiKey.length < 30) {
      showStatus('Please enter a valid Gemini API key.', 'error');
      return;
    }
    
    // Save settings to Chrome's storage
    chrome.storage.sync.set({ 
      geminiApiKey: apiKey,
      tone: tone 
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
    chrome.tabs.create({
      url: 'https://ai.google.dev/gemini-api/docs',
      active: true
    });
  });

  // Show status message
  function showStatus(message, type = 'info') {
    statusElement.textContent = message;
    statusElement.className = '';
    statusElement.classList.add(type);
    statusElement.style.display = 'block';
    
    // Hide status after 5 seconds
    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(() => {
      statusElement.style.display = 'none';
    }, 5000);
  }

  // Toggle password visibility on double-click
  apiKeyInput.addEventListener('dblclick', function() {
    if (apiKeyInput.type === 'password') {
      apiKeyInput.type = 'text';
      setTimeout(() => {
        apiKeyInput.type = 'password';
      }, 2000);
    }
  });
});

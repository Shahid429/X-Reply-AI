document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('apiKey');
  const saveButton = document.getElementById('save');
  const statusElement = document.getElementById('status');
  const helpLink = document.getElementById('helpLink');

  // Load saved API key
  chrome.storage.sync.get(['geminiApiKey'], function(result) {
    if (result.geminiApiKey) {
      apiKeyInput.value = result.geminiApiKey;
      showStatus('Gemini API key loaded successfully.', 'success');
    }
  });

  // Save API key
  saveButton.addEventListener('click', function() {
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
      showStatus('Please enter your OpenAI API key.', 'error');
      return;
    }
    
    // Basic validation for API key format (starts with 'AIzaSy' and is at least 30 characters)
    if (!apiKey.startsWith('AIzaSy') || apiKey.length < 30) {
      showStatus('Please enter a valid Gemini API key.', 'error');
      return;
    }
    
    // Save the API key to Chrome's storage
    chrome.storage.sync.set({ geminiApiKey: apiKey }, function() {
      if (chrome.runtime.lastError) {
        showStatus('Error saving API key: ' + chrome.runtime.lastError.message, 'error');
      } else {
        showStatus('Gemini API key saved successfully!', 'success');
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

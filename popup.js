document.addEventListener('DOMContentLoaded', function() {
  const statusElement = document.getElementById('status');
  const statusText = document.getElementById('statusText');
  const openOptionsBtn = document.getElementById('openOptions');
  const openTwitterBtn = document.getElementById('openTwitter');

  // Check if API key is set
  chrome.storage.sync.get(['geminiApiKey'], function(result) {
    if (result.geminiApiKey) {
      setStatus('connected', 'Gemini API key configured and ready to use!');
    } else {
      setStatus('disconnected', 'Please set your Gemini API key in settings.');
    }
  });

  // Open options page when settings button is clicked
  openOptionsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.runtime.openOptionsPage();
    window.close();
  });

  // Open Twitter in a new tab
  openTwitterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://twitter.com' });
    window.close();
  });

  // Set status with appropriate styling
  function setStatus(type, message) {
    statusElement.className = 'status ' + type;
    statusText.textContent = message;
    
    // Set appropriate icon
    const icon = statusElement.querySelector('.status-icon');
    if (type === 'connected') {
      icon.textContent = '✅';
    } else {
      icon.textContent = '⚠️';
    }
  }

  // Add version number
  const versionElement = document.createElement('div');
  versionElement.className = 'version';
  versionElement.textContent = 'v1.0.0';
  document.querySelector('.footer').appendChild(versionElement);
});

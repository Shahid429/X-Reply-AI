# 🤖 X Reply AI - AI-Powered X/Twitter Reply Assistant

<div align="center">

![X Reply AI Logo](icons/icon128.png)

**Generate intelligent, human-like replies for X (formerly Twitter) posts using multiple AI providers**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Shahid429/X-Reply-extension/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue.svg)](https://chrome.google.com/webstore)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-brightgreen)](https://github.com/Shahid429/X-Reply-extension)

[📥 Download](#installation) • [📖 Documentation](#usage) • [🐛 Report Issues](https://github.com/Shahid429/X-Reply-extension/issues) • [💝 Contribute](#contributing)

</div>

---

## ✨ Features

- **Multiple AI Providers**: Google Gemini, OpenAI GPT, and Perplexity
- **Smart Fallback**: Automatically switches providers if one is unavailable
- **Context Understanding**: Analyzes the original post and conversation thread
- **Reply Optimization**: Generates replies under 280 characters
- **Custom Personas**: Create your unique reply style and tone
- **Built-in Presets**: Choose from curated reply styles
- **Usage Dashboard**: Track your replies and token usage
- **Keyboard Shortcuts**: Use `Ctrl+Shift+Y` for quick replies
- **Privacy-First**: API keys stay local, no data collection

## 📥 Installation

### Option 1: Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store](https://chrome.google.com/webstore)
2. Search for "X Reply AI"
3. Click "Add to Chrome"

### Option 2: Manual Installation (Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/Shahid429/X-Reply-extension.git
   cd X-Reply-extension
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run prod
   ```
4. Load in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist/` folder

## 📖 Usage

1. **Browse X/Twitter** as usual
2. **Find a post** you want to reply to
3. **Click the 🤖 robot button** that appears next to reply boxes
4. **Review the generated reply** in the text box
5. **Edit if needed**, then post your reply

**Keyboard Shortcut**: Press `Ctrl+Shift+Y` to generate a reply for the first visible post

## ⚙️ Configuration

1. Click the extension icon in your Chrome toolbar
2. Go to Settings
3. Enter your API keys:
   - [Google AI API key](https://makersuite.google.com/app/apikey)
   - [OpenAI API key](https://platform.openai.com/api-keys)
   - [Perplexity API key](https://www.perplexity.ai/settings/api)
4. Choose your preferred AI models and reply style
5. Save your settings

### AI Providers & Models

| Provider | Models | Best For |
|----------|--------|----------|
| **Google Gemini** | `gemini-1.5-flash`, `gemini-1.5-pro` | Fast, reliable responses |
| **OpenAI** | `gpt-4o-mini`, `gpt-4o` | High-quality, creative replies |
| **Perplexity** | `sonar`, `sonar-small`, `sonar-large` | Research-backed responses |

### Reply Presets
- **Ultra-Short Humanlike** (≤10 words, conversational)
- **Casual Human Reply** (≤10 words, friendly tone)
- **Ultra-Compact** (≤6 words, minimal style)
- **Custom Persona** (your own prompt and style)

## 🛠️ Development

### Prerequisites
- Node.js 16+ and npm
- Google Chrome browser
- API Keys from supported providers (for testing)

### Development Setup
1. Clone and install:
   ```bash
   git clone https://github.com/Shahid429/X-Reply-extension.git
   cd X-Reply-extension
   npm install
   ```
2. Start development:
   ```bash
   npm start
   ```
   This builds the extension, opens Chrome extensions page, and watches for changes.

### Available Commands
```bash
npm run build    # Build for development
npm run prod     # Build for production
npm run release  # Build and create release ZIP
npm run lint     # Check code quality
npm run format   # Format code with Prettier
```

### Project Structure
```
X-Reply-extension/
├── src/                    # TypeScript source files
│   ├── background.ts      # Service worker & API calls
│   ├── config.ts          # Remote configuration
│   ├── api.ts             # AI provider integrations
│   └── utils.ts           # Utility functions
├── dist/                  # Built extension (generated)
├── archive_root_duplicates/  # UI files
│   ├── popup.html/js      # Extension popup
│   ├── options.html/js    # Settings page
│   └── dashboard.html/js  # Analytics dashboard
├── icons/                 # Extension icons
└── manifest.json          # Extension manifest
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
- 🐛 **Report Bugs**: [Open an issue](https://github.com/Shahid429/X-Reply-extension/issues)
- 💡 **Suggest Features**: Share your ideas for new features
- 🔧 **Code Contributions**: Fix bugs or add features
- 📖 **Documentation**: Improve docs or add translations

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m "Add: feature description"`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request with a detailed description

### Code Guidelines
- **TypeScript**: Strict type checking enabled
- **ESLint**: Follow the configured linting rules
- **Prettier**: Code is automatically formatted
- **Testing**: Test your changes across different scenarios

## 🔒 Privacy & Security

- **API Keys**: Stored locally in Chrome storage, never transmitted except to AI providers
- **Reply Data**: Generated replies are stored locally for your dashboard
- **Analytics**: No usage data is collected or transmitted
- **Third-party Services**: Only communicates with official AI provider APIs

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Shahid429](https://github.com/Shahid429)**

[⬆️ Back to Top](#-x-reply-ai---ai-powered-xtwitter-reply-assistant)

</div>

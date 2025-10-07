# 🤖 X Reply AI - AI-Powered X/Twitter Reply Assistant# 🤖 X Reply AI - AI-Powered X/Twitter Reply Assistant# TAHZEEB



<div align="center">



![X Reply AI Logo](icons/icon128.png)<div align="center">A Chrome extension that helps you generate thoughtful, humanlike replies to X (Twitter) posts using multiple AI providers (Gemini, OpenAI, Perplexity). One click drafts a concise reply you can edit and post.



**Generate intelligent, human-like replies for X (formerly Twitter) posts using multiple AI providers**



[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Shahid429/X-Reply-extension/releases)![X Reply AI Logo](icons/icon128.png)**Recent Improvements:**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue.svg)](https://chrome.google.com/webstore)- Migrated to TypeScript for type safety

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-brightgreen)](https://github.com/Shahid429/X-Reply-extension)**Generate intelligent, human-like replies for X (formerly Twitter) posts using multiple AI providers**- Modularized codebase for better maintainability



[📥 Download](#installation) • [📖 Documentation](#documentation) • [🐛 Report Issues](https://github.com/Shahid429/X-Reply-extension/issues) • [💝 Contribute](#contributing)- Added ESLint and Prettier for code quality



</div>[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Shahid429/X-Reply-extension/releases)- Implemented remote configuration with password protection



---[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)- Added periodic config updates



## ✨ What is X Reply AI?[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue.svg)](https://chrome.google.com/webstore)



X Reply AI is a powerful Chrome extension that revolutionizes how you interact with X (Twitter). With just one click, it generates thoughtful, contextually appropriate replies using advanced AI models from Google Gemini, OpenAI, and Perplexity.[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)## ✨ Features



**🚀 Key Benefits:**[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-brightgreen)](https://github.com/Shahid429/X-Reply-extension)

- ⚡ **Instant Replies**: Generate replies in seconds, not minutes

- 🎯 **Context-Aware**: AI understands the conversation context- One‑click AI replies on X/Twitter

- 🔄 **Multi-Provider**: Automatic fallback between AI providers

- 🛡️ **Privacy-First**: Your API keys stay local, no data collection[📥 Download](#installation) • [📖 Documentation](#documentation) • [🐛 Report Issues](https://github.com/Shahid429/X-Reply-extension/issues) • [💝 Contribute](#contributing)- Custom persona prompt and curated built‑in presets

- 🎨 **Customizable**: Choose your AI models and reply styles

- 📊 **Smart Dashboard**: Track your usage and reply history- Multi‑provider support with automatic fallback



## 🌟 Features</div>  - Google Gemini (1.5‑flash/pro)



### 🤖 AI-Powered Replies  - OpenAI (gpt‑4o‑mini, gpt‑4o)

- **Multiple AI Providers**: Google Gemini, OpenAI GPT, and Perplexity

- **Smart Fallback**: Automatically switches providers if one is unavailable---  - Perplexity (sonar family)

- **Context Understanding**: Analyzes the original post and conversation thread

- **Reply Optimization**: Generates replies under 280 characters, Twitter's limit- Multiple API keys per provider; tries keys in order



### 🎛️ Customization & Control## ✨ What is TAHZEEB?- Background fetching with timeouts and last‑working cache

- **Custom Personas**: Create your unique reply style and tone

- **Built-in Presets**: Choose from curated reply styles (Casual, Professional, Witty, etc.)- Visible‑only processing for speed (IntersectionObserver)

- **Model Selection**: Pick specific AI models for different use cases

- **Reply History**: View and manage all your generated repliesTAHZEEB is a powerful Chrome extension that revolutionizes how you interact with X (Twitter). With just one click, it generates thoughtful, contextually appropriate replies using advanced AI models from Google Gemini, OpenAI, and Perplexity.- Rate‑limited with small jitter for safer usage



### 🔧 Advanced Features- Reply sanitization (no citations like [1], single line, <280 chars)

- **Keyboard Shortcuts**: Use `Ctrl+Shift+Y` for quick replies

- **Rate Limiting**: Smart throttling to avoid API limits**🚀 Key Benefits:**

- **Background Processing**: Non-blocking reply generation

- **Remote Configuration**: Update settings without extension updates- ⚡ **Instant Replies**: Generate replies in seconds, not minutes## Installation

- **Multi-Key Support**: Use multiple API keys for redundancy

- 🎯 **Context-Aware**: AI understands the conversation context

### 📊 Dashboard & Analytics

- **Usage Statistics**: Track daily/monthly token and reply counts- 🔄 **Multi-Provider**: Automatic fallback between AI providers1. Clone or download this folder

- **Reply History**: Searchable history of all generated replies

- **Export Data**: Download your reply history as JSON/CSV- 🛡️ **Privacy-First**: Your API keys stay local, no data collection2. Open `chrome://extensions/`

- **Dark Mode**: Modern UI with theme switching

- 🎨 **Customizable**: Choose your AI models and reply styles3. Enable Developer mode

## 🚀 Quick Start

- 📊 **Smart Dashboard**: Track your usage and reply history4. Click Load unpacked and select the extension directory

### Installation



#### Option 1: Chrome Web Store (Recommended)

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore)## 🌟 Features## Setup

2. Search for "X Reply AI"

3. Click "Add to Chrome"

4. The extension is ready to use!

### 🤖 AI-Powered Replies1. Click the extension icon → Settings

#### Option 2: Manual Installation (Development)

1. **Clone the repository:**- **Multiple AI Providers**: Google Gemini, OpenAI GPT, and Perplexity2. Enter API keys (one per line) for any providers you use

   ```bash

   git clone https://github.com/Shahid429/X-Reply-extension.git- **Smart Fallback**: Automatically switches providers if one is unavailable3. Optionally set a custom persona and choose a preset

   cd X-Reply-extension

   ```- **Context Understanding**: Analyzes the original post and conversation thread4. Pick models per provider



2. **Install dependencies:**- **Reply Optimization**: Generates replies under 280 characters, Twitter's limit5. Save

   ```bash

   npm install

   ```

### 🎛️ Customization & Control## How to Use

3. **Build the extension:**

   ```bash- **Custom Personas**: Create your unique reply style and tone

   npm start

   ```- **Built-in Presets**: Choose from curated reply styles (Casual, Professional, Witty, etc.)1. Browse X/Twitter



4. **Load in Chrome:**- **Model Selection**: Pick specific AI models for different use cases2. Click the 🤖 button next to a post’s reply

   - Open `chrome://extensions/`

   - Enable "Developer mode" (top right)- **Reply History**: View and manage all your generated replies3. The draft reply is inserted for you to review/edit

   - Click "Load unpacked"

   - Select the `dist/` folder

   - Look for "X Reply AI (DEV)" in your extensions

### 🔧 Advanced FeaturesTip: You can also use the keyboard shortcut Ctrl+Shift+Y to draft a reply for the first visible post.

### Setup & Configuration

- **Keyboard Shortcuts**: Use `Ctrl+Shift+Y` for quick replies

1. **Click the extension icon** in your Chrome toolbar

2. **Go to Settings** in the popup menu- **Rate Limiting**: Smart throttling to avoid API limits## Safety and Performance

3. **Enter your API keys:**

   - Get a [Google AI API key](https://makersuite.google.com/app/apikey)- **Background Processing**: Non-blocking reply generation

   - Get an [OpenAI API key](https://platform.openai.com/api-keys)

   - Get a [Perplexity API key](https://www.perplexity.ai/settings/api)- **Remote Configuration**: Update settings without extension updates- Does not auto‑post; you stay in control

4. **Choose your preferred AI models** and reply style

5. **Save your settings**- **Multi-Key Support**: Use multiple API keys for redundancy- Rate‑limited actions with small jitter



## 📖 How to Use- Minimal DOM footprint; visible‑only processing



### Basic Usage### 📊 Dashboard & Analytics- Network requests handled in background for isolation and reliability



1. **Browse X/Twitter** as usual- **Usage Statistics**: Track daily/monthly token and reply counts- Automatic fallback across providers/keys on overload or rate limits

2. **Find a post** you want to reply to

3. **Click the 🤖 robot button** that appears next to reply boxes- **Reply History**: Searchable history of all generated replies

4. **Review the generated reply** in the text box

5. **Edit if needed**, then post your reply!- **Export Data**: Download your reply history as JSON/CSV## Configuration Details



### Advanced Features- **Dark Mode**: Modern UI with theme switching



- **Keyboard Shortcut**: Press `Ctrl+Shift+Y` to generate a reply for the first visible post- Multi‑keys: Paste one key per line for each provider

- **Multiple Replies**: Generate different reply options by clicking the button multiple times

- **Reply History**: Access your dashboard to view all generated replies## 🚀 Quick Start- Models:

- **Custom Prompts**: Set up your own reply persona in settings

  - Gemini: `gemini-1.5-flash`, `gemini-1.5-pro`

### Dashboard Features

### Installation  - OpenAI: `gpt-4o-mini`, `gpt-4o`

Access the dashboard from the extension popup to:

- View usage statistics (replies and tokens used)  - Perplexity: `sonar`, `sonar-small`, `sonar-large`

- Search through your reply history

- Export your data#### Option 1: Chrome Web Store (Recommended)- Presets:

- Switch between light and dark themes

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore)  - Ultra‑Short Humanlike (≤10 words, no punctuation)

## 🔧 Configuration

2. Search for "TAHZEEB"  - Casual Human Reply (≤10 words, simple, no hashtags)

### AI Providers & Models

3. Click "Add to Chrome"  - Ultra‑Compact (≤6 words, simple, no punctuation)

| Provider | Models | Best For |

|----------|--------|----------|4. The extension is ready to use!

| **Google Gemini** | `gemini-1.5-flash`, `gemini-1.5-pro` | Fast, reliable responses |

| **OpenAI** | `gpt-4o-mini`, `gpt-4o` | High-quality, creative replies |## Development

| **Perplexity** | `sonar`, `sonar-small`, `sonar-large` | Research-backed responses |

#### Option 2: Manual Installation (Development)

### Reply Presets

1. **Clone the repository:**This extension is built with TypeScript for better type safety and maintainability.

- **Ultra-Short Humanlike** (≤10 words, conversational)

- **Casual Human Reply** (≤10 words, friendly tone)   ```bash

- **Ultra-Compact** (≤6 words, minimal style)

- **Custom Persona** (your own prompt and style)   git clone https://github.com/Shahid429/X-Reply-extension.git### Quick Start



### Remote Configuration   cd X-Reply-extension



For advanced users, X Reply AI supports remote configuration:   ```**For Development (editing and testing):**



1. Create a GitHub repository with a `config.json` file```bash

2. Host it via GitHub Pages

3. Update the `CONFIG_URL` in the source code2. **Install dependencies:**npm start     # Build, open Chrome extensions page, and watch for changes



Example `config.json`:   ```bashnpm run build # Just build once with source maps

```json

{   npm installnpm run dev   # Same as npm start

  "enabled": true,

  "password": "yourPassword",   ``````

  "announcement": "New feature available!",

  "alert": "Scheduled maintenance",

  "message": "Enter password to access settings"

}3. **Build the extension:****For Production (distribution):**

```

   ```bash```bash

## 🛠️ Development

   npm startnpm run prod     # Build optimized production version

### Prerequisites

   ```npm run release  # Build production and create release ZIP

- **Node.js** 16+ and npm

- **Google Chrome** browser```

- **API Keys** from supported providers (for testing)

4. **Load in Chrome:**

### Development Setup

   - Open `chrome://extensions/`### Development Workflow

1. **Clone and install:**

   ```bash   - Enable "Developer mode" (top right)

   git clone https://github.com/Shahid429/X-Reply-extension.git

   cd X-Reply-extension   - Click "Load unpacked"1. **Start development:**

   npm install

   ```   - Select the `dist/` folder   ```bash



2. **Start development:**   - Look for "TAHZEEB (DEV)" in your extensions   npm start

   ```bash

   npm start   ```

   ```

   This builds the extension, opens Chrome extensions page, and watches for changes.### Setup & Configuration   This will:



3. **Available commands:**   - Build the extension with source maps

   ```bash

   npm run build    # Build for development1. **Click the extension icon** in your Chrome toolbar   - Open Chrome to the extensions page

   npm run prod     # Build for production

   npm run release  # Build and create release ZIP2. **Go to Settings** in the popup menu   - Watch for file changes and auto-recompile

   npm run lint     # Check code quality

   npm run format   # Format code with Prettier3. **Enter your API keys:**

   ```

   - Get a [Google AI API key](https://makersuite.google.com/app/apikey)2. **Edit your TypeScript files** in `src/`

### Project Structure

   - Get an [OpenAI API key](https://platform.openai.com/api-keys)

```

X-Reply-extension/   - Get a [Perplexity API key](https://www.perplexity.ai/settings/api)3. **Reload the extension** in Chrome after changes (Ctrl+R on extensions page)

├── src/                    # TypeScript source files

│   ├── background.ts      # Service worker & API calls4. **Choose your preferred AI models** and reply style

│   ├── config.ts          # Remote configuration

│   ├── api.ts             # AI provider integrations5. **Save your settings**4. **For production:**

│   └── utils.ts           # Utility functions

├── dist/                  # Built extension (generated)   ```bash

├── scripts/               # Build scripts

├── archive_root_duplicates/  # UI files## 📖 How to Use   npm run release

│   ├── popup.html/js      # Extension popup

│   ├── options.html/js    # Settings page   ```

│   └── dashboard.html/js  # Analytics dashboard

├── icons/                 # Extension icons### Basic Usage

└── manifest.json          # Extension manifest

```### Environment Differences



### Building for Production1. **Browse X/Twitter** as usual



```bash2. **Find a post** you want to reply to**Development (`npm run build` or `npm start`):**

# Create production build

npm run prod3. **Click the 🤖 robot button** that appears next to reply boxes- Source maps included for debugging



# Create release package4. **Review the generated reply** in the text box- Extension shows as "TAHZEEB (DEV)"

npm run release

```5. **Edit if needed**, then post your reply!- Unminified code for easier debugging



The release command generates a `X-Reply-AI.zip` file in the `release/` folder, ready for Chrome Web Store submission.



## 🤝 Contributing### Advanced Features**Production (`npm run prod`):**



We welcome contributions! Here's how you can help:- Minified code for smaller size



### Ways to Contribute- **Keyboard Shortcut**: Press `Ctrl+Shift+Y` to generate a reply for the first visible post- Clean "TAHZEEB" branding



- 🐛 **Report Bugs**: [Open an issue](https://github.com/Shahid429/X-Reply-extension/issues)- **Multiple Replies**: Generate different reply options by clicking the button multiple times- Optimized for distribution

- 💡 **Suggest Features**: Share your ideas for new features

- 🔧 **Code Contributions**: Fix bugs or add features- **Reply History**: Access your dashboard to view all generated replies

- 📖 **Documentation**: Improve docs or add translations

- 🧪 **Testing**: Help test new features- **Custom Prompts**: Set up your own reply persona in settings### Loading the Extension



### Development Workflow



1. **Fork** the repository### Dashboard FeaturesAfter running `npm start`:

2. **Create** a feature branch: `git checkout -b feature/your-feature`

3. **Make** your changes and test thoroughly

4. **Commit** with clear messages: `git commit -m "Add: feature description"`

5. **Push** to your fork: `git push origin feature/your-feature`Access the dashboard from the extension popup to:1. In the Chrome extensions page that opens, enable "Developer mode" (top right)

6. **Create** a Pull Request with a detailed description

- View usage statistics (replies and tokens used)2. Click "Load unpacked"

### Code Guidelines

- Search through your reply history3. Select the `dist/` folder from your project

- **TypeScript**: Strict type checking enabled

- **ESLint**: Follow the configured linting rules- Export your data4. The extension will load - look for "TAHZEEB (DEV)" in the list

- **Prettier**: Code is automatically formatted

- **Testing**: Test your changes across different scenarios- Switch between light and dark themes

- **Documentation**: Update README for new features

**For changes:** After editing files, just refresh the extension in Chrome (Ctrl+R on the extension card) - no need to reload the unpacked extension.

### Reporting Issues

## 🔧 Configuration

When reporting bugs, please include:

- Chrome version and OS### Manual Commands

- Steps to reproduce the issue

- Expected vs actual behavior### AI Providers & Models

- Screenshots if applicable

- Console errors (F12 → Console)1. Install dependencies:



## 📊 Roadmap| Provider | Models | Best For |   ```bash



### Upcoming Features|----------|--------|----------|   npm install



- [ ] **Reply Templates**: Save and reuse favorite reply styles| **Google Gemini** | `gemini-1.5-flash`, `gemini-1.5-pro` | Fast, reliable responses |   ```

- [ ] **Bulk Reply**: Generate replies for multiple posts at once

- [ ] **Reply Scheduling**: Schedule replies for optimal engagement| **OpenAI** | `gpt-4o-mini`, `gpt-4o` | High-quality, creative replies |

- [ ] **Analytics Integration**: Deeper insights into reply performance

- [ ] **Mobile Support**: iOS Safari extension| **Perplexity** | `sonar`, `sonar-small`, `sonar-large` | Research-backed responses |2. Build the extension:

- [ ] **Multi-language**: Support for non-English replies

   ```bash

### Recent Updates

### Reply Presets   npm run build

- ✅ **TypeScript Migration**: Improved code reliability

- ✅ **Dashboard Redesign**: Modern UI with dark mode   ```

- ✅ **Multi-Provider Support**: Enhanced AI fallback system

- ✅ **Remote Configuration**: Centralized settings management- **Ultra-Short Humanlike** (≤10 words, conversational)



## 🔒 Privacy & Security- **Casual Human Reply** (≤10 words, friendly tone)3. For development with watch mode:



### Data Handling- **Ultra-Compact** (≤6 words, minimal style)   ```bash



- **API Keys**: Stored locally in Chrome storage, never transmitted except to AI providers- **Custom Persona** (your own prompt and style)   npm run watch

- **Reply Data**: Generated replies are stored locally for your dashboard

- **Analytics**: No usage data is collected or transmitted   ```

- **Third-party Services**: Only communicates with official AI provider APIs

### Remote Configuration

### Security Features

4. Lint and format code:

- **CSP Compliance**: Follows Chrome's Content Security Policy

- **Input Sanitization**: All inputs are validated and sanitizedFor advanced users, TAHZEEB supports remote configuration:   ```bash

- **Rate Limiting**: Prevents API abuse and ensures fair usage

- **Error Handling**: Graceful failure handling without data leaks   npm run lint



## 📄 License1. Create a GitHub repository with a `config.json` file   npm run format



This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.2. Host it via GitHub Pages   ```



```3. Update the `CONFIG_URL` in the source code

MIT License

### Project Structure

Copyright (c) 2025 Shahid429

Example `config.json`:

Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal```json- `src/`: TypeScript source files

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell{  - `background.ts`: Service worker with API calls and config fetching

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:  "enabled": true,  - `config.ts`: Remote configuration management



The above copyright notice and this permission notice shall be included in all  "password": "yourPassword",  - `api.ts`: AI provider API functions

copies or substantial portions of the Software.

```  "announcement": "New feature available!",  - `utils.ts`: Utility functions for storage and error handling



## 🙏 Acknowledgments  "alert": "Scheduled maintenance",- `dist/`: Compiled JavaScript files (generated)



- **AI Providers**: Google, OpenAI, and Perplexity for their amazing APIs  "message": "Enter password to access settings"- `popup.js`, `options.js`, `content.js`: UI scripts (can be migrated to TS later)

- **Open Source Community**: For the tools and libraries that made this possible

- **Contributors**: Everyone who helps improve X Reply AI}



## 📞 Support```### Remote Configuration



### Getting Help



- 📧 **Email**: [shahid@example.com](mailto:shahid@example.com)## 🛠️ DevelopmentThe extension supports remote configuration via a JSON file hosted on GitHub Pages. Create a repo with `config.json`:

- 💬 **GitHub Issues**: [Report bugs or request features](https://github.com/Shahid429/X-Reply-extension/issues)

- 📖 **Documentation**: Check the [Wiki](https://github.com/Shahid429/X-Reply-extension/wiki) for detailed guides



### Troubleshooting### Prerequisites```json



**Common Issues:**{



- **"Extension context invalidated"**: Reload the extension and refresh Twitter- **Node.js** 16+ and npm  "enabled": true,

- **API Key errors**: Verify your keys are correct and have sufficient credits

- **Reply not inserting**: Ensure the reply box is visible and active- **Google Chrome** browser  "password": "yourPassword",

- **Slow responses**: Try switching to a different AI provider

- **API Keys** from supported providers (for testing)  "announcement": "Update message",

**Debug Mode:**

Enable Chrome DevTools for the extension background page to see detailed logs.  "alert": "Warning message",



## 📈 Statistics### Development Setup  "message": "Password prompt"



[![GitHub stars](https://img.shields.io/github/stars/Shahid429/X-Reply-extension.svg?style=social&label=Star)](https://github.com/Shahid429/X-Reply-extension)}

[![GitHub forks](https://img.shields.io/github/forks/Shahid429/X-Reply-extension.svg?style=social&label=Fork)](https://github.com/Shahid429/X-Reply-extension)

[![GitHub issues](https://img.shields.io/github/issues/Shahid429/X-Reply-extension.svg)](https://github.com/Shahid429/X-Reply-extension/issues)1. **Clone and install:**```



---   ```bash



<div align="center">   git clone https://github.com/Shahid429/X-Reply-extension.gitUpdate `CONFIG_URL` in `config.ts` to point to your config file.



**Made with ❤️ by [Shahid429](https://github.com/Shahid429)**   cd X-Reply-extension



**Star this repo if you find it useful! ⭐**   npm install## Privacy



[⬆️ Back to Top](#-x-reply-ai---ai-powered-xtwitter-reply-assistant)   ```



</div>- Keys are stored in Chrome storage and used only to call provider APIs

2. **Start development:**- No analytics; all generation requests are initiated by you

   ```bash

   npm start## Troubleshooting

   ```

   This builds the extension, opens Chrome extensions page, and watches for changes.- If you see “Extension context invalidated”, reload the extension and refresh the X tab

- If a provider is overloaded, the extension automatically tries the next key/provider

3. **Available commands:**- If insertion fails, ensure the reply box is visible and try again

   ```bash

   npm run build    # Build for development## License

   npm run prod     # Build for production

   npm run release  # Build and create release ZIPMIT

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
├── scripts/               # Build scripts
├── archive_root_duplicates/  # UI files
│   ├── popup.html/js      # Extension popup
│   ├── options.html/js    # Settings page
│   └── dashboard.html/js  # Analytics dashboard
├── icons/                 # Extension icons
└── manifest.json          # Extension manifest
```

### Building for Production

```bash
# Create production build
npm run prod

# Create release package
npm run release
```

The release command generates a `TAHZEEB.zip` file in the `release/` folder, ready for Chrome Web Store submission.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs**: [Open an issue](https://github.com/Shahid429/X-Reply-extension/issues)
- 💡 **Suggest Features**: Share your ideas for new features
- 🔧 **Code Contributions**: Fix bugs or add features
- 📖 **Documentation**: Improve docs or add translations
- 🧪 **Testing**: Help test new features

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Make** your changes and test thoroughly
4. **Commit** with clear messages: `git commit -m "Add: feature description"`
5. **Push** to your fork: `git push origin feature/your-feature`
6. **Create** a Pull Request with a detailed description

### Code Guidelines

- **TypeScript**: Strict type checking enabled
- **ESLint**: Follow the configured linting rules
- **Prettier**: Code is automatically formatted
- **Testing**: Test your changes across different scenarios
- **Documentation**: Update README for new features

### Reporting Issues

When reporting bugs, please include:
- Chrome version and OS
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Console errors (F12 → Console)

## 📊 Roadmap

### Upcoming Features

- [ ] **Reply Templates**: Save and reuse favorite reply styles
- [ ] **Bulk Reply**: Generate replies for multiple posts at once
- [ ] **Reply Scheduling**: Schedule replies for optimal engagement
- [ ] **Analytics Integration**: Deeper insights into reply performance
- [ ] **Mobile Support**: iOS Safari extension
- [ ] **Multi-language**: Support for non-English replies

### Recent Updates

- ✅ **TypeScript Migration**: Improved code reliability
- ✅ **Dashboard Redesign**: Modern UI with dark mode
- ✅ **Multi-Provider Support**: Enhanced AI fallback system
- ✅ **Remote Configuration**: Centralized settings management

## 🔒 Privacy & Security

### Data Handling

- **API Keys**: Stored locally in Chrome storage, never transmitted except to AI providers
- **Reply Data**: Generated replies are stored locally for your dashboard
- **Analytics**: No usage data is collected or transmitted
- **Third-party Services**: Only communicates with official AI provider APIs

### Security Features

- **CSP Compliance**: Follows Chrome's Content Security Policy
- **Input Sanitization**: All inputs are validated and sanitized
- **Rate Limiting**: Prevents API abuse and ensures fair usage
- **Error Handling**: Graceful failure handling without data leaks

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Shahid429

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- **AI Providers**: Google, OpenAI, and Perplexity for their amazing APIs
- **Open Source Community**: For the tools and libraries that made this possible
- **Contributors**: Everyone who helps improve TAHZEEB

## 📞 Support

### Getting Help

- 📧 **Email**: [shahid@example.com](mailto:shahid@example.com)
- 💬 **GitHub Issues**: [Report bugs or request features](https://github.com/Shahid429/X-Reply-extension/issues)
- 📖 **Documentation**: Check the [Wiki](https://github.com/Shahid429/X-Reply-extension/wiki) for detailed guides

### Troubleshooting

**Common Issues:**

- **"Extension context invalidated"**: Reload the extension and refresh Twitter
- **API Key errors**: Verify your keys are correct and have sufficient credits
- **Reply not inserting**: Ensure the reply box is visible and active
- **Slow responses**: Try switching to a different AI provider

**Debug Mode:**
Enable Chrome DevTools for the extension background page to see detailed logs.

## 📈 Statistics

[![GitHub stars](https://img.shields.io/github/stars/Shahid429/X-Reply-extension.svg?style=social&label=Star)](https://github.com/Shahid429/X-Reply-extension)
[![GitHub forks](https://img.shields.io/github/forks/Shahid429/X-Reply-extension.svg?style=social&label=Fork)](https://github.com/Shahid429/X-Reply-extension)
[![GitHub issues](https://img.shields.io/github/issues/Shahid429/X-Reply-extension.svg)](https://github.com/Shahid429/X-Reply-extension/issues)

---

<div align="center">

**Made with ❤️ by [Shahid429](https://github.com/Shahid429)**

**Star this repo if you find it useful! ⭐**

[⬆️ Back to Top](#-tahzeeb---ai-powered-xtwitter-reply-assistant)

</div>
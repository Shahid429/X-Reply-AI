# FlashReply X

A Chrome extension that helps you generate thoughtful and engaging replies to X (Twitter) posts using AI. Quickly craft professional, context-aware responses with just one click.

## Features

- Add an "AI Reply" button to every X (Twitter) post
- Generate context-aware, natural-sounding replies with one click
- Secure storage of your API key
- Clean and intuitive user interface
- Works with both light and dark themes
- Fast and lightweight extension
- No unnecessary permissions
- Regular updates and improvements

## Installation

### Prerequisites

- A modern web browser (Chrome, Edge, Brave, etc.)
- An OpenAI API key (get one at [OpenAI API Keys](https://platform.openai.com/api-keys))

### Setup

1. **Download the extension**
   - Clone this repository:
     ```bash
     git clone https://github.com/Harsha2318/FlashReply_X.git
     ```
   - Or download the latest release from the [Releases](https://github.com/Harsha2318/FlashReply_X/releases) page

2. **Load the extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top-right corner)
   - Click "Load unpacked" and select the extension directory

3. **Configure your API key**
   - Click the extension icon in your browser toolbar
   - Click the "Settings" button
   - Enter your OpenAI API key and click "Save"

## Usage

1. Navigate to [X (Twitter)](https://twitter.com) in your browser
2. Find a post you'd like to reply to
3. Click the "🤖 AI Reply" button next to the reply button
4. Wait a moment for the AI to generate a response
5. The generated reply will be inserted into the reply box
6. Review and edit the reply if needed, then post as usual

## Privacy

- Your OpenAI API key is stored securely in Chrome's sync storage
- The extension only makes API calls to `api.openai.com` when you click the AI Reply button
- No data is collected or stored by the extension
- The extension only accesses Twitter.com and X.com domains

## Development

### Building from source

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/x-ai-reply-extension.git
   cd x-ai-reply-extension
   ```

2. Make your changes to the code

3. Load the extension in Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension directory

### Testing

1. Make sure the extension is loaded in Chrome
2. Navigate to Twitter and test the functionality
3. Check the browser console for any errors (right-click -> Inspect -> Console)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ using vanilla JavaScript
- Uses the latest AI models for generating replies
- Lightweight and fast performance
- Inspired by the need for more meaningful social media interactions

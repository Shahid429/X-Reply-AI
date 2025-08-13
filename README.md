# TAHZEEB

A Chrome extension that helps you generate thoughtful, humanlike replies to X (Twitter) posts using multiple AI providers (Gemini, OpenAI, Perplexity). One click drafts a concise reply you can edit and post.

## ✨ Features

- One‑click AI replies on X/Twitter
- Custom persona prompt and curated built‑in presets
- Multi‑provider support with automatic fallback
  - Google Gemini (1.5‑flash/pro)
  - OpenAI (gpt‑4o‑mini, gpt‑4o)
  - Perplexity (sonar family)
- Multiple API keys per provider; tries keys in order
- Background fetching with timeouts and last‑working cache
- Visible‑only processing for speed (IntersectionObserver)
- Rate‑limited with small jitter for safer usage
- Reply sanitization (no citations like [1], single line, <280 chars)

## Installation

1. Clone or download this folder
2. Open `chrome://extensions/`
3. Enable Developer mode
4. Click Load unpacked and select the extension directory

## Setup

1. Click the extension icon → Settings
2. Enter API keys (one per line) for any providers you use
3. Optionally set a custom persona and choose a preset
4. Pick models per provider
5. Save

## How to Use

1. Browse X/Twitter
2. Click the 🤖 button next to a post’s reply
3. The draft reply is inserted for you to review/edit

Tip: You can also use the keyboard shortcut Ctrl+Shift+Y to draft a reply for the first visible post.

## Safety and Performance

- Does not auto‑post; you stay in control
- Rate‑limited actions with small jitter
- Minimal DOM footprint; visible‑only processing
- Network requests handled in background for isolation and reliability
- Automatic fallback across providers/keys on overload or rate limits

## Configuration Details

- Multi‑keys: Paste one key per line for each provider
- Models:
  - Gemini: `gemini-1.5-flash`, `gemini-1.5-pro`
  - OpenAI: `gpt-4o-mini`, `gpt-4o`
  - Perplexity: `sonar`, `sonar-small`, `sonar-large`
- Presets:
  - Ultra‑Short Humanlike (≤10 words, no punctuation)
  - Casual Human Reply (≤10 words, simple, no hashtags)
  - Ultra‑Compact (≤6 words, simple, no punctuation)

## Privacy

- Keys are stored in Chrome storage and used only to call provider APIs
- No analytics; all generation requests are initiated by you

## Troubleshooting

- If you see “Extension context invalidated”, reload the extension and refresh the X tab
- If a provider is overloaded, the extension automatically tries the next key/provider
- If insertion fails, ensure the reply box is visible and try again

## License

MIT

This repository is configured to use `dist/` as the canonical runtime build for the Chrome extension.

Guidelines
- Do not edit files inside `dist/` directly. Edit source files in the project root or `src/`, then run `npm run build` to regenerate `dist/`.
- `dist/` is included in the repository for immediate testing. If you prefer to exclude it from commits, add `/dist/` to `.gitignore` (already present by default).

Quick commands
- Build (regenerate `dist/`):
  npm run build

- Create a release zip (Windows PowerShell):
  npm run release

Notes
- Since you requested the extension to run directly from `dist/`, ensure you load the unpacked extension from the `dist/` folder in chrome://extensions.
- `archive_root_duplicates/` contains archived copies of previously duplicated root files. These are kept as a safe backup.
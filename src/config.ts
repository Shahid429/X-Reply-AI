/// <reference types="chrome"/>

export interface ExtensionConfig {
  enabled: boolean;
  password: string;
  announcement: string;
  alert: string;
  message: string;
}

export const CONFIG_URL = 'https://shahid429.github.io/x-reply-ai-config/config.json';

export async function fetchConfig(): Promise<void> {
  try {
    const res = await fetch(CONFIG_URL);
    if (!res.ok) throw new Error('Failed to fetch config');
    const config: ExtensionConfig = await res.json();
    setLocal({ extensionConfig: config });
  } catch (e) {
    console.error('Config fetch failed:', e);
    // Set default config if fetch fails
    setLocal({ extensionConfig: { enabled: true, password: '', announcement: '', alert: '', message: '' } });
  }
}

function setLocal(obj: Record<string, any>): void {
  try { chrome.storage.local.set(obj); } catch {} // eslint-disable-line no-empty
}
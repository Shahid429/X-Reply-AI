/// <reference types="chrome"/>

export function isTransient(message: string | undefined): boolean {
  if (!message) return false;
  const m = message.toLowerCase();
  return m.includes('overloaded') || m.includes('rate limit') || m.includes('too many requests') || m.includes('quota') || m.includes('temporarily unavailable') || m.includes('unavailable') || m.includes('try again later');
}

export function getSync(keys: string[]): Promise<Record<string, any>> {
  return new Promise((resolve) => {
    try { chrome.storage.sync.get(keys, (res: any) => resolve(res || {})); } catch { resolve({}); }
  });
}

export function getLocal(keys: string[]): Promise<Record<string, any>> {
  return new Promise((resolve) => {
    try { chrome.storage.local.get(keys, (res: any) => resolve(res || {})); } catch { resolve({}); }
  });
}

export function setLocal(obj: Record<string, any>): void {
  try { chrome.storage.local.set(obj); } catch {}
}
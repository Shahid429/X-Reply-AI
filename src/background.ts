/// <reference types="chrome"/>

import { ExtensionConfig, fetchConfig } from './config.js';
import { ApiProvider, withTimeoutFetch, callGemini, callOpenAI, callPerplexity } from './api.js';
import { isTransient, getSync, getLocal, setLocal } from './utils.js';

chrome.runtime.onStartup.addListener(fetchConfig);
chrome.runtime.onInstalled.addListener(fetchConfig);

// Periodic fetch every hour
setInterval(fetchConfig, 60 * 60 * 1000);

chrome.commands.onCommand.addListener(async (command: string) => {
  if (command !== 'generate-reply') return;
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.id) {
      chrome.tabs.sendMessage(tab.id, { type: 'trigger-generate-reply' });
    }
  } catch (e) {
    // ignore
  }
});

chrome.runtime.onMessage.addListener((msg: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
  // Consolidated message handler: supports 'gen' (generate reply)
  if (!msg || msg.type !== 'gen') return;
  (async () => {
      try {
        const { systemInstruction, prompt } = msg.payload || {};
        const settings = await getSync(['geminiApiKeys', 'openaiApiKeys', 'perplexityApiKeys', 'geminiModel', 'openaiModel', 'perplexityModel']);
        const geminiKeys = Array.isArray(settings.geminiApiKeys) ? settings.geminiApiKeys : [];
        const openaiKeys = Array.isArray(settings.openaiApiKeys) ? settings.openaiApiKeys : [];
        const perplexityKeys = Array.isArray(settings.perplexityApiKeys) ? settings.perplexityApiKeys : [];
        if (!geminiKeys.length && !openaiKeys.length && !perplexityKeys.length) throw new Error('No API keys configured');
        const geminiModel = settings.geminiModel || 'gemini-2.5-flash-lite';
        const openaiModel = settings.openaiModel || 'gpt-4o-mini';
        const perplexityModel = settings.perplexityModel || 'sonar';

        // Providers in fixed order; prioritize last working
        const last = await getLocal(['lastWorkingProvider', 'lastWorkingKey']);
        const providers: ApiProvider[] = [
          { name: 'gemini', keys: geminiKeys, model: geminiModel, fn: callGemini },
          { name: 'openai', keys: openaiKeys, model: openaiModel, fn: callOpenAI },
          { name: 'perplexity', keys: perplexityKeys, model: perplexityModel, fn: callPerplexity },
        ].filter(p => p.keys.length);
        if (last.lastWorkingProvider && last.lastWorkingKey) {
          const idx = providers.findIndex(p => p.name === last.lastWorkingProvider && p.keys.includes(last.lastWorkingKey));
          if (idx > 0) providers.unshift(providers.splice(idx, 1)[0]);
        }

        let lastErr: Error | undefined;
        for (const p of providers) {
          for (let i = 0; i < p.keys.length; i++) {
            const key = p.keys[i];
            try {
              const text = await p.fn(key, p.model, systemInstruction, prompt);
              if (text && text.trim().length) {
                setLocal({ lastWorkingProvider: p.name, lastWorkingKey: key });

                // Track reply generation for dashboard
                await trackReplyGeneration(text, p.name, p.model);

                sendResponse({ text });
                return;
              }
            } catch (e) {
              lastErr = e as Error;
              if (isTransient((e as Error)?.message)) {
                await new Promise(r => setTimeout(r, 250 + i * 200));
              }
              continue;
            }
          }
        }
        throw new Error(lastErr?.message || 'All providers failed');
      } catch (e) {
        sendResponse({ error: (e as Error)?.message || 'Generation failed' });
      }
  })();
  return true;
});

// --- Tracking helper ---
async function trackReplyGeneration(replyText: string, provider: string, model: string) {
  try {
    // Read current stats & history
    const current = await getLocal(['dashboardStats', 'replyHistory']);
    const stats = current.dashboardStats || {
      dailyReplies: 0,
      monthlyReplies: 0,
      dailyTokens: 0,
      monthlyTokens: 0,
      lastUpdated: Date.now()
    };
    const history = Array.isArray(current.replyHistory) ? current.replyHistory : [];

    const now = Date.now();
    const today = new Date();
    const lastUpdated = new Date(stats.lastUpdated);

    // Reset daily/monthly if needed
    if (lastUpdated.toDateString() !== today.toDateString()) {
      stats.dailyReplies = 0;
      stats.dailyTokens = 0;
    }
    if (lastUpdated.getMonth() !== today.getMonth() || lastUpdated.getFullYear() !== today.getFullYear()) {
      stats.monthlyReplies = 0;
      stats.monthlyTokens = 0;
    }

    const estimatedTokens = Math.ceil(replyText.length / 4);
    stats.dailyReplies += 1;
    stats.monthlyReplies += 1;
    stats.dailyTokens += estimatedTokens;
    stats.monthlyTokens += estimatedTokens;
    stats.lastUpdated = now;

    const entry = { id: now.toString(), content: replyText, timestamp: now, model: `${provider}/${model}`, tokens: estimatedTokens };
    history.push(entry);
    if (history.length > 100) history.shift();

    await setLocal({ dashboardStats: stats, replyHistory: history });
  } catch (e) {
    // non-fatal
    console.error('trackReplyGeneration error', e);
  }
}

// (debug helpers removed in production build)
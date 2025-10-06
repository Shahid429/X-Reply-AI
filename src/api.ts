/// <reference types="chrome"/>

export interface ApiProvider {
  name: string;
  keys: string[];
  model: string;
  fn: (key: string, model: string, systemInstruction: string, prompt: string) => Promise<string>;
}

export async function withTimeoutFetch(url: string, options?: RequestInit, timeoutMs: number = 8000): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

export async function callGemini(apiKey: string, model: string, systemInstruction: string, prompt: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;
  const res = await withTimeoutFetch(url, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: systemInstruction },
          { text: prompt }
        ]
      }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 60, topP: 0.8, topK: 40 }
    })
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`; try { const j = await res.json(); msg = j.error?.message || msg; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
}

export async function callOpenAI(apiKey: string, model: string, systemInstruction: string, prompt: string): Promise<string> {
  const res = await withTimeoutFetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ model, temperature: 0.7, max_tokens: 60, messages: [ { role: 'system', content: systemInstruction }, { role: 'user', content: prompt } ] })
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`; try { const j = await res.json(); msg = j.error?.message || msg; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || '';
}

export async function callPerplexity(apiKey: string, model: string, systemInstruction: string, prompt: string): Promise<string> {
  const res = await withTimeoutFetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ model, temperature: 0.7, max_tokens: 60, messages: [ { role: 'system', content: systemInstruction }, { role: 'user', content: prompt } ] })
  });
  if (!res.ok) {
    let msg = `HTTP ${res.status}`; try { const j = await res.json(); msg = j.error?.message || msg; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || '';
}
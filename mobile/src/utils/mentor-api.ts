/**
 * Client side of the AI mentor: shared types and the call to the `/api/mentor` route.
 * The Claude API key never reaches the app; only the server route uses it.
 */

export type MentorMessage = {
  role: 'user' | 'assistant';
  content: string;
};

/**
 * The route streams one JSON object per line (NDJSON).
 * `refusal` replaces any text received so far; `done` or `error` ends the stream.
 */
export type MentorStreamEvent =
  | { type: 'text'; text: string }
  | { type: 'refusal'; text: string }
  | { type: 'error'; error: string }
  | { type: 'done' };

/** Limits shared with the server route, so the app can enforce them before sending. */
export const MAX_MESSAGE_LENGTH = 2000;
/** Odd on purpose: the last 10 exchanges plus the new question, so the history sent always starts with the user. */
export const MAX_HISTORY_MESSAGES = 21;

/**
 * Sends the conversation and calls `onText` with the reply so far each time a piece arrives.
 * Resolves with the complete reply; rejects with a user-facing message.
 */
export async function askMentor(history: MentorMessage[], onText: (replySoFar: string) => void): Promise<string> {
  let response: Response;
  try {
    // On Android and iOS, the global fetch is expo/fetch, which supports streaming response bodies.
    response = await fetch('/api/mentor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history.slice(-MAX_HISTORY_MESSAGES) }),
    });
  } catch {
    throw new Error('Impossible de joindre le serveur. Vérifie ta connexion et que `npx expo start` tourne.');
  }

  // Validation and configuration errors come back as plain JSON, before any streaming.
  if (!response.ok || !response.body) {
    const data: { error?: string } = await response.json().catch(() => ({}));
    throw new Error(data.error ?? `Le serveur a répondu avec une erreur (${response.status}).`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let reply = '';

  while (true) {
    const { done, value } = await reader.read();
    buffer += decoder.decode(value, { stream: !done });

    const lines = buffer.split('\n');
    buffer = done ? '' : (lines.pop() ?? '');

    for (const line of lines) {
      if (!line.trim()) {
        continue;
      }
      const event = JSON.parse(line) as MentorStreamEvent;
      if (event.type === 'text') {
        reply += event.text;
        onText(reply);
      } else if (event.type === 'refusal') {
        reply = event.text;
        onText(reply);
      } else if (event.type === 'error') {
        throw new Error(event.error);
      } else {
        return reply;
      }
    }

    if (done) {
      throw new Error('La réponse du mentor a été interrompue. Réessaie.');
    }
  }
}

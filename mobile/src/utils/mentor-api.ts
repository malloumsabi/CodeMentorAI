/**
 * Client side of the AI mentor: shared message type and the call to the `/api/mentor` route.
 * The Claude API key never reaches the app; only the server route uses it.
 */

export type MentorMessage = {
  role: 'user' | 'assistant';
  content: string;
};

/** Limits shared with the server route, so the app can enforce them before sending. */
export const MAX_MESSAGE_LENGTH = 2000;
/** Odd on purpose: the last 10 exchanges plus the new question, so the history sent always starts with the user. */
export const MAX_HISTORY_MESSAGES = 21;

export async function askMentor(history: MentorMessage[]): Promise<string> {
  let response: Response;
  try {
    response = await fetch('/api/mentor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history.slice(-MAX_HISTORY_MESSAGES) }),
    });
  } catch {
    throw new Error('Impossible de joindre le serveur. Vérifie ta connexion et que `npx expo start` tourne.');
  }

  const data: { reply?: string; error?: string } = await response.json().catch(() => ({}));
  if (!response.ok || !data.reply) {
    throw new Error(data.error ?? `Le serveur a répondu avec une erreur (${response.status}).`);
  }
  return data.reply;
}

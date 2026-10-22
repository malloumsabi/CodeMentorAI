import Anthropic from '@anthropic-ai/sdk';

import {
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_LENGTH,
  type MentorMessage,
} from '@/utils/mentor-api';

/**
 * Server-only route: POST /api/mentor with `{ messages: MentorMessage[] }`, returns `{ reply }` or `{ error }`.
 * Reads ANTHROPIC_API_KEY from the server environment (mobile/.env.local in development).
 */

const SYSTEM_PROMPT = `Tu es le mentor de CodeMentor AI, une application mobile qui apprend la programmation à des débutants (Python, JavaScript, HTML et CSS, algorithmique).

Ta façon d'aider :
- Réponds dans la langue de l'élève (le français le plus souvent), avec des mots simples. Explique chaque terme technique la première fois que tu l'utilises.
- L'élève lit sur un téléphone : fais des réponses courtes, quelques paragraphes au plus, et propose d'approfondir s'il le souhaite.
- Illustre avec de petits exemples de code. Mets tout code dans un bloc entre trois accents graves (\`\`\`). N'utilise pas d'autre mise en forme Markdown (titres, gras, tableaux) : l'application affiche du texte brut.
- Quand l'élève travaille sur un exercice, guide-le avec des indices et des questions plutôt que de donner toute la solution, sauf s'il la demande explicitement.
- Quand il montre une erreur, explique ce qu'elle veut dire et comment la trouver par lui-même, puis comment la corriger.
- Encourage-le sans en faire trop.
- Si la question ne concerne pas la programmation, réponds brièvement et ramène gentiment la conversation vers l'apprentissage du code.`;

const client = new Anthropic();

function errorResponse(error: string, status: number) {
  return Response.json({ error }, { status });
}

/** Mentor replies are capped by max_tokens; this bounds what a client can send back as history. */
const MAX_REPLY_LENGTH = 20000;

/** Accepts only a strictly alternating history that starts and ends with a user message. */
function parseMessages(body: unknown): MentorMessage[] | null {
  const messages = (body as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(messages) || messages.length > MAX_HISTORY_MESSAGES || messages.length % 2 === 0) {
    return null;
  }

  const parsed: MentorMessage[] = [];
  for (const [index, message] of messages.entries()) {
    const role = index % 2 === 0 ? 'user' : 'assistant';
    const maxLength = role === 'user' ? MAX_MESSAGE_LENGTH : MAX_REPLY_LENGTH;
    const content: unknown = message?.content;
    if (message?.role !== role || typeof content !== 'string' || !content.trim() || content.length > maxLength) {
      return null;
    }
    parsed.push({ role, content });
  }
  return parsed;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return errorResponse('Le serveur n’a pas de clé API (ANTHROPIC_API_KEY manquante dans mobile/.env.local).', 500);
  }

  const messages = parseMessages(await request.json().catch(() => null));
  if (!messages) {
    return errorResponse('Message invalide ou trop long.', 400);
  }

  try {
    const response = await client.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages,
      // Tutoring chat: low effort keeps answers fast and cheap.
      output_config: { effort: 'low' },
      // If a safety classifier declines a benign question, retry on Anthropic's recommended fallback model.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
    });

    if (response.stop_reason === 'refusal') {
      return Response.json({
        reply: 'Je ne peux pas répondre à cette demande. Essaie de la reformuler, ou pose-moi une autre question sur le code.',
      });
    }

    const text = response.content
      .flatMap((block) => (block.type === 'text' ? [block.text] : []))
      .join('\n')
      .trim();
    if (!text) {
      return errorResponse('Le mentor n’a pas renvoyé de réponse. Réessaie.', 502);
    }
    const truncated = response.stop_reason === 'max_tokens' ? '\n\n(Réponse coupée car trop longue.)' : '';
    return Response.json({ reply: text + truncated });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError || error instanceof Anthropic.PermissionDeniedError) {
      return errorResponse('Clé API refusée. Vérifie la clé dans mobile/.env.local et le crédit du compte.', 500);
    }
    if (error instanceof Anthropic.RateLimitError) {
      return errorResponse('Trop de questions en peu de temps. Attends un peu avant de réessayer.', 429);
    }
    if (error instanceof Anthropic.APIConnectionError) {
      return errorResponse('Le serveur n’arrive pas à joindre l’API Claude. Vérifie la connexion internet.', 502);
    }
    if (error instanceof Anthropic.APIError) {
      console.error('Claude API error', error.status, error.message);
      return errorResponse(`Erreur de l’API Claude (${error.status ?? 'inconnue'}). Réessaie plus tard.`, 502);
    }
    throw error;
  }
}

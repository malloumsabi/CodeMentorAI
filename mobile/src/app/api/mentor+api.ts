import Anthropic from '@anthropic-ai/sdk';

import { courses } from '@/data/courses';
import {
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_LENGTH,
  type LessonRef,
  type MentorMessage,
  type MentorStreamEvent,
} from '@/utils/mentor-api';

/**
 * Server-only route: POST /api/mentor with `{ messages: MentorMessage[], lesson?: LessonRef }`.
 * Invalid requests get a JSON `{ error }`; otherwise the reply is streamed as NDJSON `MentorStreamEvent` lines.
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

/**
 * Builds the lesson part of the system prompt from the app's own lesson data.
 * Returns undefined when no lesson was given, and null when the ids don't match a lesson.
 */
function describeLesson(lessonRef: unknown): string | null | undefined {
  if (lessonRef === undefined || lessonRef === null) {
    return undefined;
  }
  const { courseId, lessonId } = lessonRef as Partial<LessonRef>;
  const course = courses.find((item) => item.id === courseId);
  const lesson = course?.lessons.find((item) => item.id === lessonId);
  if (!course || !lesson) {
    return null;
  }

  const content = lesson.blocks
    .map((block) => (block.type === 'code' ? `\`\`\`\n${block.code}\n\`\`\`` : block.text))
    .join('\n\n');
  const { quiz } = lesson;
  const options = quiz.options.map((option, index) => `${index + 1}. ${option}`).join('\n');

  return `L'élève t'écrit depuis cette leçon de l'application. Appuie-toi dessus pour lui répondre.

Parcours : ${course.title} (${course.level})
Leçon : ${lesson.title}

${content}

Quiz de la leçon :
${quiz.question}${quiz.code ? `\n\`\`\`\n${quiz.code}\n\`\`\`` : ''}
${options}
Bonne réponse : ${quiz.options[quiz.answerIndex]}. ${quiz.explanation}

La bonne réponse t'est donnée pour que tes indices soient justes. Ne la révèle pas : aide l'élève à la trouver lui-même, sauf s'il te demande explicitement la réponse.`;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return errorResponse('Le serveur n’a pas de clé API (ANTHROPIC_API_KEY manquante dans mobile/.env.local).', 500);
  }

  const body: unknown = await request.json().catch(() => null);
  const messages = parseMessages(body);
  const lessonContext = describeLesson((body as { lesson?: unknown } | null)?.lesson);
  if (!messages || lessonContext === null) {
    return errorResponse('Message invalide ou trop long.', 400);
  }

  const encoder = new TextEncoder();
  const responseBody = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: MentorStreamEvent) => controller.enqueue(encoder.encode(JSON.stringify(event) + '\n'));

      try {
        const stream = client.beta.messages.stream({
          model: 'claude-opus-5-5',
          max_tokens: 4096,
          system: lessonContext ? `${SYSTEM_PROMPT}\n\n${lessonContext}` : SYSTEM_PROMPT,
          messages,
          // Tutoring chat: low effort keeps answers fast and cheap.
          output_config: { effort: 'low' },
          // If a safety classifier declines a benign question, retry on Anthropic's recommended fallback model.
          // A mid-answer fallback continues on the same stream, so the text received so far stays valid.
          betas: ['server-side-fallback-2026-07-01'],
          fallbacks: 'default',
        });

        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            send({ type: 'text', text: event.delta.text });
          }
        }

        const message = await stream.finalMessage();
        if (message.stop_reason === 'refusal') {
          // Every model declined: the partial text must not be shown as an answer.
          send({ type: 'refusal', text: REFUSAL_REPLY });
        } else if (message.stop_reason === 'max_tokens') {
          send({ type: 'text', text: '\n\n(Réponse coupée car trop longue.)' });
        }
        send({ type: 'done' });
      } catch (error) {
        send({ type: 'error', error: describeError(error) });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(responseBody, {
    headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-cache' },
  });
}

const REFUSAL_REPLY =
  'Je ne peux pas répondre à cette demande. Essaie de la reformuler, ou pose-moi une autre question sur le code.';

function describeError(error: unknown): string {
  if (error instanceof Anthropic.AuthenticationError || error instanceof Anthropic.PermissionDeniedError) {
    return 'Clé API refusée. Vérifie la clé dans mobile/.env.local et le crédit du compte.';
  }
  if (error instanceof Anthropic.RateLimitError) {
    return 'Trop de questions en peu de temps. Attends un peu avant de réessayer.';
  }
  if (error instanceof Anthropic.APIConnectionError) {
    return 'Le serveur n’arrive pas à joindre l’API Claude. Vérifie la connexion internet.';
  }
  if (error instanceof Anthropic.APIError) {
    console.error('Claude API error', error.status, error.message);
    return `Erreur de l’API Claude (${error.status ?? 'inconnue'}). Réessaie plus tard.`;
  }
  console.error('Mentor route error', error);
  return 'Une erreur inattendue est survenue sur le serveur. Réessaie.';
}

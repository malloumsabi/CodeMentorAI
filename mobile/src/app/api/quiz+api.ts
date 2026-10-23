import type { Quiz } from '@/data/lessons';
import { DEFAULT_LANGUAGE, getDictionary, isLanguage, LANGUAGE_NAMES } from '@/i18n/languages';
import { claude, describeError } from '@/server/claude';
import { findLesson, lessonText } from '@/server/lesson-context';
import { PRACTICE_QUESTION_COUNT } from '@/utils/quiz-api';

/**
 * Server-only route: POST /api/quiz with `{ lesson: LessonRef, language?: Language }`.
 * Answers `{ questions: Quiz[] }` with new practice questions on that lesson, or `{ error }`.
 */

const SYSTEM_PROMPT = `Tu prépares des questions d'entraînement pour CodeMentor AI, une application mobile qui apprend la programmation à des étudiants débutants.

Chaque question vérifie une notion de la leçon donnée, à son niveau, sans demander ce que la leçon n'a pas expliqué. Varie les formes : prédire ce qu'affiche un petit code, trouver l'erreur, choisir la bonne définition ou le bon usage. Ne reprends pas le quiz déjà présent dans la leçon.

Pour chaque question :
- options : trois réponses courtes et plausibles, dont une seule est juste sans discussion possible. Vérifie-la soigneusement, en exécutant le code dans ta tête s'il y en a.
- answerIndex : la position de la bonne réponse (0, 1 ou 2). Ne la mets pas toujours au même endroit.
- code : un court extrait (moins de 10 lignes) quand la question porte sur du code, sinon une chaîne vide.
- explanation : une ou deux phrases qui disent pourquoi c'est la bonne réponse.

Écris du texte brut, sans Markdown.`;

/** The answer Claude must follow; checked again by `parseQuestions`. */
const QUIZ_SCHEMA = {
  type: 'object',
  properties: {
    questions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          question: { type: 'string' },
          code: { type: 'string' },
          options: { type: 'array', items: { type: 'string' } },
          answerIndex: { type: 'integer' },
          explanation: { type: 'string' },
        },
        required: ['question', 'code', 'options', 'answerIndex', 'explanation'],
        additionalProperties: false,
      },
    },
  },
  required: ['questions'],
  additionalProperties: false,
};

const OPTION_COUNT = 3;

/** Keeps only well-formed questions: a wrong answer key would teach the student something false. */
function parseQuestions(text: string): Quiz[] {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return [];
  }
  const items: unknown = (data as { questions?: unknown } | null)?.questions;
  if (!Array.isArray(items)) {
    return [];
  }

  const questions: Quiz[] = [];
  for (const item of items) {
    const { question, code, options, answerIndex, explanation } = (item ?? {}) as Record<string, unknown>;
    const isValid =
      typeof question === 'string' &&
      question.trim() !== '' &&
      typeof code === 'string' &&
      Array.isArray(options) &&
      options.length === OPTION_COUNT &&
      options.every((option) => typeof option === 'string' && option.trim() !== '') &&
      new Set(options).size === OPTION_COUNT &&
      Number.isInteger(answerIndex) &&
      (answerIndex as number) >= 0 &&
      (answerIndex as number) < OPTION_COUNT &&
      typeof explanation === 'string' &&
      explanation.trim() !== '';
    if (isValid) {
      questions.push({
        question,
        code: code.trim() ? code : undefined,
        options: options as string[],
        answerIndex: answerIndex as number,
        explanation,
      });
    }
  }
  return questions.slice(0, PRACTICE_QUESTION_COUNT);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { language?: unknown; lesson?: unknown } | null;
  const language = isLanguage(body?.language) ? body.language : DEFAULT_LANGUAGE;
  const t = getDictionary(language);

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: t.mentorErrors.noApiKey }, { status: 500 });
  }

  const found = findLesson(body?.lesson, language);
  if (!found) {
    return Response.json({ error: t.mentorErrors.invalidRequest }, { status: 400 });
  }
  const { course, lesson } = found;

  try {
    const message = await claude.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 16000,
      system: `${SYSTEM_PROMPT}\n\nLangue de l'application : ${LANGUAGE_NAMES[language]}. Écris les questions dans cette langue.`,
      messages: [
        {
          role: 'user',
          content: `${lessonText(course, lesson, t)}

Quiz déjà présent dans la leçon : ${lesson.quiz.question}

Prépare ${PRACTICE_QUESTION_COUNT} nouvelles questions sur cette leçon.`,
        },
      ],
      // Medium effort (one step above the chat): the answers must be right.
      output_config: { effort: 'medium', format: { type: 'json_schema', schema: QUIZ_SCHEMA } },
      // If a safety classifier declines a benign request, retry on Anthropic's recommended fallback model.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
    });

    const text = message.content.map((block) => (block.type === 'text' ? block.text : '')).join('');
    const questions = message.stop_reason === 'end_turn' ? parseQuestions(text) : [];
    if (questions.length === 0) {
      console.warn('Practice quiz not usable', message.stop_reason);
      return Response.json({ error: t.practice.failed }, { status: 502 });
    }
    return Response.json({ questions });
  } catch (error) {
    return Response.json({ error: describeError(error, t) }, { status: 502 });
  }
}

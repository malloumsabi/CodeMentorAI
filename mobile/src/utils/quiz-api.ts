import type { Quiz } from '@/data/lessons';
import { getDictionary, type Language } from '@/i18n/languages';
import type { LessonRef } from '@/utils/mentor-api';

/**
 * Client side of the practice quizzes: the call to the `/api/quiz` route,
 * which asks the mentor for new questions on a lesson.
 */

/** Shared with the server route. */
export const PRACTICE_QUESTION_COUNT = 3;

/** Resolves with the new questions; rejects with a user-facing message. */
export async function generatePracticeQuiz(lesson: LessonRef, language: Language): Promise<Quiz[]> {
  const errors = getDictionary(language).mentorErrors;
  let response: Response;
  try {
    response = await fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lesson, language }),
    });
  } catch {
    throw new Error(errors.unreachable);
  }

  const data: { questions?: Quiz[]; error?: string } = await response.json().catch(() => ({}));
  if (!response.ok || !data.questions) {
    throw new Error(data.error ?? errors.server(response.status));
  }
  return data.questions;
}

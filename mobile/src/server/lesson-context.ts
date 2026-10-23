import { getCourses, type Course } from '@/data/courses';
import type { Lesson } from '@/data/lessons';
import type { Dictionary } from '@/i18n/fr';
import type { Language } from '@/i18n/languages';
import type { LessonRef } from '@/utils/mentor-api';

/** The lesson the app refers to, in the app language as the student sees it; null when the ids don't match. */
export function findLesson(lessonRef: unknown, language: Language): { course: Course; lesson: Lesson } | null {
  const { courseId, lessonId } = (lessonRef ?? {}) as Partial<LessonRef>;
  const course = getCourses(language).find((item) => item.id === courseId);
  const lesson = course?.lessons.find((item) => item.id === lessonId);
  return course && lesson ? { course, lesson } : null;
}

/** The lesson's course, title and content as plain text, for a prompt. */
export function lessonText(course: Course, lesson: Lesson, t: Dictionary): string {
  const content = lesson.blocks
    .map((block) => (block.type === 'code' ? `\`\`\`\n${block.code}\n\`\`\`` : block.text))
    .join('\n\n');

  return `Parcours : ${course.title} (${t.levels[course.level]})
Leçon : ${lesson.title}

${content}`;
}

/**
 * Placeholder data until the app is connected to a backend.
 */

import type { Language, Localized } from '@/i18n/languages';
import { lessonsByCourse, localizeLesson, type Lesson } from '@/data/lessons';

/** Displayed through the `levels` texts of the current language. */
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

/** A course resolved to one language: what the screens use. */
export type Course = {
  id: string;
  title: string;
  /** Short label shown in the course badge, e.g. "Py". */
  badge: string;
  level: CourseLevel;
  /** Lessons are completed in order: the first `lessonsCompleted` ones are done. */
  lessonsCompleted: number;
  lessons: Lesson[];
  /** Always equal to `lessons.length`. */
  lessonsTotal: number;
};

type CourseInfo = Omit<Course, 'title' | 'lessons' | 'lessonsTotal'> & { title: Localized };

/** `lessonsCompleted` values are demo defaults, replaced by the saved progress once the user starts. */
const courseInfos: CourseInfo[] = [
  {
    id: 'python-basics',
    title: { fr: 'Les bases de Python', en: 'Python basics', tr: 'Python temelleri' },
    badge: 'Py',
    level: 'beginner',
    lessonsCompleted: 2,
  },
  {
    id: 'javascript-essentials',
    title: { fr: 'JavaScript essentiel', en: 'JavaScript essentials', tr: 'Temel JavaScript' },
    badge: 'JS',
    level: 'beginner',
    lessonsCompleted: 1,
  },
  {
    id: 'html-css',
    title: { fr: 'HTML & CSS', en: 'HTML & CSS', tr: 'HTML ve CSS' },
    badge: '</>',
    level: 'beginner',
    lessonsCompleted: 0,
  },
  {
    id: 'algorithms',
    title: { fr: 'Algorithmique', en: 'Algorithms', tr: 'Algoritmalar' },
    badge: 'Algo',
    level: 'intermediate',
    lessonsCompleted: 0,
  },
];

const coursesByLanguage = new Map<Language, Course[]>();

/** Every course, with titles, lessons and quizzes in the given language. */
export function getCourses(language: Language): Course[] {
  let list = coursesByLanguage.get(language);
  if (!list) {
    list = courseInfos.map((info) => {
      const lessons = (lessonsByCourse[info.id] ?? []).map((lesson) => localizeLesson(lesson, language));
      return { ...info, title: info.title[language], lessons, lessonsTotal: lessons.length };
    });
    coursesByLanguage.set(language, list);
  }
  return list;
}

export function getCourseProgress(course: Course) {
  return course.lessonsTotal === 0 ? 0 : course.lessonsCompleted / course.lessonsTotal;
}

/** The next lesson to do, or undefined when the course is finished. */
export function getNextLesson(course: Course): Lesson | undefined {
  return course.lessons[course.lessonsCompleted];
}

/** The course to resume first: the most advanced one that is started but not finished. */
export function getCurrentCourse(list: Course[]) {
  return list
    .filter((course) => course.lessonsCompleted > 0 && course.lessonsCompleted < course.lessonsTotal)
    .sort((a, b) => getCourseProgress(b) - getCourseProgress(a))[0];
}

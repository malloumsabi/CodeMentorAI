/**
 * Placeholder data until the app is connected to a backend.
 */

import { lessonsByCourse, type Lesson } from '@/data/lessons';

export type CourseLevel = 'Débutant' | 'Intermédiaire' | 'Avancé';

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

type CourseInfo = Omit<Course, 'lessons' | 'lessonsTotal'>;

/** `lessonsCompleted` values are demo defaults, replaced by the saved progress once the user starts. */
const courseInfos: CourseInfo[] = [
  { id: 'python-basics', title: 'Les bases de Python', badge: 'Py', level: 'Débutant', lessonsCompleted: 2 },
  { id: 'javascript-essentials', title: 'JavaScript essentiel', badge: 'JS', level: 'Débutant', lessonsCompleted: 1 },
  { id: 'html-css', title: 'HTML & CSS', badge: '</>', level: 'Débutant', lessonsCompleted: 0 },
  { id: 'algorithms', title: 'Algorithmique', badge: 'Algo', level: 'Intermédiaire', lessonsCompleted: 0 },
];

export const courses: Course[] = courseInfos.map((info) => {
  const lessons = lessonsByCourse[info.id] ?? [];
  return { ...info, lessons, lessonsTotal: lessons.length };
});

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

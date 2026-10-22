/**
 * Placeholder data until the app is connected to a backend.
 */

export type CourseLevel = 'Débutant' | 'Intermédiaire' | 'Avancé';

export type Course = {
  id: string;
  title: string;
  /** Short label shown in the course badge, e.g. "Py". */
  badge: string;
  level: CourseLevel;
  lessonsCompleted: number;
  lessonsTotal: number;
  nextLesson: string;
};

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Les bases de Python',
    badge: 'Py',
    level: 'Débutant',
    lessonsCompleted: 7,
    lessonsTotal: 20,
    nextLesson: 'Les boucles for',
  },
  {
    id: 'javascript-essentials',
    title: 'JavaScript essentiel',
    badge: 'JS',
    level: 'Débutant',
    lessonsCompleted: 2,
    lessonsTotal: 24,
    nextLesson: 'Les fonctions',
  },
  {
    id: 'html-css',
    title: 'HTML & CSS',
    badge: '</>',
    level: 'Débutant',
    lessonsCompleted: 0,
    lessonsTotal: 15,
    nextLesson: 'Structure d’une page',
  },
  {
    id: 'algorithms',
    title: 'Algorithmique',
    badge: 'Algo',
    level: 'Intermédiaire',
    lessonsCompleted: 0,
    lessonsTotal: 18,
    nextLesson: 'Complexité et notation O',
  },
];

export function getCourseProgress(course: Course) {
  return course.lessonsTotal === 0 ? 0 : course.lessonsCompleted / course.lessonsTotal;
}

/** The course to resume first: the most advanced one that is started but not finished. */
export function getCurrentCourse(list: Course[] = courses) {
  return list
    .filter((course) => course.lessonsCompleted > 0 && course.lessonsCompleted < course.lessonsTotal)
    .sort((a, b) => getCourseProgress(b) - getCourseProgress(a))[0];
}

/**
 * Placeholder data until the app is connected to a backend.
 */

import type { Language, Localized } from '@/i18n/languages';
import { lessonsByCourse, localizeLesson, type Lesson } from '@/data/lessons';

/** Displayed through the `levels` texts of the current language. */
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

/** Where a course sits in the KBU curriculum; 'basics' for the general introductory courses. */
export const COURSE_GROUPS = ['basics', 'year1', 'year2', 'year3', 'year4'] as const;
export type CourseGroup = (typeof COURSE_GROUPS)[number];

/** A course resolved to one language: what the screens use. */
export type Course = {
  id: string;
  title: string;
  /** Short label shown in the course badge, e.g. "Py". */
  badge: string;
  /** Only used to sort courses: every course is open to every student. */
  group: CourseGroup;
  level: CourseLevel;
  /** Lessons can be completed in any order; always equal to `completedLessonIds.length`. */
  lessonsCompleted: number;
  completedLessonIds: readonly string[];
  lessons: Lesson[];
  /** Always equal to `lessons.length`. */
  lessonsTotal: number;
};

/** Courses that follow the semester: weeks up to this one prepare the midterm (vize), the others the final. */
export const MIDTERM_LAST_WEEK = 7;

type CourseInfo = Omit<Course, 'title' | 'lessons' | 'lessonsTotal' | 'lessonsCompleted' | 'completedLessonIds'> & {
  title: Localized;
};

const courseInfos: CourseInfo[] = [
  {
    id: 'python-basics',
    title: { fr: 'Les bases de Python', en: 'Python basics', tr: 'Python temelleri' },
    badge: 'Py',
    group: 'basics',
    level: 'beginner',
  },
  {
    id: 'javascript-essentials',
    title: { fr: 'JavaScript essentiel', en: 'JavaScript essentials', tr: 'Temel JavaScript' },
    badge: 'JS',
    group: 'basics',
    level: 'beginner',
  },
  {
    id: 'html-css',
    title: { fr: 'HTML & CSS', en: 'HTML & CSS', tr: 'HTML ve CSS' },
    badge: '</>',
    group: 'basics',
    level: 'beginner',
  },
  {
    id: 'algorithms',
    title: { fr: 'Algorithmique', en: 'Algorithms', tr: 'Algoritmalar' },
    badge: 'Algo',
    group: 'basics',
    level: 'intermediate',
  },
  // Karabük University computer engineering courses, in curriculum order.
  {
    id: 'kbu-blm111',
    title: { fr: 'Programmation I (BLM111)', en: 'Programming I (BLM111)', tr: 'Programlama Dilleri I (BLM111)' },
    badge: 'C',
    group: 'year1',
    level: 'beginner',
  },
  {
    id: 'kbu-blm112',
    title: { fr: 'Programmation II (BLM112)', en: 'Programming II (BLM112)', tr: 'Programlama Dilleri II (BLM112)' },
    badge: 'C II',
    group: 'year1',
    level: 'intermediate',
  },
  {
    id: 'kbu-blm113',
    title: {
      fr: 'Introduction au génie informatique (BLM113)',
      en: 'Introduction to Computer Engineering (BLM113)',
      tr: 'Bilgisayar Mühendisliğine Giriş (BLM113)',
    },
    badge: 'CENG',
    group: 'year1',
    level: 'beginner',
  },
  {
    id: 'kbu-cme225',
    title: {
      fr: 'Programmation orientée objet (CME225)',
      en: 'Object Oriented Programming (CME225)',
      tr: 'Nesne Yönelimli Programlama (CME225)',
    },
    badge: 'Java',
    group: 'year2',
    level: 'intermediate',
  },
  {
    id: 'kbu-cme227',
    title: { fr: 'Structures de données (CME227)', en: 'Data Structures (CME227)', tr: 'Veri Yapıları (CME227)' },
    badge: 'DS',
    group: 'year2',
    level: 'intermediate',
  },
  {
    id: 'kbu-blm221',
    title: { fr: 'Circuits logiques (BLM221)', en: 'Logic Circuits (BLM221)', tr: 'Mantık Devreleri (BLM221)' },
    badge: 'Bool',
    group: 'year2',
    level: 'beginner',
  },
  {
    id: 'kbu-cme226',
    title: {
      fr: 'Bases de données (CME226)',
      en: 'Database Management (CME226)',
      tr: 'Veritabanı Yönetimi (CME226)',
    },
    badge: 'SQL',
    group: 'year2',
    level: 'beginner',
  },
  {
    id: 'kbu-cme228',
    title: {
      fr: 'Programmation web (CME228)',
      en: 'Internet Based Programming (CME228)',
      tr: 'İnternet Tabanlı Programlama (CME228)',
    },
    badge: 'PHP',
    group: 'year2',
    level: 'beginner',
  },
  {
    id: 'kbu-blm220',
    title: {
      fr: 'Mathématiques discrètes (BLM220)',
      en: 'Discrete Mathematics (BLM220)',
      tr: 'Ayrık Matematik (BLM220)',
    },
    badge: 'Math',
    group: 'year2',
    level: 'intermediate',
  },
  {
    id: 'kbu-cme324',
    title: {
      fr: 'Systèmes d’exploitation (CME324)',
      en: 'Operating Systems (CME324)',
      tr: 'İşletim Sistemleri (CME324)',
    },
    badge: 'OS',
    group: 'year3',
    level: 'intermediate',
  },
  {
    id: 'kbu-cme326',
    title: {
      fr: 'Réseaux informatiques (CME326)',
      en: 'Computer Networks (CME326)',
      tr: 'Bilgisayar Ağları (CME326)',
    },
    badge: 'Net',
    group: 'year3',
    level: 'intermediate',
  },
  {
    id: 'kbu-blm320',
    title: {
      fr: 'Architecture des ordinateurs (BLM320)',
      en: 'Computer Architecture (BLM320)',
      tr: 'Bilgisayar Mimarisi (BLM320)',
    },
    badge: 'CPU',
    group: 'year3',
    level: 'advanced',
  },
  {
    id: 'kbu-blm322',
    title: { fr: 'Théorie des automates (BLM322)', en: 'Automata Theory (BLM322)', tr: 'Otomata Teorisi (BLM322)' },
    badge: 'DFA',
    group: 'year3',
    level: 'advanced',
  },
  {
    id: 'kbu-blm426',
    title: {
      fr: 'Génie logiciel (BLM426)',
      en: 'Software Engineering (BLM426)',
      tr: 'Yazılım Mühendisliği (BLM426)',
    },
    badge: 'SE',
    group: 'year3',
    level: 'intermediate',
  },
  {
    id: 'kbu-blm431',
    title: { fr: 'Intelligence artificielle (BLM431)', en: 'Artificial Intelligence (BLM431)', tr: 'Yapay Zeka (BLM431)' },
    badge: 'AI',
    group: 'year4',
    level: 'intermediate',
  },
  {
    id: 'kbu-blm446',
    title: {
      fr: 'Sécurité informatique et réseau (BLM446)',
      en: 'Computer and Network Security (BLM446)',
      tr: 'Bilgisayar ve Ağ Güvenliği (BLM446)',
    },
    badge: 'Sec',
    group: 'year4',
    level: 'intermediate',
  },
];

const coursesByLanguage = new Map<Language, Course[]>();

/** Every course, with titles, lessons and quizzes in the given language. */
export function getCourses(language: Language): Course[] {
  let list = coursesByLanguage.get(language);
  if (!list) {
    list = courseInfos.map((info) => {
      const lessons = (lessonsByCourse[info.id] ?? []).map((lesson) => localizeLesson(lesson, language));
      return {
        ...info,
        title: info.title[language],
        lessons,
        lessonsTotal: lessons.length,
        lessonsCompleted: 0,
        completedLessonIds: [],
      };
    });
    coursesByLanguage.set(language, list);
  }
  return list;
}

export function getCourseProgress(course: Course) {
  return course.lessonsTotal === 0 ? 0 : course.lessonsCompleted / course.lessonsTotal;
}

/** The first lesson not done yet, or undefined when the course is finished. */
export function getNextLesson(course: Course): Lesson | undefined {
  return course.lessons.find((lesson) => !course.completedLessonIds.includes(lesson.id));
}

/** The course to resume first: the most advanced one that is started but not finished. */
export function getCurrentCourse(list: Course[]) {
  return list
    .filter((course) => course.lessonsCompleted > 0 && course.lessonsCompleted < course.lessonsTotal)
    .sort((a, b) => getCourseProgress(b) - getCourseProgress(a))[0];
}

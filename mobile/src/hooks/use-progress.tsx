import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { getCourses, type Course } from '@/data/courses';
import { useI18n } from '@/i18n';
import { DEFAULT_LANGUAGE } from '@/i18n/languages';

/** Progress only depends on course and lesson ids, which are the same in every language. */
const courses = getCourses(DEFAULT_LANGUAGE);

/** Bump the version suffix if the stored shape or meaning changes (v1 counted lessons of the old 15–24 lesson demo courses). */
const STORAGE_KEY = 'codementor/progress/v2';

/** Number of completed lessons, by course id. Courses without an entry keep their default value. */
type Progress = Record<string, number>;

type ProgressContextValue = {
  progress: Progress;
  isLoaded: boolean;
  completeLesson: (courseId: string, lessonId: string) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (stored) {
          setProgress(JSON.parse(stored));
        }
      })
      .catch((error) => console.warn('Could not load progress', error))
      .finally(() => setIsLoaded(true));
  }, []);

  function completeLesson(courseId: string, lessonId: string) {
    const course = courses.find((item) => item.id === courseId);
    // Saving before the stored progress is loaded would overwrite it.
    if (!course || !isLoaded) {
      return;
    }

    const completed = progress[courseId] ?? course.lessonsCompleted;
    // Lessons are completed in order: reviewing an already completed lesson changes nothing.
    if (course.lessons.findIndex((lesson) => lesson.id === lessonId) !== completed) {
      return;
    }

    saveProgress({ ...progress, [courseId]: completed + 1 });
  }

  /** Sets every course to 0, including those with demo progress. */
  function resetProgress() {
    if (!isLoaded) {
      return;
    }
    saveProgress(Object.fromEntries(courses.map((course) => [course.id, 0])));
  }

  function saveProgress(next: Progress) {
    setProgress(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch((error) =>
      console.warn('Could not save progress', error)
    );
  }

  return (
    <ProgressContext.Provider value={{ progress, isLoaded, completeLesson, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used inside <ProgressProvider>');
  }
  return context;
}

/** Courses in the current language, with the saved progress applied. */
export function useCourses(): Course[] {
  const { progress } = useProgress();
  const { language } = useI18n();

  return getCourses(language).map((course) =>
    course.id in progress
      ? { ...course, lessonsCompleted: Math.min(progress[course.id], course.lessonsTotal) }
      : course
  );
}

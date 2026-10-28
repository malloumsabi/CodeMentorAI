import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { getCourses, type Course } from '@/data/courses';
import { useI18n } from '@/i18n';
import { DEFAULT_LANGUAGE } from '@/i18n/languages';
import { toDayKey, type Activity } from '@/utils/activity';

/** Progress only depends on course and lesson ids, which are the same in every language. */
const courses = getCourses(DEFAULT_LANGUAGE);

/** Bump the version suffix if the stored shape or meaning changes (v2 counted lessons done in order). */
const STORAGE_KEY = 'codementor/progress/v3';
const V2_STORAGE_KEY = 'codementor/progress/v2';
/** Kept apart from the progress so its shape (and the v3 key) stays the same. */
const ACTIVITY_STORAGE_KEY = 'codementor/activity/v1';

/** Ids of the completed lessons, by course id, in the order they were completed. */
type Progress = Record<string, string[]>;

/** v2 stored how many lessons were done in order: those are the first lessons of each course. */
function migrateV2(stored: Record<string, number>): Progress {
  const progress: Progress = {};
  for (const course of courses) {
    const count = stored[course.id];
    if (typeof count === 'number' && count > 0) {
      progress[course.id] = course.lessons.slice(0, count).map((lesson) => lesson.id);
    }
  }
  return progress;
}

async function loadProgress(): Promise<Progress | null> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  const storedV2 = await AsyncStorage.getItem(V2_STORAGE_KEY);
  return storedV2 ? migrateV2(JSON.parse(storedV2)) : null;
}

async function loadActivity(): Promise<Activity | null> {
  const stored = await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

type ProgressContextValue = {
  progress: Progress;
  /** Lessons completed per day, for the streak and the daily goal. */
  activity: Activity;
  isLoaded: boolean;
  completeLesson: (courseId: string, lessonId: string) => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>({});
  const [activity, setActivity] = useState<Activity>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([loadProgress(), loadActivity()])
      .then(([storedProgress, storedActivity]) => {
        if (storedProgress) {
          setProgress(storedProgress);
        }
        if (storedActivity) {
          setActivity(storedActivity);
        }
      })
      .catch((error) => console.warn('Could not load progress', error))
      .finally(() => setIsLoaded(true));
  }, []);

  /** Lessons can be completed in any order; completing one again changes nothing. */
  function completeLesson(courseId: string, lessonId: string) {
    const course = courses.find((item) => item.id === courseId);
    const done = progress[courseId] ?? [];
    // Saving before the stored progress is loaded would overwrite it.
    if (!isLoaded || !course?.lessons.some((lesson) => lesson.id === lessonId) || done.includes(lessonId)) {
      return;
    }
    saveProgress({ ...progress, [courseId]: [...done, lessonId] });
    const today = toDayKey(new Date());
    saveActivity({ ...activity, [today]: (activity[today] ?? 0) + 1 });
  }

  function resetProgress() {
    if (!isLoaded) {
      return;
    }
    saveProgress({});
    saveActivity({});
  }

  function saveProgress(next: Progress) {
    setProgress(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch((error) =>
      console.warn('Could not save progress', error)
    );
  }

  function saveActivity(next: Activity) {
    setActivity(next);
    AsyncStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(next)).catch((error) =>
      console.warn('Could not save activity', error)
    );
  }

  return (
    <ProgressContext.Provider value={{ progress, activity, isLoaded, completeLesson, resetProgress }}>
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

  return getCourses(language).map((course) => {
    // Ignore lessons that no longer exist, so the counts stay within the course.
    const done = (progress[course.id] ?? []).filter((id) => course.lessons.some((lesson) => lesson.id === id));
    return done.length > 0 ? { ...course, completedLessonIds: done, lessonsCompleted: done.length } : course;
  });
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'codementor/daily-goal/v1';

/** Lessons to complete per day. */
export const DAILY_GOALS = [1, 2, 3, 5] as const;
export type DailyGoal = (typeof DAILY_GOALS)[number];

type DailyGoalContextValue = {
  dailyGoal: DailyGoal;
  setDailyGoal: (goal: DailyGoal) => void;
};

const DailyGoalContext = createContext<DailyGoalContextValue | null>(null);

export function DailyGoalProvider({ children }: { children: ReactNode }) {
  const [dailyGoal, setDailyGoalState] = useState<DailyGoal>(1);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        const goal = Number(stored);
        if (DAILY_GOALS.includes(goal as DailyGoal)) {
          setDailyGoalState(goal as DailyGoal);
        }
      })
      .catch((error) => console.warn('Could not load daily goal', error));
  }, []);

  function setDailyGoal(next: DailyGoal) {
    setDailyGoalState(next);
    AsyncStorage.setItem(STORAGE_KEY, String(next)).catch((error) => console.warn('Could not save daily goal', error));
  }

  return <DailyGoalContext.Provider value={{ dailyGoal, setDailyGoal }}>{children}</DailyGoalContext.Provider>;
}

export function useDailyGoal() {
  const context = useContext(DailyGoalContext);
  if (!context) {
    throw new Error('useDailyGoal must be used inside <DailyGoalProvider>');
  }
  return context;
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const STORAGE_KEY = 'codementor/profile/v1';

/** Year of study, displayed through the `years` texts of the current language. */
export const STUDY_YEARS = ['prep', 'year1', 'year2', 'year3', 'year4', 'other'] as const;
export type StudyYear = (typeof STUDY_YEARS)[number];

export const MAX_NAME_LENGTH = 40;

/** Stored on the device only: there is no account yet. */
export type Profile = {
  name: string;
  year: StudyYear;
};

type ProfileContextValue = {
  /** null until the user fills in the welcome screen. */
  profile: Profile | null;
  isLoaded: boolean;
  saveProfile: (profile: Profile) => void;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

function parseProfile(stored: string | null): Profile | null {
  if (!stored) {
    return null;
  }
  const value = JSON.parse(stored) as Partial<Profile>;
  return typeof value.name === 'string' && STUDY_YEARS.includes(value.year as StudyYear)
    ? { name: value.name, year: value.year as StudyYear }
    : null;
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => setProfile(parseProfile(stored)))
      .catch((error) => console.warn('Could not load profile', error))
      .finally(() => setIsLoaded(true));
  }, []);

  function saveProfile(next: Profile) {
    const cleaned = { name: next.name.trim().slice(0, MAX_NAME_LENGTH), year: next.year };
    setProfile(cleaned);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned)).catch((error) =>
      console.warn('Could not save profile', error)
    );
  }

  return <ProfileContext.Provider value={{ profile, isLoaded, saveProfile }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used inside <ProfileProvider>');
  }
  return context;
}

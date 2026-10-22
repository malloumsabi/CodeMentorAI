import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Appearance } from 'react-native';

const STORAGE_KEY = 'codementor/appearance/v1';

export const APPEARANCES = ['system', 'light', 'dark'] as const;
export type AppearancePreference = (typeof APPEARANCES)[number];

type AppearanceContextValue = {
  appearance: AppearancePreference;
  setAppearance: (appearance: AppearancePreference) => void;
};

const AppearanceContext = createContext<AppearanceContextValue | null>(null);

/**
 * Light / dark / follow the system. It overrides React Native's color scheme for the whole app,
 * so every `useColorScheme()` caller (themed components, navigation, native dialogs and keyboard) follows it.
 */
function apply(appearance: AppearancePreference) {
  // react-native-web may not implement the override; the web version then keeps following the browser.
  if (typeof Appearance.setColorScheme === 'function') {
    Appearance.setColorScheme(appearance === 'system' ? 'auto' : appearance);
  }
}

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [appearance, setAppearanceState] = useState<AppearancePreference>('system');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (APPEARANCES.includes(stored as AppearancePreference)) {
          setAppearanceState(stored as AppearancePreference);
          apply(stored as AppearancePreference);
        }
      })
      .catch((error) => console.warn('Could not load appearance', error));
  }, []);

  function setAppearance(next: AppearancePreference) {
    setAppearanceState(next);
    apply(next);
    AsyncStorage.setItem(STORAGE_KEY, next).catch((error) => console.warn('Could not save appearance', error));
  }

  return <AppearanceContext.Provider value={{ appearance, setAppearance }}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const context = useContext(AppearanceContext);
  if (!context) {
    throw new Error('useAppearance must be used inside <AppearanceProvider>');
  }
  return context;
}

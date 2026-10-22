import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocales } from 'expo-localization';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import type { Dictionary } from '@/i18n/fr';
import { DEFAULT_LANGUAGE, getDictionary, isLanguage, type Language } from '@/i18n/languages';

export { LANGUAGE_NAMES, LANGUAGES, type Language } from '@/i18n/languages';

const STORAGE_KEY = 'codementor/language/v1';

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Uses the language the user picked; until they pick one, follows the device language
 * (falling back to English when the device language isn't supported).
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const deviceCode = useLocales()[0]?.languageCode;
  const deviceLanguage = isLanguage(deviceCode) ? deviceCode : DEFAULT_LANGUAGE;
  const [chosenLanguage, setChosenLanguage] = useState<Language | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (isLanguage(stored)) {
          setChosenLanguage(stored);
        }
      })
      .catch((error) => console.warn('Could not load language', error));
  }, []);

  function setLanguage(language: Language) {
    setChosenLanguage(language);
    AsyncStorage.setItem(STORAGE_KEY, language).catch((error) => console.warn('Could not save language', error));
  }

  const language = chosenLanguage ?? deviceLanguage;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: getDictionary(language) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside <I18nProvider>');
  }
  return context;
}

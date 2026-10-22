import { en } from '@/i18n/en';
import { fr, type Dictionary } from '@/i18n/fr';
import { tr } from '@/i18n/tr';

/** Plain data, no React or device APIs: also imported by the server route. */
export const LANGUAGES = ['fr', 'en', 'tr'] as const;
export type Language = (typeof LANGUAGES)[number];

/** Used when the device language isn't supported. */
export const DEFAULT_LANGUAGE: Language = 'en';

/** Each language's name written in that language, for the language picker. */
export const LANGUAGE_NAMES: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  tr: 'Türkçe',
};

const dictionaries: Record<Language, Dictionary> = { fr, en, tr };

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function getDictionary(language: Language): Dictionary {
  return dictionaries[language];
}

/** A text written in every supported language, e.g. a lesson title. */
export type Localized<T = string> = Record<Language, T>;

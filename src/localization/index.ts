import i18n, { type LanguageDetectorModule, type Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import { LANGUAGE_KEY as LANG_KEY } from '../lib/constants';

const resources: Resource = {
  en: { translation: en },
  es: { translation: es },
};

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',

  detect: () => {
    let selected = 'en';
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored) {
        selected = stored;
      } else {
        const locales = navigator.languages ?? [navigator.language];
        const match = locales.find(l =>
          Object.keys(resources).includes(l.split('-')[0]),
        );
        selected = match?.split('-')[0] ?? 'en';
      }
    } catch {
      /* noop */
    }
    return selected;
  },

  init: () => {
    /* no-op */
  },

  cacheUserLanguage: lang => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* noop */
    }
  },
};

void i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init(
    {
      resources,
      fallbackLng: 'en',
      react: { useSuspense: false },
    },
    () => {
      // ready
    },
  );

export default i18n;

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../translations/main-en.json';
import fa from '../translations/main-fa.json';
import { ConvertedToObjectType } from './type';

const translationsJson = {
  fa: {
    translation: fa,
  },
  en: {
    translation: en,
  },
};

export type TranslationResource = typeof fa;
export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToObjectType<TranslationResource> =
  {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */
const convertLanguageJsonToObject = (obj: any, dict: {}, current?: string) => {
  Object.keys(obj).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      // @ts-ignore

      dict[key] = {};
      // @ts-ignore

      convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
    } else {
      // @ts-ignore

      dict[key] = currentLookupKey;
    }
  });
};

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      keySeparator: false,
      resources: translationsJson,
      lng:localStorage.getItem('i18nextLng') || 'fa',
      fallbackLng: 'fa',
      // debug:
      //   process.env.NODE_ENV !== 'production' &&
      //   process.env.NODE_ENV !== 'test',

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    () => {
      // convertLanguageJsonToObject(fa, translations);
    },
  );

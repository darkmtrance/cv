// i18n utility for translations
import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations = {
  es,
  en
};

export function useTranslations(lang: Lang = 'es') {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${lang}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export const languages = {
  es: 'Español',
  en: 'English'
};

export const defaultLang: Lang = 'es';

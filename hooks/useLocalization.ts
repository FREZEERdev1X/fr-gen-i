import { useState, useCallback, useEffect } from 'react';
import type { Language } from '../types';
import { translations } from '../constants';

export const useLocalization = () => {
  const [language, setLanguage] = useState<Language>('en');

  const setLang = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = translations[language];

  return { language, setLanguage: setLang, t };
};

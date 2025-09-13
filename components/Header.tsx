import React from 'react';
import type { Theme, Language } from '../types';
import type { Translations } from '../constants';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import LanguageIcon from './icons/LanguageIcon';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations[keyof Translations];
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, language, setLanguage, t }) => {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  return (
    <header className="py-4 px-6 md:px-8 flex justify-between items-center text-slate-800 dark:text-slate-200">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 dark:from-sky-300 dark:to-blue-500">
        {t.title}
      </h1>
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? t.darkMode : t.lightMode}
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
        <button
          onClick={toggleLanguage}
          aria-label={t.language}
          className="flex items-center gap-2 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <LanguageIcon className="w-5 h-5" />
          <span className="font-semibold text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

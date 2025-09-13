import React from 'react';
import type { Translations } from '../constants';
import Spinner from './Spinner';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  isLoading: boolean;
  handleGenerate: () => void;
  t: Translations[keyof Translations];
}

const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, isLoading, handleGenerate, t }) => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGenerate();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t.placeholder}
          disabled={isLoading}
          rows={3}
          className="w-full p-4 pr-32 rtl:pl-32 rtl:pr-4 text-slate-800 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-400 dark:focus:border-sky-400 transition-all duration-300 resize-none shadow-lg placeholder:text-slate-500 dark:placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt}
          className="absolute top-1/2 -translate-y-1/2 right-3 rtl:left-3 rtl:right-auto h-10 px-4 md:px-6 flex items-center justify-center gap-2 font-semibold text-white bg-sky-500 rounded-lg shadow-md hover:bg-sky-600 active:bg-sky-700 disabled:bg-slate-400 disabled:dark:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 transform"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="hidden md:inline">{t.generating}</span>
            </>
          ) : (
            t.generate
          )}
        </button>
      </div>
    </form>
  );
};

export default PromptForm;

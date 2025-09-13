import React, { useState, useEffect, useCallback } from 'react';
import type { Theme } from './types';
import { useLocalization } from './hooks/useLocalization';
import { generateImagesFromApi } from './services/geminiService';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import ImageGrid from './components/ImageGrid';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const { language, setLanguage, t } = useLocalization();
  const [prompt, setPrompt] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImages([]);
    try {
      const generatedImages = await generateImagesFromApi(prompt);
      setImages(generatedImages);
    } catch (err) {
      setError(t.errorImageGen);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading, t]);

  return (
    <div className="relative min-h-screen w-full font-sans text-slate-800 dark:text-slate-200 transition-colors duration-500 overflow-hidden">
      <Snowfall />
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="w-full max-w-7xl mx-auto p-4 backdrop-blur-sm bg-slate-100/30 dark:bg-slate-900/30 rounded-b-2xl shadow-lg">
          <Header
            theme={theme}
            setTheme={setTheme}
            language={language}
            setLanguage={setLanguage}
            t={t}
          />
        </div>

        <main className="flex-grow flex flex-col gap-8 py-8 md:py-12">
          <PromptForm
            prompt={prompt}
            setPrompt={setPrompt}
            isLoading={isLoading}
            handleGenerate={handleGenerate}
            t={t}
          />
          <div className="flex-grow">
            <ImageGrid
              images={images}
              isLoading={isLoading}
              error={error}
              t={t}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

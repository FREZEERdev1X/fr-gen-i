import React from 'react';
import Spinner from './Spinner';
import type { Translations } from '../constants';

interface ImageGridProps {
  images: string[];
  isLoading: boolean;
  error: string | null;
  t: Translations[keyof Translations];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, isLoading, error, t }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <Spinner />
        <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300 animate-pulse">{t.generating}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500 dark:text-red-400 bg-red-500/10 rounded-lg max-w-2xl mx-auto">
        <h3 className="font-bold text-lg">{t.errorPrefix}</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 dark:text-slate-400">
        <p className="text-xl">{t.initialPrompt}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {images.map((src, index) => (
        <div key={index} className="aspect-square bg-black/20 dark:bg-white/10 rounded-xl overflow-hidden shadow-lg animate-[fade-in_0.5s_ease-in-out] [animation-fill-mode:backwards]" style={{animationDelay: `${index * 100}ms`}}>
          <img
            src={src}
            alt={`Generated image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

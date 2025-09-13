export interface Translations {
  [key: string]: {
    title: string;
    placeholder: string;
    generate: string;
    generating:string;
    lightMode: string;
    darkMode: string;
    language: string;
    initialPrompt: string;
    errorPrefix: string;
    errorImageGen: string;
  };
}

export const translations: Translations = {
  en: {
    title: 'FREZEER i GEN',
    placeholder: 'A polar bear wearing sunglasses on a glacier...',
    generate: 'Generate',
    generating: 'Generating...',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    language: 'Language',
    initialPrompt: 'Your masterpiece awaits the touch of your words.',
    errorPrefix: 'An error occurred',
    errorImageGen: 'Could not generate images. Please try again later.',
  },
  ar: {
    title: 'فريزر آي جين',
    placeholder: 'دب قطبي يرتدي نظارة شمسية على نهر جليدي...',
    generate: 'إنشاء',
    generating: 'جاري الإنشاء...',
    lightMode: 'الوضع الفاتح',
    darkMode: 'الوضع الداكن',
    language: 'اللغة',
    initialPrompt: 'تحفتك الفنية تنتظر لمسة كلماتك.',
    errorPrefix: 'حدث خطأ',
    errorImageGen: 'تعذر إنشاء الصور. يرجى المحاولة مرة أخرى لاحقًا.',
  },
};

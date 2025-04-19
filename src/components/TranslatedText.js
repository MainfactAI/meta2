'use client';

import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations/translations';

// Component to display text in the current language
export default function TranslatedText({ textKey, fallback = '', className = '' }) {
  const { currentLanguage } = useLanguage();
  
  // Get translated text or fallback
  const getText = () => {
    // If translations exist for the current language and the specific key
    if (translations[currentLanguage] && translations[currentLanguage][textKey]) {
      return translations[currentLanguage][textKey];
    }
    
    // If we have a fallback text, use it
    if (fallback) {
      return fallback;
    }
    
    // Return the key itself as last resort
    return textKey;
  };
  
  return <span className={className}>{getText()}</span>;
}

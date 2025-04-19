'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// Define available languages
export const languages = {
  nl: 'Nederlands',
  en: 'English',
  zh: '中文'
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Default to Dutch
  const [currentLanguage, setCurrentLanguage] = useState('nl');
  
  // Load saved language preference from localStorage on client-side
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);
  
  // Change language and save to localStorage
  const changeLanguage = (language) => {
    if (languages[language]) {
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };
  
  // Determine if a language is the current one
  const isCurrentLanguage = (language) => {
    return currentLanguage === language;
  };
  
  // Value object to provide to consumers
  const value = {
    currentLanguage,
    changeLanguage,
    isCurrentLanguage,
    availableLanguages: languages
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

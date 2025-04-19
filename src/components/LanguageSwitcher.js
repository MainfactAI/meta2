'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Get flag icon for each language
  const getLanguageFlag = (language) => {
    switch (language) {
      case 'nl':
        return '🇳🇱';
      case 'en':
        return '🇬🇧';
      case 'zh':
        return '🇨🇳';
      default:
        return '';
    }
  };
  
  // Get current language display
  const getCurrentLanguageDisplay = () => {
    return (
      <div className="flex items-center">
        <span className="mr-2 text-lg">{getLanguageFlag(currentLanguage)}</span>
        <span className="text-sm hidden md:inline">{availableLanguages[currentLanguage]}</span>
      </div>
    );
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-white hover:text-gray-300 transition-colors py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getCurrentLanguageDisplay()}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {Object.keys(availableLanguages).map((language) => (
            <button
              key={language}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${
                currentLanguage === language ? 'bg-gray-50 text-primary-blue font-medium' : 'text-gray-700'
              }`}
              onClick={() => {
                changeLanguage(language);
                setIsOpen(false);
              }}
            >
              <span className="mr-2 text-lg">{getLanguageFlag(language)}</span>
              {availableLanguages[language]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

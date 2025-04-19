import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import TranslatedText from './TranslatedText';

const Header = () => {
  return (
    <header className="w-full text-white shadow-lg sticky top-0 z-50 relative h-20 overflow-visible">
      {/* Achtergrondafbeelding die licht doorschijnt */}
      <div className="absolute inset-0 bg-[url('/world-dots.png')] bg-no-repeat bg-cover opacity-20 z-0"></div>
      
      {/* Gradient overlay voor betere leesbaarheid */}
      <div className="absolute inset-0 bg-primary-blue z-10"></div>
      
      <div className="container mx-auto px-4 py-0 relative z-20 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Lege div voor spacing links */}
          <div className="w-20"></div>
          
          {/* Navigatie centraal */}
          <div className="flex items-center justify-center flex-grow">
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link href="/" className="text-white hover:text-accent-gold transition-colors">
                    <TranslatedText textKey="nav.home" />
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className="text-white hover:text-accent-gold transition-colors">
                    <TranslatedText textKey="nav.about" />
                  </Link>
                </li>
                <li>
                  <Link href="/diensten" className="text-white hover:text-accent-gold transition-colors">
                    <TranslatedText textKey="nav.services" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-accent-gold transition-colors">
                    <TranslatedText textKey="nav.contact" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Rechts: taalwisselaar en CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/contact" className="hidden sm:inline-flex bg-accent-red hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shadow-md">
              <TranslatedText textKey="home.hero.cta" />
            </Link>
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

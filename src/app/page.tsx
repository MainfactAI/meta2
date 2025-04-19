'use client';

import Image from 'next/image';
import Link from 'next/link';
import TranslatedText from '../components/TranslatedText';

// Animatie-eigenschappen
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero sectie */}
      <section className="h-[80vh] min-h-[600px] relative flex items-center justify-center overflow-hidden bg-primary-blue">
        {/* Achtergrondafbeelding met overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-blue opacity-80"></div>
          {/* Achtergrondkleur in plaats van afbeelding */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary-blue opacity-30"></div>
          {/* Logo toevoegen */}
          <div className="absolute top-10 left-10 z-10">
            <Image
              src="/images/meta international.png"
              alt="Meta International Logo"
              width={150}
              height={60}
              priority
            />
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <TranslatedText textKey="home.hero.title" />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            <TranslatedText textKey="home.hero.subtitle" />
          </p>
          
          <div>
            <Link href="/contact" className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center">
              <TranslatedText textKey="home.hero.cta" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Rol-keuze tegels */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            <TranslatedText textKey="home.role.title" />
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            <TranslatedText textKey="home.role.subtitle" />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tegel voor Internationale Kopers */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 h-full">
              <div className="h-56 bg-gradient-to-r from-blue-900 to-primary-blue relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white bg-primary-blue bg-opacity-70 px-6 py-3 rounded-lg shadow-lg">
                    <TranslatedText textKey="home.buyers.tile" />
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    <TranslatedText textKey="home.buyers.headline" />
                  </h4>
                  <p className="text-gray-600 mb-6">
                    <TranslatedText textKey="home.buyers.description" />
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Link href="/klanten" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary-blue bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.clients" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.clients.desc" /></p>
                    </div>
                  </Link>
                  
                  <Link href="/leveranciers" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary-blue bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.suppliers" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.suppliers.desc" /></p>
                    </div>
                  </Link>
                  
                  <Link href="/proces" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary-blue bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.process" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.process.desc" /></p>
                    </div>
                  </Link>
                  
                  <Link href="/diensten/matchmaking" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary-blue bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.matchmaking" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.matchmaking.desc.buyers" /></p>
                    </div>
                  </Link>
                </div>
                
                <Link href="/contact" className="w-full bg-primary-blue hover:bg-blue-800 text-white py-3 rounded-lg shadow font-medium flex items-center justify-center">
                  <TranslatedText textKey="home.buyers.cta" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Tegel voor Chinese Leveranciers */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 h-full">
              <div className="h-56 bg-gradient-to-r from-red-800 to-accent-red relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white bg-accent-red bg-opacity-70 px-6 py-3 rounded-lg shadow-lg">
                    <TranslatedText textKey="home.suppliers.tile" />
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    <TranslatedText textKey="home.suppliers.headline" />
                  </h4>
                  <p className="text-gray-600 mb-6">
                    <TranslatedText textKey="home.suppliers.description" />
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Link href="/diensten/matchmaking" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent-red bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.matchmaking" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.matchmaking.desc.suppliers" /></p>
                    </div>
                  </Link>
                  
                  <Link href="/klanten" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent-red bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.clients" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.clients.desc" /></p>
                    </div>
                  </Link>
                  
                  <Link href="/proces" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent-red bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.process" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.process.desc" /></p>
                    </div>
                  </Link>
                  
                  <Link href="/diensten" className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent-red bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium"><TranslatedText textKey="home.link.services" /></span>
                      <p className="text-xs text-gray-500"><TranslatedText textKey="home.link.services.desc" /></p>
                    </div>
                  </Link>
                </div>
                
                <Link href="/contact" className="w-full bg-accent-red hover:bg-red-700 text-white py-3 rounded-lg shadow font-medium flex items-center justify-center">
                  <TranslatedText textKey="home.suppliers.cta" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoofdsectie diensten illustraties */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Afbeeldingen rij */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/WhatsApp Image 2025-04-19 at 8.36.28 AM.jpeg" 
                  alt="Meta International Service Illustratie 1"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/WhatsApp Image 2025-04-19 at 10.41.00 AM (1).jpeg" 
                  alt="Meta International Service Illustratie 2"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/WhatsApp Image 2025-04-19 at 10.41.00 AM.jpeg" 
                  alt="Meta International Service Illustratie 3"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten sectie */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-blue mb-4">
              <TranslatedText textKey="home.services.title" />
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <TranslatedText textKey="home.services.subtitle" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dienst 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-blue-800 to-primary-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">
                  <TranslatedText textKey="home.services.matchmaking.title" />
                </h3>
                <p className="text-gray-600 mb-4">
                  <TranslatedText textKey="home.services.matchmaking.description" />
                </p>
                <Link href="/diensten" className="text-accent-red hover:text-red-700 font-medium flex items-center">
                  <TranslatedText textKey="home.services.learnMore" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Dienst 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-red-800 to-accent-red flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">
                  <TranslatedText textKey="home.services.quality.title" />
                </h3>
                <p className="text-gray-600 mb-4">
                  <TranslatedText textKey="home.services.quality.description" />
                </p>
                <Link href="/diensten" className="text-accent-red hover:text-red-700 font-medium flex items-center">
                  <TranslatedText textKey="home.services.learnMore" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Dienst 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-yellow-700 to-accent-gold flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">
                  <TranslatedText textKey="home.services.logistics.title" />
                </h3>
                <p className="text-gray-600 mb-4">
                  <TranslatedText textKey="home.services.logistics.description" />
                </p>
                <Link href="/diensten" className="text-accent-red hover:text-red-700 font-medium flex items-center">
                  <TranslatedText textKey="home.services.learnMore" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistieken sectie */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-accent-gold mb-2">30+</p>
              <p className="text-lg text-gray-300">
                <TranslatedText textKey="home.stats.clients" />
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent-gold mb-2">10+</p>
              <p className="text-lg text-gray-300">
                <TranslatedText textKey="home.stats.countries" />
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent-gold mb-2">100+</p>
              <p className="text-lg text-gray-300">
                <TranslatedText textKey="home.stats.suppliers" />
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent-gold mb-2">25%</p>
              <p className="text-lg text-gray-300">
                <TranslatedText textKey="home.stats.savings" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials sectie */}
      <section className="py-20 bg-primary-blue relative overflow-hidden">
        {/* Achtergrondafbeelding met overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-blue opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/world-dots.png')] bg-no-repeat bg-cover opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              <TranslatedText textKey="home.testimonials.title" />
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              <TranslatedText textKey="home.testimonials.subtitle" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "<TranslatedText textKey="home.testimonials.quote1" />"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-primary-blue flex items-center justify-center text-white">
                      {/* Initialen als placeholder voor profielfoto */}
                      <span className="font-bold">JB</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Jan de Vries</h4>
                    <p className="text-gray-500 text-sm">TechGlobal, Nederland</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "<TranslatedText textKey="home.testimonials.quote2" />"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-accent-red flex items-center justify-center text-white">
                      {/* Initialen als placeholder voor profielfoto */}
                      <span className="font-bold">LW</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                    <p className="text-gray-500 text-sm">MediSupply, Verenigde Staten</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">
                  "<TranslatedText textKey="home.testimonials.quote3" />"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-primary-blue flex items-center justify-center text-white">
                      {/* Initialen als placeholder voor profielfoto */}
                      <span className="font-bold">HC</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Marco Rossi</h4>
                    <p className="text-gray-500 text-sm">FashionNow, Italië</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Klanten slider/carrousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <TranslatedText textKey="home.clients.title" />
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Voeg hier een beperkt aantal klantlogo's toe in een horizontale lijst */}
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-32 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/klanten" className="inline-flex items-center text-primary-blue hover:text-accent-red transition-colors font-medium">
              <TranslatedText textKey="home.clients.viewAll" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-action sectie */}
      <section className="py-20 bg-primary-blue relative overflow-hidden">
        {/* Achtergrondpatroon */}
        <div className="absolute inset-0 bg-[url('/world-dots.png')] bg-no-repeat bg-cover opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            <TranslatedText textKey="home.cta.title" />
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-10">
            <TranslatedText textKey="home.cta.subtitle" />
          </p>
          <Link href="/contact" className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center">
            <TranslatedText textKey="home.cta.button" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

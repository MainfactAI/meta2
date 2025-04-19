'use client';

import Link from 'next/link';
import TranslatedText from '../../../components/TranslatedText';

export default function MatchmakingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-blue text-white py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary-blue opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/world-dots.png')] bg-no-repeat bg-cover opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <TranslatedText textKey="services.matchmaking.title" />
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8">
                <TranslatedText textKey="services.matchmaking.subtitle" />
              </p>
              <div className="flex space-x-4">
                <Link href="/contact" className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300">
                  <TranslatedText textKey="contact.cta.button" />
                </Link>
                <Link href="/proces" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-blue text-white font-bold py-3 px-6 rounded-md transition-all duration-300">
                  <TranslatedText textKey="process.link" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-primary-blue mb-8">
                  <TranslatedText textKey="services.matchmaking.gateway" />
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <TranslatedText textKey="services.matchmaking.intro1" />
                  </p>
                  
                  <p className="text-gray-700 mb-10">
                    <TranslatedText textKey="services.matchmaking.intro2" />
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    <TranslatedText textKey="services.matchmaking.approach.title" />
                  </h3>
                  
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-start">
                      <div className="bg-accent-gold text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          <TranslatedText textKey="services.matchmaking.approach.needs.title" />
                        </h4>
                        <p className="text-gray-600">
                          <TranslatedText textKey="services.matchmaking.approach.needs.description" />
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-accent-gold text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          <TranslatedText textKey="services.matchmaking.approach.selection.title" />
                        </h4>
                        <p className="text-gray-600">
                          <TranslatedText textKey="services.matchmaking.approach.selection.description" />
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-accent-gold text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          <TranslatedText textKey="services.matchmaking.approach.introduction.title" />
                        </h4>
                        <p className="text-gray-600">
                          <TranslatedText textKey="services.matchmaking.approach.introduction.description" />
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-accent-gold text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          <TranslatedText textKey="services.matchmaking.approach.negotiation.title" />
                        </h4>
                        <p className="text-gray-600">
                          <TranslatedText textKey="services.matchmaking.approach.negotiation.description" />
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-accent-gold text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          <TranslatedText textKey="services.matchmaking.approach.transparency.title" />
                        </h4>
                        <p className="text-gray-600">
                          <TranslatedText textKey="services.matchmaking.approach.transparency.description" />
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700 mb-8">
                    <TranslatedText textKey="services.matchmaking.conclusion" />
                  </p>
                </div>
                
                <div className="mt-12">
                  <Link href="/contact" className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center">
                    <TranslatedText textKey="services.matchmaking.cta" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 mt-12 lg:mt-0">
                {/* Matchmaking Image */}
                <div className="rounded-xl overflow-hidden shadow-md mb-8">
                  <img 
                    src="/images/matchmaking.jpeg" 
                    alt="Matchmaking Services" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
                  <h3 className="text-xl font-bold text-primary-blue mb-4">
                    <TranslatedText textKey="services.matchmaking.benefits.title" />
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">
                        <TranslatedText textKey="services.matchmaking.benefits.item1" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">
                        <TranslatedText textKey="services.matchmaking.benefits.item2" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">
                        <TranslatedText textKey="services.matchmaking.benefits.item3" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">
                        <TranslatedText textKey="services.matchmaking.benefits.item4" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">
                        <TranslatedText textKey="services.matchmaking.benefits.item5" />
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary-blue rounded-xl overflow-hidden shadow-md">
                  <div className="p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      <TranslatedText textKey="services.matchmaking.related.title" />
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/diensten/qc" className="text-blue-100 hover:text-white flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <TranslatedText textKey="services.qc.title" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/diensten/shipping" className="text-blue-100 hover:text-white flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <TranslatedText textKey="services.shipping.title" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/proces" className="text-blue-100 hover:text-white flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <TranslatedText textKey="process.hero.title" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Chinese Suppliers Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-800 opacity-5"></div>
            <div className="absolute inset-0 bg-[url('/world-dots.png')] bg-no-repeat bg-cover opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block p-2 bg-red-100 text-accent-red rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Voor Chinese Leveranciers: Uw Toegang tot de Wereldmarkt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bent u een Chinese fabrikant of leverancier en wilt u uw producten exporteren naar internationale markten? Wij helpen u om betrouwbare, serieuze buitenlandse kopers te vinden.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Waarom samenwerken met ons?</h3>
                
                <ul className="space-y-5">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Direct contact met internationale kopers</h4>
                      <p className="text-gray-600">Wij beschikken over een uitgebreid netwerk van bedrijven uit Europa, Noord-Amerika en andere regio's die actief op zoek zijn naar kwalitatieve producten uit China.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Professionele begeleiding</h4>
                      <p className="text-gray-600">Ons team ondersteunt u bij alle stappen, van het opstellen van offertes tot het onderhandelen over contracten en het regelen van verzending.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Verhoogde betrouwbaarheid</h4>
                      <p className="text-gray-600">Door onze kwaliteitscontrole en transparante communicatie vergroten wij het vertrouwen van buitenlandse klanten in uw bedrijf.</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Efficiënte processen</h4>
                      <p className="text-gray-600">Met onze ervaring en AI-tools vinden wij snel de juiste match tussen uw aanbod en de vraag uit het Westen.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Right side process */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary-blue mb-6">Hoe werkt het?</h3>
                
                <ol className="relative border-l border-gray-200">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent-gold text-white rounded-full -left-4">1</span>
                    <h4 className="font-bold text-gray-800 mb-1">Aanmelding</h4>
                    <p className="text-gray-600">U meldt uw bedrijf en producten aan bij ons platform.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent-gold text-white rounded-full -left-4">2</span>
                    <h4 className="font-bold text-gray-800 mb-1">Screening</h4>
                    <p className="text-gray-600">Wij controleren uw certificeringen, capaciteit en betrouwbaarheid.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent-gold text-white rounded-full -left-4">3</span>
                    <h4 className="font-bold text-gray-800 mb-1">Matchmaking</h4>
                    <p className="text-gray-600">Wij brengen u in contact met geïnteresseerde buitenlandse kopers.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent-gold text-white rounded-full -left-4">4</span>
                    <h4 className="font-bold text-gray-800 mb-1">Ondersteuning</h4>
                    <p className="text-gray-600">Wij begeleiden het volledige proces, van onderhandelingen tot kwaliteitscontrole en verzending.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-accent-gold text-white rounded-full -left-4">5</span>
                    <h4 className="font-bold text-gray-800 mb-1">Succesvolle samenwerking</h4>
                    <p className="text-gray-600">U levert uw producten aan nieuwe klanten wereldwijd.</p>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                Sluit u aan bij ons netwerk en ontdek de kansen van de internationale markt. Samen bouwen we aan duurzame, winstgevende handelsrelaties!
              </p>
              <Link href="/contact" className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center">
                Neem contact met ons op
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* English Section for Chinese Suppliers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">For Chinese Suppliers: Your Gateway to Global Markets</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Are you a Chinese manufacturer or supplier looking to export your products internationally? We help you connect with reliable, serious foreign buyers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why work with us?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Direct access to international buyers</h4>
                    <p className="text-gray-600">We have an extensive network of companies from Europe, North America, and other regions actively seeking quality products from China.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Professional support</h4>
                    <p className="text-gray-600">Our team assists you in every stage, from preparing quotations to contract negotiations and arranging shipments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Enhanced credibility</h4>
                    <p className="text-gray-600">Our quality control and transparent communication increase foreign customers' trust in your business.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Growth and reputation</h4>
                    <p className="text-gray-600">By working with international partners, you build a strong reputation and expand your market reach.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">How does it work?</h3>
              
              <div className="flex flex-wrap justify-center mb-12">
                <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                  <div className="bg-primary-blue bg-opacity-10 rounded-lg p-6 h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">1</div>
                    <h4 className="font-bold text-gray-800 mb-2">Registration</h4>
                    <p className="text-gray-600 text-sm text-center">Submit your company and products to our platform.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                  <div className="bg-primary-blue bg-opacity-10 rounded-lg p-6 h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">2</div>
                    <h4 className="font-bold text-gray-800 mb-2">Screening</h4>
                    <p className="text-gray-600 text-sm text-center">We verify your certifications, capacity, and reliability.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                  <div className="bg-primary-blue bg-opacity-10 rounded-lg p-6 h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">3</div>
                    <h4 className="font-bold text-gray-800 mb-2">Matchmaking</h4>
                    <p className="text-gray-600 text-sm text-center">We connect you with interested foreign buyers.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                  <div className="bg-primary-blue bg-opacity-10 rounded-lg p-6 h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">4</div>
                    <h4 className="font-bold text-gray-800 mb-2">Support</h4>
                    <p className="text-gray-600 text-sm text-center">We guide you through negotiations, quality control, and shipping.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
                  <div className="bg-primary-blue bg-opacity-10 rounded-lg p-6 h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-4">5</div>
                    <h4 className="font-bold text-gray-800 mb-2">Success</h4>
                    <p className="text-gray-600 text-sm text-center">Deliver your products to new customers worldwide.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
                Join our network and discover the opportunities of the global market. Together, we build sustainable and profitable business relationships!
              </p>
              
              <Link href="/contact" className="bg-primary-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center">
                Contact Us Today
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-primary-blue rounded-xl p-10 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    <TranslatedText textKey="services.matchmaking.cta.title" />
                  </h2>
                  <p className="text-blue-100">
                    <TranslatedText textKey="services.matchmaking.cta.description" />
                  </p>
                </div>
                <div>
                  <Link href="/contact" className="bg-white hover:bg-gray-100 text-primary-blue font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center">
                    <TranslatedText textKey="contact.form.submit" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

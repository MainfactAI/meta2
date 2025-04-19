'use client';

import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="dark-grid text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Over Ons
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meta International verbindt Chinese leveranciers met internationale afnemers door expertise, kwaliteitscontrole en culturele bruggen.
          </p>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ons Verhaal</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Meta International heeft zijn hoofdkantoor in Nederland, met vestigingen in Indonesië, Hong Kong, Brazilië en het vasteland van China. De voorganger van het bedrijf, het Dutch Asian Procurement Center, werd in 1999 opgericht en is sindsdien toegewijd aan het uitvoeren van inkoop- en productdienstactiviteiten in diverse industrieën in Azië voor klanten uit Europa en andere delen van de wereld.
                </p>
                <p className="text-gray-600">
                  Tot onze clientèle behoren gerenommeerde groepen zoals Boal Group, Haba Group, Metazet Group, Horti Innovation en Axia Seeds Group. Door de jaren heen hebben we tientallen ondernemingen en meer dan 200 grootschalige projecten gediend, waarmee we bijna twintig jaar rijke ervaring hebben opgebouwd.
                </p>
                <p className="text-gray-600">
                  Met de voortdurende uitbreiding van onze activiteiten en de behoefte aan integratie van resources, werd besloten om een Chinese entiteit op te richten – Meta Haoyu (Shaanxi) International Trade Limited Company – in de High-tech Zone van Xi'an, provincie Shaanxi. Het nieuwe bedrijf bouwt voort op de zakelijke activiteiten van het Dutch Asian Procurement Center, met specialisatie in aluminium legering die-cast producten en actieve deelname aan verschillende internationale samenwerkingsprojecten.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Onze Missie</h3>
                <p className="text-gray-600 border-l-4 border-primary-blue pl-4 py-2 italic">
                  "Het creëren van naadloze handelsverbindingen tussen China en de wereld door culturele bruggen te bouwen, kwaliteit te waarborgen en langdurige partnerships te cultiveren."
                </p>
                <p className="text-gray-600 mt-4">
                  Wij benutten ten volle de nationale beleidsvoordelen en industriële bronnen om zowel de binnenlandse als internationale markten actief uit te breiden. Onze langdurige en stabiele samenwerkingsrelaties met vele binnenlandse en buitenlandse ondernemingen drijven gezamenlijk de ontwikkeling van internationale handel en diensten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Onze Kernwaarden</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="bg-primary-blue bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integriteit</h3>
              <p className="text-gray-600">
                We handelen altijd eerlijk en transparant in al onze zakelijke relaties, met een compromisloze toewijding aan ethische bedrijfspraktijken.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="bg-accent-red bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovatie</h3>
              <p className="text-gray-600">
                We zoeken voortdurend naar betere, slimmere manieren om de uitdagingen van internationale handel aan te pakken, met AI-gedreven oplossingen en datagestuurde inzichten.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="bg-accent-gold bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Partnerships</h3>
              <p className="text-gray-600">
                We geloven in het opbouwen van langdurige relaties gebaseerd op wederzijds respect, vertrouwen en gedeeld succes, zowel met onze klanten als met onze leveranciers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Onze Geschiedenis</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-blue bg-opacity-20"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* 1999 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary-blue mb-2">1999</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Oprichting Dutch Asian Procurement Center</h4>
                    <p className="text-gray-600">
                      Het Dutch Asian Procurement Center wordt opgericht en start met inkoop- en productdienstactiviteiten in Azië voor Europese klanten.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* 2010 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 flex justify-end md:justify-center order-1 md:order-0">
                  <div className="bg-accent-red rounded-full w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-0 md:order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent-red mb-2">2010</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Internationale Uitbreiding</h4>
                    <p className="text-gray-600">
                      Uitbreiding van activiteiten naar meerdere Aziatische landen en diversificatie van de dienstverlening.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2018 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary-blue mb-2">2018</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Oprichting Meta International</h4>
                    <p className="text-gray-600">
                      Meta International wordt opgericht als volgende stap in de internationalisering van de bedrijfsactiviteiten, voortbouwend op de ervaring van het Dutch Asian Procurement Center.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 flex justify-end md:justify-center order-1 md:order-0">
                  <div className="bg-accent-gold rounded-full w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-0 md:order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-accent-gold mb-2">2020</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Vestiging in Xi'an</h4>
                    <p className="text-gray-600">
                      Oprichting van Meta Haoyu (Shaanxi) International Trade Limited Company in de High-tech Zone van Xi'an, met specialisatie in aluminium legering die-cast producten.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary-blue mb-2">2024</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">200+ Projecten Mijlpaal</h4>
                    <p className="text-gray-600">
                      Bereiken van de mijlpaal van meer dan 200 grootschalige projecten en verdere uitbreiding naar nieuwe markten met behulp van nationale beleidsvoordelen en industriële bronnen.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center">
                  <div className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Certificeringen & Partnerships</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We zijn trots op onze professionele erkenningen en samenwerkingen die onze toewijding aan kwaliteit en excellentie bevestigen.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {/* Certification placeholders */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs flex flex-col items-center">
              <div className="w-24 h-24 overflow-hidden rounded-full mb-4 flex items-center justify-center">
                <img 
                  src="/images/CCPIT1.jpg.crdownload" 
                  alt="CCPIT Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-gray-800">CCPIT</p>
              <p className="text-sm text-gray-600 text-center">China Council for Promotion of International Trade</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs flex flex-col items-center">
              <div className="w-24 h-24 overflow-hidden rounded-full mb-4 flex items-center justify-center">
                <img 
                  src="/images/th (1).jpg" 
                  alt="EU-China Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-gray-800">EU-China Business Association</p>
              <p className="text-sm text-gray-600 text-center">Officieel lid</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs flex flex-col items-center">
              <div className="w-24 h-24 overflow-hidden rounded-full mb-4 flex items-center justify-center">
                <img 
                  src="/images/th (2).jpg" 
                  alt="Dutch Chamber Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-gray-800">Dutch Chamber</p>
              <p className="text-sm text-gray-600 text-center">Nederlands-Chinese Handelskamer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

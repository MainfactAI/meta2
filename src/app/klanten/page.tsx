'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TranslatedText from '../../components/TranslatedText';
import WorldMap from '../../components/WorldMap';

export default function CustomersPage() {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="dark-grid text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              <TranslatedText textKey="customers.hero.title" />
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <TranslatedText textKey="customers.hero.subtitle" />
          </p>
        </div>
      </section>

      {/* Client Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              <TranslatedText textKey="customers.overview.title" />
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Meta International heeft een exclusief klantenportfolio opgebouwd met 17 toonaangevende bedrijven, verspreid over Europa en Noord-Amerika. Onze klanten opereren in diverse industrieën, van hightech elektronicaproductie tot duurzame energieoplossingen en van medische apparatuur tot innovatieve consumentenproducten.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-primary-blue p-4 rounded-r mb-6">
                <h3 className="text-xl font-semibold text-primary-blue mb-2">Geografische spreiding</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">Europa (11 klanten):</span> Nederland, Duitsland, België, Frankrijk, Verenigd Koninkrijk, Zweden</li>
                  <li><span className="font-medium">Noord-Amerika (6 klanten):</span> Verenigde Staten, Canada</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Industriële sectoren</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Elektronica & Technologie</li>
                    <li>Medische apparatuur</li>
                    <li>Industriële machines</li>
                    <li>Duurzame energie</li>
                    <li>Consumentenproducten</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Klantprofielen</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Middelgrote productiebedrijven</li>
                    <li>Innovatieve tech startups</li>
                    <li>Gevestigde industriële spelers</li>
                    <li>Internationale handelsbedrijven</li>
                    <li>Gespecialiseerde nichebedrijven</li>
                  </ul>
                </div>
              </div>
              
              <p className="mb-6">
                In lijn met onze toewijding aan klantvertrouwelijkheid tonen we geen specifieke bedrijfsnamen of logo's. Onze klanten waarderen deze discretie, vooral omdat onze services vaak deel uitmaken van hun strategische supply chain voordeel. Wat we wel kunnen delen zijn de resultaten en succesverhalen die we samen hebben bereikt.
              </p>
              
              <div className="bg-accent-gold bg-opacity-10 p-4 rounded-md mb-6">
                <h3 className="text-lg font-semibold text-accent-gold mb-2">Gemiddelde resultaten voor onze klanten</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-3">
                    <div className="text-2xl font-bold text-primary-blue">22%</div>
                    <div className="text-sm text-gray-600">Kostenbesparing</div>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl font-bold text-primary-blue">35%</div>
                    <div className="text-sm text-gray-600">Kortere time-to-market</div>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl font-bold text-primary-blue">98%</div>
                    <div className="text-sm text-gray-600">QC pass rate</div>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl font-bold text-primary-blue">5+</div>
                    <div className="text-sm text-gray-600">Jaar gemiddelde samenwerking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <TranslatedText textKey="customers.map.title" />
          </h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded overflow-hidden">
              {/* Interactieve wereldkaart met klantenlocaties */}
              <WorldMap />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <TranslatedText textKey="customers.stories.title" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-blue">Metazet</h3>
                  <p className="text-sm text-gray-500">Tuinbouw | Nederland</p>
                </div>
                <div className="w-24 h-16 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/metazet - kopie.jpg" 
                    alt="Metazet logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <blockquote className="border-l-4 border-accent-gold pl-4 py-2 mb-4 italic text-gray-600">
                "Meta International heeft ons geholpen om betrouwbare Chinese fabrikanten te vinden voor onze metaalcomponenten, wat leidde tot significante kostenbesparingen."
              </blockquote>
              
              <p className="text-gray-600">
                Metazet, specialist in innovatieve teeltsystemen en logistieke oplossingen voor de internationale tuinbouwsector, werkt samen met Meta International om hun toeleveringsketen te optimaliseren. Door onze bemiddeling bij de sourcing van metalen componenten uit China heeft Metazet niet alleen hun kosten met 25% verlaagd, maar ook de levertijden met 40% verkort.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-white bg-primary-blue px-2 py-1 rounded">25% kostenbesparing</span>
                <span className="text-xs text-white bg-accent-red px-2 py-1 rounded">40% kortere levertijd</span>
                <span className="text-xs text-white bg-accent-gold px-2 py-1 rounded">Strenge QC</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-blue">Boal Group</h3>
                  <p className="text-sm text-gray-500">Kassenbouw | Nederland</p>
                </div>
                <div className="w-24 h-16 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/boal - kopie.jpg" 
                    alt="Boal Group logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <blockquote className="border-l-4 border-accent-gold pl-4 py-2 mb-4 italic text-gray-600">
                "De expertise van Meta International in het vinden van betrouwbare leveranciers en het beheren van internationale supply chains is onmisbaar gebleken voor onze wereldwijde kasprojecten."
              </blockquote>
              
              <p className="text-gray-600">
                Boal Group, ontwikkelaar en producent van kasconstructies voor telers in meer dan 50 landen, heeft met hulp van Meta International hun toeleveringsnetwerk geoptimaliseerd. Door onze ondersteuning bij het identificeren van gespecialiseerde Chinese leveranciers heeft Boal Group hun productiecapaciteit met 30% kunnen verhogen terwijl ze tegelijkertijd hun duurzaamheidsdoelstellingen hebben kunnen verbeteren.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-white bg-primary-blue px-2 py-1 rounded">30% capaciteitsgroei</span>
                <span className="text-xs text-white bg-accent-red px-2 py-1 rounded">Duurzame toeleveringsketen</span>
                <span className="text-xs text-white bg-accent-gold px-2 py-1 rounded">Wereldwijde projecten</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-blue">Amazon</h3>
                  <p className="text-sm text-gray-500">E-commerce | Verenigde Staten</p>
                </div>
                <div className="w-24 h-16 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/amazon.jpg" 
                    alt="Amazon logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <blockquote className="border-l-4 border-accent-gold pl-4 py-2 mb-4 italic text-gray-600">
                "Meta International's sourcing capabilities and quality control processes have significantly improved our ability to source specialized products from Chinese manufacturers."
              </blockquote>
              
              <p className="text-gray-600">
                Amazon werkt samen met Meta International voor het identificeren en selecteren van betrouwbare Chinese fabrikanten voor specifieke productcategorieën. Onze ondersteuning heeft geleid tot een 35% verbetering in product kwaliteit en een 40% snellere time-to-market voor Amazon's private label producten in diverse categorieën.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-white bg-primary-blue px-2 py-1 rounded">35% kwaliteitsverbetering</span>
                <span className="text-xs text-white bg-accent-red px-2 py-1 rounded">40% snellere marktintroductie</span>
                <span className="text-xs text-white bg-accent-gold px-2 py-1 rounded">Supply chain optimalisatie</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-blue">Bol.com</h3>
                  <p className="text-sm text-gray-500">E-commerce | Nederland</p>
                </div>
                <div className="w-24 h-16 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/bol.jpg" 
                    alt="Bol.com logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <blockquote className="border-l-4 border-accent-gold pl-4 py-2 mb-4 italic text-gray-600">
                "De samenwerking met Meta International heeft ons geholpen om ons assortiment uit te breiden met kwalitatief hoogwaardige producten tegen concurrerende prijzen."
              </blockquote>
              
              <p className="text-gray-600">
                Bol.com, de grootste online retailer in de Benelux, heeft met ondersteuning van Meta International haar assortiment gespecialiseerde producten uitgebreid. We hebben geholpen bij het vinden van betrouwbare Chinese fabrikanten, waardoor Bol.com haar marges met 22% heeft kunnen verbeteren terwijl de productbeschikbaarheid met 45% is gestegen.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-white bg-primary-blue px-2 py-1 rounded">22% margeverbetering</span>
                <span className="text-xs text-white bg-accent-red px-2 py-1 rounded">45% betere beschikbaarheid</span>
                <span className="text-xs text-white bg-accent-gold px-2 py-1 rounded">Assortimentsuitbreiding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <TranslatedText textKey="customers.cta.title" />
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <TranslatedText textKey="customers.cta.subtitle" />
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary-blue hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition-colors"
          >
            <TranslatedText textKey="customers.cta.button" />
          </Link>
        </div>
      </section>
    </div>
  );
}

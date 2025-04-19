'use client';

import { useState } from 'react';
import Link from 'next/link';
import TranslatedText from '../../components/TranslatedText';
import chineseSuppliers from '../../data/chineseSuppliers';

// Unieke industrieën en regio's voor filters
const allIndustries = Array.from(new Set(chineseSuppliers.map(supplier => supplier.industry)));
const allRegions = Array.from(new Set(chineseSuppliers.map(supplier => supplier.region)));

export default function SuppliersPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  // Filter leveranciers op basis van geselecteerde industrie en regio
  const filteredSuppliers = chineseSuppliers.filter(supplier => {
    const matchIndustry = selectedIndustry ? supplier.industry === selectedIndustry : true;
    const matchRegion = selectedRegion ? supplier.region === selectedRegion : true;
    return matchIndustry && matchRegion;
  });

  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20 relative overflow-hidden">
        {/* Achtergrondafbeelding met overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-blue opacity-80"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/images/stock/global-trade.jpg")' }}></div>
          <div className="absolute inset-0 bg-[url('/world-dots.png')] bg-no-repeat bg-cover opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="text-white">
              <TranslatedText textKey="suppliers.hero.title" />
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            <TranslatedText textKey="suppliers.hero.subtitle" />
          </p>
        </div>
      </section>

      {/* Filters and Suppliers Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-4 justify-center">
            <div className="w-full md:w-auto">
              <label htmlFor="industry-filter" className="block text-sm font-medium text-gray-700 mb-1">
                <TranslatedText textKey="suppliers.filter.industry" />
              </label>
              <select
                id="industry-filter"
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                <option value=""><TranslatedText textKey="suppliers.filter.all.industries" /></option>
                {allIndustries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="region-filter" className="block text-sm font-medium text-gray-700 mb-1">
                <TranslatedText textKey="suppliers.filter.region" />
              </label>
              <select
                id="region-filter"
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value=""><TranslatedText textKey="suppliers.filter.all.regions" /></option>
                {allRegions.map((region, index) => (
                  <option key={index} value={region}>{region}</option>
                ))}
              </select>
            </div>
            
            {(selectedIndustry || selectedRegion) && (
              <div className="w-full md:w-auto flex items-end">
                <button
                  onClick={() => {
                    setSelectedIndustry('');
                    setSelectedRegion('');
                  }}
                  className="px-4 py-2 text-sm text-primary-blue border border-primary-blue rounded-md hover:bg-primary-blue hover:text-white transition-colors"
                >
                  <TranslatedText textKey="suppliers.filter.reset" />
                </button>
              </div>
            )}
          </div>
          
          {/* Suppliers grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer card-hover"
                onClick={() => setSelectedSupplier(supplier)}
              >
                <div className="flex flex-col items-center h-full">
                  <div className="bg-gray-100 p-4 rounded-full w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
                    <img 
                      src={supplier.logoUrl} 
                      alt={`${supplier.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{supplier.name}</h3>
                  <div className="text-sm text-gray-600 text-center mb-3">
                    <div className="font-medium">{supplier.industry}</div>
                    <div>{supplier.city}, {supplier.region}</div>
                  </div>
                  <div className="mt-auto w-full">
                    <div className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full mb-2 text-center">
                      <TranslatedText textKey="suppliers.since" /> {supplier.established}
                    </div>
                    <div className="bg-primary-blue bg-opacity-10 text-primary-blue text-xs px-3 py-1 rounded-full text-center truncate">
                      {supplier.specialization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal voor geselecteerde leverancier */}
      {selectedSupplier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedSupplier(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                  <div className="bg-gray-100 p-4 rounded-full w-24 h-24 flex items-center justify-center mb-4 md:mb-0 md:mr-6 overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedSupplier.logoUrl} 
                      alt={`${selectedSupplier.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center md:text-left">{selectedSupplier.name}</h2>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                      <span className="bg-primary-blue text-white text-xs px-3 py-1 rounded-full">
                        {selectedSupplier.industry}
                      </span>
                      <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {selectedSupplier.city}, {selectedSupplier.region}
                      </span>
                      <span className="bg-accent-gold text-white text-xs px-3 py-1 rounded-full">
                        <TranslatedText textKey="suppliers.since" /> {selectedSupplier.established}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4"><TranslatedText textKey="suppliers.specialization" /></h3>
                  <p className="text-gray-600 mb-6">{selectedSupplier.specialization}</p>
                  
                  {selectedSupplier.certifications && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2"><TranslatedText textKey="suppliers.certifications" /></h3>
                      <p className="text-gray-600">{selectedSupplier.certifications}</p>
                    </div>
                  )}
                  
                  {selectedSupplier.experience && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2"><TranslatedText textKey="suppliers.experience" /></h3>
                      <p className="text-gray-600">{selectedSupplier.experience}</p>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4"><TranslatedText textKey="suppliers.about" /></h3>
                  <p className="text-gray-600 mb-6">
                    {selectedSupplier.description || `${selectedSupplier.name} is een gerenommeerde leverancier gevestigd in ${selectedSupplier.city}, ${selectedSupplier.region}. 
                    Sinds de oprichting in ${selectedSupplier.established} zijn zij gespecialiseerd in ${selectedSupplier.specialization.toLowerCase()}. 
                    Met jarenlange ervaring in de ${selectedSupplier.industry.toLowerCase()} industrie, bieden zij hoogwaardige producten en diensten aan klanten wereldwijd.`}
                  </p>
                  
                  <div className="flex justify-end">
                    <Link 
                      href="/contact" 
                      className="bg-accent-red hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition-colors"
                    >
                      <TranslatedText textKey="suppliers.request" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6"><TranslatedText textKey="suppliers.cta.title" /></h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            <TranslatedText textKey="suppliers.cta.subtitle" />
          </p>
          <Link 
            href="/contact" 
            className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center"
          >
            <TranslatedText textKey="suppliers.cta.button" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Voordelen Sectie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12"><TranslatedText textKey="suppliers.benefits.title" /></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-primary-blue bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3"><TranslatedText textKey="suppliers.benefits.quality.title" /></h3>
              <p className="text-gray-600">
                <TranslatedText textKey="suppliers.benefits.quality.description" />
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-accent-red bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3"><TranslatedText textKey="suppliers.benefits.price.title" /></h3>
              <p className="text-gray-600">
                <TranslatedText textKey="suppliers.benefits.price.description" />
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-accent-gold bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3"><TranslatedText textKey="suppliers.benefits.culture.title" /></h3>
              <p className="text-gray-600">
                <TranslatedText textKey="suppliers.benefits.culture.description" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

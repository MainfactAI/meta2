'use client';

import { useState } from 'react';

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "Hoelang duurt het hele proces van eerste contact tot levering?",
      answer: "Het volledige proces duurt gemiddeld 2-4 maanden, afhankelijk van de complexiteit van het product, de benodigde certificeringen en de productiecapaciteit. Tijdens ons eerste gesprek kunnen we u een specifiekere tijdlijn geven op basis van uw behoeften."
    },
    {
      question: "Hoe waarborgen jullie de kwaliteit van de producten?",
      answer: "We werken met een uitgebreid kwaliteitscontrolesysteem dat meerdere inspectiemomenten omvat: bij de eerste stalen, tijdens de productie, vóór verzending en bij ontvangst. Onze QC-specialisten in China voeren fysieke inspecties uit volgens AQL-standaarden en stellen gedetailleerde rapporten op."
    },
    {
      question: "Wat als er een kwaliteitsprobleem wordt ontdekt?",
      answer: "Als er tijdens onze inspecties problemen worden ontdekt, stoppen we het proces onmiddellijk en werken we met de leverancier aan oplossingen voordat de productie wordt voortgezet. Als problemen na verzending worden ontdekt, coördineren we herstelwerkzaamheden, vervanging of terugbetalingen, afhankelijk van de situatie."
    },
    {
      question: "Hoe gaan jullie om met taal- en cultuurverschillen?",
      answer: "Ons team bestaat uit tweetalige professionals die vloeiend Mandarijn en Engels/Nederlands spreken en bekend zijn met zowel Westerse als Chinese zakelijke culturen. Dit stelt ons in staat om effectief te communiceren, misverstanden te voorkomen en een soepel verloop van het proces te garanderen."
    },
    {
      question: "Hoeveel kost jullie service?",
      answer: "Onze tarieven zijn gebaseerd op de specifieke diensten die u nodig heeft en de complexiteit van uw project. We werken met verschillende prijsmodellen, waaronder vaste vergoedingen per project, uurtarieven en resultaatgebaseerde vergoedingen. Neem contact met ons op voor een op maat gemaakte offerte."
    },
    {
      question: "Kunnen jullie ook kleine orders of prototypes verzorgen?",
      answer: "Ja, we werken met fabrikanten die zowel kleine series als grote productievolumes kunnen verzorgen. Voor prototypes en kleine orders hebben we gespecialiseerde partners die flexibel zijn qua minimale afnamehoeveelheden, zodat u kunt testen voordat u opschaalt."
    },
    {
      question: "Wat zijn jullie mogelijkheden voor logistiek en verzending?",
      answer: "We bieden complete logistieke oplossingen, inclusief zeevracht, luchtvracht, spoorvervoer en multimodaal transport. We verzorgen alle douanepapieren, voldoen aan importvereisten en coördineren het transport van fabriek tot uw magazijn, met real-time tracking."
    },
    {
      question: "Wat zijn 'stalen' precies?",
      answer: "Stalen zijn productmonsters (in het Engels: 'samples'). Dit zijn voorbeeldproducten die door de leverancier worden gemaakt om de kwaliteit, functionaliteit en specificaties te kunnen beoordelen voordat er wordt overgegaan tot volledige productie. Het beoordelen van stalen is een cruciale stap in het kwaliteitscontroleproces."
    },
    {
      question: "Hoe werkt jullie AI-gestuurde klantwerving precies?",
      answer: "Onze AI-systemen analyseren wereldwijd marktgegevens om potentiële afnemers te identificeren die specifiek op zoek zijn naar de producten van onze leveranciers. Vervolgens gebruiken we deze inzichten om gerichte marketingcampagnes op te zetten en direct contact te leggen met de meest kansrijke potentiële klanten. Dit verhoogt het conversiepercentage aanzienlijk en verkort de sales-cyclus."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="dark-grid text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Ons Proces
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Een transparant, efficiënt en beproefd proces voor succesvolle internationale handelsrelaties.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">De Weg naar Succesvolle Samenwerking</h2>
          
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>
            
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute top-0 left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">1. Oriëntatiegesprek</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We bespreken uw behoeften, doelen en verwachtingen om een duidelijk beeld te krijgen van uw project.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 1-2 weken
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">2. Strategie & Planning</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We ontwikkelen een op maat gemaakt plan, inclusief leverancierseisen, tijdlijnen en kwaliteitscriteria.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 2-3 weken
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">3. Leveranciersselectie</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We identificeren en evalueren potentiële leveranciers op basis van capaciteit, kwaliteit en betrouwbaarheid.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 3-4 weken
                    </p>
                  </div>
                </div>
                
                {/* Step 4 - NEW AI-Driven Website */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">4. AI-Website Ontwikkeling</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Met AI bouwen we snel representatieve websites voor producenten, specifiek gericht op internationale handel.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 2-3 weken
                    </p>
                  </div>
                </div>
                
                {/* Step 5 - NEW AI Customer Acquisition */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">5. AI-Gestuurde Klantwerving</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Met AI zoeken we wereldwijd gericht naar potentiële klanten voor de producten van de leverancier.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: Doorlopend
                    </p>
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">6. Prototype & Samples</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We laten productmonsters (stalen) produceren en voeren grondige tests uit om te verzekeren dat ze aan uw specificaties voldoen.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 3-5 weken
                    </p>
                  </div>
                </div>
                
                {/* Step 7 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">7. Productie & QC</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We bewaken het productieproces met regelmatige inspecties en kwaliteitscontroles in elke fase.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 4-8 weken
                    </p>
                  </div>
                </div>
                
                {/* Step 8 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">8. Verzending & Levering</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We regelen alle logistiek (via trein, boot of vliegtuig), douaneformaliteiten en verzekeren een soepele levering tot aan uw deur.
                    </p>
                    <p className="text-xs text-gray-500">
                      Tijdsduur: 2-6 weken
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Wat Maakt Ons Proces Uniek</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Data-Gedreven Beslissingen</h3>
              <p className="text-gray-600">
                We gebruiken geavanceerde data-analyse om leveranciersprestaties, markttrends en prijsfluctuaties continu te monitoren, zodat we weloverwogen beslissingen kunnen nemen die uw supply chain optimaliseren.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-accent-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Real-time Transparantie</h3>
              <p className="text-gray-600">
                Via ons online portaal heeft u 24/7 inzicht in de status van uw project, inclusief productievooruitgang, kwaliteitsrapporten, verzendingsupdates en alle relevante documentatie.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-accent-gold bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Toegewijde Teams</h3>
              <p className="text-gray-600">
                Elk project krijgt een toegewijd team van specialisten toegewezen die zowel de technische aspecten van uw producten begrijpen als de culturele nuances van internationale handel, wat zorgt voor naadloze communicatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Veelgestelde Vragen</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className={`w-full text-left p-4 flex justify-between items-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${openFaq === index ? 'rounded-b-none' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFaq === index && (
                  <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Klaar om te beginnen?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Laat ons u helpen bij het optimaliseren van uw internationale handelsstrategie.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="btn-primary px-8 py-3"
            >
              Neem Contact Op
            </a>
            
            <a
              href="/diensten"
              className="btn-accent px-8 py-3"
            >
              Bekijk Onze Diensten
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

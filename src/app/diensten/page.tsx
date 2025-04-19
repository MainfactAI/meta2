'use client';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Services Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-dark text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze Diensten</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Meta International biedt uitgebreide oplossingen voor internationale handel, van leveranciersselectie tot logistiek en kwaliteitscontrole.
            </p>
          </div>
        </section>

        {/* Matchmaking Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Matchmaking tussen leveranciers en kopers</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary-blue text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Vinden van geschikte Chinese fabrikanten</h3>
                      <p className="text-gray-600">Wij helpen westerse bedrijven bij het vinden van de juiste Chinese producenten die aan hun specifieke behoeften voldoen.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Database met betrouwbare leveranciers</h3>
                      <p className="text-gray-600">Toegang tot onze uitgebreide database met geverifieerde en betrouwbare Chinese leveranciers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Verificatie- en screeningproces</h3>
                      <p className="text-gray-600">Grondig screeningproces om de betrouwbaarheid en capaciteiten van potentiële leveranciers te verifiëren.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <img 
                    src="/images/matchmaking.jpeg" 
                    alt="Matchmaking Services" 
                    className="rounded shadow-lg w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Kwaliteitscontrole</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary-blue text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">QC-processen en standaarden</h3>
                      <p className="text-gray-600">Rigoureuze kwaliteitscontroleprocessen volgens internationale standaarden om consistente kwaliteit te garanderen.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Kwaliteitsrapporten</h3>
                      <p className="text-gray-600">Gedetailleerde kwaliteitsrapporten die alle aspecten van de productinspectie documenteren.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Testfaciliteiten en methoden</h3>
                      <p className="text-gray-600">Geavanceerde testfaciliteiten en methodologieën om verschillende aspecten van productkwaliteit te meten.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <img 
                    src="/images/qc1 - kopie.png" 
                    alt="Quality Control Services" 
                    className="rounded shadow-lg w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Services Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meer van onze diensten</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logistics Service */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-blue card-hover">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Logistiek en verzending</h3>
                <p className="text-gray-600 mb-4">Begeleiding van het volledige verzendproces, documentatie en douaneafhandeling, tracking en monitoring systemen.</p>
                <a href="#logistics" className="text-primary-blue font-medium hover:underline">Meer informatie</a>
              </div>
              
              {/* Cost Saving Service */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-blue card-hover">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Kostenbesparing en onderhandeling</h3>
                <p className="text-gray-600 mb-4">Prijsonderhandelingsstrategieën, volumekorting structuren, en kostenefficiënte productiemethoden.</p>
                <a href="#cost-saving" className="text-primary-blue font-medium hover:underline">Meer informatie</a>
              </div>
              
              {/* AI-driven Client Acquisition */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-blue card-hover">
                <h3 className="text-xl font-bold text-gray-800 mb-3">AI-gedreven klantacquisitie</h3>
                <p className="text-gray-600 mb-4">Innovatieve AI-tools voor het vinden van potentiële klanten, succesverhalen van matchmaking, en datagestuurde marktanalyse.</p>
                <a href="#ai-acquisition" className="text-primary-blue font-medium hover:underline">Meer informatie</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Klaar om uw internationale handel te optimaliseren?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een persoonlijk gesprek over hoe Meta International uw bedrijf kan helpen.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary-blue text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Neem contact op
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

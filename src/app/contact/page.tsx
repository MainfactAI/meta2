'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      {/* Hero Section */}
      <section className="dark-grid text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Neem Contact Op
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wij staan klaar om u te helpen met al uw internationale handelsvragen. Vul het formulier in of gebruik een van onze directe contactmethoden.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Stuur ons een bericht</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Bedrijf</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="uw@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="Onderwerp van uw bericht"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="Beschrijf uw vraag of verzoek hier..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="btn-primary"
                  >
                    Verstuur Bericht
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Informatie</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-blue bg-opacity-10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Ons kantoor</h3>
                    <p className="text-gray-600 mt-1">Room 1904, Building 2, Yuexi Square, No. 71 Taibainanlu Road, Yanta District, Xi'an City, Shaanxi Province, China</p>
                  </div>
                </div>
                
                {/* Quick Connect Sectie */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <h3 className="text-lg font-semibold text-primary-blue mb-2">Quick Connect</h3>
                  <p className="text-gray-600 text-sm mb-3">Al onze contactnummers zijn beschikbaar op WhatsApp en WeChat voor uw gemak.</p>
                  
                  <div className="flex space-x-3 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.572-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                        <path d="M20.52 3.449C12.831 3.449 6.75 9.529 6.75 17.22v2.52h2.52c7.689 0 13.77-6.08 13.77-13.77v-2.52h-2.52zm0-2.52h5.04v5.04c0 8.964-7.296 16.259-16.26 16.259h-5.04V17.22c0-8.964 7.296-16.26 16.26-16.26z" fillRule="evenodd" clipRule="evenodd"/>
                      </svg>
                      WhatsApp
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.294.294.294a.327.327 0 00.115-.024l1.57-.826a.564.564 0 01.311-.097.576.576 0 01.14.018 10.786 10.786 0 003.483.577c4.801 0 8.692-3.288 8.692-7.343 0-4.053-3.89-7.341-8.691-7.341zm5.931 10.05l-.232.328s-.36.513-1.045.513c-.27 0-.577-.08-.577-.352 0-.188.126-.27.271-.354.208-.122.5-.283.5-.283s.994-.58 1.185-.785c.083-.09.145-.67.145-.67.145-.184.145-.425 0-.609 0 0-.9-1.174-1.004-1.295-.168-.196-.43-.208-.664-.127l-.36.126c-.56.208-1.89.798-2.601 1.242-.164.101-.295.184-.396.184a.36.36 0 01-.145-.042l-1.788-.886s-.319-.16-.319-.319c0-.145.184-.232.184-.232l.87-.406c.58-.271 1.12-.522 1.571-.709.833-.348 2.156-.753 2.156-.753.257-.085.552-.041.683.274.088.21.656 1.586.853 2.074.196.488.27.853.167 1.213-.104.366-.328.641-.328.641h.001z" />
                      </svg>
                      WeChat
                    </span>
                  </div>
                </div>
                
                {/* Contactpersonen */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Ons Team</h3>
                  
                  {/* Eelco Wolthuizen */}
                  <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col">
                      <h4 className="font-medium text-primary-blue">Eelco Wolthuizen</h4>
                      <a href="mailto:eelcow@gmail.com" className="text-gray-600 hover:text-primary-blue transition-colors text-sm">
                        eelcow@gmail.com
                      </a>
                      <a href="tel:+8618611646128" className="text-gray-600 hover:text-primary-blue transition-colors text-sm">
                        +86 18611646128
                      </a>
                      <div className="flex space-x-2 mt-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.572-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                          </svg>
                          WhatsApp
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.294.294.294a.327.327 0 00.115-.024l1.57-.826a.564.564 0 01.311-.097.576.576 0 01.14.018 10.786 10.786 0 003.483.577c4.801 0 8.692-3.288 8.692-7.343 0-4.053-3.89-7.341-8.691-7.341zm5.931 10.05l-.232.328s-.36.513-1.045.513c-.27 0-.577-.08-.577-.352 0-.188.126-.27.271-.354.208-.122.5-.283.5-.283s.994-.58 1.185-.785c.083-.09.145-.67.145-.67.145-.184.145-.425 0-.609 0 0-.9-1.174-1.004-1.295-.168-.196-.43-.208-.664-.127l-.36.126c-.56.208-1.89.798-2.601 1.242-.164.101-.295.184-.396.184a.36.36 0 01-.145-.042l-1.788-.886s-.319-.16-.319-.319c0-.145.184-.232.184-.232l.87-.406c.58-.271 1.12-.522 1.571-.709.833-.348 2.156-.753 2.156-.753.257-.085.552-.041.683.274.088.21.656 1.586.853 2.074.196.488.27.853.167 1.213-.104.366-.328.641-.328.641h.001z" />
                          </svg>
                          WeChat
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dai Shuangrong */}
                  <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col">
                      <h4 className="font-medium text-primary-blue">Dai Shuangrong</h4>
                      <a href="mailto:daishuangrong84@126.com" className="text-gray-600 hover:text-primary-blue transition-colors text-sm">
                        daishuangrong84@126.com
                      </a>
                      <a href="tel:+8613810157767" className="text-gray-600 hover:text-primary-blue transition-colors text-sm">
                        +86 138 1015 7767
                      </a>
                      <div className="flex space-x-2 mt-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.572-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                          </svg>
                          WhatsApp
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.294.294.294a.327.327 0 00.115-.024l1.57-.826a.564.564 0 01.311-.097.576.576 0 01.14.018 10.786 10.786 0 003.483.577c4.801 0 8.692-3.288 8.692-7.343 0-4.053-3.89-7.341-8.691-7.341zm5.931 10.05l-.232.328s-.36.513-1.045.513c-.27 0-.577-.08-.577-.352 0-.188.126-.27.271-.354.208-.122.5-.283.5-.283s.994-.58 1.185-.785c.083-.09.145-.67.145-.67.145-.184.145-.425 0-.609 0 0-.9-1.174-1.004-1.295-.168-.196-.43-.208-.664-.127l-.36.126c-.56.208-1.89.798-2.601 1.242-.164.101-.295.184-.396.184a.36.36 0 01-.145-.042l-1.788-.886s-.319-.16-.319-.319c0-.145.184-.232.184-.232l.87-.406c.58-.271 1.12-.522 1.571-.709.833-.348 2.156-.753 2.156-.753.257-.085.552-.041.683.274.088.21.656 1.586.853 2.074.196.488.27.853.167 1.213-.104.366-.328.641-.328.641h.001z" />
                          </svg>
                          WeChat
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Wang Linhu */}
                  <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col">
                      <h4 className="font-medium text-primary-blue">Wang Linhu</h4>
                      <a href="mailto:wanglinhu77@126.com" className="text-gray-600 hover:text-primary-blue transition-colors text-sm">
                        wanglinhu77@126.com
                      </a>
                      <a href="tel:+8613891817286" className="text-gray-600 hover:text-primary-blue transition-colors text-sm">
                        +86 138 9181 7286
                      </a>
                      <div className="flex space-x-2 mt-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.572-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                          </svg>
                          WhatsApp
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.294.294.294a.327.327 0 00.115-.024l1.57-.826a.564.564 0 01.311-.097.576.576 0 01.14.018 10.786 10.786 0 003.483.577c4.801 0 8.692-3.288 8.692-7.343 0-4.053-3.89-7.341-8.691-7.341zm5.931 10.05l-.232.328s-.36.513-1.045.513c-.27 0-.577-.08-.577-.352 0-.188.126-.27.271-.354.208-.122.5-.283.5-.283s.994-.58 1.185-.785c.083-.09.145-.67.145-.67.145-.184.145-.425 0-.609 0 0-.9-1.174-1.004-1.295-.168-.196-.43-.208-.664-.127l-.36.126c-.56.208-1.89.798-2.601 1.242-.164.101-.295.184-.396.184a.36.36 0 01-.145-.042l-1.788-.886s-.319-.16-.319-.319c0-.145.184-.232.184-.232l.87-.406c.58-.271 1.12-.522 1.571-.709.833-.348 2.156-.753 2.156-.753.257-.085.552-.041.683.274.088.21.656 1.586.853 2.074.196.488.27.853.167 1.213-.104.366-.328.641-.328.641h.001z" />
                          </svg>
                          WeChat
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue bg-opacity-10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">E-mail</h3>
                    <p className="text-gray-600 mt-1">info@metainternational.com</p>
                    <p className="text-gray-600">support@metainternational.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue bg-opacity-10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Telefoon</h3>
                    <p className="text-gray-600 mt-1">+86 123 4567 8910 (China)</p>
                    <p className="text-gray-600">+31 6 1234 5678 (Nederland)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="logo-container p-4 rounded-lg shadow-md hover:shadow-xl transition-all mx-auto max-w-xs">
                  <img 
                    src="/kogometa2-Photoroom.png" 
                    alt="Meta International Logo" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Onze Locatie</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-96 bg-gray-300 rounded overflow-hidden">
              {/* Placeholder for map - would be replaced with actual map component */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300">
                <p className="text-gray-600 font-medium">Kaart van ons kantoor in Shanghai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

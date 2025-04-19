import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Meta International - Your Bridge Between East and West</title>
        <meta name="description" content="Meta International connects Chinese suppliers with international buyers through quality control, logistics, and procurement services." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Montserrat', 'Noto Sans SC', sans-serif;
            background-color: #f9fafb;
          }
          .chinese-text {
            font-family: 'Noto Sans SC', sans-serif;
          }
          .primary-blue {
            color: #1A365D;
          }
          .bg-primary-blue {
            background-color: #1A365D;
          }
          .accent-red {
            color: #CC0000;
          }
          .bg-accent-red {
            background-color: #CC0000;
          }
          .accent-gold {
            color: #D4AF37;
          }
          .bg-accent-gold {
            background-color: #D4AF37;
          }
          .bg-dark {
            background-color: #111827;
          }
          .gradient-blue {
            background: linear-gradient(135deg, #1A365D 0%, #0F2A4A 100%);
          }
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
          }
          .hero-pattern {
            background-color: #f5f5f5;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A365D' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          .dark-grid {
            background-color: #111827;
            background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A365D' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5v1H0V5z'/%3E%3C/g%3E%3C/svg%3E");
          }

          /* Logo styling and animations */
          .logo-container {
            position: relative;
            overflow: hidden;
            border-radius: 0.375rem;
            transition: all 0.3s ease;
          }
          .logo-container::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(26,54,93,0.1) 0%, rgba(15,42,74,0.3) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .logo-container:hover::after {
            opacity: 1;
          }
          .logo-container img {
            transition: all 0.3s ease;
          }
          .logo-container:hover img {
            transform: scale(1.05);
          }

          /* Smooth page transitions */
          .page-transition {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Enhanced button styling */
          .btn-primary {
            background-color: #1A365D;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: all 0.6s ease;
          }
          .btn-primary:hover::before {
            left: 100%;
          }
          .btn-primary:hover {
            background-color: #0F2A4A;
            box-shadow: 0 4px 12px rgba(26,54,93,0.25);
          }

          .btn-accent {
            background-color: #CC0000;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .btn-accent::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: all 0.6s ease;
          }
          .btn-accent:hover::before {
            left: 100%;
          }
          .btn-accent:hover {
            background-color: #A30000;
            box-shadow: 0 4px 12px rgba(204,0,0,0.25);
          }

          /* Gold accents */
          .gold-border {
            border-color: #D4AF37;
          }
          .gold-text {
            color: #D4AF37;
          }
          .gold-highlight {
            background: linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent);
          }
        `}</style>
      </head>
      <body className="antialiased text-gray-800">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

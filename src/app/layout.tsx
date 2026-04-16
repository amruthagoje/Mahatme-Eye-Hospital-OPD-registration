import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/frontend/components/layout/header';
import { Footer } from '@/frontend/components/layout/footer';
import { Toaster } from '@/frontend/components/ui/toaster';
import { LanguageProvider } from '@/frontend/context/language-context';
import { FirebaseClientProvider } from '@/backend/firebase/client-provider';

export const metadata: Metadata = {
  title: 'Mahatme Eye Hospital - Comprehensive Eye Care',
  description: 'Mahatme Eye Hospital offers expert eye care services, from LASIK and retina surgery to pediatric and cosmetic ophthalmology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <FirebaseClientProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </FirebaseClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

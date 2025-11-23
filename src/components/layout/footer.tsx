
"use client";

import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground">{t('footer.quickLinks.services')}</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground">{t('footer.quickLinks.about')}</Link></li>
              <li><Link href="/register" className="text-muted-foreground hover:text-foreground">{t('footer.quickLinks.bookAppointment')}</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-foreground">{t('footer.quickLinks.faq')}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">{t('footer.contact.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>2163-C, near Rajiv Nagar, Chintaman Nagar, Somalwada, Nagpur, Maharashtra 440025</li>
              <li>+91-712-2289 101 to 106</li>
              <li>manager@mahatmehospital.com</li>
            </ul>
            <div className="flex items-center space-x-4 pt-2">
              <Link href="https://www.facebook.com/mebehnagpur" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href="https://x.com/MahatmeEyeHosp" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href="https://www.instagram.com/mebehnagpur/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

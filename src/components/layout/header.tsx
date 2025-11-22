"use client";

import Link from 'next/link';
import { Menu, Globe, UserPlus, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { useLanguage } from '@/context/language-context';
import { Language } from '@/lib/translations';

export function Header() {
  const { t } = useLanguage();
  const navLinks = [
    { href: '#services', label: t('header.nav.services') },
    { href: '#about', label: t('header.nav.about') },
    { href: '#testimonials', label: t('header.nav.testimonials') },
    { href: '#faq', label: t('header.nav.faq') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/register">
              <UserPlus className="mr-2 h-4 w-4" />
              {t('header.register')}
            </Link>
          </Button>
          <Button variant="accent" asChild>
            <Link href="/register">
                <BookMarked className="mr-2 h-4 w-4" />
                {t('header.bookAppointment')}
            </Link>
          </Button>
        </div>
        <div className="md:hidden">
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <Select defaultValue={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-auto gap-2 border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
        <Globe className="h-4 w-4 text-muted-foreground" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="hi">हिन्दी</SelectItem>
      </SelectContent>
    </Select>
  );
}

function MobileMenu({ navLinks }: { navLinks: {href: string, label: string}[]}) {
  const { t } = useLanguage();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t('header.mobileMenu.open')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="p-4">
          <Logo />
          <nav className="mt-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <Button asChild className="w-full">
              <Link href="/register">
                <UserPlus className="mr-2 h-4 w-4" />
                {t('header.mobileMenu.register')}
              </Link>
            </Button>
            <Button variant="accent" className="w-full" asChild>
              <Link href="/register">
                <BookMarked className="mr-2 h-4 w-4" />
                {t('header.mobileMenu.bookAppointment')}
                </Link>
            </Button>
            <div className="mt-4">
                <LanguageSwitcher />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

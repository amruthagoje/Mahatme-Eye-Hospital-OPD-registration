
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/frontend/components/ui/button';
import { PlaceHolderImages } from '@/shared/lib/placeholder-images';
import { useLanguage } from '@/frontend/context/language-context';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover top-0"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="accent" asChild>
            <Link href="/register">{t('hero.cta.bookAppointment')}</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#services">{t('hero.cta.exploreServices')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

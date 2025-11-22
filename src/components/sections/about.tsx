
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

export function About() {
  const doctorImage = PlaceHolderImages.find(img => img.id === 'doctor-vikas');
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full text-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">{t('about.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.p1')}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.p2')}
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="p-4 max-w-sm w-full shadow-lg text-center">
            <CardContent className="flex flex-col items-center p-0 md:p-2">
              {doctorImage && (
                <Image
                  src={doctorImage.imageUrl}
                  alt={doctorImage.description}
                  width={150}
                  height={150}
                  className="rounded-full mb-4 border-4 border-primary/20"
                  data-ai-hint={doctorImage.imageHint}
                />
              )}
              <h3 className="text-xl font-semibold">{t('about.doctorName')}</h3>
              <p className="text-sm text-primary font-medium">{t('about.doctorTitle')}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t('about.doctorDescription')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

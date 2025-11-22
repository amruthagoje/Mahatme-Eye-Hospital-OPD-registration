
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

export function PopularServices() {
  const { t } = useLanguage();

  const popularServicesList = [
    {
      id: 'glaucoma',
      title: t('popularServices.list.glaucoma.title'),
    },
    {
      id: 'cornea',
      title: t('popularServices.list.cornea.title'),
    },
    {
      id: 'retina-surgery',
      title: t('popularServices.list.retina-surgery.title'),
    },
    {
      id: 'diabetic-retinopathy',
      title: t('popularServices.list.diabetic-retinopathy.title'),
    },
    {
      id: 'cataract-surgery',
      title: t('popularServices.list.cataract-surgery.title'),
    },
    {
      id: 'lasik',
      title: t('popularServices.list.lasik.title'),
    },
    {
      id: 'squint-eyes',
      title: t('popularServices.list.squint-eyes.title'),
    },
  ];

  return (
    <section id="popular-services" className="w-full text-center">
      <h2 className="text-3xl font-bold font-headline">{t('popularServices.title')}</h2>
      <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
        {t('popularServices.subtitle')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularServicesList.map((service) => {
          const image = PlaceHolderImages.find(img => img.id === service.id);
          return (
            <Card key={service.id} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="object-cover aspect-video w-full"
                        data-ai-hint={image.imageHint}
                    />
                )}
                <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
            </Card>
          );
        })}
        <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-primary/10 border-primary/20 flex flex-col justify-center">
          <CardHeader>
            <CardTitle>{t('services.andMore.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('services.andMore.description')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

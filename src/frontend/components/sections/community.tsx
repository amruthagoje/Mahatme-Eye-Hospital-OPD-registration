"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/frontend/components/ui/card';
import { PlaceHolderImages } from '@/shared/lib/placeholder-images';
import { Award, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/frontend/context/language-context';

export function Community() {
  const awardImage = PlaceHolderImages.find(img => img.id === 'award-1');
  const communityImage = PlaceHolderImages.find(img => img.id === 'community-event');
  const { t } = useLanguage();

  return (
    <section id="community" className="w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">{t('community.title')}</h2>
        <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
          {t('community.subtitle')}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex-row items-center gap-4">
            <Award className="w-8 h-8 text-primary"/>
            <CardTitle>{t('community.accoladesTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {awardImage && (
              <Image
                src={awardImage.imageUrl}
                alt={awardImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover aspect-[4/3]"
                data-ai-hint={awardImage.imageHint}
              />
            )}
            <p className="text-muted-foreground">{t('community.accoladesDescription')}</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex-row items-center gap-4">
            <HeartHandshake className="w-8 h-8 text-primary"/>
            <CardTitle>{t('community.socialContributionsTitle')}</CardTitle>          </CardHeader>
          <CardContent className="space-y-4">
            {communityImage && (
              <Image
                src={communityImage.imageUrl}
                alt={communityImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover aspect-[4/3]"
                data-ai-hint={communityImage.imageHint}
              />
            )}
            <p className="text-muted-foreground">{t('community.socialContributionsDescription')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

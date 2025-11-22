"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

const testimonialIds = ['testimonial-1', 'testimonial-2', 'testimonial-3'];

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 'testimonial-1',
      name: t('testimonials.list.t1.name'),
      comment: t('testimonials.list.t1.comment'),
    },
    {
      id: 'testimonial-2',
      name: t('testimonials.list.t2.name'),
      comment: t('testimonials.list.t2.comment'),
    },
    {
      id: 'testimonial-3',
      name: t('testimonials.list.t3.name'),
      comment: t('testimonials.list.t3.comment'),
    },
  ];

  return (
    <section id="testimonials" className="w-full text-center">
      <h2 className="text-3xl font-bold font-headline">{t('testimonials.title')}</h2>
      <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
        {t('testimonials.subtitle')}
      </p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-center justify-center text-center p-6 space-y-4 flex-grow">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={`${t('testimonials.patientAltText')} ${testimonial.name}`}
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-secondary"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <p className="text-muted-foreground text-sm italic">"{testimonial.comment}"</p>
                      <p className="font-semibold text-foreground pt-2">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

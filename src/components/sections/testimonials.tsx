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

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Anjali Sharma',
    comment: "The care I received at Clarity Vision was exceptional. The doctors are not only skilled but also incredibly compassionate. My LASIK surgery was a breeze!",
  },
  {
    id: 'testimonial-2',
    name: 'Rohan Verma',
    comment: "I was nervous about my son's eye surgery, but the pediatric team was amazing. They made us feel comfortable and confident. Highly recommended.",
  },
  {
    id: 'testimonial-3',
    name: 'Priya Singh',
    comment: "A truly world-class hospital. From the front desk to the surgical team, everyone was professional and caring. My vision has never been better.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full text-center">
      <h2 className="text-3xl font-bold font-headline">What Our Patients Say</h2>
      <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
        Real stories from people whose lives we've changed.
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
                          alt={`Patient ${testimonial.name}`}
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

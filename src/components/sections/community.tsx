import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, HeartHandshake } from 'lucide-react';

export function Community() {
  const awardImage = PlaceHolderImages.find(img => img.id === 'award-1');
  const communityImage = PlaceHolderImages.find(img => img.id === 'community-event');

  return (
    <section id="community" className="w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">Awards & Community Work</h2>
        <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
          Recognized for excellence and committed to serving society.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex-row items-center gap-4">
            <Award className="w-8 h-8 text-primary"/>
            <CardTitle>Our Accolades</CardTitle>
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
            <p className="text-muted-foreground">Mahatme Eye Hospital is proud to be recognized with the National Award for Excellence in Healthcare for our pioneering work in ophthalmology and our unwavering commitment to quality patient care.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex-row items-center gap-4">
            <HeartHandshake className="w-8 h-8 text-primary"/>
            <CardTitle>Social Contributions</CardTitle>          </CardHeader>
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
            <p className="text-muted-foreground">Through our 'Vision for All' initiative, we conduct free eye-checkup camps in rural areas, providing free surgeries and glasses to thousands in need every year.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

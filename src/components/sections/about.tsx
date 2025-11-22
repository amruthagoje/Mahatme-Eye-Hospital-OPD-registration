import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const doctorImage = PlaceHolderImages.find(img => img.id === 'doctor-vikas');

  return (
    <section id="about" className="w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">About Clarity Vision</h2>
          <p className="text-muted-foreground">
            Founded on the principles of integrity, innovation, and compassion, Clarity Vision has been a beacon of hope for patients for over two decades. Our journey began with a simple mission: to provide world-class eye care that is both accessible and affordable.
          </p>
          <p className="text-muted-foreground">
            From a humble beginning, we have grown into a leading institution, equipped with state-of-the-art technology and a team of dedicated professionals who are leaders in their respective fields.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="p-4 max-w-sm w-full shadow-lg">
            <CardContent className="flex flex-col items-center text-center p-0 md:p-2">
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
              <h3 className="text-xl font-semibold">Dr. Vikas Mahatme</h3>
              <p className="text-sm text-primary font-medium">Founder & Chief Surgeon</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A visionary leader and a renowned ophthalmologist, Dr. Mahatme's work has been instrumental in shaping the landscape of eye care in the region. His dedication to patient welfare and community service is the cornerstone of our institution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

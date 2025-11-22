import { Eye, Rocket, Baby, Sparkles, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const servicesList = [
  {
    icon: Rocket,
    title: 'LASIK & Refractive Surgery',
    description: 'Experience life without glasses. Our advanced laser vision correction procedures are safe, quick, and effective.',
  },
  {
    icon: Eye,
    title: 'Retina & Vitreous Surgery',
    description: 'Expert care for complex retinal conditions, including diabetic retinopathy, macular degeneration, and retinal detachments.',
  },
  {
    icon: Baby,
    title: 'Pediatric Ophthalmology',
    description: 'Gentle and specialized eye care for our youngest patients, from routine exams to complex surgical procedures.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Ophthalmology',
    description: 'Enhance your natural beauty with our range of cosmetic eye procedures, performed by skilled surgeons.',
  },
  {
    icon: Users,
    title: 'Community Ophthalmology',
    description: 'We are committed to serving the community through outreach programs, eye camps, and affordable care for all.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full text-center">
      <h2 className="text-3xl font-bold font-headline">Our Expert Services</h2>
      <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
        Comprehensive eye care solutions tailored to your individual needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <Card key={index} className="text-left hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="text-left hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1 bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle>And Many More...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We offer a full spectrum of eye care services. Contact us to learn more about how we can help you.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Community } from '@/components/sections/community';
import { Faq } from '@/components/sections/faq';
import { Separator } from '@/components/ui/separator';
import { PopularServices } from '@/components/sections/popular-services';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container space-y-24 py-24">
        <Services />
        <Separator />
        <PopularServices />
        <Separator />
        <About />
        <Separator />
        <Testimonials />
        <Separator />
        <Community />
        <Separator />
        <Faq />
      </div>
    </div>
  );
}

import { Hero } from '@/frontend/components/sections/hero';
import { Services } from '@/frontend/components/sections/services';
import { About } from '@/frontend/components/sections/about';
import { Testimonials } from '@/frontend/components/sections/testimonials';
import { Community } from '@/frontend/components/sections/community';
import { Faq } from '@/frontend/components/sections/faq';
import { Separator } from '@/frontend/components/ui/separator';
import { PopularServices } from '@/frontend/components/sections/popular-services';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container space-y-16 py-16 sm:space-y-24 sm:py-24 text-center">
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

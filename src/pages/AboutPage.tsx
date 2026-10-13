import { PageHero } from '@/components/ui/PageHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Travel with confidence — your journey is our responsibility."
        image={IMAGES.about}
        breadcrumb="About Us"
      />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

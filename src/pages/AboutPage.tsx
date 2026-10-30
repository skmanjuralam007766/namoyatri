import { PageHero } from '@/components/ui/PageHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';
import { SEO } from '@/components/SEO';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Namo Yatri | Our Travel Services"
        description="Learn about Namo Yatri and our focus on comfortable, reliable road travel, experienced drivers and memorable journeys across India."
        path="/about"
      />
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

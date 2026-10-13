import { PageHero } from '@/components/ui/PageHero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TravelJourney } from '@/components/sections/TravelJourney';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From a quick city ride to a complete Himalayan journey."
        image={IMAGES.finalCta}
        breadcrumb="Services"
      />
      <Services />
      <TravelJourney />
      <WhyChooseUs />
      <BookingForm />
      <FinalCTA />
    </>
  );
}

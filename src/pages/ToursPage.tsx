import { PageHero } from '@/components/ui/PageHero';
import { TourPackages } from '@/components/sections/TourPackages';
import { TravelStory } from '@/components/sections/TravelStory';
import { Testimonials } from '@/components/sections/Testimonials';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';
import { SEO } from '@/components/SEO';

export function ToursPage() {
  return (
    <>
      <SEO
        title="Tour Packages | Namo Yatri"
        description="Discover memorable tour packages across India, from mountain escapes and spiritual destinations to cultural city trips with Namo Yatri."
        path="/tours"
      />
      <PageHero
        title="Tour Packages"
        subtitle="Discover unforgettable journeys through mountains, spiritual destinations and beautiful cities."
        image={IMAGES.story}
        breadcrumb="Tour Packages"
      />
      <TourPackages />
      <TravelStory />
      <Testimonials />
      <BookingForm />
      <FinalCTA />
    </>
  );
}

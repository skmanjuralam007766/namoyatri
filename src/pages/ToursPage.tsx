import { PageHero } from '@/components/ui/PageHero';
import { TourPackages } from '@/components/sections/TourPackages';
import { TravelStory } from '@/components/sections/TravelStory';
import { Testimonials } from '@/components/sections/Testimonials';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';

export function ToursPage() {
  return (
    <>
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

import { PageHero } from '@/components/ui/PageHero';
import { Vehicles } from '@/components/sections/Vehicles';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';
import { SEO } from '@/components/SEO';

export function CarsPage() {
  return (
    <>
      <SEO
        title="Car Rental & Taxi Services | Namo Yatri"
        description="Explore comfortable car rentals and reliable taxi services for local travel and outstation journeys with Namo Yatri."
        path="/cars"
      />
      <PageHero
        title="Our Vehicles"
        subtitle="Comfortable and reliable vehicles for every journey across India."
        image={IMAGES.hero}
        breadcrumb="Cars"
      />
      <Vehicles />
      <WhyChooseUs />
      <BookingForm />
      <FinalCTA />
    </>
  );
}

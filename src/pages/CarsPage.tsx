import { PageHero } from '@/components/ui/PageHero';
import { Vehicles } from '@/components/sections/Vehicles';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';

export function CarsPage() {
  return (
    <>
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

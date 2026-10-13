import { PageHero } from '@/components/ui/PageHero';
import { CharDhamSection } from '@/components/sections/CharDhamSection';
import { TourPackages } from '@/components/sections/TourPackages';
import { Testimonials } from '@/components/sections/Testimonials';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';

export function YatraPage() {
  return (
    <>
      <PageHero
        title="Yatra & Pilgrimage"
        subtitle="Begin a spiritual journey through the sacred Himalayas."
        image={IMAGES.charDham}
        breadcrumb="Yatra"
      />
      <CharDhamSection />
      <TourPackages />
      <Testimonials />
      <BookingForm />
      <FinalCTA />
    </>
  );
}

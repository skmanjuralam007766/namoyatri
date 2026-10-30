import { PageHero } from '@/components/ui/PageHero';
import { CharDhamSection } from '@/components/sections/CharDhamSection';
import { TourPackages } from '@/components/sections/TourPackages';
import { Testimonials } from '@/components/sections/Testimonials';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { IMAGES } from '@/data/content';
import { SEO } from '@/components/SEO';

export function YatraPage() {
  return (
    <>
      <SEO
        title="Yatra & Pilgrimage Tours | Namo Yatri"
        description="Plan a comfortable pilgrimage with Namo Yatri, including Char Dham and sacred Himalayan yatra tours with experienced drivers."
        path="/yatra"
      />
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

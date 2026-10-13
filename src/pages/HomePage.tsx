import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Vehicles } from '@/components/sections/Vehicles';
import { TourPackages } from '@/components/sections/TourPackages';
import { CharDhamSection } from '@/components/sections/CharDhamSection';
import { TravelJourney } from '@/components/sections/TravelJourney';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TravelStory } from '@/components/sections/TravelStory';
import { Testimonials } from '@/components/sections/Testimonials';
import { AboutSection } from '@/components/sections/AboutSection';
import { BookingForm } from '@/components/sections/BookingForm';
import { FinalCTA } from '@/components/sections/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Vehicles />
      <TourPackages />
      <CharDhamSection />
      <TravelJourney />
      <WhyChooseUs />
      <TravelStory />
      <Testimonials />
      <AboutSection />
      <BookingForm />
      <FinalCTA />
    </>
  );
}

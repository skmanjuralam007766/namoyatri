import { PageHero } from '@/components/ui/PageHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { BookingForm } from '@/components/sections/BookingForm';
import { IMAGES } from '@/data/content';
import { SEO } from '@/components/SEO';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Namo Yatri | Book Your Journey"
        description="Contact Namo Yatri to plan a taxi ride, car rental, outstation trip or holiday journey across India."
        path="/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Let's plan your journey together."
        image={IMAGES.intro.mountain2}
        breadcrumb="Contact"
      />
      <ContactSection />
      <BookingForm />
    </>
  );
}

import { PageHero } from '@/components/ui/PageHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { BookingForm } from '@/components/sections/BookingForm';
import { IMAGES } from '@/data/content';

export function ContactPage() {
  return (
    <>
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

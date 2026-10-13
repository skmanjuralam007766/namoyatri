import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, CalendarCheck, X } from 'lucide-react';
import { DESTINATIONS, type Destination } from '@/data/content';
import { StaggerGroup, StaggerItem } from '@/components/ui/Motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TourPackages() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Explore India With Us"
          subtitle="Discover unforgettable journeys through mountains, spiritual destinations and beautiful cities."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <StaggerItem key={dest.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
                >
                {/* Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent group-hover:from-navy/95 transition-all duration-300" />

                {/* Top badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur text-xs font-heading font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {dest.days}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-1.5 text-gold text-xs font-heading font-semibold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {dest.location}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-4 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500">
                    {dest.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedDestination(dest)}
                    className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-white group-hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
                  >
                    Explore Package
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
                </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close package details"
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setSelectedDestination(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="package-title"
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <div className="relative h-56">
                <img src={selectedDestination.image} alt={selectedDestination.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedDestination(null)}
                  aria-label="Close package details"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary-800 hover:bg-white"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 id="package-title" className="absolute bottom-5 left-6 font-heading text-3xl font-bold text-white">
                  {selectedDestination.name}
                </h2>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap gap-4 text-sm font-medium text-primary-600">
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />{selectedDestination.location}</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />{selectedDestination.days}</span>
                </div>
                <p className="leading-relaxed text-primary-600">{selectedDestination.description}</p>
                <Link
                  to="/contact#booking"
                  onClick={() => setSelectedDestination(null)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-heading font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Book This Package
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

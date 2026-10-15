import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Snowflake, Briefcase, UserCheck, IndianRupee,
  Eye, X, CalendarCheck, type LucideIcon,
} from 'lucide-react';
import { VEHICLES, type Vehicle } from '@/data/content';
import { StaggerGroup, StaggerItem } from '@/components/ui/Motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function VehicleCard({ vehicle, onView }: { vehicle: Vehicle; onView: (v: Vehicle) => void }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/15 transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-cream-mist">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-heading font-bold text-accent uppercase tracking-wide">
          {vehicle.seats.split(' ')[0]} Seater
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-primary-800 mb-3">
          {vehicle.name}
        </h3>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2 text-sm text-primary-600">
            <Users className="w-4 h-4 text-accent" />
            {vehicle.seats}
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-600">
            <Snowflake className="w-4 h-4 text-accent" />
            AC
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-600">
            <Briefcase className="w-4 h-4 text-accent" />
            {vehicle.luggage}
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-600">
            <UserCheck className="w-4 h-4 text-accent" />
            Driver
          </div>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="block text-xs text-primary-500 uppercase tracking-wider">Starting from</span>
            <span className="font-heading text-2xl font-bold text-primary-800">
              ₹{vehicle.price.toLocaleString('en-IN')}
              <span className="text-sm font-normal text-primary-500">/day</span>
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => onView(vehicle)}
            className="flex-1 px-4 py-3 border-2 border-primary/15 text-primary-700 font-heading font-semibold uppercase text-xs tracking-wide rounded-lg hover:border-primary/30 hover:bg-primary-50 transition-all"
          >
            View Details
          </button>
          <button
            onClick={() => onView(vehicle)}
            className="flex-1 px-4 py-3 bg-accent text-white font-heading font-semibold uppercase text-xs tracking-wide rounded-lg hover:bg-accent-dark shadow-md shadow-accent/20 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const DETAIL_ICONS: Record<string, LucideIcon> = {
  Users, Snowflake, Briefcase, UserCheck,
};

export function Vehicles() {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <section id="vehicles" className="py-20 sm:py-28 bg-cream-mist scroll-mt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Choose Your Perfect Ride"
          subtitle="Comfortable and reliable vehicles for every journey."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {VEHICLES.map((vehicle) => (
            <StaggerItem key={vehicle.id}>
              <VehicleCard vehicle={vehicle} onView={setSelected} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Vehicle Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Image header */}
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary-800 hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <h2 className="font-heading text-3xl font-bold text-white text-shadow-md">
                    {selected.name}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: 'Users', label: 'Seating', value: selected.seats },
                    { icon: 'Snowflake', label: 'AC', value: 'Yes' },
                    { icon: 'Briefcase', label: 'Luggage', value: selected.luggage },
                    { icon: 'UserCheck', label: 'Driver', value: 'Included' },
                  ].map((item) => {
                    const Icon = DETAIL_ICONS[item.icon] ?? Users;
                    return (
                      <div key={item.label} className="flex flex-col items-center text-center p-3 rounded-lg bg-cream-mist">
                        <Icon className="w-5 h-5 text-accent mb-2" />
                        <span className="text-xs text-primary-500 uppercase tracking-wider">{item.label}</span>
                        <span className="text-sm font-heading font-semibold text-primary-800">{item.value}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-primary-600 leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="flex items-center justify-between p-5 bg-cream rounded-xl mb-6">
                  <div>
                    <span className="block text-xs text-primary-500 uppercase tracking-wider">Starting from</span>
                    <span className="font-heading text-3xl font-bold text-primary-800">
                      ₹{selected.price.toLocaleString('en-IN')}
                      <span className="text-base font-normal text-primary-500">/day</span>
                    </span>
                  </div>
                  <IndianRupee className="w-10 h-10 text-accent/30" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact#booking"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-lg shadow-accent/30 transition-all"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Book This Vehicle
                  </Link>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => setSelected(null)}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search, ArrowRight, Star, CalendarCheck } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { ButtonLink } from '@/components/ui/Button';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Hero() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const [searchResult, setSearchResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResult(true);
    const vehiclesSection = document.getElementById('vehicles');
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-170 flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? {} : { scale: 1.1 }}
        animate={prefersReducedMotion ? {} : { scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <img
          src={IMAGES.hero}
          alt="Cinematic Himalayan mountain road with a tourist car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </motion.div>

      {/* Floating particles */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 2 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-white/90 text-sm font-heading font-medium tracking-wide">
              Trusted by 10,000+ Happy Travellers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white text-shadow-lg leading-[1.05]"
          >
            YOUR JOURNEY,
            <br />
            <span className="text-accent">OUR RESPONSIBILITY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed"
          >
            Comfortable cars. Experienced drivers.
            <br />
            Memorable journeys across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <ButtonLink to="/contact" size="lg">
              <CalendarCheck className="w-5 h-5" />
              Book Your Journey
            </ButtonLink>
            <ButtonLink to="/tours" variant="outline" size="lg">
              Explore Tours
              <ArrowRight className="w-5 h-5" />
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      {/* Floating booking search card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-20 w-[95%] max-w-7xl mx-auto mt-8 mb-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl shadow-navy/30 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-800 uppercase tracking-wide">
              Plan Your Journey
            </h3>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="e.g. Haridwar"
                  className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Kedarnath"
                  className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select</option>
                  <option value="1-4">1-4 People</option>
                  <option value="5-7">5-7 People</option>
                  <option value="8-12">8-12 People</option>
                  <option value="13+">13+ People</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </form>

          {searchResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-3 bg-accent/10 rounded-lg text-sm text-primary-700 text-center"
            >
              Great! We've found vehicles matching your route. Scroll down to explore available options.
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

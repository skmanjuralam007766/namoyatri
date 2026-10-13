import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { Reveal } from '@/components/ui/Motion';

export function TravelStory() {
  return (
    <section className="relative h-[80vh] min-h-150 flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={IMAGES.story}
          alt="Cinematic mountain landscape with road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/85 via-navy/60 to-navy/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white text-shadow-lg leading-tight">
              MORE THAN A JOURNEY.
              <br />
              <span className="text-accent">IT'S AN EXPERIENCE.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              From winding Himalayan roads to sacred destinations, we make every journey
              comfortable, safe and memorable.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              to="/tours"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-xl shadow-accent/30 transition-all duration-300 hover:scale-[1.03]"
            >
              Explore Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarCheck, Phone, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { Reveal } from '@/components/ui/Motion';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function FinalCTA() {
  return (
    <section className="relative h-[70vh] min-h-125 flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={prefersReducedMotion ? {} : { scale: 1.1 }}
        whileInView={prefersReducedMotion ? {} : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={IMAGES.finalCta}
          alt="Mountain road with a travelling car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white text-shadow-lg leading-tight">
            READY FOR YOUR
            <br />
            <span className="text-accent">NEXT JOURNEY?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
            Wherever the road takes you, we'll help you travel comfortably.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-2xl shadow-accent/40 transition-all duration-300 hover:scale-[1.03]"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Your Journey
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-9 py-4 border-2 border-white/40 text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-white hover:text-primary-800 backdrop-blur-sm transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

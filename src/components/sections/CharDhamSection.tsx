import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, ArrowRight } from 'lucide-react';
import { IMAGES, DESTINATIONS } from '@/data/content';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Motion';

const DHAMS = ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'];

export function CharDhamSection() {
  const dhamData = DHAMS.map((name) =>
    DESTINATIONS.find((d) => d.name === name)!
  );

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.charDham}
          alt="Himalayan landscape for Char Dham Yatra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-section-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Sacred Journey
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow-md mb-4">
              CHAR DHAM YATRA
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-white/80">
              Begin a spiritual journey through the sacred Himalayas.
            </p>
          </Reveal>
        </div>

        {/* Journey path with 4 dhams */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dhamData.map((dham, i) => (
            <StaggerItem key={dham.id}>
              <div className="relative group">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 z-10 w-10 h-10 rounded-full bg-gold text-navy font-heading font-bold text-lg flex items-center justify-center shadow-lg">
                  {i + 1}
                </div>

                {/* Connecting arrow (except after last) */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 z-10 w-10 h-10 items-center justify-center">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 text-gold" />
                    </motion.div>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={dham.image}
                      alt={dham.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
                  </div>
                  <div className="p-5 text-center">
                    <Mountain className="w-5 h-5 text-gold mx-auto mb-2" />
                    <h3 className="font-heading text-xl font-bold text-white">
                      {dham.name}
                    </h3>
                    <p className="text-sm text-white/60 mt-1">{dham.location}</p>
                  </div>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* CTA */}
        <Reveal className="text-center" delay={0.2}>
          <Link
            to="/yatra"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-navy font-heading font-bold uppercase tracking-wide text-sm rounded-lg hover:bg-gold-light shadow-2xl shadow-gold/30 transition-all duration-300 hover:scale-[1.03]"
          >
            Plan Your Yatra
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

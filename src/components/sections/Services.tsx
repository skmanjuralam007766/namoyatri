import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car, UserCog, Bus, ArrowRightLeft, RefreshCw, MapPin, Mountain, Hotel,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/data/content';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/ui/Motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  Car, UserCog, Bus, ArrowRightLeft, RefreshCw, MapPin, Mountain, Hotel,
};

export function Services() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Travel Your Way"
          subtitle="From a quick city ride to a complete Himalayan journey, choose the travel experience that suits you."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Car;
            return (
              <StaggerItem key={service.id}>
                <Link
                  to="/contact#booking"
                  aria-label={`Get a quote for ${service.title}`}
                  className="block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group h-full bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                  >
                  <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-accent transition-colors duration-300 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-accent group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <p className="text-primary-600 mb-4">Need something customized?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-primary-700 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            Get Custom Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

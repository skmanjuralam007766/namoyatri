import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { Reveal } from '@/components/ui/Motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const POINTS = [
  'Experienced and verified drivers',
  'Clean, comfortable, well-maintained vehicles',
  'Personalized journeys tailored to your needs',
  'Specialists in pilgrimage and yatra travel',
  'Family-friendly long-distance travel',
  'Customized tour packages across India',
];

const STATS = [
  { value: '10K+', label: 'Happy Travellers' },
  { value: '500+', label: 'Destinations Covered' },
  { value: '15+', label: 'Years Experience' },
  { value: '24×7', label: 'Customer Support' },
];

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.about}
                  alt="Family enjoying a road trip with ALL INDIA TOURS"
                  className="w-full h-112.5 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block font-heading text-2xl font-bold text-primary-800">All India</span>
                    <span className="block text-xs text-primary-500 uppercase tracking-wider">Travel Services</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <SectionHeading
              title="About All India Tours"
              subtitle="Travel With Confidence"
              align="left"
            />

            <Reveal delay={0.1}>
              <p className="mt-6 text-primary-600 leading-relaxed">
                ALL INDIA TOURS is focused on providing comfortable, reliable and memorable
                road travel experiences. From quick city rides to complete Himalayan expeditions,
                we ensure every journey is safe, comfortable and unforgettable.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-cream-mist rounded-xl">
                    <div className="font-heading text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-primary-500 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-primary-700 shadow-lg shadow-primary/30 transition-all hover:scale-[1.02]"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

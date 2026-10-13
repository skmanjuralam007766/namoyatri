import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPinned, CalendarCheck, Car, Camera, Heart,
  type LucideIcon,
} from 'lucide-react';
import { JOURNEY_STEPS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  MapPinned, CalendarCheck, Car, Camera, Heart,
};

export function TravelJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Car moves from left to right across the path as user scrolls
  const carX = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '80%']);
  const pathScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Your Travel Story"
          subtitle="Every great journey starts with a single step."
        />

        {/* Road path */}
        <div className="relative mt-16 mb-8">
          {/* Dashed road line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div
              className="h-full bg-linear-to-r from-accent via-gold to-accent origin-left"
              style={{ scaleX: pathScale }}
            />
            <div className="absolute inset-0 border-t-2 border-dashed border-primary-200 opacity-50" />
          </div>

          {/* Moving car */}
          <motion.div
            className="absolute top-1/2 translate-y-[-140%] z-10"
            style={{ left: carX }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-xl shadow-accent/40">
                <Car className="w-6 h-6 text-white" />
              </div>
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-accent/30 rounded-full blur-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {JOURNEY_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon] ?? MapPinned;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex w-16 h-16 rounded-full bg-primary-50 items-center justify-center mb-4 relative">
                  <Icon className="w-7 h-7 text-primary-600" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-white text-xs font-heading font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-800 mb-1">
                  {step.label}
                </h3>
                <p className="text-xs text-primary-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import {
  BadgeCheck, Sparkles, ShieldCheck, Tags, Headphones,
  CalendarClock, ArrowRightLeft, Mountain,
  type LucideIcon,
} from 'lucide-react';
import { FEATURES } from '@/data/content';
import { StaggerGroup, StaggerItem } from '@/components/ui/Motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck, Sparkles, ShieldCheck, Tags, Headphones,
  CalendarClock, ArrowRightLeft, Mountain,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-cream-mist">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Travel With Us?"
          subtitle="We go the extra mile so you can enjoy every mile."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon] ?? BadgeCheck;
            return (
              <StaggerItem key={feature.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-50 group-hover:bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-primary-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

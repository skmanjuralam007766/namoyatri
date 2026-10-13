import { Reveal } from './Motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <Reveal>
        <div className={`inline-flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-accent" />
          <span className={`font-heading text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-gold' : 'text-accent'}`}>
            {title}
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
              light ? 'text-white' : 'text-primary-800'
            }`}
          >
            {subtitle}
          </h2>
        </Reveal>
      )}
    </div>
  );
}

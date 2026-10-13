import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '@/data/content';
import { ChevronRight } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

interface Scene {
  image: string;
  caption: string;
  duration: number;
}

const SCENES: Scene[] = [
  { image: IMAGES.intro.mountain1, caption: 'The Himalayas', duration: 1300 },
  { image: IMAGES.intro.valley, caption: 'The Valley', duration: 1300 },
  { image: IMAGES.intro.road, caption: 'The Road', duration: 1300 },
  { image: IMAGES.intro.car, caption: 'The Journey', duration: 1300 },
  { image: IMAGES.intro.tunnel, caption: 'The Tunnel', duration: 1300 },
  { image: IMAGES.intro.destination, caption: 'The Destination', duration: 1300 },
];

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [phase, setPhase] = useState<'scenes' | 'brand'>('scenes');
  const [isExiting, setIsExiting] = useState(false);

  const finish = useCallback(() => {
    setIsExiting(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(finish, 1500);
      return () => clearTimeout(timer);
    }

    if (phase !== 'scenes') return;

    const timer = setTimeout(() => {
      if (currentScene < SCENES.length - 1) {
        setCurrentScene((s) => s + 1);
      } else {
        setPhase('brand');
      }
    }, SCENES[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, phase, finish]);

  useEffect(() => {
    if (phase === 'brand' && !prefersReducedMotion) {
      const timer = setTimeout(finish, 3600);
      return () => clearTimeout(timer);
    }
    if (phase === 'brand' && prefersReducedMotion) {
      const timer = setTimeout(finish, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase, finish]);

  const skip = () => finish();

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-100 bg-navy overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Scene images with crossfade + zoom */}
          <AnimatePresence mode="popLayout">
            {phase === 'scenes' && (
              <motion.div
                key={currentScene}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{
                  opacity: { duration: 0.8, ease: 'easeInOut' },
                  scale: { duration: 1.5, ease: 'easeOut' },
                }}
              >
                <img
                  src={SCENES[currentScene].image}
                  alt={SCENES[currentScene].caption}
                  className="w-full h-full object-cover"
                />
                {/* Atmospheric overlays */}
                <div className="absolute inset-0 bg-linear-to-b from-navy/30 via-transparent to-navy/60" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dark transition for tunnel scene (scene index 4) */}
          {phase === 'scenes' && currentScene === 4 && (
            <motion.div
              className="absolute inset-0 bg-navy"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.6, 0] }}
              transition={{ duration: 1.2, times: [0, 0.3, 0.6, 1] }}
            />
          )}

          {/* Fog effect overlay */}
          {phase === 'scenes' && !prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
              }}
            />
          )}

          {/* Scene caption */}
          {phase === 'scenes' && (
            <div className="absolute bottom-24 left-0 right-0 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <span className="font-display italic text-white/70 text-lg">
                    {SCENES[currentScene].caption}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Progress dots */}
          {phase === 'scenes' && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
              {SCENES.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 rounded-full"
                  animate={{
                    width: i === currentScene ? 32 : 8,
                    backgroundColor: i <= currentScene ? '#F28C28' : 'rgba(255,255,255,0.3)',
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>
          )}

          {/* Brand reveal */}
          <AnimatePresence>
            {phase === 'brand' && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Background image */}
                <motion.img
                  src={IMAGES.intro.destination}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.4 }}
                  transition={{ duration: 2.5, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-navy/70" />

                {/* Brand content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-2"
                  >
                    <span className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.3em] text-gold">
                      <span className="h-px w-6 bg-gold" />
                      Welcome to
                      <span className="h-px w-6 bg-gold" />
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-white text-shadow-lg tracking-tight"
                  >
                    NAMO
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-accent text-shadow-lg tracking-tight -mt-2"
                  >
                    YATRI
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-6 mb-4"
                  >
                    <span className="font-display italic text-2xl sm:text-3xl text-gold">
                      Travel With Style
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="font-heading text-sm sm:text-base uppercase tracking-[0.25em] text-white/80"
                  >
                    Your Journey. Our Responsibility.
                  </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '120px', opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="h-0.5 bg-linear-to-r from-transparent via-accent to-transparent mx-auto mt-8"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip button */}
          <motion.button
            onClick={skip}
            className="absolute bottom-8 right-8 z-20 inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-heading font-medium uppercase tracking-wider transition-colors duration-300 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Skip Intro
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

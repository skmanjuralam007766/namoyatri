import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, CalendarCheck, MapPin } from 'lucide-react';
import { ButtonAnchor } from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Cars', to: '/cars' },
  { label: 'Tour Packages', to: '/tours' },
  { label: 'Yatra', to: '/yatra' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent py-4'
            : 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        }`}
      >
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${transparent ? 'bg-white/10 backdrop-blur' : 'bg-primary'}`}>
              <MapPin className={`w-5 h-5 ${transparent ? 'text-white' : 'text-accent'}`} />
            </div>
            <div className="leading-none">
              <span className={`block font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${transparent ? 'text-white' : 'text-primary-800'}`}>
                NAMO
              </span>
              <span className={`block font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${transparent ? 'text-accent' : 'text-accent'}`}>
                YATRI
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    transparent
                      ? isActive
                        ? 'text-accent'
                        : 'text-white/90 hover:text-white'
                      : isActive
                        ? 'text-accent'
                        : 'text-primary-700 hover:text-accent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ButtonAnchor
              href="tel:+919876543210"
              variant={transparent ? 'outline' : 'ghost'}
              size="sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </ButtonAnchor>
            <Link
              to="/contact#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-heading font-semibold tracking-wide rounded-lg bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-[1.02] uppercase"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Your Journey
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${transparent ? 'text-white' : 'text-primary-800'}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="leading-none">
                  <span className="block font-heading text-lg font-bold text-primary-800">ALL INDIA</span>
                  <span className="block font-heading text-lg font-bold text-accent">TOURS</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-primary-700 hover:bg-primary-50"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block px-6 py-3.5 font-heading text-base font-semibold uppercase tracking-wider transition-colors ${
                          isActive ? 'text-accent bg-accent/5 border-l-4 border-accent' : 'text-primary-700 border-l-4 border-transparent'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="p-5 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-heading font-semibold uppercase tracking-wide rounded-lg border-2 border-primary/20 text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link
                  to="/contact#booking"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-heading font-semibold uppercase tracking-wide rounded-lg bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/30 transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Your Journey
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

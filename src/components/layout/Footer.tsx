import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Mail, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/data/content';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Cars', to: '/cars' },
  { label: 'Tour Packages', to: '/tours' },
  { label: 'Yatra', to: '/yatra' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const SERVICE_LINKS = [
  'Car Rental', 'Tempo Traveller', 'One Way Taxi',
  'Tour Packages', 'Yatra Packages', 'Hotel Booking',
];

const SOCIAL_LINKS = [
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[+\s]/g, '')}` },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="leading-none">
                <span className="block font-heading text-lg font-bold text-white">{'NAMO'}</span>
                <span className="block font-heading text-lg font-bold text-accent">{'YATRI'}</span>
              </div>
            </Link>
            <p className="font-display italic text-gold text-lg mb-3">
              Your Journey. Our Responsibility.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Premium car travel and tourism services across India. From Himalayan pilgrimages to family vacations.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-sm text-white/60 hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[+\s]/g, '')}`} className="text-sm text-white/60 hover:text-accent transition-colors">
                  {CONTACT_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/60 hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50 uppercase tracking-wider">
            © 2026 NAMOYATRI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

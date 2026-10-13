import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Home, Plus, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Motion';
import { Link } from 'react-router-dom';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface FormErrors {
  [key: string]: string | undefined;
}

interface QuickForm {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface DetailedForm {
  fullName: string;
  mobile: string;
  email: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate: string;
  passengers: string;
  vehicleType: string;
  journeyType: string;
  requirements: string;
}

const emptyQuick: QuickForm = { name: '', phone: '', service: '', message: '' };
const emptyDetailed: DetailedForm = {
  fullName: '', mobile: '', email: '', pickup: '', destination: '',
  travelDate: '', returnDate: '', passengers: '', vehicleType: '',
  journeyType: '', requirements: '',
};

const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookingForm() {
  const [mode, setMode] = useState<'quick' | 'detailed'>('quick');
  const [quick, setQuick] = useState<QuickForm>(emptyQuick);
  const [detailed, setDetailed] = useState<DetailedForm>(emptyDetailed);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const validateQuick = (): boolean => {
    const e: FormErrors = {};
    if (!quick.name.trim()) e.name = 'Name is required';
    if (!quick.phone.trim()) e.phone = 'Phone number is required';
    else if (!phoneRegex.test(quick.phone)) e.phone = 'Enter a valid phone number';
    if (!quick.service) e.service = 'Please select a service';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateDetailed = (): boolean => {
    const e: FormErrors = {};
    if (!detailed.fullName.trim()) e.fullName = 'Full name is required';
    if (!detailed.mobile.trim()) e.mobile = 'Mobile number is required';
    else if (!phoneRegex.test(detailed.mobile)) e.mobile = 'Enter a valid mobile number';
    if (!detailed.email.trim()) e.email = 'Email is required';
    else if (!emailRegex.test(detailed.email)) e.email = 'Enter a valid email';
    if (!detailed.pickup.trim()) e.pickup = 'Pickup location is required';
    if (!detailed.destination.trim()) e.destination = 'Destination is required';
    if (!detailed.travelDate) e.travelDate = 'Travel date is required';
    else if (new Date(detailed.travelDate) < new Date(new Date().toDateString()))
      e.travelDate = 'Date cannot be in the past';
    if (detailed.returnDate && detailed.travelDate && new Date(detailed.returnDate) < new Date(detailed.travelDate))
      e.returnDate = 'Return date must be after travel date';
    if (!detailed.passengers) e.passengers = 'Select number of passengers';
    if (!detailed.vehicleType) e.vehicleType = 'Select vehicle type';
    if (!detailed.journeyType) e.journeyType = 'Select journey type';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = mode === 'quick' ? validateQuick() : validateDetailed();
    if (!valid) return;

    const ref = `ATI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSuccess(true);
    setQuick(emptyQuick);
    setDetailed(emptyDetailed);
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-primary-800 focus:outline-none transition-all ${
      errors[field]
        ? 'border-red-400 focus:ring-2 focus:ring-red-400/20'
        : 'border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20'
    }`;

  return (
    <section id="booking" className="py-20 sm:py-28 bg-cream scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Plan Your Journey"
          subtitle="Tell us about your trip and we'll handle the rest."
        />

        {/* Mode toggle */}
        <Reveal className="mt-10" delay={0.1}>
          <div className="inline-flex p-1.5 bg-white rounded-xl shadow-md mx-auto flex-wrap justify-center gap-1">
            <button
              onClick={() => { setMode('quick'); setErrors({}); }}
              className={`px-6 py-3 rounded-lg font-heading text-sm font-semibold uppercase tracking-wide transition-all ${
                mode === 'quick' ? 'bg-accent text-white shadow-md' : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              Quick Request
            </button>
            <button
              onClick={() => { setMode('detailed'); setErrors({}); }}
              className={`px-6 py-3 rounded-lg font-heading text-sm font-semibold uppercase tracking-wide transition-all ${
                mode === 'detailed' ? 'bg-accent text-white shadow-md' : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              Detailed Booking
            </button>
          </div>
        </Reveal>

        {/* Forms */}
        <Reveal className="mt-8" delay={0.15}>
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
            {mode === 'quick' ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm text-primary-500 mb-4">
                  For customers who don't have complete travel details yet. Just tell us what you need.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={quick.name}
                      onChange={(e) => setQuick({ ...quick, name: e.target.value })}
                      placeholder="Your name"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={quick.phone}
                      onChange={(e) => setQuick({ ...quick, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Service Required *
                  </label>
                  <select
                    value={quick.service}
                    onChange={(e) => setQuick({ ...quick, service: e.target.value })}
                    className={inputClass('service')}
                  >
                    <option value="">Select a service</option>
                    <option>Car Rental</option>
                    <option>Car With Driver</option>
                    <option>Tempo Traveller</option>
                    <option>One Way Taxi</option>
                    <option>Round Trip</option>
                    <option>Tour Package</option>
                    <option>Yatra Package</option>
                    <option>Hotel Booking</option>
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Message / Requirement
                  </label>
                  <textarea
                    value={quick.message}
                    onChange={(e) => setQuick({ ...quick, message: e.target.value })}
                    placeholder="e.g. I need an Innova from Haridwar to Kedarnath next week."
                    rows={4}
                    className={inputClass('message')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-lg shadow-accent/30 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Send Request
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm text-primary-500 mb-4">
                  Provide detailed information for a precise booking quote.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input type="text" value={detailed.fullName}
                      onChange={(e) => setDetailed({ ...detailed, fullName: e.target.value })}
                      placeholder="Your full name" className={inputClass('fullName')} />
                    {errors.fullName && <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Mobile Number *
                    </label>
                    <input type="tel" value={detailed.mobile}
                      onChange={(e) => setDetailed({ ...detailed, mobile: e.target.value })}
                      placeholder="+91 98765 43210" className={inputClass('mobile')} />
                    {errors.mobile && <p className="mt-1.5 text-xs text-red-500">{errors.mobile}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input type="email" value={detailed.email}
                      onChange={(e) => setDetailed({ ...detailed, email: e.target.value })}
                      placeholder="you@email.com" className={inputClass('email')} />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Pickup Location *
                    </label>
                    <input type="text" value={detailed.pickup}
                      onChange={(e) => setDetailed({ ...detailed, pickup: e.target.value })}
                      placeholder="e.g. Haridwar" className={inputClass('pickup')} />
                    {errors.pickup && <p className="mt-1.5 text-xs text-red-500">{errors.pickup}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Destination *
                    </label>
                    <input type="text" value={detailed.destination}
                      onChange={(e) => setDetailed({ ...detailed, destination: e.target.value })}
                      placeholder="e.g. Kedarnath" className={inputClass('destination')} />
                    {errors.destination && <p className="mt-1.5 text-xs text-red-500">{errors.destination}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Travel Date *
                    </label>
                    <input type="date" value={detailed.travelDate}
                      onChange={(e) => setDetailed({ ...detailed, travelDate: e.target.value })}
                      className={inputClass('travelDate')} />
                    {errors.travelDate && <p className="mt-1.5 text-xs text-red-500">{errors.travelDate}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Return Date
                    </label>
                    <input type="date" value={detailed.returnDate}
                      onChange={(e) => setDetailed({ ...detailed, returnDate: e.target.value })}
                      className={inputClass('returnDate')} />
                    {errors.returnDate && <p className="mt-1.5 text-xs text-red-500">{errors.returnDate}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Passengers *
                    </label>
                    <select value={detailed.passengers}
                      onChange={(e) => setDetailed({ ...detailed, passengers: e.target.value })}
                      className={inputClass('passengers')}>
                      <option value="">Select</option>
                      <option>1-4</option><option>5-7</option><option>8-12</option><option>13+</option>
                    </select>
                    {errors.passengers && <p className="mt-1.5 text-xs text-red-500">{errors.passengers}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Vehicle Type *
                    </label>
                    <select value={detailed.vehicleType}
                      onChange={(e) => setDetailed({ ...detailed, vehicleType: e.target.value })}
                      className={inputClass('vehicleType')}>
                      <option value="">Select</option>
                      <option>Swift Dzire</option><option>Innova</option><option>Innova Crysta</option>
                      <option>SUV</option><option>Tempo Traveller</option><option>Luxury Vehicle</option>
                    </select>
                    {errors.vehicleType && <p className="mt-1.5 text-xs text-red-500">{errors.vehicleType}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      Journey Type *
                    </label>
                    <select value={detailed.journeyType}
                      onChange={(e) => setDetailed({ ...detailed, journeyType: e.target.value })}
                      className={inputClass('journeyType')}>
                      <option value="">Select</option>
                      <option>One Way</option><option>Round Trip</option>
                      <option>Multi-Day Tour</option><option>Yatra Package</option>
                    </select>
                    {errors.journeyType && <p className="mt-1.5 text-xs text-red-500">{errors.journeyType}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Special Requirements
                  </label>
                  <textarea value={detailed.requirements}
                    onChange={(e) => setDetailed({ ...detailed, requirements: e.target.value })}
                    placeholder="Any special needs or preferences..." rows={3}
                    className={inputClass('requirements')} />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-lg shadow-accent/30 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={() => setSuccess(false)} />
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setSuccess(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-primary-600 hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={prefersReducedMotion ? {} : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </motion.div>

              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-2">
                THANK YOU!
              </h2>
              <p className="text-primary-600 mb-4">
                Your travel request has been received.
              </p>

              <div className="inline-block px-6 py-3 bg-cream rounded-xl mb-4">
                <span className="block text-xs text-primary-500 uppercase tracking-wider mb-1">Booking Reference</span>
                <span className="font-heading text-2xl font-bold text-accent">{bookingRef}</span>
              </div>

              <p className="text-sm text-primary-500 mb-6">
                One of our travel representatives will contact you shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-white font-heading font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
                <button
                  onClick={() => setSuccess(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-primary/15 text-primary-700 font-heading font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Another Request
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

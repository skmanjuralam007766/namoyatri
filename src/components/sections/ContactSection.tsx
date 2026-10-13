import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Motion';

const SERVICE_TAGS = ['Car Rental', 'Tour Packages', 'Yatra', 'One Way Taxi', 'Tempo Traveller'];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const contactItems = [
    { icon: Phone, label: 'Call Us', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: CONTACT_INFO.whatsapp, href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[+\s]/g, '')}` },
    { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: MapPin, label: 'Office', value: CONTACT_INFO.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}` },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-mist scroll-mt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Plan Your Journey"
          subtitle="Get in touch and we'll make your travel dreams a reality."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <Reveal>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Office' ? '_blank' : undefined}
                  rel={item.label === 'Office' ? 'noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-accent flex items-center justify-center transition-colors shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-primary-500 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </span>
                    <span className="font-heading font-semibold text-primary-800">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}

              {/* Service tags */}
              <div className="p-5 bg-white rounded-xl shadow-sm">
                <span className="block text-xs text-primary-500 uppercase tracking-wider mb-3">
                  Our Services
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-heading font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your travel plans..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-primary-800 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-dark shadow-lg shadow-accent/30 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-50 rounded-lg text-green-700 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Thank you! We'll get back to you shortly.
                  </motion.div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/quality', label: 'Quality & Compliance' },
    { href: '/contact', label: 'Contact Us' },
  ],
  products: [
    { href: '/products#class-1', label: 'Class 1 Chemical Indicators' },
    { href: '/products#class-4', label: 'Class 4 Indicators' },
    { href: '/products#class-5', label: 'Class 5 Integrators' },
    { href: '/products#class-6', label: 'Class 6 Emulating Indicators' },
    { href: '/products#pcd', label: 'Process Challenge Devices' },
    { href: '/products#biological', label: 'Biological Indicators' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group relative w-56 h-14">
              <Image 
                src="https://dieusterimed.com/wp-content/uploads/2025/08/DIEU-STERIMED.png" 
                alt="Dieu SteriMed Logo" 
                fill
                className="object-contain filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Inspired by vision, strengthened by legacy, and committed to a safer tomorrow. Delivering world-class sterilization monitoring solutions.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  St. No 03 Baba Mukand Singh Nagar,
                  <br />
                  Daba Road GT Road Ludhiana 141014, Punjab
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a
                  href="tel:+919803894000"
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  +91-9803894000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a
                  href="mailto:emea@dieusterimed.agency"
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  emea@dieusterimed.agency
                </a>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
              <p className="text-xs text-gray-400 mb-1">Business Hours</p>
              <p className="text-sm text-white font-medium">Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-xs text-gray-500 mt-0.5">IST (UTC+5:30)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {['ISO 11140-1', 'WHO-GMP', 'CE Marked', 'ISO 13485'].map((cert) => (
              <span
                key={cert}
                className="text-xs font-semibold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Dieu SteriMed Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

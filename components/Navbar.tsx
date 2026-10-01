'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/quality', label: 'Quality' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-8 opacity-100'
        } bg-primary-500`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <p className="text-white text-xs flex items-center gap-1.5">
            <span>🏆</span>
            <span>ISO Certified | WHO-GMP Compliant | CE Marked Products</span>
          </p>
          <a
            href="tel:+91-0000000000"
            className="text-white text-xs flex items-center gap-1.5 hover:text-yellow-200 transition-colors"
          >
            <Phone size={12} />
            <span>+91-0000000000</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield size={22} className="text-white" />
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg leading-none block transition-colors duration-300 ${
                  scrolled ? 'text-primary-700' : 'text-white'
                }`}
              >
                Dieu SteriMed
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-500' : 'text-green-200'
                }`}
              >
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 animated-underline ${
                  pathname === link.href
                    ? scrolled
                      ? 'text-primary-600 font-semibold'
                      : 'text-yellow-300 font-semibold'
                    : scrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-5 py-3.5 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="p-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

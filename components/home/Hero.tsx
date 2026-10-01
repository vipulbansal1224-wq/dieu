'use client';
import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  'ISO 11140-1 Certified Products',
  'WHO-GMP Compliant Manufacturing',
  'Global Export Standards',
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated background particles */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div
          className={`transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 text-sm font-semibold px-4 py-2 rounded-full border border-primary-500/30 mb-6">
            <Shield size={14} />
            Trusted by 500+ Healthcare Facilities
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Trusted
            <span className="block bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent">
              Sterilization
            </span>
            Monitoring
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Delivering advanced sterilization monitoring products designed to meet global compliance
            standards — because patient safety begins with precision sterilization.
          </p>

          <ul className="space-y-3 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-gray-300">
                <CheckCircle size={18} className="text-primary-400 shrink-0" />
                <span className="text-sm font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-8 py-4 rounded-xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-400/40 transition-all duration-300 transform hover:-translate-y-1 text-base"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Visual element */}
        <div
          className={`hidden lg:block transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/20 rounded-full animate-pulse-slow" />
              <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl">
                <div className="w-24 h-24 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Shield size={48} className="text-white" />
                </div>
                <p className="text-white font-display font-bold text-3xl">Smart</p>
                <p className="text-white font-display font-bold text-3xl">Monitoring</p>
                <p className="text-primary-300 text-sm mt-2">Safe Patients</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Compliance</p>
                  <p className="text-sm font-bold text-gray-900">ISO 11140-1</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🏅</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Certified</p>
                  <p className="text-sm font-bold text-gray-900">WHO-GMP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>

      {/* Wave bottom */}
      <div className="wave">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

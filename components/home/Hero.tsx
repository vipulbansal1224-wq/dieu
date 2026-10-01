'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, CheckCircle, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  'ISO 11140-1 Certified Products',
  'WHO-GMP Compliant Manufacturing',
  'Global Export Standards',
];

const sliderImages = [
  "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Medical lab
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Sterilization/hospital
  "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Medical equipment
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={sliderImages[currentSlide]} 
            alt="Sterilization Facility" 
            fill 
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-primary-900/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div
          className={`transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/30 text-white backdrop-blur-sm text-sm font-semibold px-4 py-2 rounded-full border border-primary-400/30 mb-6">
            <Shield size={14} />
            Trusted by 500+ Healthcare Facilities
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 drop-shadow-lg">
            Trusted
            <span className="block text-primary-400 drop-shadow-md">
              Sterilization
            </span>
            Monitoring
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl drop-shadow-md">
            Delivering advanced sterilization monitoring products designed to meet global compliance
            standards — because patient safety begins with precision sterilization.
          </p>

          <ul className="space-y-3 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-white drop-shadow-md">
                <CheckCircle size={18} className="text-primary-400 shrink-0" />
                <span className="text-sm font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-8 py-4 rounded-xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-400/40 transition-all duration-300 transform hover:-translate-y-1 text-base border border-primary-400/50"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 text-base shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Visual element with product image */}
        <div
          className={`hidden lg:block transition-all duration-700 delay-300 relative ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
             <div className="absolute inset-0 bg-primary-500/20 backdrop-blur-md rounded-full animate-pulse-slow border border-primary-300/30 shadow-2xl" />
             <Image 
                src="https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM-removebg-preview-1.png"
                alt="Sterilization Indicator Product"
                fill
                className="object-contain p-8 drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
             />
             
            {/* Floating badges */}
            <div className="absolute top-10 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-float z-20 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Compliance</p>
                  <p className="text-sm font-bold text-gray-900">ISO 11140-1</p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-10 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-float z-20 border border-white/20"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🏅</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Certified</p>
                  <p className="text-sm font-bold text-gray-900">WHO-GMP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'bg-primary-400 w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 z-20">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce text-primary-400" />
      </div>

      {/* Wave bottom */}
      <div className="wave z-20 relative">
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

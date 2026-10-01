'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
];

interface PageBannerProps {
  title: string;
  subtitle: string;
  tag: string;
}

export default function PageBanner({ title, subtitle, tag }: PageBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-dark-900 mt-20">
      {/* Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.3, scale: 1 }}
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

      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-primary-900/80 to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="section-tag text-green-300">
            <span className="w-8 h-0.5 bg-green-400" />
            {tag}
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {title.split(' ').map((word, i, arr) => 
               i === arr.length - 1 ? (
                 <span key={i} className="block text-accent-400">{word}</span>
               ) : (
                 <span key={i}>{word} </span>
               )
            )}
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </div>
      
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

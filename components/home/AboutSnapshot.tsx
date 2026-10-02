'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

const sliderImages = [
  "https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM-removebg-preview-1.png",
  "https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM__1_-removebg-preview-1.png",
  "https://dieusterimed.com/wp-content/uploads/2025/08/shape-14-1.png"
];

export default function AboutSnapshot() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Slider */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg bg-gray-50 flex items-center justify-center p-8 border border-gray-100">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 p-8 md:p-16 flex items-center justify-center"
                >
                  <Image 
                    src={sliderImages[currentSlide]} 
                    alt="Dieu SteriMed Products" 
                    fill
                    className="object-contain p-4 drop-shadow-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Founder card */}
            <div className="absolute -top-6 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-[240px] z-30">
              <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                    <span className="font-display font-bold text-primary-600 text-lg">JB</span>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 mb-0.5">Founded by</p>
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                      Mr. Jaswant Singh Bodhy
                    </p>
                 </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-tag">
              <span className="w-8 h-0.5 bg-primary-500" />
              About Dieu SteriMed
            </p>
            <h2 className="section-title text-dark-900">
              Inspired by Vision,
              <span className="block gradient-text">Built for Safety</span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Dieu SteriMed Pvt. Ltd. was founded with a clear purpose — to bring innovation,
              safety, and trust to the world of sterilization and infection control. The company was
              started by Mr. Jaswant Singh Bodhy, Mr. Devansh Dhonsi, and Mrs. Parul, with a shared
              vision of building a brand that stands for quality and compliance.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our products help healthcare providers validate every sterilization cycle with
              confidence, ensuring patient safety through precision-engineered monitoring solutions.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Advanced chemical indicator technology',
                'Rigorous quality testing at every stage',
                'Compliance with ISO 11140-1 and international standards',
                'Dedicated technical support for healthcare partners',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-4 transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Dieu SteriMed Facility" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-display font-bold mb-4 text-white">Dieu SteriMed</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Award, label: 'ISO Certified' },
                    { icon: Users, label: 'Expert Team' },
                    { icon: Globe, label: 'Pan-India' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/30">
                      <Icon size={20} className="mx-auto mb-1 text-yellow-300" />
                      <p className="text-xs font-medium text-white">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-[220px]">
              <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center overflow-hidden">
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

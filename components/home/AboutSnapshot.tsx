import Link from 'next/link';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-12 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-7xl font-display font-black text-white/20 mb-2">DSM</div>
                <h3 className="text-2xl font-display font-bold mb-4">Dieu SteriMed</h3>
                <p className="text-green-100 text-sm leading-relaxed mb-6">
                  Founded with a clear purpose — to bring innovation, safety, and trust to the world
                  of sterilization and infection control.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Award, label: 'ISO Certified' },
                    { icon: Users, label: 'Expert Team' },
                    { icon: Globe, label: 'Pan-India' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
                      <Icon size={20} className="mx-auto mb-1 text-yellow-300" />
                      <p className="text-xs font-medium text-green-100">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-[200px]">
              <p className="text-xs text-gray-500 mb-1">Founded by</p>
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Mr. Jaswant Singh Bodhy
              </p>
              <p className="text-xs text-gray-500 mt-0.5">& Team</p>
              <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-3" />
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

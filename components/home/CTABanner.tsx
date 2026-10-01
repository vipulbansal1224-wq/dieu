import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-accent-500/20 text-yellow-300 text-sm font-semibold px-4 py-2 rounded-full border border-accent-500/30 mb-6">
          🚀 Elevate Your Sterilization Standards
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Ensure
          <span className="block text-accent-400">Patient Safety?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Get in touch with our experts today. We&apos;ll help you choose the right sterilization
          monitoring solutions for your facility.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-dark-900 font-bold px-8 py-4 rounded-xl shadow-2xl shadow-accent-500/30 transition-all duration-300 transform hover:-translate-y-1 text-base"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+91-0000000000"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 text-base"
          >
            <Phone size={18} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

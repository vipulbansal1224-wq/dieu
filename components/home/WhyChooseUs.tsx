import { Shield, Award, Microscope, HeartHandshake, Globe, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description:
      'Every product undergoes rigorous testing to meet ISO 11140-1 and international standards before reaching your facility.',
    color: 'text-primary-500',
    bg: 'bg-primary-50',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description:
      'WHO-GMP compliant manufacturing facility with CE marked products — demonstrating our commitment to global standards.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Microscope,
    title: 'Precision Technology',
    description:
      'Advanced chemical formulations developed by expert scientists to provide accurate, reliable sterilization validation.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description:
      'Our expert team provides comprehensive technical support, training, and consultation for all healthcare partners.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Globe,
    title: 'Pan-India Presence',
    description:
      'Trusted by 500+ healthcare facilities across India with a growing network of distributors and partners.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description:
      'Efficient supply chain ensures timely delivery of products, maintaining uninterrupted sterilization workflow.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">
              <span className="w-8 h-0.5 bg-primary-500" />
              Why Dieu SteriMed
            </p>
            <h2 className="section-title text-dark-900">
              Why Healthcare Professionals
              <span className="block gradient-text">Choose Us</span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver sterilization
              monitoring solutions that you can trust with patients&apos; lives.
            </p>

            <div className="mt-10 p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl text-white">
              <blockquote className="text-lg font-medium leading-relaxed italic">
                &ldquo;Patient safety is not just our mission — it&apos;s our purpose. Every product
                we make is designed to protect lives.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-green-200 font-semibold">
                — Founders, Dieu SteriMed Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-5 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-11 h-11 ${r.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <r.icon size={22} className={r.color} />
                </div>
                <h3 className="font-display font-semibold text-dark-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Head of CSSD, Apollo Hospital',
    content:
      'Dieu SteriMed products have transformed our sterilization monitoring. The chemical indicators are highly reliable and the team provides excellent support.',
    rating: 5,
  },
  {
    name: 'Nurse Priya Sharma',
    role: 'Infection Control Officer, Fortis Healthcare',
    content:
      'The Class 5 integrators from Dieu SteriMed give us complete confidence in our autoclave cycles. Consistent results every time.',
    rating: 5,
  },
  {
    name: 'Mr. Sanjay Mehta',
    role: 'Purchase Manager, Max Hospital',
    content:
      'Excellent quality products at competitive pricing. Timely delivery and responsive customer service make them our preferred vendor.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-tag justify-center">
            <span className="w-8 h-0.5 bg-primary-500" />
            Testimonials
            <span className="w-8 h-0.5 bg-primary-500" />
          </p>
          <h2 className="section-title text-dark-900">
            Trusted by Healthcare
            <span className="block gradient-text">Professionals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-7 relative">
              <Quote size={32} className="text-primary-100 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-dark-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

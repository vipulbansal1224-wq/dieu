import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';

const products = [
  {
    id: 'class-1',
    name: 'Class 1 Chemical Indicators',
    description:
      'Process indicators used to distinguish between processed and non-processed items. Available in strip and tape formats.',
    icon: '🏷️',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tag: 'ISO 11140-1 Class 1',
  },
  {
    id: 'class-4',
    name: 'Class 4 Multi-Variable Indicators',
    description:
      'React to all critical variables of the sterilization process. Change color only when all parameters are achieved.',
    icon: '🔬',
    color: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    tag: 'ISO 11140-1 Class 4',
  },
  {
    id: 'class-5',
    name: 'Class 5 Integrating Indicators',
    description:
      'Designed to react to all critical variables of sterilization. Correlate with biological indicator performance.',
    icon: '⚗️',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    tag: 'ISO 11140-1 Class 5',
  },
  {
    id: 'class-6',
    name: 'Class 6 Emulating Indicators',
    description:
      'Cycle-specific indicators that react to all critical variables. Ideal for routine monitoring of specific sterilization cycles.',
    icon: '🎯',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    tag: 'ISO 11140-1 Class 6',
  },
  {
    id: 'pcd',
    name: 'Process Challenge Devices',
    description:
      'Standardized challenge systems designed to test sterilization effectiveness. Used with biological and chemical indicators.',
    icon: '🧪',
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    tag: 'ISO 11138 Compliant',
  },
  {
    id: 'biological',
    name: 'Biological Indicators',
    description:
      'The gold standard for sterilization validation. Contains spores of highly resistant microorganisms for definitive sterilization assurance.',
    icon: '🦠',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    tag: 'ISO 11138',
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-tag justify-center">
            <span className="w-8 h-0.5 bg-primary-500" />
            Our Products
            <span className="w-8 h-0.5 bg-primary-500" />
          </p>
          <h2 className="section-title text-dark-900">
            Comprehensive Sterilization
            <span className="block gradient-text">Monitoring Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From chemical indicators to biological assurance — everything your facility needs for
            compliant sterilization validation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products#${product.id}`}
              className={`group card p-6 ${product.bg} border ${product.border} hover:shadow-xl transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {product.icon}
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200 mb-3">
                <Tag size={10} />
                {product.tag}
              </div>
              <h3 className="font-display font-bold text-lg text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              <div className="mt-5 flex items-center gap-2 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

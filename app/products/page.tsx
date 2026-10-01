import { ArrowRight, CheckCircle, Download, Tag } from 'lucide-react';
import Link from 'next/link';

const productCategories = [
  {
    id: 'class-1',
    name: 'Class 1 Chemical Indicators',
    standard: 'ISO 11140-1 : Class 1',
    description:
      'Process indicators are used to distinguish between processed and non-processed unit loads. They are used externally on packaging to verify that items have been exposed to a sterilization process.',
    features: [
      'Available as indicator tape and labels',
      'Color changes upon exposure to steam sterilization',
      'Available for different sterilization methods (Steam, EO, Dry Heat)',
      'Resistant to moisture and high temperatures',
      'Easy visual assessment',
    ],
    applications: ['Surgical packs', 'Trays', 'Pouches', 'Wrapping materials'],
    icon: '🏷️',
    color: 'from-blue-500 to-blue-700',
    lightBg: 'bg-blue-50 border-blue-200',
    products: [
      { name: 'Steam Autoclave Tape (Class 1)', size: '19mm × 50m' },
      { name: 'ETO Indicator Tape (Class 1)', size: '19mm × 50m' },
      { name: 'Dry Heat Indicator Tape (Class 1)', size: '19mm × 50m' },
      { name: 'Self-Sealing Pouches with CI', size: 'Multiple sizes' },
    ],
  },
  {
    id: 'class-4',
    name: 'Class 4 Multi-Variable Indicators',
    standard: 'ISO 11140-1 : Class 4',
    description:
      'Multi-variable indicators react to two or more critical variables of the sterilization process. They indicate exposure to a sterilization cycle at stated values of the chosen variables.',
    features: [
      'Reacts to temperature, time, and steam quality',
      'Enhanced reliability over single-variable indicators',
      'Suitable for placement inside packs',
      'Provides clear pass/fail reading',
      'Compatible with all gravity and vacuum steam sterilizers',
    ],
    applications: ['Instrument sets', 'Implant trays', 'CSSD monitoring'],
    icon: '🔬',
    color: 'from-primary-500 to-primary-700',
    lightBg: 'bg-primary-50 border-primary-200',
    products: [
      { name: 'Class 4 Steam Strip', size: 'Pack of 250/500' },
      { name: 'Class 4 Multi-Parameter Indicator', size: 'Pack of 500' },
    ],
  },
  {
    id: 'class-5',
    name: 'Class 5 Integrating Indicators',
    standard: 'ISO 11140-1 : Class 5',
    description:
      'Integrating indicators are designed to react to all critical variables of sterilization. Their performance correlates with that of biological indicators across the full range of sterilization cycle parameters.',
    features: [
      'Correlates with biological indicator performance',
      'Reacts to all critical sterilization parameters',
      'Highest level of chemical indicator assurance',
      'Provides definitive pass/fail endpoint',
      'Suitable for use in PCD systems',
    ],
    applications: ['CSSD validation', 'Implant release decisions', 'Routine cycle monitoring'],
    icon: '⚗️',
    color: 'from-purple-500 to-purple-700',
    lightBg: 'bg-purple-50 border-purple-200',
    products: [
      { name: 'Class 5 Integrating Strip (Steam)', size: 'Pack of 100/250' },
      { name: 'Class 5 Integrating Indicator (ETO)', size: 'Pack of 100' },
    ],
  },
  {
    id: 'class-6',
    name: 'Class 6 Emulating Indicators',
    standard: 'ISO 11140-1 : Class 6',
    description:
      'Cycle-specific emulating indicators are designed to react to all critical variables of specific steam sterilization cycles. They are labeled with the specific cycle parameters they are designed to verify.',
    features: [
      'Cycle-specific design for precise validation',
      'Available for 121°C and 134°C cycles',
      'Provides load-specific sterilization assurance',
      'Fast color-change endpoint',
      'Ideal for routine monitoring of defined cycles',
    ],
    applications: ['Defined cycle validation', 'CSSD routine monitoring', 'Quality audits'],
    icon: '🎯',
    color: 'from-orange-500 to-orange-700',
    lightBg: 'bg-orange-50 border-orange-200',
    products: [
      { name: 'Class 6 Strip - 134°C/3.5 min', size: 'Pack of 250/500' },
      { name: 'Class 6 Strip - 121°C/15 min', size: 'Pack of 250/500' },
    ],
  },
  {
    id: 'pcd',
    name: 'Process Challenge Devices (PCD)',
    standard: 'ISO 11138 / ISO 17665',
    description:
      'Process Challenge Devices create a defined level of challenge to the sterilization process. They are used with biological or chemical indicators to test whether the sterilizer is functioning correctly.',
    features: [
      'Standardized challenge geometry',
      'Compatible with biological and chemical indicators',
      'Single-use or reusable configurations',
      'Compliant with ISO 17665 and AAMI ST79',
      'Designed for hollow load and porous load testing',
    ],
    applications: [
      'Sterilizer qualification',
      'Routine testing',
      'Performance qualification',
    ],
    icon: '🧪',
    color: 'from-teal-500 to-teal-700',
    lightBg: 'bg-teal-50 border-teal-200',
    products: [
      { name: 'PCD Type A (for Class 5/6 CI)', size: 'Pack of 50/100' },
      { name: 'Hollow Load PCD', size: 'Pack of 25' },
      { name: 'Porous Load PCD', size: 'Pack of 25' },
    ],
  },
  {
    id: 'biological',
    name: 'Biological Indicators',
    standard: 'ISO 11138',
    description:
      'Biological indicators are the most definitive means of validating sterilization. They contain known populations of highly resistant bacterial spores specifically selected for their resistance to the sterilization process being tested.',
    features: [
      'Contains spores of Geobacillus stearothermophilus (steam)',
      'Contains spores of Bacillus atrophaeus (ETO/dry heat)',
      'Rapid readout versions available (1-3 hours)',
      'Self-contained ampule format for convenience',
      'Complete documentation and Certificate of Analysis',
    ],
    applications: [
      'Sterilizer validation',
      'Load release',
      'Performance qualification',
      'Implant release',
    ],
    icon: '🦠',
    color: 'from-amber-500 to-amber-700',
    lightBg: 'bg-amber-50 border-amber-200',
    products: [
      { name: 'Steam Biological Indicator (SCBI)', size: 'Pack of 50/100' },
      { name: 'ETO Biological Indicator', size: 'Pack of 50' },
      { name: 'Rapid Readout BI (3h)', size: 'Pack of 50' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="section-tag text-green-300">
              <span className="w-8 h-0.5 bg-green-400" />
              Our Products
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Sterilization
              <span className="block text-accent-400">Monitoring Range</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              From Class 1 process indicators to biological assurance systems — comprehensive
              solutions for every sterilization validation need.
            </p>
            <div className="flex flex-wrap gap-3">
              {productCategories.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full border border-white/20 transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="wave">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Products list */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {productCategories.map((category, idx) => (
            <div
              key={category.id}
              id={category.id}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Info */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full mb-4">
                  <Tag size={12} />
                  {category.standard}
                </div>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg`}
                >
                  {category.icon}
                </div>
                <h2 className="font-display text-3xl font-bold text-dark-900 mb-4">
                  {category.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>

                <div className="space-y-2 mb-8">
                  {category.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="font-semibold text-sm text-gray-900 mb-3">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.applications.map((a) => (
                      <span
                        key={a}
                        className="text-xs bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1 rounded-full font-medium"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request Catalog
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* SKUs */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`rounded-3xl border-2 ${category.lightBg} p-8`}>
                  <h3 className="font-display font-bold text-lg text-dark-900 mb-6">
                    Available SKUs
                  </h3>
                  <div className="space-y-4">
                    {category.products.map((product) => (
                      <div
                        key={product.name}
                        className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100 group hover:border-primary-200 hover:shadow-md transition-all"
                      >
                        <div>
                          <p className="font-semibold text-sm text-dark-900 group-hover:text-primary-600 transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{product.size}</p>
                        </div>
                        <Download
                          size={16}
                          className="text-gray-400 group-hover:text-primary-500 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 w-full flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 text-sm"
                  >
                    Request Samples
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-dark-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team of experts can help you choose the right products for your facility&apos;s
            specific sterilization needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Our Experts <ArrowRight size={16} />
            </Link>
            <Link
              href="/quality"
              className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              View Quality Standards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

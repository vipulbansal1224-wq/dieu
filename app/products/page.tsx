import { ArrowRight, CheckCircle, Download, Tag } from 'lucide-react';
import Link from 'next/link';

const productCategories = [
  {
    id: 'chemical-indicators',
    name: 'Chemical Indicators & Monitoring',
    standard: 'ISO 11140-1',
    description:
      'Comprehensive range of process indicators, emulating indicators, and test packs designed to react to critical variables of the sterilization process.',
    features: [
      'ASURE BOWIE DICK TEST PACK: Detects air leaks and steam penetration issues.',
      'ASURE CLASS 6 INTEGRATOR: Cycle-specific precise monitoring.',
      'ASURE CLASS 5 INTEGRATOR: Correlates to biological indicator performance.',
      'PROCESS INDICATOR TAPE: Clear visual evidence for Steam or EO.',
    ],
    applications: ['Surgical packs', 'Trays', 'Pouches', 'CSSD monitoring'],
    icon: '🏷️',
    color: 'from-blue-500 to-blue-700',
    lightBg: 'bg-blue-50 border-blue-200',
    products: [
      { name: 'ASURE BOWIE DICK TEST PACK', size: 'Daily Test Packs' },
      { name: 'ASURE CLASS 6 INTEGRATOR INDICATOR', size: 'Pack of 250/500' },
      { name: 'ASURE CLASS 5 INTEGRATOR INDICATOR', size: 'Pack of 250/500' },
      { name: 'PROCESS INDICATOR TAPE : STEAM & ETO', size: '19mm × 50m' },
      { name: 'ASURE DOCUMENTATION ROLLS', size: 'Multiple Sizes' },
    ],
  },
  {
    id: 'consumables-equipment',
    name: 'Disinfectants, Packaging & Devices',
    standard: 'ISO Quality Standards',
    description:
      'Specialized fogging solutions, high-level disinfectants, and medical-grade packaging to ensure comprehensive infection control and safe storage.',
    features: [
      'ASURE OPA & GLUTASURE: High-level instrument disinfectants.',
      'ASURE®-FS Fogging Solution: Effective environmental decontamination.',
      'Sterilization Pouches & Flat Reels: Strong seals and microbial barriers.',
      'SMS Sheet & ASURE PROCESS CHALLENGE DEVICE (PCD)',
    ],
    applications: ['Instrument sets', 'Environmental fogging', 'CSSD validation', 'Implant release decisions'],
    icon: '⚗️',
    color: 'from-primary-500 to-primary-700',
    lightBg: 'bg-primary-50 border-primary-200',
    products: [
      { name: 'ASURE OPA', size: '5 Litres' },
      { name: 'GLUTASURE', size: '5 Litres' },
      { name: 'ASURE®-FS Fogging Solution', size: '5 Litres' },
      { name: 'ASURE PROCESS CHALLENGE DEVICE', size: 'Challenge Packs' },
      { name: 'Sterilization Pouches & Flat Reels', size: 'Various Dimensions' },
      { name: 'SMS SHEET', size: '60x60, 80x80, 100x100, 120x120' },
    ],
  },
];

import PageBanner from '@/components/PageBanner';

export default function ProductsPage() {
  return (
    <div>
      <PageBanner 
        tag="Our Products"
        title="Complete Sterilization Monitoring Range"
        subtitle="From Class 1 process indicators to biological assurance systems — comprehensive solutions for every sterilization validation need."
      />

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

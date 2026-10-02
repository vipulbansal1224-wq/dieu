import { ArrowRight, CheckCircle, Download, Tag } from 'lucide-react';
import Link from 'next/link';

const productCategories = [
  {
    id: 'sterilization-indicators',
    name: 'Sterilization Indicators',
    standard: 'ISO 11140-1',
    description: 'Comprehensive chemical indicators for monitoring steam and EO sterilization cycles.',
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
      { 
        name: 'ASURE CLASS 6 INTEGRATOR INDICATOR', 
        size: 'Cycle-specific monitoring',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/ci6-1-1.png'
      },
      { 
        name: 'ASURE CLASS 5 INTEGRATOR INDICATOR', 
        size: 'Biological correlation',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.55.58-PM-1.jpeg'
      },
      { 
        name: 'ASURE BOWIE DICK TEST PACK', 
        size: 'Daily test packs',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.55.21-PM.jpeg'
      },
      { 
        name: 'PROCESS INDICATOR TAPE : STEAM & ETO', 
        size: '19mm × 50m',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.06-PM.jpeg'
      }
    ],
  },
  {
    id: 'consumables',
    name: 'Disinfectants & Consumables',
    standard: 'ISO Quality Standards',
    description: 'High-level disinfectants and EO cartridges for safe sterilization.',
    features: [
      'ASURE OPA & GLUTASURE: High-level instrument disinfectants.',
      'ASURE®-FS Fogging Solution: Effective environmental decontamination.',
      '100% EO Cartridges for low-temperature sterilization.',
    ],
    applications: ['Instrument sets', 'Environmental fogging', 'Endoscope reprocessing'],
    icon: '⚗️',
    color: 'from-primary-500 to-primary-700',
    lightBg: 'bg-primary-50 border-primary-200',
    products: [
      { 
        name: 'ASURE OPA', 
        size: '5 Litres',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.03-PM-1.jpeg'
      },
      { 
        name: 'GLUTASURE', 
        size: '5 Litres',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.01-PM.jpeg'
      },
      { 
        name: 'ASURE®-FS Fogging Solution', 
        size: '5 Litres',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/asure-fs-scaled.png'
      },
      { 
        name: 'ASURE EO CARTRIDGES', 
        size: '100% EO Cartridge',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.00-PM.jpeg'
      }
    ],
  },
  {
    id: 'packaging-devices',
    name: 'Packaging, PCDs & Documentation',
    standard: 'ISO 11607 & ISO 11140-5',
    description: 'Medical-grade packaging, challenge devices, and traceability rolls.',
    features: [
      'Sterilization Pouches & Flat Reels: Strong seals and microbial barriers.',
      'SMS Sheet: Non-woven wrapping sheets for trays.',
      'ASURE PCD: Process challenge devices for load release.',
      'Documentation Rolls: Traceability labels for CSSD.',
    ],
    applications: ['CSSD validation', 'Implant release decisions', 'Sterile storage'],
    icon: '📦',
    color: 'from-amber-500 to-amber-700',
    lightBg: 'bg-amber-50 border-amber-200',
    products: [
      { 
        name: 'Sterilization Pouches', 
        size: 'Various Dimensions',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-06-at-12.41.37-AM.jpeg'
      },
      { 
        name: 'Flat Reels', 
        size: 'Various Dimensions',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-06-at-12.41.36-AM.jpeg'
      },
      { 
        name: 'SMS SHEET: 60x60, 80x80, 100x100, 120x120', 
        size: 'Non-woven wrapping sheets',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.05-PM.jpeg'
      },
      { 
        name: 'ASURE PROCESS CHALLENGE DEVICE', 
        size: 'Challenge Packs',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.03-PM.jpeg'
      },
      { 
        name: 'ASURE DOCUMENTATION ROLLS', 
        size: 'Traceability labels',
        image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-11.56.02-PM.jpeg'
      }
    ],
  }
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
                  {category.features.map((f: string) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="font-semibold text-sm text-gray-900 mb-3">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.applications.map((a: string) => (
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
                    Available Products
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.products.map((product) => (
                      <div
                        key={product.name}
                        className="bg-white rounded-xl p-4 flex flex-col justify-between shadow-sm border border-gray-100 group hover:border-primary-200 hover:shadow-md transition-all"
                      >
                        <div className="relative w-full h-24 mb-3">
                          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div>
                          <p className="font-semibold text-xs text-dark-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {product.name}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-1 truncate">{product.size}</p>
                        </div>
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

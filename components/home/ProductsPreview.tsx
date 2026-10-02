import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';

const products = [
  {
    id: 'asure-bowie-dick',
    name: 'ASURE BOWIE DICK TEST PACK',
    description: 'Daily test packs designed to detect air leaks, inadequate air removal, and steam penetration issues in vacuum-assisted steam sterilizers.',
    image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM__1_-removebg-preview-1.png',
    tag: 'ISO 11140-1 Class 2',
  },
  {
    id: 'asure-class-6',
    name: 'ASURE CLASS 6 INTEGRATOR INDICATOR',
    description: 'Cycle-specific emulating indicators that react to all critical variables of the sterilization process for precise monitoring.',
    image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM-removebg-preview-1.png',
    tag: 'ISO 11140-1 Class 6',
  },
  {
    id: 'asure-class-5',
    name: 'ASURE CLASS 5 INTEGRATOR INDICATOR',
    description: 'Integrating indicators designed to react to all critical variables, providing immediate visual confirmation of sterilization conditions.',
    image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM__1_-removebg-preview-1.png',
    tag: 'ISO 11140-1 Class 5',
  },
  {
    id: 'process-indicator-tape',
    name: 'PROCESS INDICATOR TAPE: STEAM & ETO',
    description: 'Reliable adhesive indicator tapes for securing packs and providing clear visual evidence of exposure to Steam or EO sterilization.',
    image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM-removebg-preview-1.png',
    tag: 'ISO 11140-1 Class 1',
  },
  {
    id: 'asure-pcd',
    name: 'ASURE PROCESS CHALLENGE DEVICE',
    description: 'Standardized challenge devices designed to simulate worst-case scenarios for routine sterilization monitoring and validation.',
    image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM__1_-removebg-preview-1.png',
    tag: 'Quality Assurance',
  },
  {
    id: 'asure-fs',
    name: 'ASURE®-FS Fogging Solution',
    description: 'Advanced fogging solution for effective environmental decontamination and high-level disinfection in critical healthcare areas.',
    image: 'https://dieusterimed.com/wp-content/uploads/2025/08/WhatsApp_Image_2025-08-03_at_3.10.50_PM-removebg-preview-1.png',
    tag: 'Infection Control',
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
              className="group card overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              <div className="relative w-full h-48 bg-primary-50/50 p-6 flex items-center justify-center group-hover:bg-primary-100/50 transition-colors">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200 mb-3 self-start">
                  <Tag size={10} />
                  {product.tag}
                </div>
                <h3 className="font-display font-bold text-lg text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
                <div className="flex items-center gap-2 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
                  Learn More <ArrowRight size={14} />
                </div>
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

import { Shield, CheckCircle, FileCheck } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    name: 'ISO 11140-1:2014',
    authority: 'International Organization for Standardization',
    scope:
      'Sterilization of health care products — Chemical indicators — Part 1: General requirements',
    description:
      'Our complete chemical indicator range is manufactured and tested in full compliance with ISO 11140-1:2014, the international standard that defines requirements for chemical indicators used to monitor sterilization processes.',
    icon: '🏆',
    color: 'border-primary-300 bg-primary-50',
  },
  {
    name: 'WHO-GMP',
    authority: 'World Health Organization',
    scope: 'Good Manufacturing Practice for Pharmaceutical and Medical Products',
    description:
      'Our manufacturing facility operates in full compliance with WHO-GMP guidelines, ensuring consistent product quality, safety, and efficacy. Regular inspections and audits maintain our certification status.',
    icon: '🌐',
    color: 'border-blue-300 bg-blue-50',
  },
  {
    name: 'CE Marking',
    authority: 'European Conformity',
    scope:
      'Conformité Européenne — European safety, health, and environmental protection standards',
    description:
      'CE marking on our products demonstrates compliance with EU regulations, enabling us to supply to European markets and meeting the stringent standards for medical devices in the European Economic Area.',
    icon: '🇪🇺',
    color: 'border-indigo-300 bg-indigo-50',
  },
  {
    name: 'ISO 13485:2016',
    authority: 'International Organization for Standardization',
    scope: 'Medical devices — Quality management systems',
    description:
      'Our quality management system is designed around ISO 13485:2016, ensuring every aspect of our operations from design and development through to manufacturing and post-market activities meets international standards.',
    icon: '⚕️',
    color: 'border-teal-300 bg-teal-50',
  },
];

const qualityProcesses = [
  {
    step: '01',
    title: 'Raw Material Testing',
    desc: 'Every batch of raw materials is tested for chemical composition, purity, and compatibility before entering production.',
  },
  {
    step: '02',
    title: 'In-Process Monitoring',
    desc: 'Continuous monitoring at every stage of manufacturing ensures product consistency and adherence to specifications.',
  },
  {
    step: '03',
    title: 'Finished Product Testing',
    desc: '100% of finished product batches undergo comprehensive testing including indicator performance validation.',
  },
  {
    step: '04',
    title: 'Sterilization Challenge Testing',
    desc: 'Products are tested against actual sterilization cycles to verify performance claims and color-change endpoints.',
  },
  {
    step: '05',
    title: 'Stability Testing',
    desc: 'Ongoing stability studies ensure products maintain their properties and performance throughout the stated shelf life.',
  },
  {
    step: '06',
    title: 'Batch Documentation',
    desc: 'Full traceability with complete batch records, certificates of analysis, and quality release documentation for every lot.',
  },
];

import PageBanner from '@/components/PageBanner';

export default function QualityPage() {
  return (
    <div>
      <PageBanner 
        tag="Quality & Compliance"
        title="Our Commitment to Excellence"
        subtitle="Every product we manufacture meets the highest international quality standards. Quality is not just a process — it's our core value."
      />

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-primary-500" />
              Certifications
              <span className="w-8 h-0.5 bg-primary-500" />
            </p>
            <h2 className="section-title text-dark-900">Internationally Certified</h2>
            <p className="section-subtitle mx-auto text-center">
              Our products and processes are certified by leading international regulatory bodies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className={`rounded-2xl border-2 ${cert.color} p-7`}>
                <div className="flex items-start gap-5">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-xl text-dark-900 mb-1">
                      {cert.name}
                    </p>
                    <p className="text-primary-500 font-semibold text-sm mb-1">{cert.authority}</p>
                    <p className="text-xs text-gray-500 italic mb-4">{cert.scope}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-primary-500" />
              Our Process
              <span className="w-8 h-0.5 bg-primary-500" />
            </p>
            <h2 className="section-title text-dark-900">Quality Control Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityProcesses.map((p) => (
              <div key={p.step} className="card p-6 group">
                <div className="font-display font-black text-5xl text-primary-100 mb-4 group-hover:text-primary-200 transition-colors">
                  {p.step}
                </div>
                <h3 className="font-display font-bold text-dark-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">
                <span className="w-8 h-0.5 bg-primary-500" />
                Standards
              </p>
              <h2 className="section-title text-dark-900 mb-6">Regulatory Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our products are designed and tested to comply with all applicable regulatory
                standards. We maintain a comprehensive regulatory framework that covers product
                development, manufacturing, and post-market surveillance.
              </p>
              <div className="space-y-4">
                {[
                  { std: 'ISO 11140-1:2014', desc: 'Chemical indicators — General requirements' },
                  { std: 'ISO 11138', desc: 'Biological indicators for sterilization' },
                  { std: 'ISO 17665', desc: 'Steam sterilization of health-care products' },
                  { std: 'AAMI ST79', desc: 'Comprehensive guide to steam sterilization' },
                  { std: 'EN ISO 13485', desc: 'Medical devices quality management' },
                  {
                    std: 'CDSCO Guidelines',
                    desc: 'Central Drugs Standard Control Organization',
                  },
                ].map((item) => (
                  <div
                    key={item.std}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                  >
                    <FileCheck size={18} className="text-primary-500 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-dark-900">{item.std}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <CheckCircle size={16} className="text-green-500 ml-auto shrink-0" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-800 rounded-3xl p-10 text-white">
              <Shield size={48} className="text-white/30 mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">100% Quality Guarantee</h3>
              <p className="text-green-100 leading-relaxed mb-8">
                Every single product batch released by Dieu SteriMed comes with a complete
                Certificate of Analysis, full batch traceability, and our quality guarantee.
              </p>
              <div className="space-y-4">
                {[
                  'Certificate of Analysis for every batch',
                  'Full batch traceability records',
                  'Stability test data on request',
                  'Technical Data Sheets available',
                  'Regulatory documentation support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-accent-400 shrink-0" />
                    <span className="text-sm text-green-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Request Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

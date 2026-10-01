const certifications = [
  {
    name: 'ISO 11140-1',
    subtitle: 'Sterilization of Health-Care Products',
    icon: '🏆',
    color: 'border-primary-200 bg-primary-50',
  },
  {
    name: 'WHO-GMP',
    subtitle: 'Good Manufacturing Practice',
    icon: '🌐',
    color: 'border-blue-200 bg-blue-50',
  },
  {
    name: 'CE Marked',
    subtitle: 'European Conformity',
    icon: '🇪🇺',
    color: 'border-indigo-200 bg-indigo-50',
  },
  {
    name: 'ISO 13485',
    subtitle: 'Medical Devices QMS',
    icon: '⚕️',
    color: 'border-teal-200 bg-teal-50',
  },
  {
    name: 'ISO 11138',
    subtitle: 'Biological Indicators',
    icon: '🔬',
    color: 'border-purple-200 bg-purple-50',
  },
  {
    name: 'CDSCO',
    subtitle: 'Central Drugs Standard Control',
    icon: '🇮🇳',
    color: 'border-amber-200 bg-amber-50',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-tag justify-center">
            <span className="w-8 h-0.5 bg-primary-500" />
            Certifications & Compliance
            <span className="w-8 h-0.5 bg-primary-500" />
          </p>
          <h2 className="section-title text-dark-900">
            Meeting Global
            <span className="block gradient-text">Quality Standards</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Our products and manufacturing processes are certified by leading international regulatory
            bodies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className={`p-5 rounded-2xl border-2 ${cert.color} text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <p className="font-display font-bold text-sm text-dark-900 mb-1">{cert.name}</p>
              <p className="text-xs text-gray-500 leading-tight">{cert.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl text-white text-center">
          <p className="text-lg font-semibold mb-2">
            All products undergo 100% quality inspection before dispatch
          </p>
          <p className="text-green-100 text-sm">
            Our manufacturing facility maintains strict adherence to WHO-GMP guidelines, ensuring
            every batch meets the highest standards of quality and safety.
          </p>
        </div>
      </div>
    </section>
  );
}

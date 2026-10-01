import { Shield, Award, Users, Target, Eye, Heart } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Mr. Jaswant Singh Bodhy',
    role: 'Co-Founder & Director',
    description:
      'Visionary leader with deep expertise in medical device manufacturing and healthcare compliance.',
    initial: 'J',
  },
  {
    name: 'Mr. Devansh Dhonsi',
    role: 'Co-Founder & Operations',
    description:
      'Operations specialist driving quality excellence and strategic partnerships across the healthcare sector.',
    initial: 'D',
  },
  {
    name: 'Mrs. Parul',
    role: 'Co-Founder & Quality Head',
    description:
      'Quality assurance expert ensuring every product meets and exceeds international compliance standards.',
    initial: 'P',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Patient safety is the cornerstone of everything we do. Every product is designed to protect lives.',
    color: 'text-primary-500 bg-primary-50',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    desc: 'Uncompromising quality standards maintained at every stage of our manufacturing process.',
    color: 'text-amber-500 bg-amber-50',
  },
  {
    icon: Target,
    title: 'Innovation',
    desc: "Continuous investment in R&D to develop next-generation sterilization monitoring solutions.",
    color: 'text-blue-500 bg-blue-50',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: 'Building long-term partnerships with healthcare facilities based on trust and reliability.',
    color: 'text-rose-500 bg-rose-50',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Complete transparency in our processes, certifications, and product specifications.',
    color: 'text-teal-500 bg-teal-50',
  },
  {
    icon: Heart,
    title: 'Integrity',
    desc: 'Ethical business practices and honest communication with all our stakeholders.',
    color: 'text-purple-500 bg-purple-50',
  },
];

const milestones = [
  {
    year: '2020',
    event: 'Dieu SteriMed founded with a vision to revolutionize sterilization monitoring in India',
  },
  {
    year: '2021',
    event: 'Received ISO 11140-1 certification for chemical indicators product range',
  },
  {
    year: '2022',
    event: 'WHO-GMP compliant manufacturing facility established, CE marking obtained',
  },
  {
    year: '2023',
    event: 'Expanded product portfolio to 15+ SKUs, reached 200+ healthcare facilities',
  },
  {
    year: '2024',
    event: 'Pan-India distribution network established, crossed 500+ facility milestone',
  },
  {
    year: '2025',
    event: 'Launched next-generation Process Challenge Devices with enhanced accuracy',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-hero-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="section-tag text-green-300">
              <span className="w-8 h-0.5 bg-green-400" />
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Inspired by Vision,
              <span className="block text-accent-400">Built for Safety</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Dieu SteriMed Pvt. Ltd. was founded with a clear purpose — to bring innovation,
              safety, and trust to the world of sterilization and infection control.
            </p>
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

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">
                <span className="w-8 h-0.5 bg-primary-500" />
                Our Story
              </p>
              <h2 className="section-title text-dark-900 mb-6">The Dieu SteriMed Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dieu SteriMed Pvt. Ltd. was founded with a clear purpose — to bring innovation,
                  safety, and trust to the world of sterilization and infection control. The company
                  was started by Mr. Jaswant Singh Bodhy, Mr. Devansh Dhonsi, and Mrs. Parul, with a
                  shared vision of building a brand that stands for quality and compliance.
                </p>
                <p>
                  The name &quot;Dieu&quot; reflects our higher purpose — a commitment to standards
                  that go beyond the ordinary, driven by a belief that every patient deserves the
                  safest possible care.
                </p>
                <p>
                  Today, Dieu SteriMed has grown into a trusted name in sterilization monitoring,
                  with a growing range of products used in hospitals, clinics, and surgical centers
                  across India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Mission',
                  text: 'To deliver world-class sterilization monitoring products that protect patients and empower healthcare professionals.',
                  icon: '🎯',
                  bg: 'bg-primary-500 text-white',
                },
                {
                  label: 'Vision',
                  text: "To be India's most trusted sterilization monitoring brand, recognized globally for innovation and quality.",
                  icon: '👁️',
                  bg: 'bg-dark-900 text-white',
                },
                {
                  label: 'Values',
                  text: 'Safety, Quality, Innovation, Integrity — the four pillars that guide every decision we make.',
                  icon: '💎',
                  bg: 'bg-accent-500 text-dark-900',
                },
                {
                  label: 'Commitment',
                  text: 'Every batch manufactured under strict quality controls with full traceability and documentation.',
                  icon: '🤝',
                  bg: 'bg-gray-100 text-dark-900',
                },
              ].map((item) => (
                <div key={item.label} className={`${item.bg} rounded-2xl p-6`}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-display font-bold text-lg mb-2">{item.label}</p>
                  <p className="text-sm leading-relaxed opacity-80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-primary-500" />
              Our Core Values
              <span className="w-8 h-0.5 bg-primary-500" />
            </p>
            <h2 className="section-title text-dark-900">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card p-6 group hover:border-primary-200"
              >
                <div
                  className={`w-12 h-12 ${v.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <v.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-dark-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-primary-500" />
              Leadership
              <span className="w-8 h-0.5 bg-primary-500" />
            </p>
            <h2 className="section-title text-dark-900">Meet Our Founders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card p-8 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-700 rounded-full flex items-center justify-center text-white font-display font-bold text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  {member.initial}
                </div>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">
              <span className="w-8 h-0.5 bg-primary-500" />
              Our Journey
              <span className="w-8 h-0.5 bg-primary-500" />
            </p>
            <h2 className="section-title text-dark-900">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex items-start gap-6 pl-16">
                  <div className="absolute left-0 z-10 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Partner with Dieu SteriMed
          </h2>
          <p className="text-green-100 mb-8">
            Join 500+ healthcare facilities that trust our sterilization monitoring solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

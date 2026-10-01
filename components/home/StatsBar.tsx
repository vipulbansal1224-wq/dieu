'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Healthcare Facilities', icon: '🏥' },
  { value: 10, suffix: '+', label: 'Years of Excellence', icon: '🏆' },
  { value: 15, suffix: '+', label: 'Product Categories', icon: '📦' },
  { value: 99.9, suffix: '%', label: 'Quality Assurance', icon: '✅', decimals: 1 },
];

function CountUp({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const duration = 2000;
          const step = (target / duration) * 16;
          let start = 0;
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-display font-bold text-primary-600">
                <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="text-sm text-gray-600 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

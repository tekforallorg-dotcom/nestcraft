'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function StatItem({ end, label, suffix = '', prefix = '' }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 text-5xl font-bold text-accent md:text-6xl">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wide text-slate md:text-base">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="border-y border-paper bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatItem end={500} label="Active Listings" suffix="+" />
          <StatItem end={1200} label="Happy Clients" suffix="+" />
          <StatItem end={15} label="Years Experience" />
          <StatItem end={98} label="Satisfaction Rate" suffix="%" />
        </div>
      </div>
    </section>
  );
}
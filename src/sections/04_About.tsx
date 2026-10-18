import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { ABOUT_CONTENT } from '../data/content';

// Elegant metric counter component
const MetricItem: React.FC<{ target: number; suffix?: string; label: string }> = ({
  target,
  suffix = '',
  label,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline gap-1">
        <span className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          {count}
        </span>
        <span className="font-display font-medium text-2xl sm:text-3xl text-[#E62B1E]">
          {suffix}
        </span>
      </div>
      <p className="font-mono text-xs text-white/50 tracking-wider uppercase">
        {label}
      </p>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            01 / MANIFESTO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-tight text-white">
            What happens when we tear down the maps we were handed?
          </h2>
        </div>

        {/* Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          <div className="lg:col-span-8">
            <p className="font-body text-xl sm:text-2xl md:text-3xl font-light text-white/85 leading-relaxed">
              TEDxRVITM is an independently organized symposium at the nexus of technology, culture, and science. Hosted in Bengaluru's technology corridor, we curate bold ideas raw enough to pierce the noise and resilient enough to reshape reality.
            </p>
          </div>
          <div className="lg:col-span-4 border-l border-white/10 pl-8 space-y-4 font-mono text-xs text-white/50 leading-relaxed">
            <p>
              Under official license from TED Conferences, LLC, our mission is to stimulate critical dialogue, empower young innovators, and celebrate ideas worth spreading.
            </p>
            <span className="text-[#E62B1E] block">BENGALURU, INDIA</span>
          </div>
        </div>

        {/* Minimalist Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-white/[0.08]">
          {ABOUT_CONTENT.metrics.map((metric, idx) => (
            <MetricItem
              key={idx}
              target={metric.target}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>

        {/* Refined Quote Block */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#111111] border border-white/[0.08] max-w-4xl space-y-4">
          <p className="font-body text-lg sm:text-xl text-white/90 italic font-light leading-relaxed">
            {ABOUT_CONTENT.quote}
          </p>
          <span className="block font-mono text-xs text-[#E62B1E] tracking-widest uppercase">
            — {ABOUT_CONTENT.quoteAuthor}
          </span>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MARQUEE_PHRASES } from '../data/content';

export const MarqueeTapeSection: React.FC = () => {
  const tapeText = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES];

  return (
    <section className="relative py-8 bg-[#0C0C0C] border-y border-white/[0.08] overflow-hidden select-none">
      <div className="flex items-center overflow-hidden whitespace-nowrap animate-marquee">
        {tapeText.map((phrase, idx) => (
          <div key={idx} className="inline-flex items-center gap-8 mx-6 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            <span>{phrase}</span>
            <span className="text-[#E62B1E] text-sm">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

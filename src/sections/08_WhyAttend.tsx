import React from 'react';
import { WHY_ATTEND_CARDS } from '../data/content';

export const WhyAttendSection: React.FC = () => {
  return (
    <section id="why-attend" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              05 / PERSPECTIVE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Why Attend TEDxRVITM?
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Five principles that define the standard of dialogue and community we build.
          </p>
        </div>

        {/* Clean Spacious Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ATTEND_CARDS.map((card) => (
            <div
              key={card.id}
              className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#E62B1E] tracking-widest block font-medium">
                  {card.number}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {card.title}
                </h3>
                <p className="font-mono text-xs text-white/50">
                  {card.subtitle}
                </p>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

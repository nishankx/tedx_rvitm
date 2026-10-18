import React from 'react';
import { TESTIMONIALS } from '../data/content';

export const VoicesSection: React.FC = () => {
  return (
    <section id="voices" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              07 / ECHOES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Attendee Voices
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Reflections from alumni, researchers, and past delegates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#111111] border border-white/[0.08] flex flex-col justify-between space-y-8"
            >
              <blockquote className="font-body text-base sm:text-lg text-white/80 font-light leading-relaxed italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover grayscale contrast-110"
                />
                <div>
                  <h4 className="font-display font-semibold text-base text-white">
                    {t.author}
                  </h4>
                  <p className="font-mono text-xs text-[#E62B1E]">{t.role}</p>
                  <span className="font-mono text-[10px] text-white/40 block mt-0.5">
                    {t.batchOrAffiliation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PAST_SPEAKERS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const PastSpeakersSection: React.FC = () => {
  return (
    <section id="past-speakers" className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8">
          <div className="space-y-2 sm:space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              08 / ARCHIVE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Past Editions
            </h2>
          </div>

          <BrutalButton
            href="https://www.youtube.com/results?search_query=tedx+rvitm"
            variant="outline"
            size="sm"
          >
            Explore Full Archive ↗
          </BrutalButton>
        </div>

        {/* Clean Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PAST_SPEAKERS.map((spk) => (
            <div
              key={spk.id}
              className="group rounded-2xl bg-[#111111] border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={spk.image}
                  alt={spk.name}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                  {spk.edition}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <span className="text-[10px] font-mono text-[#E62B1E] uppercase tracking-wider block">
                  {spk.category}
                </span>
                <h4 className="font-display font-bold text-lg text-white group-hover:text-[#E62B1E] transition-colors">
                  {spk.name}
                </h4>
                <p className="font-body text-xs text-white/60 line-clamp-1 italic font-light">
                  "{spk.talk}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

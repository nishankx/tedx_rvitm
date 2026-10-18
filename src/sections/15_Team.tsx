import React from 'react';
import { TEAM_MEMBERS } from '../data/content';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              12 / ARCHITECTS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Organizing Committee
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Student leads and faculty curators directing TEDxRVITM 2026.
          </p>
        </div>

        {/* Clean Professional Portraits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                    {member.role}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xl text-white">
                    {member.name}
                  </h4>
                  <p className="font-mono text-xs text-white/50">{member.dept}</p>
                </div>

                <p className="font-body text-xs text-white/70 italic font-light leading-relaxed">
                  {member.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#E62B1E] hover:underline"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

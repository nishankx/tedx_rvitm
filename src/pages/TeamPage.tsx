import React from 'react';
import { TeamSection } from '../sections/15_Team';
import { Footer } from '../components/layout/Footer';

export const TeamPage: React.FC = () => {
  return (
    <main className="relative w-full bg-[#080808] text-white overflow-x-clip mt-[76px] sm:mt-[80px]">
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/[0.08]">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.08),transparent_70%)] pointer-events-none" />

        {/* Monumental Watermarks */}
        <div className="absolute top-6 -left-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.04]">
          <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
            COUNCIL
          </span>
        </div>
        <div className="absolute bottom-2 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]">
          <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
            LEADERS
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
            <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold">
              ✦ ORGANIZING COMMITTEE
            </span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
            The Architects
          </h1>
          <p className="font-text text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed font-light">
            The student engineers, curatorial thinkers, designers, and faculty advisors directing the vision of TEDxRVITM.
          </p>
        </div>
      </section>

      {/* ── SEAMLESS BORDERLESS TEAM GALLERY ── */}
      <TeamSection />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
};

export default TeamPage;


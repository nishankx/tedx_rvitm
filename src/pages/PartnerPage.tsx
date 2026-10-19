import React from 'react';
import { SponsorsSection } from '../sections/12_Sponsors';
import { Footer } from '../components/layout/Footer';

export const PartnerPage: React.FC = () => {
  return (
    <main className="relative w-full bg-[#080808] text-white overflow-x-clip mt-[76px] sm:mt-[80px]">
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/[0.08]">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.08),transparent_70%)] pointer-events-none" />

        {/* Monumental Watermarks */}
        <div className="absolute top-6 -left-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.04]">
          <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
            ALLIANCE
          </span>
        </div>
        <div className="absolute bottom-2 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]">
          <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
            PATRONS
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
            <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold">
              ✦ INSTITUTIONAL ALLIANCES
            </span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
            Partner With Us
          </h1>
          <p className="font-text text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed font-light">
            Collaborate with India's most ambitious student and technical minds on the red circle stage at RVITM, Bengaluru.
          </p>
        </div>
      </section>

      {/* ── SPONSORS & PATRONS SECTION ── */}
      <SponsorsSection />

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
};

export default PartnerPage;


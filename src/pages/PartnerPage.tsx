import React from 'react';
import { SponsorsSection } from '../sections/12_Sponsors';
import { Footer } from '../components/layout/Footer';

export const PartnerPage: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            Institutional Alliances
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white">
            Partner With Us
          </h1>
          <p className="font-body text-sm text-white/60 max-w-xl font-light">
            Collaborate with India's most ambitious student and technical minds on the red circle stage.
          </p>
        </div>
      </div>

      <SponsorsSection />
      <Footer />
    </div>
  );
};

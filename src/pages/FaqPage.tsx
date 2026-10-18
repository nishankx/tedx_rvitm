import React from 'react';
import { FaqSection } from '../sections/16_Faq';
import { Footer } from '../components/layout/Footer';

export const FaqPage: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            Guidelines & Policies
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white">
            Rules of Engagement
          </h1>
          <p className="font-body text-sm text-white/60 max-w-xl font-light">
            Everything you need to know regarding pass verification, venue security, and code of conduct.
          </p>
        </div>
      </div>

      <FaqSection />
      <Footer />
    </div>
  );
};

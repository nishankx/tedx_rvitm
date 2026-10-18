import React from 'react';
import { PassesSection } from '../sections/09_Passes';
import { Footer } from '../components/layout/Footer';

export const PassesPage: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            Access Passes
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white">
            Official Registration
          </h1>
          <p className="font-body text-sm text-white/60 max-w-xl font-light">
            Every pass includes access to all 18 stage keynotes, curated lunch, high-tea, and delegate networking.
          </p>
        </div>
      </div>

      <PassesSection />
      <Footer />
    </div>
  );
};

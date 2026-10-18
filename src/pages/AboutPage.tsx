import React from 'react';
import { AboutSection } from '../sections/04_About';
import { VoicesSection } from '../sections/10_Voices';
import { PastSpeakersSection } from '../sections/11_PastSpeakers';
import { Footer } from '../components/layout/Footer';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#080808] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            Institution & Mission
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white">
            About TEDxRVITM
          </h1>
          <p className="font-body text-sm text-white/60 max-w-xl font-light">
            Operated under official license from TED Conferences, LLC. Rooted in Bengaluru's academic and technology forefront.
          </p>
        </div>
      </div>

      <AboutSection />
      <VoicesSection />
      <PastSpeakersSection />
      <Footer />
    </div>
  );
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SPEAKERS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';
import { Footer } from '../components/layout/Footer';

export const SpeakerDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const speaker = SPEAKERS.find((s) => s.slug === slug) || SPEAKERS[0];

  return (
    <div className="w-full bg-[#080808] text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-white/40">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/speakers" className="hover:text-white">Speakers</Link>
          <span>/</span>
          <span className="text-white">{speaker.name}</span>
        </div>

        {/* Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/[0.08] pb-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 rounded-xl bg-[#111111] border border-white/[0.08] space-y-2 font-mono text-xs text-white/60">
              <p><span className="text-white font-medium">Affiliation:</span> {speaker.company}</p>
              <p><span className="text-white font-medium">Discipline:</span> {speaker.category}</p>
              <p><span className="text-white font-medium">Edition:</span> TEDxRVITM 2026</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                Invited Keynote Speaker
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
                {speaker.name}
              </h1>
              <p className="font-mono text-sm text-white/60">
                {speaker.role} • {speaker.company}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                Official Talk Proposal
              </span>
              <h2 className="font-display font-medium text-2xl text-white leading-snug">
                "{speaker.talkTitle}"
              </h2>
            </div>

            <div className="space-y-4 font-body text-base text-white/70 leading-relaxed font-light">
              <p>{speaker.fullBio}</p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border-l-2 border-[#E62B1E] space-y-1">
              <span className="font-mono text-xs text-[#E62B1E] uppercase font-medium">
                Core Thesis
              </span>
              <p className="font-display font-medium text-base text-white">
                "{speaker.keyTakeaway}"
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <BrutalButton href="/passes" variant="primary" size="md">
                Reserve Pass to See Talk ↗
              </BrutalButton>
              <BrutalButton href="/speakers" variant="outline" size="md">
                ← All Speakers
              </BrutalButton>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

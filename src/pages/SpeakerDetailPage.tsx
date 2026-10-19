import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SPEAKERS } from '../data/content';
import { Footer } from '../components/layout/Footer';

export const SpeakerDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const speaker = SPEAKERS.find((s) => s.slug === slug) || SPEAKERS[0];

  return (
    <main className="relative w-full bg-[#080808] text-white overflow-x-clip mt-[76px] sm:mt-[80px]">
      {/* ── AMBIENT GLOW & MONUMENTAL WATERMARKS ── */}
      <div className="absolute top-20 left-1/3 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.07),transparent_70%)] pointer-events-none" />

      <div className="absolute top-12 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.035]">
        <span className="font-display font-black text-[18vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          DOSSIER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 space-y-12 sm:space-y-16 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-subtext text-xs text-white/50 border-b border-white/[0.08] pb-6">
          <Link to="/" className="hover:text-[#E62B1E] transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <Link to="/speakers" className="hover:text-[#E62B1E] transition-colors">Speakers</Link>
          <span className="text-white/20">/</span>
          <span className="text-white font-bold">{speaker.name}</span>
        </div>

        {/* Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-white/[0.08]">
          {/* Left Column: Stadium Capsule Portrait & Metadata */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
            <div className="w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4.2] rounded-[80px] sm:rounded-[95px] overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl relative">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover filter contrast-105 pointer-events-none"
              />
              <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-subtext text-white/90 border border-white/20 whitespace-nowrap">
                {speaker.category}
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="w-full max-w-[340px] sm:max-w-[400px] p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 font-subtext text-xs text-white/70">
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span className="text-white/40 uppercase">Affiliation:</span>
                <span className="text-white font-semibold">{speaker.company}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span className="text-white/40 uppercase">Discipline:</span>
                <span className="text-white font-semibold">{speaker.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40 uppercase">Edition:</span>
                <span className="text-[#E62B1E] font-bold">TEDxRVITM 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Speaker Intellect, Talk Thesis & Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
                <span className="text-xs font-subtext tracking-widest text-[#E62B1E] uppercase font-bold">
                  ✦ INVITED KEYNOTE SPEAKER
                </span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
                {speaker.name}
              </h1>
              <p className="font-subtext text-xs sm:text-sm text-neutral-400">
                {speaker.role} • {speaker.company}
              </p>
            </div>

            {/* Talk Title Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[10px] font-subtext tracking-widest text-white/40 uppercase block font-bold">
                OFFICIAL TALK TITLE
              </span>
              <h2 className="font-editorial italic text-2xl sm:text-4xl text-white leading-snug">
                "{speaker.talkTitle}"
              </h2>
            </div>

            {/* Full Narrative Bio */}
            <div className="space-y-4 font-text text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              <p>{speaker.fullBio}</p>
            </div>

            {/* Core Thesis Highlight */}
            <div className="p-6 sm:p-7 rounded-2xl bg-black/40 border-l-4 border-l-[#E62B1E] border border-white/10 space-y-2">
              <span className="font-subtext text-xs text-[#E62B1E] uppercase font-bold tracking-wider">
                CORE THESIS &amp; PROVOCATION
              </span>
              <p className="font-subheading italic text-base sm:text-lg text-white leading-relaxed">
                "{speaker.keyTakeaway}"
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/#events"
                className="px-6 py-3 rounded-full bg-[#E62B1E] text-white hover:bg-white hover:text-black transition-all font-subtext text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-900/30"
              >
                Reserve Seat for Conference ↗
              </Link>
              <Link
                to="/speakers"
                className="px-6 py-3 rounded-full bg-white/[0.05] text-white hover:bg-white/15 border border-white/15 transition-all font-subtext text-xs font-medium uppercase tracking-wider"
              >
                ← Back to Speakers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
};

export default SpeakerDetailPage;


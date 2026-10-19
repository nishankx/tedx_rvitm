import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SPEAKERS } from '../data/content';
import { Footer } from '../components/layout/Footer';

export const SpeakersPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'Neuroscience & AI', 'Deep Tech & Space', 'Architecture & Climate', 'Cultural Informatics', 'Art & Sonic Science', 'Ecological Economics'];

  const filtered = SPEAKERS.filter((spk) => {
    const matchesCat = selectedCat === 'ALL' || spk.category === selectedCat;
    const matchesQuery =
      spk.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spk.talkTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spk.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <main className="relative w-full bg-[#080808] text-white overflow-x-clip mt-[76px] sm:mt-[80px]">
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative w-full pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/[0.08]">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.08),transparent_70%)] pointer-events-none" />

        {/* Monumental Watermarks */}
        <div className="absolute top-6 -left-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.04]">
          <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
            SPEAKERS
          </span>
        </div>
        <div className="absolute bottom-2 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]">
          <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
            ORATORS
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold">
                ✦ 2026 CONFIRMED ROSTER
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
              The Lineup
            </h1>
            <p className="font-text text-sm sm:text-base text-white/60 max-w-xl leading-relaxed font-light">
              Leading researchers, disruptive artists, and frontier engineers challenging assumptions on the TEDxRVITM stage.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-full font-subtext text-xs transition-all cursor-pointer ${
                    selectedCat === cat
                      ? 'bg-[#E62B1E] text-white font-bold shadow-md shadow-red-900/20'
                      : 'bg-white/[0.04] text-white/60 hover:text-white border border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search speakers or talks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2.5 rounded-full bg-white/[0.04] border border-white/15 text-white font-subtext text-xs focus:border-[#E62B1E] focus:outline-none px-4 placeholder:text-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STADIUM CAPSULE SPEAKERS GRID ── */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14">
            {filtered.map((speaker) => (
              <Link
                key={speaker.id}
                to={`/speakers/${speaker.slug}`}
                className="group flex flex-col items-center text-center select-none"
              >
                {/* Stadium / Capsule Shape Portrait */}
                <div className="w-full max-w-[280px] sm:max-w-none aspect-[3/4] rounded-[65px] sm:rounded-[80px] overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-[#E62B1E] transition-all duration-500 shadow-2xl relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  {/* Subtle Category Pill Badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-subtext text-white/90 border border-white/15 whitespace-nowrap">
                    {speaker.category}
                  </div>
                  {/* Subtle hover pill indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                    <span className="font-subtext text-xs text-white uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#E62B1E] font-bold shadow-lg shadow-red-900/40">
                      Read Dossier ↗
                    </span>
                  </div>
                </div>

                {/* Speaker Information Underneath */}
                <div className="mt-5 space-y-2 px-2 text-center max-w-[280px]">
                  <h3 className="font-subheading font-bold text-xl sm:text-2xl text-white group-hover:text-[#E62B1E] transition-colors tracking-tight leading-snug">
                    {speaker.name}
                  </h3>
                  <p className="font-subtext text-xs text-[#E62B1E] font-semibold tracking-wider uppercase">
                    {speaker.company}
                  </p>
                  <p className="font-editorial italic text-base sm:text-lg text-neutral-300 leading-snug line-clamp-2">
                    "{speaker.talkTitle}"
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center space-y-3 font-subtext text-sm text-white/40">
              <p>No speakers found matching your search criteria.</p>
              <button
                onClick={() => { setSelectedCat('ALL'); setSearchQuery(''); }}
                className="text-[#E62B1E] underline hover:text-white cursor-pointer"
              >
                Reset search &amp; filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
};

export default SpeakersPage;


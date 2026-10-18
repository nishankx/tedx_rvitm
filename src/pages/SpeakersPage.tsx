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
    <div className="w-full bg-[#080808] text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="border-b border-white/[0.08] pb-12 space-y-6">
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            Speakers Roster
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white">
            Confirmed Lineup
          </h1>
          <p className="font-body text-base text-white/60 max-w-xl font-light leading-relaxed">
            Leading researchers, artists, and engineers challenging assumptions at TEDxRVITM 2026.
          </p>

          {/* Filter Bar & Search */}
          <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                    selectedCat === cat
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/[0.04] text-white/60 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2.5 rounded-full bg-black/60 border border-white/15 text-white font-sans text-xs focus:border-[#E62B1E] focus:outline-none px-4"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((speaker) => (
            <div
              key={speaker.id}
              className="p-6 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                    {speaker.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white">
                    {speaker.name}
                  </h3>
                  <p className="font-mono text-xs text-white/50">
                    {speaker.role} • {speaker.company}
                  </p>
                </div>

                <p className="font-body text-xs text-white/70 line-clamp-2 leading-relaxed font-light">
                  "{speaker.talkTitle}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <Link
                  to={`/speakers/${speaker.slug}`}
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#E62B1E] hover:underline"
                >
                  Read Speaker Dossier ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

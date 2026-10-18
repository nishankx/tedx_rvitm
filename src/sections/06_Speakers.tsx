import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPEAKERS, EVENT_META } from '../data/content';
import type { Speaker } from '../types';
import { OptionWheel } from '../components/ui/OptionWheel';
import { FlexCarousel } from '../components/ui/FlexCarousel';
import { CircularCarousel, type CircularItem } from '../components/ui/CircularCarousel';
import { SpecularButton } from '../components/ui/SpecularButton';

const viewOptions = [
  { id: 'flex', label: 'Featured Flow' },
  { id: '3d', label: '3D Circular' },
  { id: 'grid', label: 'Grid Matrix' },
  { id: 'list', label: 'Dossier List' },
];

export const SpeakersSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<string>('flex');
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(SPEAKERS[0].id);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Map speakers for ReactBits FlexCarousel
  const flexItems = SPEAKERS.slice(0, 5).map((s) => ({
    id: s.id,
    title: s.name,
    subtitle: `${s.role} • ${s.company}`,
    description: `"${s.talkTitle}"`,
    image: s.image,
    badge: s.category,
    onClick: () => setSelectedSpeaker(s),
  }));

  // Map speakers for ReactBits CircularCarousel
  const circularItems: CircularItem[] = SPEAKERS.map((s) => ({
    id: s.id,
    title: s.name,
    category: s.category,
    image: s.image,
  }));

  const handleCircularSelect = (item: CircularItem) => {
    const sp = SPEAKERS.find((s) => s.id === item.id);
    if (sp) setSelectedSpeaker(sp);
  };

  return (
    <section id="speakers" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with ReactBits OptionWheel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              03 / VOICES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              {EVENT_META.speakerCount}+ Confirmed Keynotes
            </h2>
            <p className="font-mono text-xs text-white/50 max-w-lg">
              Explore revolutionary perspectives via dynamic carousel, 3D turntable, or comprehensive dossiers.
            </p>
          </div>

          {/* ReactBits OptionWheel for View Switching */}
          <OptionWheel
            options={viewOptions}
            selectedId={viewMode}
            onSelect={(id) => setViewMode(id)}
          />
        </div>

        {/* VIEW 1: REACTBITS FLEX CAROUSEL */}
        {viewMode === 'flex' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-white/40">
              <span>HOVER / CLICK CARD TO EXPAND TALK SUMMARY</span>
              <span>01 - 05 OF {SPEAKERS.length}</span>
            </div>
            <FlexCarousel items={flexItems} />
          </div>
        )}

        {/* VIEW 2: REACTBITS CIRCULAR 3D CAROUSEL */}
        {viewMode === '3d' && (
          <div className="space-y-4">
            <div className="text-center font-mono text-xs text-white/40">
              CLICK ADJACENT CARDS OR ARROWS TO ROTATE • CLICK CENTER FOR DOSSIER
            </div>
            <CircularCarousel items={circularItems} onItemClick={handleCircularSelect} />
          </div>
        )}

        {/* VIEW 3: GRID MATRIX */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group p-6 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Portrait photo */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#181818]">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                      {speaker.category}
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#E62B1E] transition-colors">
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

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-white transition-colors">
                  <span>VIEW DOSSIER</span>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 4: LIST ACCORDION VIEW */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {SPEAKERS.map((speaker, index) => {
              const isOpen = activeAccordionId === speaker.id;
              return (
                <div
                  key={speaker.id}
                  className="rounded-xl border border-white/[0.08] bg-[#111111] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveAccordionId(isOpen ? null : speaker.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                          {speaker.name}
                        </h3>
                        <span className="font-mono text-xs text-white/50">{speaker.role}</span>
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-white/60">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="p-6 pt-0 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                      >
                        <div className="md:col-span-4 aspect-video rounded-lg overflow-hidden">
                          <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="md:col-span-8 space-y-4">
                          <p className="font-display font-medium text-lg text-white">
                            "{speaker.talkTitle}"
                          </p>
                          <p className="font-body text-xs text-white/70 leading-relaxed font-light">
                            {speaker.fullBio}
                          </p>
                          <SpecularButton
                            onClick={() => setSelectedSpeaker(speaker)}
                            variant="outline"
                          >
                            Full Talk Dossier ↗
                          </SpecularButton>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Speaker Dossier Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#141414] border border-white/20 p-8 sm:p-12 text-white max-h-[90vh] overflow-y-auto space-y-8"
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 text-white/70 hover:text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                    {selectedSpeaker.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="font-mono text-xs text-white/60">
                    {selectedSpeaker.role} • {selectedSpeaker.company}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="font-mono text-[10px] text-white/40 uppercase block">KEYNOTE TITLE</span>
                <p className="font-display font-medium text-lg text-white">
                  "{selectedSpeaker.talkTitle}"
                </p>
              </div>

              <p className="font-body text-sm text-white/80 leading-relaxed font-light">
                {selectedSpeaker.fullBio}
              </p>

              <div className="flex gap-4 pt-4 border-t border-white/10">
                <SpecularButton href="/passes" variant="primary">
                  Reserve Pass to See Talk ↗
                </SpecularButton>
                <SpecularButton onClick={() => setSelectedSpeaker(null)} variant="outline">
                  Close
                </SpecularButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpeakersSection;

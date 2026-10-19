import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { PAST_SPEAKERS } from '../data/content';
import type { PastSpeaker } from '../types';
import { BrutalButton } from '../components/ui/BrutalButton';

export const PastSpeakersSection: React.FC = () => {
  const [selectedPastSpeaker, setSelectedPastSpeaker] = useState<PastSpeaker | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section
      id="past-speakers"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          ARCHIVE
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header with scroll control & fade-in */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block">
              ARCHIVE
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase">
              Past Editions
            </h2>
          </div>

          <BrutalButton
            href="https://www.youtube.com/results?search_query=tedx+rvitm"
            variant="outline"
            size="sm"
          >
            Explore Full Archive ↗
          </BrutalButton>
        </motion.div>

        {/* Minimalistic Stadium Capsule Panels Grid with Parallax & Staggered Fade-in */}
        <motion.div
          style={{ y: gridY }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-start"
        >
          {PAST_SPEAKERS.map((spk, idx) => (
            <motion.div
              key={spk.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => setSelectedPastSpeaker(spk)}
              className="flex flex-col items-center text-center cursor-pointer group transition-all duration-300 select-none"
            >
              {/* Stadium / Capsule Oval Shape Photo */}
              <div className="w-full aspect-[3/4.2] rounded-[55px] sm:rounded-[70px] overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-[#E62B1E] transition-all duration-500 shadow-xl relative">
                <img
                  src={spk.image}
                  alt={spk.name}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="font-subtext text-[9px] text-white uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20">
                    Dossier ↗
                  </span>
                </div>
              </div>

              {/* Speaker Name & Category Centered Underneath */}
              <div className="mt-3.5 space-y-1 text-center">
                <h4 className="font-subheading font-bold text-base sm:text-lg text-white group-hover:text-[#E62B1E] transition-colors tracking-tight leading-snug">
                  {spk.name}
                </h4>
                <p className="font-text text-xs text-neutral-400 font-normal leading-snug line-clamp-1">
                  {spk.category}
                </p>
                <span className="font-subtext text-[10px] text-[#E62B1E]/80 uppercase block">
                  {spk.edition}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Modal Popup */}
      <AnimatePresence>
        {selectedPastSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedPastSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-10 space-y-6 relative overflow-hidden shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedPastSpeaker(null)}
                className="absolute top-6 right-6 font-subtext text-xs text-white/50 hover:text-white cursor-pointer px-3 py-1 rounded-full border border-white/10"
              >
                CLOSE ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start border-b border-white/10 pb-6">
                <img
                  src={selectedPastSpeaker.image}
                  alt={selectedPastSpeaker.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover filter contrast-125 flex-shrink-0 border border-white/10"
                />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-subtext text-xs text-[#E62B1E] uppercase font-bold px-2 py-0.5 rounded bg-[#E62B1E]/10">
                      {selectedPastSpeaker.category}
                    </span>
                    <span className="font-subtext text-[10px] text-white/40 uppercase">
                      {selectedPastSpeaker.edition}
                    </span>
                  </div>
                  <h3 className="font-subheading font-bold text-2xl sm:text-3xl text-white">
                    {selectedPastSpeaker.name}
                  </h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-subtext text-[#0A66C2] hover:underline"
                  >
                    LinkedIn Profile ↗
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <span className="font-subtext text-[10px] text-[#E62B1E] uppercase tracking-widest font-bold">
                  TALK TITLE
                </span>
                <p className="font-editorial italic text-2xl sm:text-3xl text-white leading-snug">
                  "{selectedPastSpeaker.talk}"
                </p>
                <p className="font-text text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  Archived keynote presentation delivered at TEDxRVITM {selectedPastSpeaker.edition}. Exploring cross-disciplinary breakthroughs in {selectedPastSpeaker.category}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PastSpeakersSection;

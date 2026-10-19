import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SPEAKERS } from '../data/content';
import type { Speaker } from '../types';

export const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-130, 130]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [130, -130]);
  const galleryY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  // Stadium / Capsule profile panel matching user reference image
  const renderSpeakerCard = (speaker: Speaker, index: number, lineLabel: string) => (
    <div
      key={`${speaker.id}-${index}-${lineLabel}`}
      onClick={() => setSelectedSpeaker(speaker)}
      className="flex flex-col items-center text-center cursor-pointer group flex-shrink-0 w-44 sm:w-52 md:w-56 transition-all duration-300 select-none"
    >
      {/* Tall Stadium / Capsule Shape Portrait */}
      <div className="w-full aspect-[3/4.2] rounded-[65px] sm:rounded-[80px] md:rounded-[90px] overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-[#E62B1E] transition-all duration-500 shadow-2xl relative">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
        />
        {/* Subtle hover pill indicator */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="font-mono text-[10px] text-white uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20">
            View Talk ↗
          </span>
        </div>
      </div>

      {/* Speaker Name & Role Centered Underneath */}
      <div className="mt-4 sm:mt-5 space-y-1.5 px-2 text-center max-w-[220px]">
        <h3 className="font-subheading font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-[#E62B1E] transition-colors tracking-tight leading-snug">
          {speaker.name}
        </h3>
        <p className="font-text text-xs sm:text-sm text-neutral-400 font-normal leading-snug line-clamp-2">
          {speaker.role}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 sm:py-32 md:py-36 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E62B1E]/[0.05] rounded-full blur-[180px] pointer-events-none -z-0" />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          VOICES
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          PIONEERS
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2">
            <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block font-bold">
              ✦ VOICES COHORT 2026
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              PAST SPEAKERS
            </h2>
            <p className="font-text text-xs sm:text-sm text-white/50 max-w-xl">
              Visionaries, technologists, and pioneers bending consensus reality through revolutionary talks.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Continuous Stadium Capsule Marquee (Single Elegant Gallery Stream with Parallax & Fade-in) ── */}
      <motion.div
        style={{ y: galleryY }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="w-full overflow-hidden py-6 mt-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-8 sm:gap-10 md:gap-12 w-max ${
            isPaused ? '[animation-play-state:paused]' : ''
          } animate-marquee-slow`}
        >
          {[...SPEAKERS, ...SPEAKERS, ...SPEAKERS, ...SPEAKERS].map((speaker, index) =>
            renderSpeakerCard(speaker, index, 'stream')
          )}
        </div>
      </motion.div>

      {/* ── DETAILED SPEAKER DOSSIER MODAL POPUP ── */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111111] border border-white/20 rounded-2xl max-w-3xl w-full p-6 sm:p-10 space-y-6 relative overflow-hidden shadow-2xl my-8 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 font-mono text-xs text-white/50 hover:text-white cursor-pointer px-3 py-1 rounded-full border border-white/10 hover:border-white/30 transition-colors"
              >
                CLOSE ✕
              </button>

              {/* Speaker Header with Photo, Domain, Name & Socials */}
              <div className="flex flex-col sm:flex-row gap-6 items-start border-b border-white/10 pb-6">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover filter contrast-125 flex-shrink-0 shadow-lg border border-white/10"
                />
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/20">
                      {selectedSpeaker.category}
                    </span>
                    <span className="font-subtext text-[10px] text-white/40 uppercase tracking-wider">
                      KEYNOTE
                    </span>
                  </div>

                  <h3 className="font-subheading font-bold text-2xl sm:text-4xl text-white tracking-tight">
                    {selectedSpeaker.name}
                  </h3>

                  <p className="font-subtext text-xs sm:text-sm text-white/70">
                    {selectedSpeaker.role}, <strong className="text-white font-semibold">{selectedSpeaker.company}</strong>
                  </p>

                  {/* Social Profile Links */}
                  <div className="pt-2 flex items-center gap-3">
                    {selectedSpeaker.socials.linkedin && (
                      <a
                        href={selectedSpeaker.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A66C2]/15 text-[#0A66C2] border border-[#0A66C2]/30 font-subtext text-xs font-semibold hover:bg-[#0A66C2] hover:text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                        <span>LinkedIn Profile ↗</span>
                      </a>
                    )}
                    {selectedSpeaker.socials.twitter && (
                      <a
                        href={selectedSpeaker.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/50 hover:text-white font-subtext text-xs transition-colors"
                      >
                        Twitter/X ↗
                      </a>
                    )}
                    {selectedSpeaker.socials.website && (
                      <a
                        href={selectedSpeaker.socials.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/50 hover:text-white font-subtext text-xs transition-colors"
                      >
                        Website ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Talk Dossier */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-subtext text-[10px] text-[#E62B1E] uppercase tracking-widest font-bold">
                    PRESENTATION DOSSIER
                  </span>
                  <p className="font-editorial italic text-2xl sm:text-3xl text-white leading-snug">
                    "{selectedSpeaker.talkTitle}"
                  </p>
                </div>

                {/* Abstract */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    TALK ABSTRACT
                  </span>
                  <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                    {selectedSpeaker.bio}
                  </p>
                </div>

                {/* Full Biography */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    CURATED BIOGRAPHY
                  </span>
                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {selectedSpeaker.fullBio}
                  </p>
                </div>

                {/* Core Key Takeaway Quote Box */}
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                  <span className="font-mono text-[10px] text-[#E62B1E] uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
                    CORE KEY TAKEAWAY
                  </span>
                  <p className="font-body text-xs sm:text-sm text-white/95 italic leading-relaxed">
                    "{selectedSpeaker.keyTakeaway}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpeakersSection;

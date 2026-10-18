import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SPEAKERS, EVENT_META } from '../data/content';
import type { Speaker } from '../types';
import { FlexCarousel, type FlexCarouselItem } from '../components/ui/FlexCarousel';
import { SpecularButton } from '../components/ui/SpecularButton';

export const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Map speakers for ReactBits FlexCarousel (WebGl Liquid Lens)
  const flexItems: FlexCarouselItem[] = SPEAKERS.map((s) => ({
    src: s.image,
    alt: `${s.name} - ${s.role}`,
    title: s.name,
    subtitle: `${s.role} • ${s.company} — "${s.talkTitle}"`,
  }));

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: header translation, revolving accent
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);
  const revolveRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/[0.08] overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E62B1E]/[0.05] rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        {/* Header: Seamlessly part of the site architecture */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
                03 / VOICES
              </span>
              <motion.span
                style={{ rotate: revolveRotate }}
                className="inline-block text-[#E62B1E] text-xs font-mono"
              >
                ✦
              </motion.span>
              <span className="font-mono text-[11px] text-white/40 tracking-wider">
                COHORT 2026
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-white">
              {EVENT_META.speakerCount}+ Confirmed Keynotes
            </h2>
            <p className="font-mono text-xs sm:text-sm text-white/50 max-w-xl">
              Visionaries, technologists, and pioneers bending perceptions through revolutionary talks.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-white/40">
            <span className="text-[#E62B1E] flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E] animate-pulse" />
              LIQUID LENS FIELD
            </span>
            <span>•</span>
            <span>DRAG / FLING TO BROWSE</span>
          </div>
        </motion.div>

        {/* Large, Seamless React Bits FlexCarousel Stage */}
        <div className="relative w-full h-[460px] sm:h-[620px] lg:h-[820px] rounded-2xl overflow-hidden bg-black/20">
          <FlexCarousel
            items={flexItems}
            preset="liquid"
            intro="none"
            cardHeight={0.62}
            gap={18}
            radius={18}
            squeeze={0.22}
            focusOnClick={true}
            captions={true}
            captureWheel={false}
            onSelect={(index) => {
              if (SPEAKERS[index]) {
                setSelectedSpeaker(SPEAKERS[index]);
              }
            }}
          />
        </div>

        {/* Seamless Navigation Info Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 pt-4 border-t border-white/[0.08] gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white/60">← DRAG / ARROW KEYS / TOUCH →</span>
            <span>•</span>
            <span>CLICK FOCUSED CARD FOR TALK DOSSIER</span>
          </div>
          <div className="text-right text-[#E62B1E] tracking-wider uppercase">
            {SPEAKERS.length} CONFIRMED KEYNOTE SPEAKERS
          </div>
        </div>
      </div>

      {/* Speaker Dossier Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#141414] border border-white/20 p-5 sm:p-8 md:p-12 text-white max-h-[90vh] overflow-y-auto space-y-6 sm:space-y-8"
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 rounded-full border border-white/20 text-white/70 hover:text-white flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-20 h-20 sm:w-32 sm:h-32 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                    {selectedSpeaker.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-3xl text-white">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="font-mono text-xs text-white/60">
                    {selectedSpeaker.role} • {selectedSpeaker.company}
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                <span className="font-mono text-[10px] text-white/40 uppercase block">KEYNOTE TITLE</span>
                <p className="font-display font-medium text-base sm:text-lg text-white">
                  "{selectedSpeaker.talkTitle}"
                </p>
              </div>

              <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {selectedSpeaker.fullBio}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-white/10">
                <SpecularButton href="#schedule" variant="primary" className="w-full sm:w-auto">
                  Explore Full Lineup ↗
                </SpecularButton>
                <SpecularButton onClick={() => setSelectedSpeaker(null)} variant="outline" className="w-full sm:w-auto">
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

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { UPCOMING_EVENTS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';
import OptionWheel from '../components/ui/OptionWheel';

export const UpcomingEventsSection: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [wheelPos, setWheelPos] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Pinned scroll-controlled sequence: entire section persists while scrolling through all editions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const count = UPCOMING_EVENTS.length;

  // Continuous wheel position directly linked to mouse scroll anywhere on page
  const continuousPosition = useTransform(scrollYProgress, [0, 1], [0, count - 1]);

  useMotionValueEvent(continuousPosition, 'change', (latest) => {
    setWheelPos(latest);
    const idx = Math.min(count - 1, Math.max(0, Math.round(latest)));
    if (idx !== selectedEventIndex) {
      setSelectedEventIndex(idx);
    }
  });

  const handleItemSelect = (idx: number) => {
    const clamped = Math.max(0, Math.min(count - 1, idx));
    setSelectedEventIndex(clamped);
    setWheelPos(clamped);
  };

  const handleNext = () => {
    handleItemSelect((selectedEventIndex + 1) % count);
  };

  const handlePrev = () => {
    handleItemSelect((selectedEventIndex - 1 + count) % count);
  };

  // Labels rendered on the borderless 3D OptionWheel
  const wheelLabels = UPCOMING_EVENTS.map(
    (event, idx) =>
      `0${idx + 1} • ${event.badge} // ${event.title.split(':')[0].replace('TEDxRVITM 2026', 'MAIN').replace('TEDx SALON', 'SALON').trim()}`
  );

  const currentEvent = UPCOMING_EVENTS[selectedEventIndex] || UPCOMING_EVENTS[0];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative bg-[#080808] text-white select-none py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#E62B1E]/[0.07] rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-red-950/[0.12] rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-8 sm:space-y-12 relative z-10">
        {/* Section Header: Seamlessly embedded in the site layout */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-white/[0.08]">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
                02 / GATHERINGS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] text-white/40 tracking-wider">
                EXPLORE ALL EDITIONS
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-6xl tracking-tight text-white">
              Upcoming Events &amp; Salons
            </h2>
          </div>

          {/* Interactive Edition Switcher & Progress */}
          <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs">
            {/* Quick Prev / Next Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous edition"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#E62B1E] text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="Next edition"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#E62B1E] text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                →
              </button>
            </div>

            <span className="text-[#E62B1E] font-bold text-sm sm:text-base">
              0{selectedEventIndex + 1}
            </span>
            <div className="w-16 sm:w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#E62B1E]"
                style={{
                  width: `${((selectedEventIndex + 1) / count) * 100}%`,
                  transition: 'width 0.3s ease-out',
                }}
              />
            </div>
            <span className="text-white/40">0{count}</span>
          </div>
        </div>

        {/* Seamless 3D OptionWheel & Event Showcase: NO artificial boxed borders */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: 3D OptionWheel floating directly on the page */}
          <div
            className="lg:col-span-5 h-[240px] sm:h-[320px] lg:h-[450px] w-full relative flex flex-col justify-center"
            data-lenis-prevent
          >
            <OptionWheel
              items={wheelLabels}
              value={wheelPos}
              captureWheel={true}
              side="left"
              fontSize={1.35}
              spacing={1.4}
              curve={1.1}
              tilt={7}
              blur={1.2}
              fade={0.3}
              minOpacity={0.08}
              smoothing={190}
              inset={10}
              loop={false}
              draggable={true}
              textColor="#555555"
              activeColor="#ffffff"
              onChange={(idx) => handleItemSelect(idx)}
            />

            {/* Quick edition indicator pills below wheel on mobile */}
            <div className="flex lg:hidden items-center justify-center gap-2 pt-3">
              {UPCOMING_EVENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleItemSelect(i)}
                  className={`w-7 h-7 rounded-full text-xs font-mono transition-all ${
                    selectedEventIndex === i
                      ? 'bg-[#E62B1E] text-white font-bold scale-110 shadow-[0_0_12px_rgba(230,43,30,0.5)]'
                      : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-label={`Select event 0${i + 1}`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Spotlight Event Dossier flowing without container cards */}
          <div className="lg:col-span-7 relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-8"
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#E62B1E] uppercase font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/20">
                      {currentEvent.badge}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-white/50 tracking-wider">
                      STATUS : <strong className="text-white font-medium">{currentEvent.status}</strong>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                    {currentEvent.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-[#E62B1E] uppercase tracking-wider">
                    {currentEvent.type}
                  </p>

                  <p className="font-body text-xs sm:text-base text-white/70 leading-relaxed font-light max-w-2xl">
                    {currentEvent.description}
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6 pt-3 sm:pt-6 border-t border-white/[0.08]">
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs sm:text-sm">
                    <div className="space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest block">
                        CALENDAR DATE
                      </span>
                      <p className="text-white font-medium text-xs sm:text-base">{currentEvent.date}</p>
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest block">
                        LOCATION &amp; HALL
                      </span>
                      <p className="text-white/80 text-xs sm:text-sm line-clamp-1">{currentEvent.venue}</p>
                    </div>
                  </div>

                  <div className="pt-1 sm:pt-2">
                    <BrutalButton
                      href={currentEvent.link}
                      variant="primary"
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      Reserve Seat ↗
                    </BrutalButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer info line with direct, seamless link to confirmed keynotes */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-white/40 pt-6 border-t border-white/[0.06] gap-2">
          <span>SPIN WHEEL OR DRAG TO SWITCH BETWEEN ALL 0{count} EDITIONS</span>
          <a
            href="#speakers"
            className="text-[#E62B1E] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>↓</span> NEXT: 03 / CONFIRMED KEYNOTES
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

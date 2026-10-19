import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { UPCOMING_EVENTS } from '../data/content';

export interface UpcomingEventsSectionProps {
  scrollY?: MotionValue<number>;
  scrollYProgress?: MotionValue<number>;
}

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({
  scrollY,
  scrollYProgress,
}) => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);
  const count = UPCOMING_EVENTS.length;

  // Use props from App.tsx or fallback to local useScroll
  const { scrollY: fallbackScrollY, scrollYProgress: fallbackScrollYProgress } = useScroll();
  const activeScrollY = scrollY || fallbackScrollY;
  const activeScrollYProgress = scrollYProgress || fallbackScrollYProgress;

  // Transforms driven directly by the passed scroll values from App.tsx
  const watermarkX1 = useTransform(activeScrollYProgress, [0, 1], [-120, 120]);
  const watermarkX2 = useTransform(activeScrollYProgress, [0, 1], [120, -120]);
  const watermarkDriftY = useTransform(activeScrollY, (y) => (y % 1000) * 0.03);
  const headerY = useTransform(activeScrollYProgress, [0, 1], [20, -20]);
  const contentParallax = useTransform(activeScrollYProgress, [0, 1], [14, -14]);

  const currentEvent = UPCOMING_EVENTS[activeEventIndex];

  const handleNext = () => {
    setActiveEventIndex((prev) => (prev + 1) % count);
  };

  const handlePrev = () => {
    setActiveEventIndex((prev) => (prev - 1 + count) % count);
  };

  // Keyboard navigation (horizontal arrows only so vertical page scrolling is never blocked)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [count]);

  // Touch swipe support (only triggers on distinct horizontal swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section
      id="events"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative bg-[#FAF9F5] text-neutral-900 select-none py-24 sm:py-32 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* ── ARCHITECTURAL DRAFTING PATTERNS & GRIDS ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SCROLL TRANSFORMS) ── */}
      <motion.div
        style={{ x: watermarkX1, y: watermarkDriftY }}
        className="absolute top-8 -left-6 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-100"
      >
        <span className="font-display font-black text-[15vw] tracking-tighter text-neutral-950/[0.07] [-webkit-text-stroke:1.5px_rgba(0,0,0,0.12)] uppercase whitespace-nowrap block select-none">
          GATHERINGS
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2, y: watermarkDriftY }}
        className="absolute bottom-4 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-100"
      >
        <span className="font-display font-black text-[13vw] tracking-tighter text-neutral-950/[0.07] [-webkit-text-stroke:1.5px_rgba(0,0,0,0.12)] uppercase whitespace-nowrap block select-none">
          SALONS
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* ── SECTION HEADER BAR WITH PARALLAX TRANSFORM & FADE-IN ── */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-black/10"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold">
                ✦ GATHERINGS &amp; SALONS
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-950 uppercase">
              Upcoming Events &amp; Salons
            </h2>
          </div>

          {/* Minimal Controls: Counter & Arrows */}
          <div className="flex items-center gap-4 font-subtext text-xs">
            <span className="text-neutral-400">
              <strong className="text-neutral-900 font-bold">0{activeEventIndex + 1}</strong> / 0{count}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous event"
                className="w-9 h-9 rounded-full border border-black/20 hover:border-black hover:bg-black/5 flex items-center justify-center transition-all cursor-pointer font-bold text-neutral-900"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="Next event"
                className="w-9 h-9 rounded-full border border-black/20 hover:border-black hover:bg-black/5 flex items-center justify-center transition-all cursor-pointer font-bold text-neutral-900"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── YC-STYLE 3-ZONE CAROUSEL STAGE WITH DEPTH PARALLAX & FADE-IN ── */}
        <motion.div
          style={{ y: contentParallax }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          
          {/* ── ONE SIDE: EVENT DETAILS (Left Column) ── */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Event Title (Subheading - Playfair Display) */}
                <div className="space-y-1.5">
                  <h3 className="font-subheading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 tracking-tight leading-tight">
                    {currentEvent.title}
                  </h3>
                </div>

                {/* Narrative Description (Text - Plus Jakarta Sans) */}
                <p className="font-text text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {currentEvent.description}
                </p>

                {/* Date & Venue Specifications (Sub text - Space Mono) */}
                <div className="pt-4 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-subtext text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
                      CALENDAR DATE
                    </span>
                    <p className="text-neutral-950 font-bold">{currentEvent.date}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
                      VENUE &amp; LOCATION
                    </span>
                    <p className="text-neutral-700">{currentEvent.venue}</p>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-2">
                  <a
                    href={currentEvent.link}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#080808] text-white hover:bg-[#E62B1E] transition-all font-subtext text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-glow-red cursor-pointer"
                  >
                    <span>Explore Event</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── CENTER: VERTICAL LIST SELECTOR (STRICTLY VERTICAL ON PHONE & DESKTOP) ── */}
          <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-5 w-full py-4 lg:py-6 select-none border-b lg:border-b-0 lg:border-x border-black/10 px-2 sm:px-4">
            {UPCOMING_EVENTS.map((event, idx) => {
              const isActive = activeEventIndex === idx;

              return (
                <button
                  key={event.id}
                  onClick={() => setActiveEventIndex(idx)}
                  className={`group relative transition-all duration-300 py-2 sm:py-2.5 px-4 sm:px-5 rounded-xl text-center cursor-pointer focus:outline-none flex items-center justify-center gap-2.5 w-full max-w-xs sm:max-w-sm lg:max-w-none ${
                    isActive
                      ? 'scale-100 lg:scale-105 bg-black/5 lg:bg-transparent'
                      : 'hover:scale-100 opacity-40 hover:opacity-80 hover:bg-black/[0.02] lg:hover:bg-transparent'
                  }`}
                >
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'font-heading font-black text-lg sm:text-2xl lg:text-3xl text-neutral-950 drop-shadow-sm'
                        : 'font-subheading font-medium text-base sm:text-lg lg:text-xl text-neutral-400 group-hover:text-neutral-800'
                    }`}
                  >
                    {event.shortName || event.title.split(':')[0].trim()}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="activeEventIndicator"
                      className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── OTHER END: EVENT PIC (Right Column) ── */}
          <div className="lg:col-span-4 order-3 flex flex-col justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-200 border border-black/10 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEvent.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Editorial Caption Underneath (YC Style - Instrument Serif) */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`caption-${currentEvent.id}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="font-editorial italic text-sm sm:text-base text-neutral-500 text-center sm:text-left mt-3 px-1 leading-relaxed"
              >
                {currentEvent.caption}
              </motion.p>
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default UpcomingEventsSection;

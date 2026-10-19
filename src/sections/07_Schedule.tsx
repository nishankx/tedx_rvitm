import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { AGENDA_SESSIONS } from '../data/content';

export const ScheduleSection: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentEvent = AGENDA_SESSIONS[activeEventIndex] || AGENDA_SESSIONS[0];
  const items = currentEvent.items;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const headerY = useTransform(scrollYProgress, [0, 1], [25, -15]);
  const tableParallax = useTransform(scrollYProgress, [0, 1], [30, -20]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper to format consistent timing ranges (e.g., "10:00 – 11:15 AM")
  const formatTimeRange = (time: string, nextTime?: string, index?: number, total?: number) => {
    if (time.includes('—') || time.includes('–') || time.includes('-')) {
      return time;
    }
    if (nextTime) {
      return `${time} – ${nextTime}`;
    }
    if (index === (total || 0) - 1) {
      return `${time} – LATE`;
    }
    return time;
  };

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="relative bg-[#FAF9F5] text-neutral-900 py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.04),transparent_70%)] pointer-events-none" />

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

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-100"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-neutral-950/[0.07] [-webkit-text-stroke:1.5px_rgba(0,0,0,0.12)] uppercase whitespace-nowrap block select-none">
          RUNDOWN
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-4 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-100"
      >
        <span className="font-display font-black text-[14vw] tracking-tighter text-neutral-950/[0.07] [-webkit-text-stroke:1.5px_rgba(0,0,0,0.12)] uppercase whitespace-nowrap block select-none">
          SCHEDULE
        </span>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* ── SECTION HEADER WITH PARALLAX & FADE-IN ── */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6 sm:pb-8"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold">
                ✦ EVENT TIMELINE &amp; RUNDOWN
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-neutral-950">
              Run of Show
            </h2>
          </div>
          <p className="font-text text-xs sm:text-sm text-neutral-500 max-w-sm">
            Official chronological breakdown and stage timing sequences for TEDxRVITM sessions.
          </p>
        </motion.div>

        {/* ── EVENT SELECTOR: BRUTALIST DROPDOWN MENU ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            {/* Dropdown Trigger Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full sm:w-auto min-w-[280px] md:min-w-[340px] px-5 py-3.5 rounded-2xl bg-white border border-black/15 hover:border-black/35 shadow-xs transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <div className="flex items-center gap-3 text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E62B1E] text-white font-subtext font-bold text-xs tracking-wider">
                  0{activeEventIndex + 1}
                </span>
                <div className="flex flex-col">
                  <span className="font-subtext text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                    Select Event Session
                  </span>
                  <span className="font-subheading font-bold text-sm sm:text-base text-neutral-950 tracking-tight">
                    {currentEvent.sessionTitle}
                  </span>
                </div>
              </div>

              {/* Animated Dropdown Chevron */}
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 text-xs font-bold flex-shrink-0"
              >
                ▼
              </motion.div>
            </button>

            {/* Dropdown Options Popup */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 4, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-0 top-full mt-1.5 w-full sm:w-[380px] md:w-[420px] bg-white rounded-2xl border border-black/15 shadow-2xl overflow-hidden z-50 divide-y divide-black/5"
                  role="listbox"
                >
                  <div className="px-4 py-2.5 bg-neutral-50/80 border-b border-black/5 flex items-center justify-between text-[11px] font-subtext text-neutral-400 uppercase tracking-widest">
                    <span>Available Sessions</span>
                    <span>{AGENDA_SESSIONS.length} Sessions</span>
                  </div>

                  <div className="max-h-[320px] overflow-y-auto divide-y divide-black/5">
                    {AGENDA_SESSIONS.map((eventSession, idx) => {
                      const isSelected = activeEventIndex === idx;

                      return (
                        <button
                          key={eventSession.sessionId}
                          type="button"
                          onClick={() => {
                            setActiveEventIndex(idx);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3.5 transition-colors duration-150 flex items-center justify-between gap-4 cursor-pointer ${
                            isSelected
                              ? 'bg-neutral-950 text-white'
                              : 'hover:bg-neutral-50 text-neutral-900'
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center font-subtext text-xs font-bold ${
                                isSelected
                                  ? 'bg-[#E62B1E] text-white'
                                  : 'bg-neutral-100 text-neutral-600'
                              }`}
                            >
                              0{idx + 1}
                            </span>
                            <div>
                              <p
                                className={`font-subheading text-sm font-bold tracking-tight ${
                                  isSelected ? 'text-white' : 'text-neutral-950'
                                }`}
                              >
                                {eventSession.sessionTitle}
                              </p>
                              <p
                                className={`font-subtext text-[11px] mt-0.5 ${
                                  isSelected ? 'text-neutral-300' : 'text-neutral-500'
                                }`}
                              >
                                {eventSession.timeRange}
                              </p>
                            </div>
                          </div>

                          {isSelected && (
                            <span className="text-[#E62B1E] font-bold text-sm">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Session Timing Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 font-subtext text-xs text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-[#E62B1E]" />
            <span className="font-bold uppercase tracking-wider">{currentEvent.timeRange}</span>
          </div>
        </div>

        {/* ── THE POSTER RUNDOWN BOARD CONTAINER (LOCKED TO TED RED COLOR) WITH PARALLAX & FADE-IN ── */}
        <motion.div
          style={{ y: tableParallax }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          
          {/* Top Poster Meta Bar */}
          <div className="flex items-center justify-between px-2 text-xs sm:text-sm font-subtext text-neutral-600">
            <span className="font-editorial italic font-normal text-sm sm:text-base text-neutral-600">
              {currentEvent.sessionTitle}
            </span>
            <span className="font-bold uppercase tracking-wider text-neutral-800">
              Main Stage • Bengaluru
            </span>
          </div>

          {/* The Master Modular Card */}
          <div className="rounded-3xl border border-black/15 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.sessionId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="divide-y divide-black/10"
              >
                {items.map((item, idx) => {
                  const nextItem = items[idx + 1];
                  const timeRangeStr = formatTimeRange(item.time, nextItem?.time, idx, items.length);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.035 }}
                      className="group flex flex-col sm:flex-row items-stretch transition-colors"
                    >
                      {/* ── LEFT CELL: SIGNATURE TED RED TIME BLOCK WITH ARROW ── */}
                      <div className="bg-[#E62B1E] text-white w-full sm:w-[260px] md:w-[310px] lg:w-[330px] flex-shrink-0 flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-[#B81F14] sm:border-black/15 transition-colors duration-300">
                        <span className="font-subtext font-black text-sm sm:text-base tracking-tight uppercase">
                          {timeRangeStr}
                        </span>

                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 bg-white text-[#E62B1E] flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 ml-3 flex-shrink-0">
                          →
                        </div>
                      </div>

                      {/* ── RIGHT CELL: TITLE + CONCISE CONTEXT SENTENCE ── */}
                      <div className="flex-1 bg-white group-hover:bg-[#FCFCFA] px-6 sm:px-8 py-4 sm:py-5 flex flex-col justify-center transition-colors duration-200">
                        <h4 className="font-subheading font-bold text-base sm:text-lg md:text-xl text-neutral-950 tracking-tight leading-snug">
                          {item.title}
                        </h4>

                        {item.description && (
                          <p className="font-text text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                            {item.speaker ? `${item.speaker} — ` : ''}
                            {item.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Poster Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-2 pt-1 text-xs sm:text-sm font-subtext text-neutral-500">
            <span className="font-bold text-neutral-900 tracking-tight uppercase">
              {currentEvent.timeRange}
            </span>
            <span className="uppercase tracking-wider text-[11px] sm:text-xs">
              RV Institute of Technology &amp; Management
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ScheduleSection;

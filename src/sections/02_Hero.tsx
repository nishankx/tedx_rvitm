import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [showPassModal, setShowPassModal] = useState(false);
  const [selectedPass, setSelectedPass] = useState<{
    id: string;
    eventNumber: string;
    name: string;
    date: string;
    venue: string;
    price: string;
    badge: string;
  } | null>(null);

  // Proportional 3-row responsive grid (always exactly 3 rows: large, chunky square tiles)
  // Mobile (<640px): 2 cols x 3 rows = 6 tiles
  // Tablet (sm >=640px): 3 cols x 3 rows = 9 tiles
  // Desktop (lg >=1024px): 4 cols x 3 rows = 12 tiles
  // Wide Desktop (xl >=1280px): 5 cols x 3 rows = 15 tiles
  const gridCells = [
    { id: 1, visibility: 'block' },
    { id: 2, visibility: 'block' },
    { id: 3, visibility: 'block' },
    { id: 4, visibility: 'block' },
    { id: 5, visibility: 'block' },
    { id: 6, visibility: 'block' },
    { id: 7, visibility: 'hidden sm:block' },
    { id: 8, visibility: 'hidden sm:block' },
    { id: 9, visibility: 'hidden sm:block' },
    { id: 10, visibility: 'hidden lg:block' },
    { id: 11, visibility: 'hidden lg:block' },
    { id: 12, visibility: 'hidden lg:block' },
    { id: 13, visibility: 'hidden xl:block' },
    { id: 14, visibility: 'hidden xl:block' },
    { id: 15, visibility: 'hidden xl:block' },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-80px)] bg-[#080808] text-white overflow-hidden select-none flex items-center"
    >
      {/* ── THE SINGLE LARGE BACKGROUND IMAGE (REVEALED THROUGH HOVERED SQUARES) ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2400&auto=format&fit=crop"
          alt="TEDxRVITM Stage Resonance"
          className="w-full h-full object-cover filter contrast-125 brightness-105"
        />
        {/* Soft vignette on base image edges */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/25 to-black/75" />
      </div>

      {/* ── MUCH LARGER RED GRADIENT SQUARES (STRICT 3 ROWS ACROSS ALL VIEWPORTS) ── */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 gap-2.5 sm:gap-3 p-2.5 sm:p-4 w-full h-full z-10 overflow-hidden box-border">
        {gridCells.map((cell, idx) => (
          <motion.div
            key={cell.id}
            className={`${cell.visibility} w-full h-full relative`}
            initial={{ opacity: 0, scale: 0.72, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.65,
              delay: ((idx % 5) + Math.floor(idx / 5)) * 0.07 + 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="w-full h-full relative rounded-xl border border-white/10 hover:border-transparent cursor-pointer group bg-[#8c1008] bg-gradient-to-br from-[#e62b1e] via-[#9e1208] to-[#3a0604] opacity-100 transition-opacity duration-[3500ms] ease-out hover:duration-75 hover:opacity-0 box-border overflow-hidden shadow-md"
            >
              {/* Subtle inner grid coordinates */}
              <span className="absolute top-2.5 left-2.5 text-[10px] sm:text-xs font-mono text-white/25 pointer-events-none font-semibold">
                +0{idx + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── VIGNETTE BEHIND CONTENT TO CONTRAST OUT OF THE GRID ── */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none z-20" />

      {/* ── LEFT-JUSTIFIED REFINED CONTENT ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full py-12 sm:py-16 pointer-events-none">
        <div className="max-w-xl space-y-4 sm:space-y-5 text-left pointer-events-auto">
          
          {/* Logo Format: TEDxRVITM presents in normal text (no button component) */}
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#E62B1E]">
              TEDx
            </span>
            <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">
              RVITM
            </span>
            <span className="font-body text-xs sm:text-sm text-white/60 font-light lowercase tracking-widest pl-1">
              presents
            </span>
          </div>

          {/* Refined Scaled-Down Monumental Title */}
          <div className="space-y-1.5">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase leading-[0.92] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              RESONANCE
            </h1>
            {/* Smaller, Refined Resonance Tagline */}
            <p className="font-body text-xs sm:text-sm md:text-base text-white/70 font-normal leading-relaxed max-w-md pt-1">
              where unspoken frequencies awaken bold transformations.
            </p>
          </div>

          {/* Smaller, Less Rounded Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Get Passes */}
            <button
              onClick={() => setShowPassModal(true)}
              className="px-5 py-2.5 rounded-md bg-[#E62B1E] text-white hover:bg-[#FF3324] transition-all duration-200 font-subtext text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-glow-red flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Passes</span>
              <span className="text-sm">↗</span>
            </button>

            {/* Check Events */}
            <a
              href="#events"
              className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white transition-all duration-200 font-subtext text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <span>Check events</span>
              <span className="text-sm">↓</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── MINIMALISTIC EVENT-BASED GET PASSES POPUP ── */}
      <AnimatePresence>
        {showPassModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => {
              setShowPassModal(false);
              setSelectedPass(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e0e0e] border border-white/15 rounded-2xl max-w-xl w-full p-6 sm:p-7 space-y-5 relative overflow-hidden shadow-2xl text-left"
            >
              {/* Minimal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
                    <span className="font-subtext text-[10px] text-[#E62B1E] font-bold tracking-widest uppercase">
                      OFFICIAL DELEGATE PASSES
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                    Get Event Passes
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setShowPassModal(false);
                    setSelectedPass(null);
                  }}
                  className="w-8 h-8 rounded-full border border-white/15 hover:border-white text-white/50 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Event-Based Pass List or Confirmation Step */}
              {selectedPass ? (
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#E62B1E]/15 text-[#E62B1E] flex items-center justify-center mx-auto text-base font-bold">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <span className="font-subtext text-[10px] text-[#E62B1E] tracking-widest uppercase font-bold">
                      {selectedPass.eventNumber} PASS RESERVED
                    </span>
                    <h4 className="font-subheading font-bold text-lg text-white">
                      {selectedPass.name}
                    </h4>
                    <p className="font-text text-xs text-white/60">
                      {selectedPass.date} • {selectedPass.venue}
                    </p>
                    <p className="font-subtext text-xl font-bold text-white pt-2">
                      {selectedPass.price}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                    <button
                      onClick={() => {
                        alert(`Pass for ${selectedPass.name} confirmed! Receipt dispatched.`);
                        setSelectedPass(null);
                        setShowPassModal(false);
                      }}
                      className="flex-1 py-2.5 px-5 rounded-full bg-[#E62B1E] hover:bg-[#FF3324] text-white font-subtext text-xs font-bold uppercase tracking-wider shadow-glow-red transition-all cursor-pointer"
                    >
                      Confirm &amp; Checkout ↗
                    </button>
                    <button
                      onClick={() => setSelectedPass(null)}
                      className="py-2.5 px-4 rounded-full border border-white/15 hover:border-white text-white/60 hover:text-white font-subtext text-xs transition-colors cursor-pointer"
                    >
                      ← Back to Events
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {[
                    {
                      id: 'event-1',
                      eventNumber: 'EVENT 01',
                      name: 'UNRAVEL: Flagship Conference',
                      date: 'Nov 14, 2026',
                      venue: 'RVITM Grand Auditorium',
                      price: '₹ 999',
                      badge: '18 Talks',
                    },
                    {
                      id: 'event-2',
                      eventNumber: 'EVENT 02',
                      name: 'THE QUANTUM LEAP: Hardware Salon',
                      date: 'Oct 09, 2026',
                      venue: 'Innovation Lab 04',
                      price: '₹ 499',
                      badge: '100 Seats',
                    },
                    {
                      id: 'event-3',
                      eventNumber: 'EVENT 03',
                      name: 'CATALYST: Student Idea Search',
                      date: 'Sep 23, 2026',
                      venue: 'RVITM Amphitheatre',
                      price: '₹ 299',
                      badge: 'Open Mic',
                    },
                    {
                      id: 'event-4',
                      eventNumber: 'EVENT 04',
                      name: 'SYNTHETIC MINDS: Neural Frontiers',
                      date: 'Aug 15, 2026',
                      venue: 'RVITM Media Center',
                      price: '₹ 499',
                      badge: 'Roundtable',
                    },
                    {
                      id: 'event-5',
                      eventNumber: 'EVENT 05',
                      name: 'LIVING ARCHITECTURE: Design Lab',
                      date: 'Jul 02, 2026',
                      venue: 'RVITM Design Studio',
                      price: '₹ 499',
                      badge: 'Workshop',
                    },
                  ].map((evt) => (
                    <div
                      key={evt.id}
                      className="group p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#E62B1E]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-subtext text-[10px] font-bold text-[#E62B1E] tracking-wider uppercase">
                            {evt.eventNumber}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="font-subtext text-[10px] text-white/40 tracking-wider uppercase">
                            {evt.badge}
                          </span>
                        </div>
                        <h4 className="font-subheading font-bold text-sm sm:text-base text-white group-hover:text-white transition-colors">
                          {evt.name}
                        </h4>
                        <p className="font-text text-xs text-white/50">
                          {evt.date} • {evt.venue}
                        </p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5 flex-shrink-0">
                        <span className="font-subtext font-bold text-sm text-white">
                          {evt.price}
                        </span>
                        <button
                          onClick={() => setSelectedPass(evt)}
                          className="px-3.5 py-1.5 rounded-full bg-[#E62B1E] hover:bg-[#FF3324] text-white font-subtext text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                        >
                          <span>Get Pass</span>
                          <span className="text-xs">↗</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Minimalist Footnote */}
              <p className="text-[11px] font-subtext text-white/40 text-center pt-1 border-t border-white/5">
                Limited to 500 delegates per event • Queries: <span className="text-white/70">tedx@rvitm.edu.in</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;

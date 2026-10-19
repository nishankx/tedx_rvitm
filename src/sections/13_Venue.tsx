import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VENUE_DETAILS } from '../data/content';

export const VenueSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [140, -140]);

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.4, 1, 1, 0.4]);
  const photoY = useTransform(scrollYProgress, [0, 1], [25, -20]);
  const specsY = useTransform(scrollYProgress, [0, 1], [40, -25]);

  return (
    <section
      id="venue"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          LOCATION
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-4 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          CAMPUS
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Header: Clean & To The Point */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-semibold">
                ✦ VENUE &amp; LOCATION
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase">
              The Venue
            </h2>
          </div>

          <a
            href={VENUE_DETAILS.googleMapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-white hover:bg-white/10 font-subtext text-xs uppercase tracking-wider font-semibold transition-all self-start sm:self-auto cursor-pointer"
          >
            <span>Open in Google Maps</span>
            <span>↗</span>
          </a>
        </motion.div>

        {/* Minimalist 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Single Crisp Photograph with Parallax & Fade-in */}
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[16/11] relative group"
          >
            <img
              src={VENUE_DETAILS.images[0]}
              alt="RVITM Central Auditorium"
              className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 font-subtext text-xs text-white/80 flex items-center justify-between">
              <span>RVITM AUDITORIUM COMPLEX</span>
              <span className="text-[#E62B1E] font-bold">1,200 SEATS</span>
            </div>
          </motion.div>

          {/* Right: Key Specs & Minimal Map with Parallax & Staggered Fade-in */}
          <motion.div
            style={{ y: specsY }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Address & Name */}
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/[0.08] space-y-2">
              <h3 className="font-subheading font-bold text-xl sm:text-2xl text-white">
                {VENUE_DETAILS.name}
              </h3>
              <p className="font-subtext text-xs text-[#E62B1E] font-medium">
                {VENUE_DETAILS.subName}
              </p>
              <p className="font-text text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-2 border-t border-white/[0.06]">
                {VENUE_DETAILS.address}
              </p>
            </div>

            {/* Quick 3-Item Spec List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-subtext text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-[#E62B1E] uppercase tracking-wider block font-bold font-subtext">TRANSIT</span>
                <p className="font-text text-white/80 text-[11px] leading-snug">Green Line Metro (Silk Institute / Yelachenahalli)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-[#E62B1E] uppercase tracking-wider block font-bold font-subtext">PARKING</span>
                <p className="font-text text-white/80 text-[11px] leading-snug">400+ on-campus delegate spots</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-[#E62B1E] uppercase tracking-wider block font-bold font-subtext">GPS</span>
                <p className="font-text text-white/80 text-[11px] leading-snug">12.8718° N, 77.5855° E</p>
              </div>
            </div>

            {/* Minimal Map Embed */}
            <div className="h-[180px] w-full rounded-2xl border border-white/[0.08] overflow-hidden">
              <iframe
                title="RVITM Map"
                src={VENUE_DETAILS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                loading="lazy"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VenueSection;

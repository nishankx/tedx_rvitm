import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/content';

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [140, -140]);

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.4, 1, 1, 0.4]);
  const gridY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#E62B1E]/[0.04] rounded-full blur-[170px] pointer-events-none" />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[15vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          COLLECTIVE
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[13vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          BUILDERS
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Header with Fade-in */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase font-bold">
                ✦ ORGANIZING COMMITTEE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase text-white">
              The Team
            </h2>
          </div>
          <p className="font-text text-xs sm:text-sm text-white/50 max-w-sm">
            Curators, architects, and coordinators directing TEDxRVITM 2026.
          </p>
        </motion.div>

        {/* ── SEAMLESS SHARP PANELS GRID WITH PARALLAX & STAGGERED FADE-IN ── */}
        <motion.div
          style={{ y: gridY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/15 bg-neutral-950"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] border-r border-b border-white/15 overflow-hidden group rounded-none select-none flex flex-col justify-between"
            >
              {/* Full Panel Profile Picture Background */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-90 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none group-hover:via-black/30 transition-all duration-300" />

              {/* Top Row: Position / Role & Socials */}
              <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between gap-3">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 font-subtext text-[11px] text-[#E62B1E] uppercase tracking-wider font-bold">
                  {member.role}
                </span>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title={`${member.name} on LinkedIn`}
                  className="w-8 h-8 bg-black/80 backdrop-blur-md border border-white/15 text-white/60 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>

              {/* Bottom Content: Name & Year/Dept */}
              <div className="relative z-10 p-5 sm:p-6 space-y-1">
                <h3 className="font-subheading font-bold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="font-subtext text-xs text-white/70 tracking-wider">
                  {member.dept}
                </p>
                <div className="w-0 group-hover:w-full h-[2px] bg-[#E62B1E] transition-all duration-500 mt-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;

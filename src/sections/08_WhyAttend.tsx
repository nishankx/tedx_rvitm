import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WHY_ATTEND_CARDS } from '../data/content';

export const WhyAttendSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Unified scroll-controlled sequence for header and grid
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-130, 130]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [130, -130]);

  const gridY = useTransform(scrollYProgress, [0, 1], [60, -35]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id="why-attend"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#E62B1E]/[0.04] rounded-full blur-[170px] pointer-events-none -z-0" />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[15vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          PERSPECTIVE
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[13vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          PRINCIPLES
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header with scroll control & fade-in */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block font-bold">
                PERSPECTIVE
              </span>
              <span className="font-subtext text-xs text-white/50 tracking-wider">
                CORE PRINCIPLES
              </span>
              <span className="text-[#E62B1E] text-xs">✱</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              WHY ATTEND TEDxRVITM?
            </h2>
          </div>
          <p className="font-text text-xs sm:text-sm text-white/50 max-w-sm">
            Five non-negotiable principles that define the standard of dialogue, community, and intellectual friction we foster.
          </p>
        </motion.div>

        {/* Independent, Editorial Cards Grid (ONEPOINT & Kyiv inspired with Staggered Fade-in) */}
        <motion.div
          style={{ y: gridY, opacity: gridOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {WHY_ATTEND_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-white/[0.08] hover:border-white/30 hover:bg-[#131313] hover:-translate-y-1.5 transition-all duration-300 transform-gpu flex flex-col justify-between space-y-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between font-subtext text-xs text-white/40 border-b border-white/[0.06] pb-3">
                <span className="text-[#E62B1E] font-bold tracking-widest">
                  PRINCIPLE {card.number}
                </span>
                <span className="text-xs group-hover:text-[#E62B1E] transition-colors">✱</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-subheading font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="font-subtext text-xs text-[#E62B1E] tracking-wider uppercase font-bold">
                  {card.subtitle}
                </p>
                <p className="font-text text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-1">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-subtext text-white/40">
                <span className="uppercase">TEDxRVITM 2026</span>
                <span className="text-[#E62B1E] group-hover:translate-x-1 transition-transform">
                  EXPLORE ↗
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAttendSection;

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

  const gridY = useTransform(scrollYProgress, [0, 1], [60, -35]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id="why-attend"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header with scroll control */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              05 / PERSPECTIVE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Why Attend TEDxRVITM?
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Five principles that define the standard of dialogue and community we build.
          </p>
        </motion.div>

        {/* Independent, Stable Cards Grid (No conjoint sibling reactions) */}
        <motion.div
          style={{ y: gridY, opacity: gridOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {WHY_ATTEND_CARDS.map((card) => (
            <div
              key={card.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/30 hover:bg-[#151515] hover:-translate-y-1.5 transition-all duration-300 transform-gpu flex flex-col justify-between space-y-4 sm:space-y-6 cursor-pointer"
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="font-mono text-xs text-[#E62B1E] tracking-widest block font-medium">
                  {card.number}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  {card.title}
                </h3>
                <p className="font-mono text-xs text-white/50">
                  {card.subtitle}
                </p>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAttendSection;

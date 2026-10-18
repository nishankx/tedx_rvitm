import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';

export const VoicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: header vertical motion, stable cards grid
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);

  const gridY = useTransform(scrollYProgress, [0, 1], [50, -25]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id="voices"
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
              07 / ECHOES
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Attendee Voices
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Reflections from alumni, researchers, and past delegates.
          </p>
        </motion.div>

        {/* Independent, Stable Testimonials Grid (No conjoint sibling reactions) */}
        <motion.div
          style={{ y: gridY, opacity: gridOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/30 hover:bg-[#151515] hover:-translate-y-1.5 transition-all duration-300 transform-gpu flex flex-col justify-between space-y-6 sm:space-y-8 cursor-pointer"
            >
              <blockquote className="font-body text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover grayscale contrast-110"
                />
                <div>
                  <h4 className="font-display font-semibold text-base text-white">
                    {t.author}
                  </h4>
                  <p className="font-mono text-xs text-[#E62B1E]">{t.role}</p>
                  <span className="font-mono text-[10px] text-white/40 block mt-0.5">
                    {t.batchOrAffiliation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VoicesSection;

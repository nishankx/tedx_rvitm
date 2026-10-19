import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: header vertical scrub and accordion container elevation
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);

  const accordionY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const accordionOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);

  // Sideways watermarks movement
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [140, -140]);

  return (
    <section
      id="faq"
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
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          PROTOCOL
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[13vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          INQUIRY
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header with scroll control and fade-in */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block font-semibold">
              PROTOCOL
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-subtext text-xs text-white/50 max-w-sm">
            Key guidelines regarding ticketing, security verification, and attendance.
          </p>
        </motion.div>

        {/* Minimalist Accordion with scroll-controlled elevation */}
        <motion.div
          style={{ y: accordionY, opacity: accordionOpacity }}
          className="max-w-4xl mx-auto divide-y divide-white/[0.08]"
        >
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: (index % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-6"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left flex items-start justify-between gap-6 hover:text-[#E62B1E] transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-subtext tracking-widest text-[#E62B1E] uppercase">
                      {faq.category}
                    </span>
                    <h3 className="font-subheading font-bold text-lg sm:text-xl text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="font-subtext text-lg text-white/40 shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pt-4"
                    >
                      <p className="font-text text-sm sm:text-base text-white/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

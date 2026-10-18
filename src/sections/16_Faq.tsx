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

  return (
    <section
      id="faq"
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
              13 / PROTOCOL
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Key guidelines regarding ticketing, security verification, and attendance.
          </p>
        </motion.div>

        {/* Minimalist Accordion with scroll-controlled elevation */}
        <motion.div
          style={{ y: accordionY, opacity: accordionOpacity }}
          className="max-w-4xl mx-auto divide-y divide-white/[0.08]"
        >
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="py-6"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left flex items-start justify-between gap-6 hover:text-[#E62B1E] transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                      {faq.category}
                    </span>
                    <h3 className="font-display font-medium text-lg sm:text-xl text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="font-mono text-lg text-white/40 shrink-0">
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
                      <p className="font-body text-sm text-white/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

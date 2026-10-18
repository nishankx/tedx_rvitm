import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <section id="faq" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              13 / PROTOCOL
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Key guidelines regarding ticketing, security verification, and attendance.
          </p>
        </div>

        {/* Minimalist Accordion */}
        <div className="max-w-4xl mx-auto divide-y divide-white/[0.08]">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-6">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left flex items-start justify-between gap-6 hover:text-[#E62B1E] transition-colors focus:outline-none"
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
        </div>
      </div>
    </section>
  );
};

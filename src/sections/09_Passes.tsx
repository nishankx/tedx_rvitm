import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { TICKETS, COMPARISON_BENEFITS } from '../data/content';

export const PassesSection: React.FC = () => {
  const [showCompareTable, setShowCompareTable] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic sideways watermarks movement & parallax
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-130, 130]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [130, -130]);

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);
  const cardsParallax = useTransform(scrollYProgress, [0, 1], [25, -20]);

  return (
    <section
      id="passes"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E62B1E]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          ACCESS
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          PASSES
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* ── Kyiv Tattoo Fest Inspired Header with Parallax & Fade-in ── */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block font-bold">
                06 / OFFICIAL ACCESS
              </span>
              <span className="text-white/30">•</span>
              <span className="font-subtext text-xs text-white/50 tracking-wider uppercase">
                EVENT PASSES
              </span>
              <span className="text-[#E62B1E] text-xs">✱</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              TICKETS &amp; REGISTRATION.
            </h2>
            <p className="font-text text-sm sm:text-base text-white/60 max-w-xl">
              Strictly limited to 500 capacity. Choose your pass per event or secure the all-access season credential.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCompareTable(!showCompareTable)}
              className="px-5 py-2.5 rounded-full font-subtext text-xs tracking-wider uppercase border border-white/20 hover:border-white text-white transition-all bg-white/[0.02] cursor-pointer"
            >
              {showCompareTable ? 'Hide Comparison [-]' : 'Compare Benefits Matrix [ + ]'}
            </button>
          </div>
        </motion.div>

        {/* ── Benefits Comparison Table ── */}
        <AnimatePresence>
          {showCompareTable && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/[0.1] font-subtext text-xs overflow-x-auto shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50">
                      <th className="p-4">BENEFIT SPECIFICATION</th>
                      <th className="p-4">EVENT 01 (UNRAVEL)</th>
                      <th className="p-4">EVENT 02 (QUANTUM)</th>
                      <th className="p-4">EVENT 03 (CATALYST)</th>
                      <th className="p-4 text-[#E62B1E]">ALL-ACCESS PASS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {COMPARISON_BENEFITS.map((row: any, idx: number) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 text-white font-medium">{row.benefit}</td>
                        <td className="p-4 text-white/70">{row.event1 === true ? 'Included' : row.event1 === false ? '—' : row.event1}</td>
                        <td className="p-4 text-white/70">{row.event2 === true ? 'Included' : row.event2 === false ? '—' : row.event2}</td>
                        <td className="p-4 text-white/70">{row.event3 === true ? 'Included' : row.event3 === false ? '—' : row.event3}</td>
                        <td className="p-4 text-[#E62B1E] font-medium">{row.allAccess === true ? 'Full Access' : row.allAccess}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Event-Based Ticket Cards with Parallax & Staggered Fade-in ── */}
        <motion.div
          style={{ y: cardsParallax }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {TICKETS.map((ticket, index) => {
            const isSoldOut = ticket.status === 'sold_out';
            const isPopular = ticket.popular || index === 0;
            const isVip = ticket.type === 'VIP';

            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                  isPopular
                    ? 'bg-[#E62B1E] text-white shadow-[0_20px_50px_rgba(230,43,30,0.35)]'
                    : isVip
                    ? 'bg-[#121212] border-2 border-[#E62B1E]/60 text-white shadow-2xl'
                    : 'bg-[#0f0f0f] border border-white/15 text-white hover:border-white/40'
                }`}
              >
                {/* Top Ticket Stub Header */}
                <div
                  className={`p-6 sm:p-7 flex items-center justify-between border-b ${
                    isPopular ? 'border-black/20 text-black' : 'border-white/10 text-white/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">✱</span>
                    <span className="font-subtext text-xs font-black tracking-widest uppercase">
                      0{index + 1} {ticket.code}
                    </span>
                  </div>
                  <span
                    className={`font-subtext text-[10px] tracking-widest uppercase font-bold px-2.5 py-1 rounded-full ${
                      isPopular
                        ? 'bg-black text-white'
                        : isVip
                        ? 'bg-[#E62B1E] text-white'
                        : 'bg-white/10 text-white/80'
                    }`}
                  >
                    {ticket.status === 'selling_fast' ? 'SELLING FAST' : 'ADMIT ONE'}
                  </span>
                </div>

                {/* Ticket Body Content */}
                <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3
                        className={`font-subheading font-bold text-2xl sm:text-3xl tracking-tight uppercase ${
                          isPopular ? 'text-black' : 'text-white'
                        }`}
                      >
                        {ticket.name}
                      </h3>
                      <p
                        className={`font-text text-xs font-light leading-relaxed ${
                          isPopular ? 'text-black/80' : 'text-white/60'
                        }`}
                      >
                        {ticket.description}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="pt-2 flex items-baseline gap-2">
                      <span
                        className={`font-heading font-black text-4xl sm:text-5xl tracking-tight ${
                          isPopular ? 'text-black' : 'text-white'
                        }`}
                      >
                        {ticket.price}
                      </span>
                      {ticket.originalPrice && (
                        <span
                          className={`font-subtext text-xs line-through ${
                            isPopular ? 'text-black/50' : 'text-white/40'
                          }`}
                        >
                          {ticket.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Detailed Specifications List */}
                    <div
                      className={`pt-4 border-t space-y-2 font-subtext text-xs ${
                        isPopular
                          ? 'border-black/15 text-black/90'
                          : 'border-white/10 text-white/80'
                      }`}
                    >
                      {ticket.benefits.slice(0, 5).map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <span className={isPopular ? 'text-black font-bold' : 'text-[#E62B1E]'}>
                            ✦
                          </span>
                          <span className="font-light">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Perforated Barcode Tear-Off Footer (Kyiv Tattoo Fest style) */}
                  <div
                    className={`mt-6 pt-5 border-t border-dashed space-y-4 ${
                      isPopular ? 'border-black/30' : 'border-white/20'
                    }`}
                  >
                    {/* Barcode Graphic */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <svg
                          className={`w-full h-8 ${isPopular ? 'fill-black' : 'fill-white'}`}
                          viewBox="0 0 160 30"
                          fill="currentColor"
                        >
                          <rect x="0" y="0" width="3" height="30" />
                          <rect x="5" y="0" width="1" height="30" />
                          <rect x="8" y="0" width="4" height="30" />
                          <rect x="15" y="0" width="2" height="30" />
                          <rect x="20" y="0" width="5" height="30" />
                          <rect x="28" y="0" width="1" height="30" />
                          <rect x="32" y="0" width="4" height="30" />
                          <rect x="39" y="0" width="2" height="30" />
                          <rect x="44" y="0" width="6" height="30" />
                          <rect x="53" y="0" width="2" height="30" />
                          <rect x="58" y="0" width="4" height="30" />
                          <rect x="65" y="0" width="1" height="30" />
                          <rect x="69" y="0" width="5" height="30" />
                          <rect x="77" y="0" width="3" height="30" />
                          <rect x="83" y="0" width="1" height="30" />
                          <rect x="87" y="0" width="4" height="30" />
                          <rect x="94" y="0" width="2" height="30" />
                          <rect x="99" y="0" width="5" height="30" />
                          <rect x="107" y="0" width="1" height="30" />
                          <rect x="111" y="0" width="3" height="30" />
                          <rect x="117" y="0" width="4" height="30" />
                          <rect x="124" y="0" width="2" height="30" />
                          <rect x="129" y="0" width="5" height="30" />
                          <rect x="137" y="0" width="1" height="30" />
                          <rect x="141" y="0" width="4" height="30" />
                          <rect x="148" y="0" width="2" height="30" />
                          <rect x="153" y="0" width="6" height="30" />
                        </svg>
                      </div>
                      <div
                        className={`flex justify-between font-subtext text-[9px] tracking-widest pt-1 ${
                          isPopular ? 'text-black/60' : 'text-white/40'
                        }`}
                      >
                        <span>№ 0029{index}482</span>
                        <span>TEDxRVITM-2026</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedTicket(ticket.name)}
                      disabled={isSoldOut}
                      className={`w-full py-3 px-4 rounded-xl font-subtext text-xs font-black tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isPopular
                          ? 'bg-black text-white hover:bg-neutral-900 shadow-xl'
                          : isVip
                          ? 'bg-[#E62B1E] text-white hover:bg-[#FF3324] shadow-glow-red'
                          : 'bg-white text-black hover:bg-white/90'
                      }`}
                    >
                      <span>SECURE PASS NOW</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Selected Ticket Modal */}
        {selectedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md">
            <div className="bg-[#141414] border border-white/20 p-8 rounded-2xl max-w-md w-full text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-[#E62B1E] font-subtext text-xs">
                <span>✦</span>
                <span className="font-bold">OFFICIAL REGISTRATION CHECKOUT</span>
                <span>✦</span>
              </div>
              <h3 className="font-subheading font-bold text-2xl text-white">
                {selectedTicket}
              </h3>
              <p className="font-text text-sm text-white/70 leading-relaxed font-light">
                Proceeding to secure checkout gateway. Pass credentials will be issued to your institutional email.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    alert('Registration gateway initialized for ' + selectedTicket);
                    setSelectedTicket(null);
                  }}
                  className="w-full py-3 rounded-full bg-[#E62B1E] text-white font-subtext text-xs font-semibold tracking-wider uppercase shadow-glow-red hover:bg-[#FF3324] transition-all cursor-pointer"
                >
                  Confirm & Initialize Payment ↗
                </button>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="font-subtext text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PassesSection;

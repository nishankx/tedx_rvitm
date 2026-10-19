import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SPONSORS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const SponsorsSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], [-130, 130]);
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const proposalY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="partner"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          ALLIANCES
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header with scroll control & fade-in */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <span className="font-subtext text-xs text-[#E62B1E] tracking-widest uppercase block">
              09 / ALLIANCES
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase">
              Partners &amp; Patrons
            </h2>
          </div>
          <p className="font-subtext text-xs text-white/50 max-w-sm">
            Collaborating with leading research labs, venture groups, and technical organizations.
          </p>
        </motion.div>

        {/* Clean Logo Carousel with Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="py-6 sm:py-8 border-y border-white/[0.06] overflow-hidden"
        >
          <div className="flex items-center gap-8 sm:gap-12 overflow-hidden whitespace-nowrap animate-marquee">
            {[...SPONSORS, ...SPONSORS].map((s, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-4 text-white/40 hover:text-white transition-colors"
              >
                <span className="font-heading font-bold text-xl tracking-wider">
                  {s.logoText}
                </span>
                <span className="text-[10px] font-subtext px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/40">
                  {s.tier}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Proposal Block with Parallax & Fade-in */}
        <motion.div
          style={{ y: proposalY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 md:p-12 rounded-2xl bg-[#111111] border border-white/[0.08]"
        >
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-subtext tracking-widest text-[#E62B1E] uppercase block">
              Corporate & Institutional Patronage
            </span>
            <h3 className="font-subheading font-bold text-2xl sm:text-3xl text-white leading-snug">
              Align your organization with visionary curiosity.
            </h3>
            <p className="font-text text-sm sm:text-base text-white/70 leading-relaxed font-light">
              Connect directly with 500 hand-picked builders, founders, researchers, and Bengaluru's elite engineering intellects.
            </p>
            <div className="pt-4 font-subtext text-xs text-white/50">
              Direct inquiries: <a href="mailto:partners@rvitm.edu.in" className="text-white underline">partners@rvitm.edu.in</a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-white/[0.03] border border-white/10 text-center space-y-3">
                <h4 className="font-subheading font-bold text-xl text-white">Inquiry Received</h4>
                <p className="font-text text-sm text-white/60 font-light">
                  Our Partnerships Director will transmit our institutional prospectus within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-subtext text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/50 uppercase">Company / Organization *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Acme Labs"
                      className="w-full p-3 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-text text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/50 uppercase">Contact Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className="w-full p-3 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-text text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/50 uppercase">Corporate Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="alex@acmelabs.com"
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-text text-sm"
                  />
                </div>

                <div className="pt-2">
                  <BrutalButton type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                    Transmit Partnership Inquiry ↗
                  </BrutalButton>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

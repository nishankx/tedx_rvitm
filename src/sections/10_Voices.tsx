import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import type { Testimonial } from '../types';

export const VoicesSection: React.FC = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-130, 130]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [130, -130]);
  const voicesParallax = useTransform(scrollYProgress, [0, 1], [30, -25]);

  // Split testimonials across two lines so all voices are visible simultaneously
  const row1Testimonials = TESTIMONIALS.slice(0, 2);
  const row2Testimonials = TESTIMONIALS.slice(2);

  const renderCard = (t: Testimonial, index: number, rowTag: string) => (
    <div
      key={`${t.id}-${index}-${rowTag}`}
      className="p-6 sm:p-7 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/30 hover:bg-[#151515] transition-all duration-300 w-80 sm:w-96 flex flex-col justify-between space-y-4 flex-shrink-0 cursor-pointer shadow-xl group"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-subtext text-white/40">
          <span className="text-[#E62B1E] font-bold">ECHO 0{t.id.replace('t-', '')}</span>
          <span className="group-hover:text-[#E62B1E] transition-colors">✦</span>
        </div>
        <blockquote className="font-subheading text-base text-white/90 font-normal leading-relaxed italic line-clamp-3">
          "{t.quote}"
        </blockquote>
      </div>

      <div className="flex items-center gap-3.5 pt-3 border-t border-white/[0.08]">
        <img
          src={t.avatar}
          alt={t.author}
          className="w-11 h-11 rounded-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all flex-shrink-0"
        />
        <div className="space-y-0.5">
          <h4 className="font-subheading font-bold text-base text-white group-hover:text-[#E62B1E] transition-colors">
            {t.author}
          </h4>
          <p className="font-subtext text-xs text-[#E62B1E] font-medium">{t.role}</p>
          <span className="font-subtext text-[10px] text-white/40 block">
            {t.batchOrAffiliation}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="voices"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 sm:py-32 md:py-36 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E62B1E]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-8 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          ECHOES
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute bottom-6 -right-8 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[14vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          COMMUNITY
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 relative z-10">
        {/* Header */}
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
                ECHOES
              </span>
              <span className="text-[#E62B1E] text-xs">✱</span>
              <span className="font-subtext text-xs text-white/50 tracking-wider uppercase">
                COMMUNITY TESTIMONIALS
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              Attendee Voices
            </h2>
          </div>
        </motion.div>
      </div>

      {/* ── Continuous Testimonial Rows with Parallax & Fade-in ── */}
      <motion.div
        style={{ y: voicesParallax }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="space-y-2 mt-4"
      >
        {/* Line 1: Voices 1-2 scrolling forward fast */}
        <div
          className="w-full overflow-hidden py-2"
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => setIsPausedRow1(false)}
        >
          <div
            className={`flex gap-5 sm:gap-6 w-max ${
              isPausedRow1 ? '[animation-play-state:paused]' : ''
            } animate-marquee-fast`}
          >
            {[...row1Testimonials, ...row1Testimonials, ...row1Testimonials, ...row1Testimonials].map((t, index) =>
              renderCard(t, index, 'row1')
            )}
          </div>
        </div>

        {/* Line 2: Voices 3-4 scrolling reverse fast */}
        <div
          className="w-full overflow-hidden py-2 mb-2"
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => setIsPausedRow2(false)}
        >
          <div
            className={`flex gap-5 sm:gap-6 w-max ${
              isPausedRow2 ? '[animation-play-state:paused]' : ''
            } animate-marquee-fast-reverse`}
          >
            {[...row2Testimonials, ...row2Testimonials, ...row2Testimonials, ...row2Testimonials].map((t, index) =>
              renderCard(t, index, 'row2')
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VoicesSection;

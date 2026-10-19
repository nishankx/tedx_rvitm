import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ABOUT_CONTENT } from '../data/content';
import DitherVeil from '../components/ui/DitherVeil';

// Metric Item inspired by ONEPOINT DESIGN
const MetricCounter: React.FC<{
  target: number;
  suffix?: string;
  label: string;
  subtext: string;
  index: string;
}> = ({ target, suffix = '', label, subtext, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="p-6 sm:p-8 rounded-md bg-[#0d0d0d] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group space-y-6 relative overflow-hidden"
    >

      <div className="flex items-center justify-between font-subtext text-xs text-white/40 border-b border-white/[0.06] pb-3">
        <span className="text-[#E62B1E] font-medium">{index}</span>
        <span className="uppercase tracking-widest text-[10px]">VERIFIED, 2026</span>
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none group-hover:text-white transition-colors">
            {count}
          </span>
          <span className="font-heading font-bold text-3xl sm:text-4xl text-[#E62B1E]">
            {suffix}
          </span>
        </div>
        <p className="font-subtext text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider pt-2">
          {label}
        </p>
      </div>

      <p className="font-text text-xs text-white/45 leading-relaxed font-light">
        {subtext}
      </p>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.3, 1, 1, 0.35]);
  const watermarkX1 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const watermarkX2 = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const watermarkX3 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const ditherParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentParallax = useTransform(scrollYProgress, [0, 1], [30, -25]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARKS WITH SIDEWAYS MOTION) ── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: watermarkX1 }}
        className="absolute top-10 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.035]"
      >
        <span className="font-display font-black text-[15vw] sm:text-[18vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          MANIFESTO
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX2 }}
        className="absolute top-1/2 -right-16 -translate-y-1/2 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.03]"
      >
        <span className="font-display font-black text-[14vw] sm:text-[16vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          RESONANCE
        </span>
      </motion.div>

      <motion.div
        style={{ x: watermarkX3 }}
        className="absolute bottom-6 left-1/4 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.025]"
      >
        <span className="font-display font-black text-[11vw] sm:text-[13vw] tracking-tighter text-white uppercase whitespace-nowrap block">
          DISRUPT
        </span>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── MAIN CONTENT CONTAINER ── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28 relative z-10">
        
        {/* ── Section Header with ONEPOINT DESIGN Pill Tag ── */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 relative"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
              <span className="font-subtext text-xs tracking-widest uppercase text-[#E62B1E] font-bold">
                 ✦ About Us
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white max-w-3xl">
              What happens when we tear down the maps we were handed ?
            </h2>
          </div>
        </motion.div>

        {/* ── Symmetrical Editorial Statement: WE / ARE Framing ── */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            {/* Left Editorial Text with Parallax & Fade-in */}
            <motion.div
              style={{ y: contentParallax }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              <p className="font-subheading text-xl sm:text-2xl md:text-3xl font-normal text-white/95 leading-relaxed">
                TEDxRVITM is an independently organized symposium at the nexus of technology, culture, and science. Hosted in Bengaluru's technology corridor, we curate bold ideas raw enough to pierce the noise and resilient enough to reshape reality.
              </p>

              <div className="border-l-2 border-[#E62B1E] pl-4 sm:pl-6 space-y-1 font-subtext text-xs sm:text-sm text-white/50 leading-relaxed">
                <p>
                  Operated under official license from TED Conferences, LLC. Dedicated to the pursuit of knowledge without dogma.
                </p>
                <span className="text-[#E62B1E] font-bold block">RV Institute of Technology &amp; Management, JP NAGAR, BENGALURU</span>
              </div>
            </motion.div>

            {/* Right: DitherVeil Interactive Hologram with Parallax & Fade-in */}
            <motion.div
              style={{ y: ditherParallax }}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 w-full flex items-center justify-center"
            >
              <div
                className="relative w-full h-[600px] max-w-md sm:max-w-lg lg:max-w-none overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(ellipse 88% 88% at 50% 50%, black 50%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 50% 50%, black 50%, transparent 100%)',
                }}
              >
                <DitherVeil
                  src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
                  pattern="floyd"
                  fit="cover"
                  pixelSize={2}
                  inkColor="#080808"
                  paperColor="#fafafa"
                  revealRadius={220}
                  softness={0.7}
                  linger={0.5}
                  rimColor="transparent"
                  rim={0}
                  reverse={false}
                  wander={true}
                  clickBurst={true}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── "Project in Number" Metrics Grid (ONEPOINT DESIGN Image 4) with Fade-in ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-subtext text-xs text-[#E62B1E] font-bold tracking-wider uppercase">
                  ✦ QUANTIFIABLE IMPACT
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
                PROJECT IN NUMBERS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCounter
              index="01"
              target={1200}
              suffix="+"
              label="ATTENDEES UNITED"
              subtext="Auditorium seats filled by verified scientists, builders, delegates, and changemakers across India."
            />
            <MetricCounter
              index="02"
              target={18}
              suffix="+"
              label="TRAILBLAZING KEYNOTES"
              subtext="High-voltage presentations prepared over 6 months of curation without standard industry slides."
            />
            <MetricCounter
              index="03"
              target={94}
              suffix="%"
              label="ACTIONABILITY RATE"
              subtext="Post-conference surveys reporting direct initiation of research, collaborations, or venture pilots."
            />
            <MetricCounter
              index="04"
              target={65}
              suffix="+"
              label="STUDENT CREW BUILDERS"
              subtext="Undergraduates managing stage production, live broadcasting, design systems, and delegate logistics."
            />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── REFINED QUOTE BLOCK WITH BIG ICON BESIDE THE QUOTE (FADE-IN SEQUENCE) ── */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 md:p-14 rounded-2xl bg-[#0e0e0e] border border-white/[0.09] relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle Red Atmosphere Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E62B1E]/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#E62B1E]/[0.04] rounded-full blur-3xl pointer-events-none" />

          {/* Background Watermark Quote Symbol */}
          <div className="absolute -bottom-10 -right-6 pointer-events-none select-none opacity-[0.03] text-white">
            <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Main Flex Layout: BIG ICON beside the Quote Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 lg:gap-12">
            
            {/* ── THE BIG ICON BESIDE THE QUOTE ── */}
            

            {/* ── QUOTE CONTENT BESIDE THE ICON ── */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase font-semibold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#E62B1E] animate-pulse" />
                  ✦ CORE PHILOSOPHY
                </span>
              </div>

              <blockquote className="font-body text-xl sm:text-2xl md:text-3xl text-white/95 font-light italic leading-relaxed">
                {ABOUT_CONTENT.quote}
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-xs text-white/50 tracking-wider uppercase">

                <span className="text-[#E62B1E] font-bold text-sm tracking-widest">
                  — {ABOUT_CONTENT.quoteAuthor}
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;


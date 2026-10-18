import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ABOUT_CONTENT } from '../data/content';
import DitherVeil from '../components/ui/DitherVeil';

// Elegant metric counter component
const MetricItem: React.FC<{ target: number; suffix?: string; label: string }> = ({
  target,
  suffix = '',
  label,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 30;
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="space-y-2"
    >
      <div className="flex items-baseline gap-1">
        <span className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          {count}
        </span>
        <span className="font-display font-medium text-2xl sm:text-3xl text-[#E62B1E]">
          {suffix}
        </span>
      </div>
      <p className="font-mono text-xs text-white/50 tracking-wider uppercase">
        {label}
      </p>
    </motion.div>
  );
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: header scrub, parallax editorial text, tilt & revolve dither veil
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.3, 1, 1, 0.35]);

  const textY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.35, 1, 1, 0.4]);

  const veilY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const veilRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const veilScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.02, 0.96]);

  const metricsY = useTransform(scrollYProgress, [0.2, 0.8], [30, -20]);
  const quoteScale = useTransform(scrollYProgress, [0.2, 0.6, 1], [0.95, 1.01, 0.97]);
  const quoteY = useTransform(scrollYProgress, [0.2, 0.8], [40, -20]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Header with scroll control */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="max-w-3xl space-y-4"
        >
          <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
            01 / MANIFESTO
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white">
            What happens when we tear down the maps we were handed?
          </h2>
        </motion.div>

        {/* Editorial Statement with DitherVeil on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <p className="font-body text-lg sm:text-2xl md:text-3xl font-light text-white/85 leading-relaxed">
              TEDxRVITM is an independently organized symposium at the nexus of technology, culture, and science. Hosted in Bengaluru's technology corridor, we curate bold ideas raw enough to pierce the noise and resilient enough to reshape reality.
            </p>
            <div className="border-l border-white/10 pl-4 sm:pl-6 space-y-2 sm:space-y-3 font-mono text-xs text-white/50 leading-relaxed">
              <p>
                Under official license from TED Conferences, LLC, our mission is to stimulate critical dialogue, empower young innovators, and celebrate ideas worth spreading.
              </p>
              <span className="text-[#E62B1E] font-medium block">BENGALURU, INDIA</span>
            </div>
          </motion.div>

          {/* DitherVeil positioned towards the right with scroll-controlled motion */}
          <motion.div
            style={{
              y: veilY,
              rotate: veilRotate,
              scale: veilScale,
            }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div
              className="relative w-full h-[320px] sm:h-[460px] lg:h-[600px]"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
              }}
            >
              <DitherVeil
                src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
                pattern="floyd"
                fit="cover"
                pixelSize={2}
                inkColor="#080808"
                paperColor="#f5f5f5"
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

        {/* Minimalist Metrics Grid with scroll-controlled movement */}
        <motion.div
          style={{ y: metricsY }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-white/[0.08]"
        >
          {ABOUT_CONTENT.metrics.map((metric, idx) => (
            <MetricItem
              key={idx}
              target={metric.target}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </motion.div>

        {/* Refined Quote Block with scroll-controlled scaling */}
        <motion.div
          style={{ scale: quoteScale, y: quoteY }}
          className="p-8 sm:p-12 rounded-2xl bg-[#111111] border border-white/[0.08] max-w-4xl space-y-4"
        >
          <p className="font-body text-lg sm:text-xl text-white/90 italic font-light leading-relaxed">
            {ABOUT_CONTENT.quote}
          </p>
          <span className="block font-mono text-xs text-[#E62B1E] tracking-widest uppercase">
            — {ABOUT_CONTENT.quoteAuthor}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

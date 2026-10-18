import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CurvedLoop } from '../components/animations/CurvedLoop';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-controlled dynamic movement sequence: Y movement, scale compression, subtle tilt, and fade out
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const titleRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const descY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const descOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const tickerRotate = useTransform(scrollYProgress, [0, 1], [0, -1.5]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-80px)] w-full flex flex-col justify-between overflow-hidden bg-transparent py-6 sm:py-10 md:py-16"
    >
      {/* Hero Typography Container with scroll controls */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full my-auto text-center flex flex-col items-center justify-center py-8 sm:py-12">
        {/* Monumental Theme Title in Bold & Big Typography with fluid phone-safe scaling */}
        <motion.h1
          style={{
            y: titleY,
            scale: titleScale,
            rotate: titleRotate,
            opacity: titleOpacity,
          }}
          className="font-display font-black text-[13.5vw] sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter text-white uppercase leading-[0.88] select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] max-w-full break-normal"
        >
          RESONANCE
        </motion.h1>

        {/* 1-Line Small Description in Cursive Handwriting with scroll-controlled motion */}
        <motion.p
          style={{
            y: descY,
            opacity: descOpacity,
          }}
          className="font-cursive text-lg sm:text-xl md:text-2xl text-white/85 font-normal tracking-wide max-w-2xl mx-auto pt-4 sm:pt-6 leading-relaxed select-none px-2"
        >
          where unspoken frequencies awaken bold transformations.
        </motion.p>
      </div>

      {/* Ambient ticker curve at the bottom with scroll-controlled movement */}
      <motion.div
        style={{
          rotate: tickerRotate,
        }}
        className="relative z-10 w-full mt-2 sm:mt-4 overflow-hidden"
      >
        <CurvedLoop
          text="TEDxRVITM 2026 • IDEAS WORTH SPREADING • BENGALURU • RESONANCE"
          curveDepth={16}
          className="opacity-40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

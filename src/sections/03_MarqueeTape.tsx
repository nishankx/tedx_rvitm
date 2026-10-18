import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextLoop } from '../components/ui/TextLoop';

export const MarqueeTapeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: horizontal scrub, dynamic tilt rotation, and subtle scale
  const tapeRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const tapeScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.96]);
  const tapeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        rotate: tapeRotate,
        scale: tapeScale,
        opacity: tapeOpacity,
      }}
      className="relative py-8 md:py-12 bg-[#080808] border-y border-white/[0.08] overflow-hidden select-none"
    >
      <div className="w-full">
        <TextLoop
          text="RESONANCE ✦ IDEAS WORTH SPREADING ✦ TEDxRVITM 2026 ✦ DISRUPT THE SILENCE"
          shape="wave"
          speed={85}
          direction="forward"
          separator="✦"
          curviness={55}
          tilt={-1.5}
          fontSize={42}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          ribbon
          ribbonColor="#E62B1E"
          ribbonWidth={78}
          cross={true}
          crossColor="#141414"
          crossAngle={12}
          draggable={true}
          scrollBoost={1.6}
          edgeFade={0.12}
          pauseOnHover
        />
      </div>
      <div className="text-center mt-2 text-[10px] font-mono tracking-widest text-white/30 uppercase px-4">
        DRAG TAPE TO FLING • SCROLL TO ACCELERATE
      </div>
    </motion.section>
  );
};

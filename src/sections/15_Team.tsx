import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/content';

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Unified scroll-controlled sequence for header and grid
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);

  const gridY = useTransform(scrollYProgress, [0, 1], [65, -35]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id="team"
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
              12 / ARCHITECTS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Organizing Committee
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Student leads and faculty curators directing TEDxRVITM 2026.
          </p>
        </motion.div>

        {/* Independent, Stable Team Portraits Grid (No conjoint sibling reactions) */}
        <motion.div
          style={{ y: gridY, opacity: gridOpacity }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/30 hover:bg-[#151515] hover:-translate-y-1.5 transition-all duration-300 transform-gpu space-y-5 sm:space-y-6 flex flex-col justify-between cursor-pointer"
            >
                <div className="space-y-6">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                      {member.role}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xl text-white">
                      {member.name}
                    </h4>
                    <p className="font-mono text-xs text-white/50">{member.dept}</p>
                  </div>

                  <p className="font-body text-xs text-white/70 italic font-light leading-relaxed">
                    {member.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[#E62B1E] hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="font-mono text-[10px] text-white/30 uppercase">RVITM</span>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EVENT_META, NAV_LINKS } from '../../data/content';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // Dynamic scroll-controlled sequence for footer elements
  const identityY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const identityOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);

  const linksY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const linksOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);

  const coordsY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const coordsOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);

  return (
    <footer
      ref={footerRef}
      className="bg-[#050505] text-white pt-16 sm:pt-24 pb-12 sm:pb-16 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
        {/* Top Grid with scroll control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Identity & Compliance */}
          <motion.div
            style={{ y: identityY, opacity: identityOpacity }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-display font-black text-3xl text-[#E62B1E]">TEDx</span>
              <span className="font-display font-bold text-3xl text-white">RVITM</span>
            </div>

            <p className="font-body text-sm text-white/60 max-w-sm leading-relaxed font-light">
              Where uncompromising curiosity disrupts conventional reality. Hosted at RV Institute of Technology and Management, Bengaluru.
            </p>

            {/* MANDATORY LICENSE LINE */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/70 max-w-sm space-y-1">
              <span className="text-[#E62B1E] font-medium block">TEDx Compliance Notice</span>
              <p>{EVENT_META.licenseLine}</p>
            </div>
          </motion.div>

          {/* Col 2: Navigation Links */}
          <motion.div
            style={{ y: linksY, opacity: linksOpacity }}
            className="lg:col-span-3 space-y-4 font-mono text-xs"
          >
            <h4 className="font-semibold text-white tracking-widest uppercase">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Coordinates */}
          <motion.div
            style={{ y: coordsY, opacity: coordsOpacity }}
            className="lg:col-span-4 space-y-4 font-mono text-xs"
          >
            <h4 className="font-semibold text-white tracking-widest uppercase">
              Location
            </h4>
            <p className="text-white/60 leading-relaxed">
              {EVENT_META.venue}
            </p>
            <p className="text-white/60">
              Inquiries: <a href="mailto:tedx@rvitm.edu.in" className="text-white underline">tedx@rvitm.edu.in</a>
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white/50">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram ↗</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube ↗</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X / Twitter ↗</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <p>© 2026 TEDxRVITM. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">Privacy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms</a>
            <a href="#venue" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

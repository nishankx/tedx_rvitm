import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EVENT_META, NAV_LINKS } from '../../data/content';

export const Footer: React.FC = () => {
  const location = useLocation();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end start'],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -15]);

  return (
    <footer
      ref={footerRef}
      className="bg-[#FAF9F5] text-neutral-900 pt-20 sm:pt-24 pb-16 relative overflow-hidden select-none"
    >
      {/* ── ARCHITECTURAL DRAFTING PATTERNS & GRIDS ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── BACKGROUND TYPOGRAPHY (MONUMENTAL WATERMARK WITH SIDEWAYS MOTION) ── */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute bottom-2 -left-10 select-none pointer-events-none z-0 overflow-hidden leading-none opacity-[0.04]"
      >
        <span className="font-display font-black text-[18vw] tracking-tighter text-neutral-950 uppercase whitespace-nowrap block">
          RVITM
        </span>
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center space-y-10 sm:space-y-12 relative z-10"
      >
        
        {/* ── MINIMAL BRAND WORDMARK WITH FADE-IN ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 flex flex-col items-center"
        >
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
              }
            }}
            className="flex items-baseline justify-center group focus:outline-none transition-transform hover:scale-[1.01]"
          >
            <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter text-[#E62B1E] leading-none">
              TEDx
            </span>
            <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter text-neutral-950 leading-none">
              RVITM
            </span>
          </Link>

          {/* Minimal Subtitle */}
          <div className="flex items-center justify-center gap-3 text-xs font-subtext tracking-widest text-neutral-500 uppercase font-semibold">
            <span>IDEAS WORTH SPREADING</span>
            <span className="text-[#E62B1E]">✦</span>
            <span>BENGALURU, 2026</span>
          </div>
        </motion.div>

        {/* ── MINIMAL NAVIGATION LINKS WITH FADE-IN ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl pt-6 border-t border-black/10"
        >
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-subtext uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={location.pathname === '/' ? link.href : link.path}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    const targetId = link.href.replace('#', '');
                    const el = document.getElementById(targetId);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', `#${targetId}`);
                    }
                  }
                }}
                className="text-neutral-600 hover:text-[#E62B1E] transition-colors font-medium flex items-center gap-0.5 cursor-pointer"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-neutral-400">↗</span>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* ── MINIMAL SOCIAL BUTTONS WITH FADE-IN ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 font-subtext text-xs tracking-wider text-neutral-600"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#E62B1E] hover:text-[#E62B1E] transition-colors"
          >
            INSTAGRAM ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#E62B1E] hover:text-[#E62B1E] transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#E62B1E] hover:text-[#E62B1E] transition-colors"
          >
            YOUTUBE ↗
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-black/15 hover:border-[#E62B1E] hover:text-[#E62B1E] transition-colors"
          >
            X / TWITTER ↗
          </a>
        </motion.div>

        {/* ── MINIMAL COMPLIANCE & LEGAL ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-subtext text-[11px] text-neutral-500"
        >
          <p className="text-center sm:text-left">
            © 2026 TEDxRVITM. {EVENT_META.licenseLine}
          </p>
          <p className="text-center sm:text-right">
            RV INSTITUTE OF TECHNOLOGY &amp; MANAGEMENT, BENGALURU
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;

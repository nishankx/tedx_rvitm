import React from 'react';
import { Link } from 'react-router-dom';
import { EVENT_META, NAV_LINKS } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Identity & Compliance */}
          <div className="lg:col-span-5 space-y-6">
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
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
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
          </div>

          {/* Col 3: Coordinates */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
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
          </div>
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

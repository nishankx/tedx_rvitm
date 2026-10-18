import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#080808] border-b border-white/[0.08] transition-all duration-300 ${
          isScrolled ? 'py-4 shadow-2xl shadow-black/80' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Top-Left Brand Wordmark */}
          <Link
            to="/"
            className="flex items-baseline gap-1 group select-none focus:outline-none"
            aria-label="TEDxRVITM Home"
          >
            <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-[#E62B1E] transition-opacity group-hover:opacity-90">
              TEDx
            </span>
            <span className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white transition-colors group-hover:text-white/90">
              RVITM
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-mono uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span
                  className={`h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-display font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 text-xs font-mono text-white/40 space-y-1">
              <p>RV Institute of Technology and Management, Bengaluru</p>
              <p className="text-[#E62B1E]">Operated under license from TED.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

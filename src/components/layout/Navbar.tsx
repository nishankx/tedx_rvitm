import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
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

  // ScrollSpy to track active homepage section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));

    const handleScrollSpy = () => {
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('/#', '').replace('#', '');
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
        setActiveSection(targetId);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#080808] border-b border-white/[0.08] transition-all duration-300 ${
          isScrolled ? 'py-4 shadow-2xl shadow-black/80' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Top-Left Brand Wordmark (Strictly Preserved) */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
                setActiveSection('');
              }
            }}
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

          {/* Right-Aligned Desktop Navigation & Mobile Toggle */}
          <div className="flex items-center gap-6 sm:gap-8 ml-auto">
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.name}
                    href={location.pathname === '/' ? link.href : link.path}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs font-subtext uppercase tracking-widest transition-all duration-200 relative py-1 cursor-pointer ${
                      isActive
                        ? 'text-[#E62B1E] font-bold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E62B1E] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none cursor-pointer"
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
            <div className="space-y-5">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.name}
                    href={location.pathname === '/' ? link.href : link.path}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block text-2xl font-subheading font-medium transition-colors cursor-pointer ${
                      isActive ? 'text-[#E62B1E] font-bold' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="border-t border-white/10 pt-6 text-xs font-subtext text-white/40 space-y-1">
              <p>RV Institute of Technology and Management, Bengaluru</p>
              <p className="text-[#E62B1E]">Operated under license from TED.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

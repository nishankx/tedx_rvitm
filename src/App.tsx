import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, type MotionValue } from 'framer-motion';

// Hooks & Globals
import { useLenis } from './hooks/useLenis';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { FilmGrain } from './components/layout/FilmGrain';
import { Navbar } from './components/layout/Navbar';

// Pages
import { HomePage } from './pages/HomePage';
import { SpeakersPage } from './pages/SpeakersPage';
import { SpeakerDetailPage } from './pages/SpeakerDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PartnerPage } from './pages/PartnerPage';
import { TeamPage } from './pages/TeamPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top or anchor on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timeout = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(timeout);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Page transition wrapper with brutalist black/red shutters wipe
interface AnimatedRoutesProps {
  scrollY?: MotionValue<number>;
  scrollYProgress?: MotionValue<number>;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({ scrollY, scrollYProgress }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage scrollY={scrollY} scrollYProgress={scrollYProgress} />
            </PageWrapper>
          }
        />
        <Route
          path="/speakers"
          element={
            <PageWrapper>
              <SpeakersPage />
            </PageWrapper>
          }
        />
        <Route
          path="/speakers/:slug"
          element={
            <PageWrapper>
              <SpeakerDetailPage />
            </PageWrapper>
          }
        />
        <Route
          path="/passes"
          element={<Navigate to="/" replace />}
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/partner"
          element={
            <PageWrapper>
              <PartnerPage />
            </PageWrapper>
          }
        />
        <Route
          path="/team"
          element={
            <PageWrapper>
              <TeamPage />
            </PageWrapper>
          }
        />
        <Route
          path="/faq"
          element={
            <PageWrapper>
              <FaqPage />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFoundPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Shutter wipe animation between routes
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Global Framer Motion scroll tracker
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#080808] text-white selection:bg-[#E62B1E] selection:text-white overflow-x-hidden">
        {/* Global Film Grain */}
        <FilmGrain />

        {/* Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Sleek Navbar */}
        <Navbar />

        {/* Routes with scroll tracking props */}
        <AnimatedRoutes scrollY={scrollY} scrollYProgress={scrollYProgress} />
      </div>
    </BrowserRouter>
  );
}

export default App;

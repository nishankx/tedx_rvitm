import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LatticeLoader } from '../components/animations/LatticeLoader';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('tedxrvitm_seen_intro');
    if (hasSeenLoader) {
      if (onComplete) onComplete();
      return;
    }

    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('tedxrvitm_seen_intro', 'true');
      if (onComplete) onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] bg-[#080808] flex flex-col items-center justify-center select-none"
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-baseline gap-1">
            <span className="font-display font-black text-4xl text-[#E62B1E]">TEDx</span>
            <span className="font-display font-bold text-4xl text-white">RVITM</span>
          </div>

          {/* ReactBits LatticeLoader */}
          <LatticeLoader rows={4} cols={4} size={7} gap={14} color="#E62B1E" />

          <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
            Ideas Worth Spreading
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CircularItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

interface CircularCarouselProps {
  items: CircularItem[];
  className?: string;
  onItemClick?: (item: CircularItem) => void;
}

export const CircularCarousel: React.FC<CircularCarouselProps> = ({
  items,
  className = '',
  onItemClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prevIdx) => (prevIdx - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((prevIdx) => (prevIdx + 1) % items.length);

  return (
    <div className={`relative w-full py-12 flex flex-col items-center select-none ${className}`}>
      {/* 3D Circular Card Carousel */}
      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center [perspective:1000px]">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const offset = (i - currentIndex + items.length) % items.length;
            const normalizedOffset = offset > items.length / 2 ? offset - items.length : offset;

            if (Math.abs(normalizedOffset) > 2) return null;

            const isCenter = normalizedOffset === 0;

            return (
              <motion.div
                key={item.id}
                onClick={() => {
                  if (isCenter && onItemClick) onItemClick(item);
                  else setCurrentIndex(i);
                }}
                className="absolute w-[260px] sm:w-[300px] h-[360px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#121212] shadow-2xl"
                animate={{
                  x: normalizedOffset * 160,
                  scale: 1 - Math.abs(normalizedOffset) * 0.15,
                  rotateY: normalizedOffset * -20,
                  zIndex: 20 - Math.abs(normalizedOffset) * 5,
                  opacity: 1 - Math.abs(normalizedOffset) * 0.35,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isCenter ? 'filter brightness-95' : 'filter brightness-40 grayscale'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-mono text-[#E62B1E] uppercase">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center text-sm transition-colors"
          aria-label="Previous"
        >
          ←
        </button>
        <span className="font-mono text-xs text-white/40">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center text-sm transition-colors"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CircularCarousel;

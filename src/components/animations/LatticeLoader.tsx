import React from 'react';
import { motion } from 'framer-motion';

interface LatticeLoaderProps {
  rows?: number;
  cols?: number;
  size?: number;
  gap?: number;
  color?: string;
  className?: string;
}

export const LatticeLoader: React.FC<LatticeLoaderProps> = ({
  rows = 4,
  cols = 4,
  size = 6,
  gap = 12,
  color = '#E62B1E',
  className = '',
}) => {
  return (
    <div
      className={`grid items-center justify-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const delay = (row + col) * 0.12;

        return (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
            animate={{
              scale: [0.6, 1.4, 0.6],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default LatticeLoader;

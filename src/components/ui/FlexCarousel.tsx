import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface FlexCarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  badge?: string;
  onClick?: () => void;
}

interface FlexCarouselProps {
  items: FlexCarouselItem[];
  className?: string;
}

export const FlexCarousel: React.FC<FlexCarouselProps> = ({
  items,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={`flex flex-col md:flex-row gap-4 w-full h-[480px] sm:h-[540px] ${className}`}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            onHoverStart={() => setActiveIndex(index)}
            className="relative rounded-2xl overflow-hidden cursor-pointer select-none border border-white/10 transition-all duration-500 bg-[#141414]"
            style={{
              flex: isActive ? 3 : 1,
            }}
            layout
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isActive ? 'filter brightness-90 scale-105' : 'filter brightness-40 grayscale'
              }`}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Badge */}
            {item.badge && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                {item.badge}
              </div>
            )}

            {/* Content Details */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-[#E62B1E] font-medium">
                {item.subtitle}
              </p>

              {isActive && item.description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-body text-xs text-white/70 leading-relaxed font-light line-clamp-2 pt-2"
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlexCarousel;

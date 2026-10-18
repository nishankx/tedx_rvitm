import React from 'react';
import { motion } from 'framer-motion';

export interface OptionWheelItem {
  id: string;
  label: string;
  sublabel?: string;
}

interface OptionWheelProps {
  options: OptionWheelItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const OptionWheel: React.FC<OptionWheelProps> = ({
  options,
  selectedId,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 overflow-x-auto py-2 no-scrollbar ${className}`}>
      {options.map((opt) => {
        const isSelected = opt.id === selectedId;

        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`relative px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 select-none cursor-pointer whitespace-nowrap focus:outline-none ${
              isSelected
                ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : 'bg-white/[0.04] text-white/50 hover:text-white border border-white/[0.08] hover:border-white/20'
            }`}
          >
            {isSelected && (
              <motion.span
                layoutId="wheel-glow"
                className="absolute inset-0 rounded-full bg-white -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="flex items-center gap-2">
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />}
              <span>{opt.label}</span>
              {opt.sublabel && (
                <span className="opacity-50 text-[10px] lowercase">({opt.sublabel})</span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default OptionWheel;

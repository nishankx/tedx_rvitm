import React from 'react';

export type StickerColor = 'lime' | 'pink' | 'violet' | 'orange' | 'red' | 'white' | 'black';

interface StickerProps {
  type:
    | 'starburst'
    | 'scallop'
    | 'pinwheel'
    | 'globe'
    | 'diamond'
    | 'smiley'
    | 'cross'
    | 'barcode'
    | 'hazard'
    | 'reticle'
    | 'lightning'
    | 'spiky'
    | 'flower'
    | 'stamp'
    | 'asterisk'
    | 'circleText';
  color?: StickerColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  animateSpin?: boolean;
  isDraggable?: boolean;
  onClick?: () => void;
}

const sizeMap: Record<string, string> = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-24 h-24',
};

// Refined, minimalist geometric icons
export const AsteriskSVG: React.FC<{ stroke?: string }> = ({ stroke = '#E62B1E' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" className="w-full h-full">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="3.34" y1="7" x2="20.66" y2="17" />
    <line x1="3.34" y1="17" x2="20.66" y2="7" />
  </svg>
);

export const GlobeSVG: React.FC<{ stroke?: string }> = ({ stroke = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const DiamondSVG: React.FC<{ stroke?: string }> = ({ stroke = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polygon points="12 2 22 12 12 22 2 12" />
  </svg>
);

export const BarcodeSVG: React.FC<{ stroke?: string }> = ({ stroke = 'currentColor' }) => (
  <svg viewBox="0 0 48 24" fill="none" stroke={stroke} strokeWidth="1.5" className="w-full h-full opacity-70">
    <line x1="2" y1="2" x2="2" y2="22" />
    <line x1="6" y1="2" x2="6" y2="22" strokeWidth="2.5" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="16" y1="2" x2="16" y2="22" strokeWidth="2" />
    <line x1="22" y1="2" x2="22" y2="22" strokeWidth="3" />
    <line x1="28" y1="2" x2="28" y2="22" />
    <line x1="32" y1="2" x2="32" y2="22" strokeWidth="2" />
    <line x1="38" y1="2" x2="38" y2="22" strokeWidth="1" />
    <line x1="44" y1="2" x2="44" y2="22" strokeWidth="2" />
  </svg>
);

export const ReticleSVG: React.FC<{ stroke?: string }> = ({ stroke = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" className="w-full h-full">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="1" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="1" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="23" y2="12" />
    <circle cx="12" cy="12" r="2" fill={stroke} />
  </svg>
);

export const CircularTextBadge: React.FC<{ text?: string }> = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center p-2 backdrop-blur-sm bg-black/40">
      <span className="font-display font-black text-xs text-[#E62B1E] tracking-widest">
        TEDx
      </span>
    </div>
  </div>
);

export const Sticker: React.FC<StickerProps> = ({
  type,
  size = 'sm',
  className = '',
  onClick,
}) => {
  const sizeClass = sizeMap[size] || 'w-6 h-6';

  const renderIcon = () => {
    switch (type) {
      case 'globe': return <GlobeSVG />;
      case 'diamond': return <DiamondSVG />;
      case 'barcode': return <BarcodeSVG />;
      case 'reticle': return <ReticleSVG />;
      case 'circleText': return <CircularTextBadge />;
      default: return <AsteriskSVG />;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center select-none text-white/70 ${sizeClass} ${className}`}
    >
      {renderIcon()}
    </div>
  );
};

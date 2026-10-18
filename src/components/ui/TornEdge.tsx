import React from 'react';

interface TornEdgeProps {
  position?: 'top' | 'bottom';
  color?: string; // Hex color of the edge
  className?: string;
  variant?: 'deep' | 'subtle' | 'jagged';
}

export const TornEdge: React.FC<TornEdgeProps> = ({
  position = 'bottom',
  color = '#0A0A0A',
  className = '',
  variant = 'jagged',
}) => {
  const isTop = position === 'top';

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        isTop ? '-mt-px mb-0' : '-mb-px mt-0'
      } ${className}`}
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className={`w-full h-7 md:h-10 block ${isTop ? 'rotate-180' : ''}`}
      >
        {variant === 'jagged' && (
          <path
            d="M0,0 L0,22 L35,12 L70,25 L105,8 L140,28 L175,10 L210,24 L245,6 L280,26 L315,14 L350,29 L385,11 L420,25 L455,9 L490,27 L525,13 L560,30 L595,8 L630,26 L665,12 L700,28 L735,7 L770,25 L805,10 L840,29 L875,13 L910,27 L945,8 L980,26 L1015,12 L1050,30 L1085,9 L1120,27 L1155,14 L1200,28 L1200,40 L0,40 Z"
            fill={color}
          />
        )}
        {variant === 'deep' && (
          <path
            d="M0,0 L0,30 L45,10 L90,32 L135,8 L180,35 L225,12 L270,30 L315,6 L360,34 L405,14 L450,32 L495,8 L540,35 L585,11 L630,30 L675,7 L720,33 L765,13 L810,31 L855,9 L900,34 L945,12 L990,30 L1035,7 L1080,33 L1125,14 L1170,30 L1200,12 L1200,40 L0,40 Z"
            fill={color}
          />
        )}
        {variant === 'subtle' && (
          <path
            d="M0,0 L0,18 L50,12 L100,20 L150,11 L200,22 L250,13 L300,21 L350,10 L400,22 L450,12 L500,20 L550,11 L600,23 L650,13 L700,21 L750,11 L800,22 L850,12 L900,20 L950,11 L1000,23 L1050,12 L1100,21 L1150,12 L1200,20 L1200,40 L0,40 Z"
            fill={color}
          />
        )}
      </svg>
    </div>
  );
};

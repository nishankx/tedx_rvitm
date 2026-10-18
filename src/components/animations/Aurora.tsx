import React from 'react';

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Aurora: React.FC<AuroraProps> = ({
  colorStops = ['#b81833', '#ff0101', '#ff0000'],
  className = '',
  children,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Aurora Mesh Layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen filter blur-[90px]"
        aria-hidden="true"
      >
        <div
          className="absolute -top-[30%] -left-[20%] w-[140%] h-[140%] animate-aurora"
          style={{
            background: `radial-gradient(ellipse at 20% 30%, ${colorStops[0]} 0%, transparent 50%),
                         radial-gradient(ellipse at 80% 40%, ${colorStops[1]} 0%, transparent 50%),
                         radial-gradient(ellipse at 50% 80%, ${colorStops[2]} 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default Aurora;

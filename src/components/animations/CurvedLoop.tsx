import React from 'react';

interface CurvedLoopProps {
  text: string;
  speed?: number;
  className?: string;
  curveDepth?: number;
}

export const CurvedLoop: React.FC<CurvedLoopProps> = ({
  text,
  className = '',
  curveDepth = 30,
}) => {
  const repeatedText = `${text} • ${text} • ${text} • `;

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      <svg viewBox="0 0 1000 120" className="w-full h-auto overflow-visible">
        <path
          id="curve-path"
          d={`M 0,60 Q 500,${60 + curveDepth} 1000,60`}
          fill="none"
          stroke="transparent"
        />
        <text className="font-mono text-xs uppercase tracking-[0.25em] fill-white/40">
          <textPath href="#curve-path" startOffset="0%">
            {repeatedText}
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur="25s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;

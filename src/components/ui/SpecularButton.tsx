import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpecularButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setCoords(null);
  };

  const sizeStyles = {
    sm: 'px-5 py-2 text-[11px]',
    md: 'px-7 py-3 text-xs',
    lg: 'px-9 py-4 text-xs tracking-[0.2em]',
  }[size];

  const baseStyles =
    `relative inline-flex items-center justify-center rounded-full font-mono uppercase tracking-widest font-semibold overflow-hidden transition-all duration-300 select-none group ${sizeStyles} ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    }`;

  const variantStyles = {
    primary:
      'bg-[#E62B1E] text-white shadow-[0_4px_24px_rgba(230,43,30,0.35)] hover:shadow-[0_6px_30px_rgba(230,43,30,0.5)] border border-red-400/30',
    outline:
      'bg-white/[0.04] text-white border border-white/20 hover:border-white/50 backdrop-blur-md',
    dark: 'bg-[#141414] text-white border border-white/10 hover:border-white/30',
  }[variant];

  const content = (
    <>
      {/* Specular Radial Reflection Highlight */}
      {coords && !disabled && (
        <span
          className="pointer-events-none absolute w-36 h-36 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-md transition-opacity duration-200"
          style={{
            left: coords.x,
            top: coords.y,
            background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)',
          }}
        />
      )}

      {/* Ambient Gloss Rim */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        ref={buttonRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default SpecularButton;

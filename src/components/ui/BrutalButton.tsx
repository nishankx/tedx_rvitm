import React from 'react';
import { motion } from 'framer-motion';

interface BrutalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'lime' | 'outline' | 'white' | 'pink' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetic?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  const variantStyles = {
    primary:
      'bg-[#E62B1E] text-white hover:bg-[#FF3324] shadow-[0_4px_20px_rgba(230,43,30,0.3)] hover:shadow-[0_6px_25px_rgba(230,43,30,0.45)]',
    lime:
      'bg-white text-black hover:bg-[#F2F2F2] shadow-sm hover:shadow-md',
    pink:
      'bg-white/10 text-white hover:bg-white/20 border border-white/15',
    outline:
      'bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.06]',
    white:
      'bg-white text-black hover:bg-[#EBEBEB]',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/[0.06]',
  }[variant];

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-mono tracking-wider',
    md: 'px-6 py-2.5 text-xs font-mono font-medium tracking-wider uppercase',
    lg: 'px-8 py-3.5 text-sm font-mono font-semibold tracking-wider uppercase',
    xl: 'px-10 py-4 text-base font-mono font-bold tracking-wider uppercase',
  }[size];

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 font-medium select-none cursor-pointer focus:outline-none';

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group ${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${baseStyles} ${variantStyles} ${sizeStyles} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`}
    >
      {content}
    </motion.button>
  );
};

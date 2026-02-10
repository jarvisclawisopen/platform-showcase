import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group';
  
  const variants = {
    primary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/30 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 backdrop-blur-sm',
    secondary: 'bg-navy-light/80 text-white hover:bg-navy-light border border-white/10 shadow-lg shadow-black/20 backdrop-blur-sm',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 border border-white/20',
    glass: 'bg-white/5 text-white border border-white/20 backdrop-blur-xl shadow-lg shadow-black/20 hover:bg-white/10 hover:border-white/30',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </motion.div>
  );
}

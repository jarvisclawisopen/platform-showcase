import React from 'react';
import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20',
    secondary: 'bg-navy-light text-white hover:bg-navy-light/80 border border-white/5',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple/50',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import React from 'react';
import { cn } from '@/app/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'secondary' | 'glass';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default',
  className 
}: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white border-white/20 backdrop-blur-sm shadow-lg shadow-black/10',
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/30',
    outline: 'bg-transparent text-gray-300 border-white/30 backdrop-blur-sm',
    secondary: 'bg-navy-light/80 text-gray-300 border-white/10 backdrop-blur-sm shadow-md shadow-black/10',
    glass: 'bg-white/5 text-white border-white/20 backdrop-blur-xl shadow-lg shadow-black/10',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105 hover:shadow-xl',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}

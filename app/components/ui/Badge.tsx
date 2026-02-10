import React from 'react';
import { cn } from '@/app/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'secondary';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default',
  className 
}: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white border-white/10',
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-transparent',
    outline: 'bg-transparent text-gray-300 border-white/20',
    secondary: 'bg-navy-light text-gray-300 border-white/5',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}

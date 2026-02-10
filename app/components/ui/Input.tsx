import React from 'react';
import { cn } from '@/app/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: React.ReactNode;
}

export default function Input({ 
  className, 
  icon,
  ...props 
}: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={cn(
          'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50',
          'transition-all duration-300',
          'hover:bg-white/10 hover:border-white/20',
          icon && 'pl-12',
          className
        )}
        {...props}
      />
    </div>
  );
}

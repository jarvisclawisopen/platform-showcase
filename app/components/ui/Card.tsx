import React from 'react';
import { cn } from '@/app/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

export default function Card({ 
  children, 
  className, 
  hover = true,
  glow = false,
  gradient = false
}: CardProps) {
  return (
    <div
      className={cn(
        'group relative h-full animate-fade-in',
        className
      )}
    >
      {/* Glow effect */}
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      )}
      
      {/* Gradient border effect */}
      {gradient && (
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      )}
      
      {/* Card content */}
      <div className={cn(
        'relative h-full bg-navy-light/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300',
        hover && 'group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-purple/20 group-hover:-translate-y-1',
      )}>
        {children}
      </div>
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300', className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-gray-300 leading-relaxed', className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('flex-1', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('pt-4 border-t border-white/10', className)}>
      {children}
    </div>
  );
}

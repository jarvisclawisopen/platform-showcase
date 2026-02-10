'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export default function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = '#667eea',
  colorTo = '#ec4899',
}: BorderBeamProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden rounded-2xl', className)}>
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          delay,
        }}
        style={{
          background: `conic-gradient(from 0deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
        }}
      />
      <div className="absolute inset-[2px] rounded-2xl bg-navy-light" />
    </div>
  );
}

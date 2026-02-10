'use client';

import { Card as ShadcnCard, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import type { App } from '../types';

interface CardProps {
  app: App;
  onOpenDetail: (app: App) => void;
  index?: number;
}

const categoryGradients: Record<string, { gradient: string; pattern: string }> = {
  'AI': { 
    gradient: 'from-blue-400 via-purple-400 to-pink-400',
    pattern: 'M20 20 L40 40 M40 20 L20 40'
  },
  'Crypto': { 
    gradient: 'from-yellow-400 via-orange-400 to-red-400',
    pattern: 'M30 15 L45 30 L30 45 L15 30 Z'
  },
  'Design': { 
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    pattern: 'M30 30 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0'
  },
  'Development': { 
    gradient: 'from-green-400 via-emerald-400 to-teal-400',
    pattern: 'M10 10 H50 V50 H10 Z M20 20 H40 V40 H20 Z'
  },
  'Finance': { 
    gradient: 'from-indigo-400 via-blue-400 to-cyan-400',
    pattern: 'M15 30 L30 15 L45 30 L30 45 Z'
  },
  'Marketing': { 
    gradient: 'from-red-400 via-pink-400 to-fuchsia-400',
    pattern: 'M30 10 L50 30 L30 50 L10 30 Z'
  },
  'Productivity': { 
    gradient: 'from-teal-400 via-cyan-400 to-blue-400',
    pattern: 'M20 15 L40 15 L40 45 L20 45 Z'
  },
  'Research': { 
    gradient: 'from-violet-400 via-purple-400 to-indigo-400',
    pattern: 'M30 30 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0'
  },
  'Security': { 
    gradient: 'from-gray-600 via-slate-600 to-gray-700',
    pattern: 'M25 15 L35 15 L35 25 L25 25 Z M25 35 L35 35 L35 45 L25 45 Z'
  },
  'Other': { 
    gradient: 'from-gray-400 via-slate-400 to-gray-500',
    pattern: 'M20 20 L40 20 L40 40 L20 40 Z'
  },
};

export default function Card({ app, onOpenDetail, index = 0 }: CardProps) {
  const { gradient, pattern } = categoryGradients[app.category] || categoryGradients['Other'];
  const { toggleFavorite, isFavorite } = useAppStore();
  const favorite = isFavorite(app.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(app.id);
  };

  const handleExternalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div onClick={() => onOpenDetail(app)} className="cursor-pointer">
        <ShadcnCard className="overflow-hidden bg-white border border-gray-200 rounded-2xl card-shadow card-hover transition-all">
          {/* Hero Visual Section - Dribbble style */}
          <div className={`relative h-64 bg-gradient-to-br ${gradient} overflow-hidden`}>
            {/* Pattern overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pattern-${app.id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d={pattern} fill="none" stroke="white" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pattern-${app.id})`}/>
            </svg>

            {/* Category icon/letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/90 text-8xl font-bold drop-shadow-lg">
                {app.name.charAt(0)}
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
              <p className="text-white text-center text-sm leading-relaxed line-clamp-4">
                {app.description}
              </p>
            </div>

            {/* Favorite button */}
            <button
              onClick={handleFavoriteClick}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorite ? 'fill-red-500 text-red-500' : 'text-gray-700'
                }`}
              />
            </button>
          </div>

          {/* Info Section - Dribbble style */}
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {app.name}
              </h3>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalClick}
                className="shrink-0 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </a>
            </div>

            {/* Tags row */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0 text-xs font-medium">
                {app.category}
              </Badge>
              <span className="text-gray-400">•</span>
              <span className="font-medium">{app.pricingModel}</span>
            </div>
          </CardContent>
        </ShadcnCard>
      </div>
    </motion.div>
  );
}

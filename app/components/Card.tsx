'use client';

import { Badge } from '@/components/ui/badge';
import { Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { SpotlightCard } from './spotlight-card';
import type { App } from '../types';

interface CardProps {
  app: App;
  onOpenDetail: (app: App) => void;
  index?: number;
}

const categoryGradients: Record<string, string> = {
  'AI': 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
  'Crypto': 'from-yellow-500/20 via-orange-500/20 to-red-500/20',
  'Design': 'from-pink-500/20 via-rose-500/20 to-red-500/20',
  'Development': 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
  'Finance': 'from-indigo-500/20 via-blue-500/20 to-cyan-500/20',
  'Marketing': 'from-red-500/20 via-pink-500/20 to-fuchsia-500/20',
  'Productivity': 'from-teal-500/20 via-cyan-500/20 to-blue-500/20',
  'Research': 'from-violet-500/20 via-purple-500/20 to-indigo-500/20',
  'Security': 'from-gray-600/20 via-slate-600/20 to-gray-700/20',
  'Other': 'from-gray-500/20 via-slate-500/20 to-gray-600/20',
};

export default function Card({ app, onOpenDetail, index = 0 }: CardProps) {
  const gradient = categoryGradients[app.category] || categoryGradients['Other'];
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
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group h-full"
    >
      <div onClick={() => onOpenDetail(app)} className="cursor-pointer h-full">
        <SpotlightCard className="h-full flex flex-col">
          {/* Hero Section with Gradient */}
          <div className={`relative h-40 rounded-xl bg-gradient-to-br ${gradient} mb-4 overflow-hidden`}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
            
            {/* Large initial letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/80 text-6xl font-bold drop-shadow-2xl">
                {app.name.charAt(0)}
              </div>
            </div>

            {/* Hover overlay with description */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white/90 text-center text-sm leading-relaxed line-clamp-4">
                {app.description}
              </p>
            </div>

            {/* Favorite button */}
            <button
              onClick={handleFavoriteClick}
              className="absolute top-3 right-3 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <Heart
                className={`h-4 w-4 ${
                  favorite ? 'fill-red-500 text-red-500' : 'text-white'
                }`}
              />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-blue-400 transition-colors">
                {app.name}
              </h3>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalClick}
                className="shrink-0 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-slate-400 hover:text-white transition-colors" />
              </a>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 text-xs mt-auto">
              <Badge className="bg-white/10 text-white/90 border-white/20 text-xs font-medium hover:bg-white/20 transition-colors">
                {app.category}
              </Badge>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-medium">{app.pricingModel}</span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
}

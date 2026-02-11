'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import type { App } from '../types';

interface CompactCardProps {
  app: App;
  onOpenDetail: (app: App) => void;
  index?: number;
}

const categoryColors: Record<string, string> = {
  'AI': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  'Crypto': 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  'Design': 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  'Development': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  'Finance': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
  'Marketing': 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  'Productivity': 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  'Research': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  'Security': 'bg-gray-500/20 text-gray-300 border-gray-500/40',
  'Other': 'bg-slate-500/20 text-slate-300 border-slate-500/40',
};

export default function CompactCard({ app, onOpenDetail, index = 0 }: CompactCardProps) {
  const colors = categoryColors[app.category] || categoryColors['Other'];
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
    >
      <div
        onClick={() => onOpenDetail(app)}
        className="group flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-xl card-hover cursor-pointer"
      >
        {/* Left: Category Badge */}
        <Badge variant="outline" className={`${colors} text-xs font-semibold shrink-0 backdrop-blur-xl`}>
          {app.category}
        </Badge>

        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
            {app.name}
          </h3>
          <p className="text-slate-400 text-sm truncate">{app.description}</p>
        </div>

        {/* Right: Tags & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Tags (first 2) */}
          <div className="hidden md:flex gap-1.5">
            {app.tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/10 text-slate-300 border-white/20 text-xs font-medium backdrop-blur-xl"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Pricing */}
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:block">
            {app.pricingModel}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-white/10"
              onClick={handleFavoriteClick}
            >
              <Heart
                className={`h-4 w-4 ${
                  favorite ? 'fill-red-500 text-red-500' : 'text-slate-400'
                }`}
              />
            </Button>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalClick}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

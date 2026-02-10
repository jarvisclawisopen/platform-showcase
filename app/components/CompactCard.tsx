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
  'AI': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'Crypto': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Design': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  'Development': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'Finance': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  'Marketing': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  'Productivity': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  'Research': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Security': 'bg-slate-500/10 text-slate-400 border-slate-500/30',
  'Other': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
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
        className="group flex items-center gap-4 p-4 bg-slate-900 border border-slate-700 rounded-xl card-hover cursor-pointer"
      >
        {/* Left: Category Badge */}
        <Badge variant="outline" className={`${colors} text-xs font-semibold shrink-0`}>
          {app.category}
        </Badge>

        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
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
                className="bg-slate-800 text-slate-300 border-slate-600 text-xs font-medium"
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
              className="h-8 w-8"
              onClick={handleFavoriteClick}
            >
              <Heart
                className={`h-4 w-4 ${
                  favorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
                }`}
              />
            </Button>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalClick}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

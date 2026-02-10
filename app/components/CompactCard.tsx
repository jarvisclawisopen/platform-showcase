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
  'AI': 'bg-blue-100 text-blue-700 border-blue-200',
  'Crypto': 'bg-orange-100 text-orange-700 border-orange-200',
  'Design': 'bg-pink-100 text-pink-700 border-pink-200',
  'Development': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Finance': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  'Marketing': 'bg-rose-100 text-rose-700 border-rose-200',
  'Productivity': 'bg-teal-100 text-teal-700 border-teal-200',
  'Research': 'bg-purple-100 text-purple-700 border-purple-200',
  'Security': 'bg-gray-100 text-gray-700 border-gray-200',
  'Other': 'bg-gray-100 text-gray-700 border-gray-200',
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
        className="group flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl card-hover cursor-pointer"
      >
        {/* Left: Category Badge */}
        <Badge variant="outline" className={`${colors} text-xs font-semibold shrink-0`}>
          {app.category}
        </Badge>

        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors truncate">
            {app.name}
          </h3>
          <p className="text-gray-600 text-sm truncate">{app.description}</p>
        </div>

        {/* Right: Tags & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Tags (first 2) */}
          <div className="hidden md:flex gap-1.5">
            {app.tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-700 border-gray-200 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Pricing */}
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:block">
            {app.pricingModel}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-gray-100"
              onClick={handleFavoriteClick}
            >
              <Heart
                className={`h-4 w-4 ${
                  favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`}
              />
            </Button>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalClick}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

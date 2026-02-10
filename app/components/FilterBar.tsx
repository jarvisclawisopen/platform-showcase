'use client';

import { Heart, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import Select from './ui/Select';
import Button from './ui/Button';

interface FilterBarProps {
  category: string;
  sortBy: string;
  showFavoritesOnly: boolean;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  onToggleFavorites: () => void;
  categories: string[];
}

export default function FilterBar({
  category,
  sortBy,
  showFavoritesOnly,
  onCategoryChange,
  onSortChange,
  onToggleFavorites,
  categories,
}: FilterBarProps) {
  const categoryOptions = [
    { value: 'all', label: '🌐 All Categories' },
    ...categories.map(cat => ({ value: cat, label: cat }))
  ];

  const sortOptions = [
    { value: 'default', label: '✨ Default Order' },
    { value: 'name', label: '🔤 Name (A-Z)' },
    { value: 'category', label: '📁 Category' },
    { value: 'votes', label: '🔥 Most Voted' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative z-10 mb-20"
    >
      {/* Filter bar container with premium glass effect */}
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
        
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl">
          {/* Top shine */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
            {/* Filter icon + label */}
            <div className="flex items-center gap-2 text-gray-300">
              <div className="p-2 rounded-xl bg-white/5 border border-white/20">
                <SlidersHorizontal size={18} />
              </div>
              <span className="font-semibold text-sm">Filters</span>
            </div>

            {/* Category Filter */}
            <motion.div 
              className="w-full sm:w-auto min-w-[220px]"
              whileHover={{ scale: 1.02 }}
            >
              <Select
                value={category}
                onChange={onCategoryChange}
                options={categoryOptions}
                placeholder="Select category"
              />
            </motion.div>

            {/* Sort Options */}
            <motion.div 
              className="w-full sm:w-auto min-w-[220px]"
              whileHover={{ scale: 1.02 }}
            >
              <Select
                value={sortBy}
                onChange={onSortChange}
                options={sortOptions}
                placeholder="Sort by"
              />
            </motion.div>

            {/* Favorites Toggle */}
            <Button
              variant={showFavoritesOnly ? 'gradient' : 'glass'}
              onClick={onToggleFavorites}
            >
              <motion.div
                animate={showFavoritesOnly ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  size={18}
                  className={showFavoritesOnly ? 'fill-white' : ''}
                />
              </motion.div>
              <span className="font-semibold">
                {showFavoritesOnly ? 'Favorites' : 'All'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

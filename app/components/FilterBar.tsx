'use client';

import { Heart } from 'lucide-react';
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
    { value: 'default', label: '↕️ Default Order' },
    { value: 'name', label: '🔤 Name (A-Z)' },
    { value: 'category', label: '📁 Category' },
    { value: 'votes', label: '🔥 Most Voted' },
  ];

  return (
    <div className="relative z-10 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
        {/* Category Filter */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select
            value={category}
            onChange={onCategoryChange}
            options={categoryOptions}
            placeholder="Select category"
          />
        </div>

        {/* Sort Options */}
        <div className="w-full sm:w-auto min-w-[200px]">
          <Select
            value={sortBy}
            onChange={onSortChange}
            options={sortOptions}
            placeholder="Sort by"
          />
        </div>

        {/* Favorites Toggle */}
        <Button
          variant={showFavoritesOnly ? 'gradient' : 'primary'}
          onClick={onToggleFavorites}
          className="gap-2"
        >
          <Heart
            size={18}
            className={showFavoritesOnly ? 'fill-white' : ''}
          />
          <span>
            {showFavoritesOnly ? 'Favorites Only' : 'Show All'}
          </span>
        </Button>
      </div>
    </div>
  );
}

'use client';

import { Heart } from 'lucide-react';

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
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 border-2 border-gray-200 rounded-xl bg-white text-gray-700 font-medium focus:border-indigo-500 focus:outline-none transition-colors"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border-2 border-gray-200 rounded-xl bg-white text-gray-700 font-medium focus:border-indigo-500 focus:outline-none transition-colors"
        >
          <option value="default">Default</option>
          <option value="name">Name (A-Z)</option>
          <option value="category">Category</option>
          <option value="votes">Most Voted</option>
        </select>

        {/* Favorites Toggle */}
        <button
          onClick={onToggleFavorites}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-colors ${
            showFavoritesOnly
              ? 'bg-pink-100 text-pink-600 border-2 border-pink-200'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
          }`}
        >
          <Heart
            size={16}
            className={showFavoritesOnly ? 'fill-pink-600' : ''}
          />
          {showFavoritesOnly ? 'Favorites' : 'All'}
        </button>
      </div>
    </div>
  );
}

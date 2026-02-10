'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Grid3x3, List, Heart, X } from 'lucide-react';
import { useAppStore } from '@/lib/store';

interface ControlsProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  pricingFilter: string[];
  onPricingFilterChange: (values: string[]) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const pricingOptions = ['Free', 'Paid', 'Free/Paid', 'Unknown'];

export default function Controls({
  sortBy,
  onSortChange,
  pricingFilter,
  onPricingFilterChange,
  showFavoritesOnly,
  onToggleFavorites,
  onClearFilters,
  hasActiveFilters,
}: ControlsProps) {
  const { viewMode, setViewMode, favorites } = useAppStore();

  const togglePricingFilter = (option: string) => {
    if (pricingFilter.includes(option)) {
      onPricingFilterChange(pricingFilter.filter((f) => f !== option));
    } else {
      onPricingFilterChange([...pricingFilter, option]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Row: Sort, View Toggle, Favorites */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">Sort:</span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[180px] bg-white border-gray-300 text-gray-900">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="category">Category</SelectItem>
              <SelectItem value="pricing">Pricing</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-white rounded-lg p-1 border border-gray-300">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode('grid')}
            className={`${
              viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
            }`}
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode('compact')}
            className={`${
              viewMode === 'compact' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
            }`}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Favorites Toggle */}
        <Button
          variant={showFavoritesOnly ? 'default' : 'outline'}
          size="sm"
          onClick={onToggleFavorites}
          className={
            showFavoritesOnly
              ? 'bg-red-500 hover:bg-red-600 text-white border-red-400'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }
        >
          <Heart className={`h-4 w-4 mr-2 ${showFavoritesOnly ? 'fill-current' : ''}`} />
          Favorites {favorites.length > 0 && `(${favorites.length})`}
        </Button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          >
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Pricing Filters */}
      <div>
        <span className="text-sm text-gray-600 font-medium mb-2 block">Pricing:</span>
        <div className="flex flex-wrap gap-2">
          {pricingOptions.map((option) => {
            const isActive = pricingFilter.includes(option);
            return (
              <Badge
                key={option}
                variant={isActive ? 'default' : 'outline'}
                className={`cursor-pointer text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gray-900 hover:bg-gray-800 text-white border-gray-900'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
                }`}
                onClick={() => togglePricingFilter(option)}
              >
                {option}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}

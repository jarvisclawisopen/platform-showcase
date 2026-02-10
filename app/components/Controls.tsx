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
          <span className="text-sm text-slate-400 font-medium">Sort:</span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[180px] bg-slate-800 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600">
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="category">Category</SelectItem>
              <SelectItem value="pricing">Pricing</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-600">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode('grid')}
            className={`${
              viewMode === 'grid' ? 'bg-slate-700 text-white' : 'text-slate-400'
            }`}
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode('compact')}
            className={`${
              viewMode === 'compact' ? 'bg-slate-700 text-white' : 'text-slate-400'
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
              ? 'bg-rose-500 hover:bg-rose-600 text-white border-rose-400'
              : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700'
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
            className="text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Pricing Filters */}
      <div>
        <span className="text-sm text-slate-400 font-medium mb-2 block">Pricing:</span>
        <div className="flex flex-wrap gap-2">
          {pricingOptions.map((option) => {
            const isActive = pricingFilter.includes(option);
            return (
              <Badge
                key={option}
                variant={isActive ? 'default' : 'outline'}
                className={`cursor-pointer text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-400'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-600'
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

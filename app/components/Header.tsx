'use client';

import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Header({ categories, selectedCategory, onSelectCategory }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 mb-16">
      <div className="container-max px-6 py-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Platform Showcase
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base font-normal">
            Discover 72 innovative platforms across categories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Badge
                key={category}
                variant={isSelected ? "default" : "outline"}
                className={`
                  cursor-pointer px-4 py-2 font-medium text-sm transition-all duration-200
                  ${isSelected 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-400' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-600'
                  }
                `}
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </Badge>
            );
          })}
        </div>
      </div>
    </header>
  );
}

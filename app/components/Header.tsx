'use client';

import { Badge } from '@/components/ui/badge';
import type { App } from '../types';

interface HeaderProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  apps: App[];
}

const categoryColors: Record<string, string> = {
  'All': 'hover:bg-gray-900 hover:text-white data-[selected=true]:bg-gray-900 data-[selected=true]:text-white',
  'AI': 'hover:bg-blue-500 hover:text-white data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
  'Crypto': 'hover:bg-orange-500 hover:text-white data-[selected=true]:bg-orange-500 data-[selected=true]:text-white',
  'Design': 'hover:bg-pink-500 hover:text-white data-[selected=true]:bg-pink-500 data-[selected=true]:text-white',
  'Development': 'hover:bg-emerald-500 hover:text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white',
  'Finance': 'hover:bg-indigo-500 hover:text-white data-[selected=true]:bg-indigo-500 data-[selected=true]:text-white',
  'Marketing': 'hover:bg-rose-500 hover:text-white data-[selected=true]:bg-rose-500 data-[selected=true]:text-white',
  'Productivity': 'hover:bg-teal-500 hover:text-white data-[selected=true]:bg-teal-500 data-[selected=true]:text-white',
  'Research': 'hover:bg-purple-500 hover:text-white data-[selected=true]:bg-purple-500 data-[selected=true]:text-white',
  'Security': 'hover:bg-gray-700 hover:text-white data-[selected=true]:bg-gray-700 data-[selected=true]:text-white',
  'Other': 'hover:bg-gray-600 hover:text-white data-[selected=true]:bg-gray-600 data-[selected=true]:text-white',
};

export default function Header({ categories, selectedCategory, onSelectCategory, apps }: HeaderProps) {
  const getCategoryCount = (category: string) => {
    if (category === 'All') return apps.length;
    return apps.filter((app) => app.category === category).length;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container-max px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-2">
            Platform Showcase
          </h1>
          <p className="text-gray-600 text-lg">
            Discover <span className="font-semibold text-gray-900">{apps.length}</span> innovative platforms
          </p>
        </div>

        {/* Category Filter - Dribbble style pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = getCategoryCount(category);
            const colorClass = categoryColors[category] || categoryColors['Other'];
            
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                data-selected={isSelected}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  bg-gray-100 text-gray-700 border border-transparent
                  ${colorClass}
                `}
              >
                {category} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

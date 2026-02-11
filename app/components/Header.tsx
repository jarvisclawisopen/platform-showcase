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
  'All': 'hover:bg-white/20 hover:text-white data-[selected=true]:bg-white/20 data-[selected=true]:text-white data-[selected=true]:border-white/40',
  'AI': 'hover:bg-blue-500/30 hover:text-blue-300 data-[selected=true]:bg-blue-500/30 data-[selected=true]:text-blue-300 data-[selected=true]:border-blue-400/40',
  'Crypto': 'hover:bg-orange-500/30 hover:text-orange-300 data-[selected=true]:bg-orange-500/30 data-[selected=true]:text-orange-300 data-[selected=true]:border-orange-400/40',
  'Design': 'hover:bg-pink-500/30 hover:text-pink-300 data-[selected=true]:bg-pink-500/30 data-[selected=true]:text-pink-300 data-[selected=true]:border-pink-400/40',
  'Development': 'hover:bg-emerald-500/30 hover:text-emerald-300 data-[selected=true]:bg-emerald-500/30 data-[selected=true]:text-emerald-300 data-[selected=true]:border-emerald-400/40',
  'Finance': 'hover:bg-indigo-500/30 hover:text-indigo-300 data-[selected=true]:bg-indigo-500/30 data-[selected=true]:text-indigo-300 data-[selected=true]:border-indigo-400/40',
  'Marketing': 'hover:bg-rose-500/30 hover:text-rose-300 data-[selected=true]:bg-rose-500/30 data-[selected=true]:text-rose-300 data-[selected=true]:border-rose-400/40',
  'Productivity': 'hover:bg-teal-500/30 hover:text-teal-300 data-[selected=true]:bg-teal-500/30 data-[selected=true]:text-teal-300 data-[selected=true]:border-teal-400/40',
  'Research': 'hover:bg-purple-500/30 hover:text-purple-300 data-[selected=true]:bg-purple-500/30 data-[selected=true]:text-purple-300 data-[selected=true]:border-purple-400/40',
  'Security': 'hover:bg-gray-500/30 hover:text-gray-300 data-[selected=true]:bg-gray-500/30 data-[selected=true]:text-gray-300 data-[selected=true]:border-gray-400/40',
  'Other': 'hover:bg-slate-500/30 hover:text-slate-300 data-[selected=true]:bg-slate-500/30 data-[selected=true]:text-slate-300 data-[selected=true]:border-slate-400/40',
};

export default function Header({ categories, selectedCategory, onSelectCategory, apps }: HeaderProps) {
  const getCategoryCount = (category: string) => {
    if (category === 'All') return apps.length;
    return apps.filter((app) => app.category === category).length;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="container-max px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white tracking-tight mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Platform Showcase
          </h1>
          <p className="text-slate-400 text-lg">
            Discover <span className="font-semibold text-white">{apps.length}</span> innovative platforms
          </p>
        </div>

        {/* Category Filter - Glass pills */}
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
                  px-4 py-2 rounded-full text-sm font-medium
                  bg-slate-900/50 border border-slate-700/50
                  text-slate-300 backdrop-blur-sm
                  transition-all duration-200
                  ${colorClass}
                `}
              >
                {category}
                {count > 0 && (
                  <span className="ml-1.5 text-xs opacity-70">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

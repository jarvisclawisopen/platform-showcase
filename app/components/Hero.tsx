'use client';

import { Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16 pt-20 pb-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
        Discover Premium Platforms
      </h1>
      
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Curated collection of 72 top platforms across AI, crypto, design, and development
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search platforms..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

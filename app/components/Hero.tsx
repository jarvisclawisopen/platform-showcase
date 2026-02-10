'use client';

import { Search, Sparkles } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <div className="relative z-10 text-center mb-24 md:mb-32 animate-fade-in">
      {/* Floating icons */}
      <div className="absolute -top-8 left-1/4 text-purple-400 opacity-20 animate-float">
        <Sparkles size={40} />
      </div>
      
      <div className="absolute -top-8 right-1/4 text-blue-400 opacity-20 animate-float-delayed">
        <Sparkles size={32} />
      </div>

      <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-full">
        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          ✨ 72 Premium Platforms
        </span>
      </div>

      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
        Platform
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Showcase
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Discover cutting-edge platforms across AI, crypto, design, development and more. 
        <span className="text-white font-medium"> Find your next favorite tool.</span>
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-navy-light/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-all duration-300">
            <div className="flex items-center px-6 py-4">
              <Search className="text-gray-400 mr-4 group-hover:text-purple-400 transition-colors" size={24} />
              <input
                type="text"
                placeholder="Search platforms, tags, or categories..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 bg-transparent text-white text-lg placeholder-gray-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="ml-2 text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

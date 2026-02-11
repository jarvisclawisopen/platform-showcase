'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  totalResults: number;
}

export default function SearchBar({ value, onChange, totalResults }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-500" />
      </div>
      <input
        type="text"
        placeholder="Search platforms, tags, or categories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full pl-12 pr-4 py-4 rounded-2xl text-base
          bg-slate-900/50 backdrop-blur-xl
          border border-slate-800/50
          text-white placeholder:text-slate-500
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
          transition-all duration-200
        "
      />
      {value && (
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <span className="text-sm text-slate-400">
            {totalResults} result{totalResults !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  );
}

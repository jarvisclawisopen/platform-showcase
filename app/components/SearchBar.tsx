'use client';

import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { useAppStore } from '@/lib/store';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  totalResults: number;
}

export default function SearchBar({ value, onChange, totalResults }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addRecentSearch } = useAppStore();

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (newValue: string) => {
    onChange(newValue);
    if (newValue.length > 2) {
      addRecentSearch(newValue);
    }
  };

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-gray-900 transition-colors" />
      
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search platforms... (⌘K)"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="pl-12 pr-24 h-14 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-gray-900/10 rounded-xl shadow-sm"
      />

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {value && (
          <>
            <span className="text-xs text-gray-500 font-medium">
              {totalResults} results
            </span>
            <button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

'use client';

import { Search, Heart } from 'lucide-react';

interface EmptyStateProps {
  type: 'search' | 'favorites';
  onReset: () => void;
}

export default function EmptyState({ type, onReset }: EmptyStateProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-32 animate-fade-in">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          {type === 'search' ? (
            <div className="p-6 bg-white/5 rounded-full">
              <Search size={64} className="text-gray-400" />
            </div>
          ) : (
            <div className="p-6 bg-white/5 rounded-full">
              <Heart size={64} className="text-gray-400" />
            </div>
          )}
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          {type === 'search' ? 'No results found' : 'No favorites yet'}
        </h3>

        <p className="text-lg text-gray-400 mb-8">
          {type === 'search'
            ? 'Try adjusting your search or filters to find what you\'re looking for.'
            : 'Start adding platforms to your favorites by clicking the heart icon.'}
        </p>

        <button
          onClick={onReset}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple/50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {type === 'search' ? 'Clear filters' : 'Show all platforms'}
        </button>
      </div>
    </div>
  );
}

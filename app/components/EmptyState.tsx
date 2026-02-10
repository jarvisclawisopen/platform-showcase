'use client';

import { Search, Heart } from 'lucide-react';

interface EmptyStateProps {
  type: 'search' | 'favorites';
  onReset: () => void;
}

export default function EmptyState({ type, onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          {type === 'search' ? (
            <div className="p-4 bg-gray-100 rounded-full">
              <Search size={48} className="text-gray-400" />
            </div>
          ) : (
            <div className="p-4 bg-pink-50 rounded-full">
              <Heart size={48} className="text-pink-400" />
            </div>
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {type === 'search' ? 'No results found' : 'No favorites yet'}
        </h3>

        <p className="text-gray-600 mb-8">
          {type === 'search'
            ? 'Try adjusting your search or filters.'
            : 'Start adding platforms to your favorites by clicking the heart icon.'}
        </p>

        <button
          onClick={onReset}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
        >
          {type === 'search' ? 'Clear filters' : 'Show all platforms'}
        </button>
      </div>
    </div>
  );
}

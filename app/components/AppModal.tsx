'use client';

import { X, ExternalLink, Heart, ThumbsUp } from 'lucide-react';
import type { App } from '../types';

interface AppModalProps {
  app: App | null;
  isOpen: boolean;
  onClose: () => void;
  onVote: (id: string) => void;
  onFavorite: (id: string) => void;
  isFavorited: boolean;
  userVotes: Record<string, boolean>;
}

export default function AppModal({
  app,
  isOpen,
  onClose,
  onVote,
  onFavorite,
  isFavorited,
  userVotes,
}: AppModalProps) {
  if (!app || !isOpen) return null;

  const hasVoted = userVotes[app.id] || false;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-2 pr-10">
                {app.name}
              </h2>
              <p className="text-gray-600 text-lg">
                {app.description}
              </p>
              
              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-medium text-sm">
                  {app.category}
                </span>
                <span className="text-gray-500 text-sm">{app.pricingModel}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About {app.name}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-6">
                {app.detailed}
              </p>

              {/* Tags */}
              {app.tags && app.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-200">
                <button
                  onClick={() => onVote(app.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    hasVoted
                      ? 'bg-indigo-100 text-indigo-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsUp size={18} className={hasVoted ? 'fill-indigo-600' : ''} />
                  {hasVoted ? 'Voted' : 'Vote'} ({app.votes})
                </button>

                <button
                  onClick={() => onFavorite(app.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isFavorited
                      ? 'bg-pink-100 text-pink-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart size={18} className={isFavorited ? 'fill-pink-600' : ''} />
                  {isFavorited ? 'Favorited' : 'Favorite'}
                </button>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors ml-auto"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

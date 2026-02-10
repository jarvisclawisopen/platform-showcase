'use client';

import { X, ExternalLink, Heart } from 'lucide-react';
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
        <div className="flex min-h-full items-center justify-center p-4 md:p-8">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              {app.name}
            </h2>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                {app.category}
              </span>
              <span className="text-sm text-neutral-500">{app.pricingModel}</span>
            </div>

            <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
              {app.description}
            </p>

            <p className="text-neutral-600 leading-relaxed mb-8 text-sm whitespace-pre-line">
              {app.detailed}
            </p>

            {app.tags && app.tags.length > 0 && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-md text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-neutral-200">
              <button
                onClick={() => onVote(app.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  hasVoted
                    ? 'bg-indigo-500 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {hasVoted ? 'Voted' : 'Vote'} ({app.votes})
              </button>

              <button
                onClick={() => onFavorite(app.id)}
                className="p-2.5 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart
                  size={20}
                  className={isFavorited ? 'fill-red-500 text-red-500' : 'text-neutral-400'}
                />
              </button>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors ml-auto shadow-sm"
              >
                Visit Website
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

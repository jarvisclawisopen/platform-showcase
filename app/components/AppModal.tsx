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
        className="fixed inset-0 bg-black/30 z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-8">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#ededf7] rounded-3xl p-12"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-black/40 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-4xl font-medium text-black mb-4">
              {app.name}
            </h2>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-[#d4d4f0] rounded-full text-sm font-medium">
                {app.category}
              </span>
              <span className="text-sm text-black/60">{app.pricingModel}</span>
            </div>

            <p className="text-black/80 leading-relaxed mb-6">
              {app.description}
            </p>

            <p className="text-black/60 leading-relaxed mb-8 text-sm whitespace-pre-line">
              {app.detailed}
            </p>

            {app.tags && app.tags.length > 0 && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/40 rounded-full text-xs text-black/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-black/10">
              <button
                onClick={() => onVote(app.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  hasVoted
                    ? 'bg-[#0000ff] text-white'
                    : 'bg-[#d4d4f0] text-black hover:bg-[#c4c4e0]'
                }`}
              >
                {hasVoted ? 'Voted' : 'Vote'} ({app.votes})
              </button>

              <button
                onClick={() => onFavorite(app.id)}
                className="p-2 rounded-full hover:bg-white/40 transition-colors"
              >
                <Heart
                  size={20}
                  className={isFavorited ? 'fill-[#ff1493] text-[#ff1493]' : 'text-black/40'}
                />
              </button>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-[#0000ff] text-white rounded-full text-sm font-medium hover:opacity-80 transition-opacity ml-auto"
              >
                Visit
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

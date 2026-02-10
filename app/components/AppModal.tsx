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

  const categoryGradients: Record<string, string> = {
    'AI': 'from-blue-500 to-cyan-500',
    'Crypto': 'from-yellow-500 to-orange-500',
    'Design': 'from-pink-500 to-rose-500',
    'Development': 'from-green-500 to-emerald-500',
    'Finance': 'from-indigo-500 to-purple-500',
    'Marketing': 'from-red-500 to-pink-500',
    'Productivity': 'from-teal-500 to-cyan-500',
    'Research': 'from-violet-500 to-purple-500',
    'Security': 'from-gray-700 to-gray-900',
    'Other': 'from-gray-500 to-gray-700',
  };
  
  const gradientClass = categoryGradients[app.category] || 'from-gray-500 to-gray-700';

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 md:p-8">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Gradient Header */}
            <div className={`bg-gradient-to-r ${gradientClass} p-8 md:p-12 relative`}>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors bg-white/20 hover:bg-white/30 rounded-full p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30">
                  {app.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                    {app.name}
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-white/30 backdrop-blur-sm text-white rounded-full text-sm font-bold border border-white/40">
                      {app.category}
                    </span>
                    <span className="text-sm text-white/90 font-semibold">{app.pricingModel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <p className="text-gray-800 leading-relaxed mb-6 text-lg font-medium">
                {app.description}
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm whitespace-pre-line">
                {app.detailed}
              </p>

              {app.tags && app.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${gradientClass} text-white rounded-lg text-xs font-bold shadow-md`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t-2 border-gray-100">
                <button
                  onClick={() => onVote(app.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-lg ${
                    hasVoted
                      ? `bg-gradient-to-r ${gradientClass} text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {hasVoted ? '✓ Voted' : '👍 Vote'} ({app.votes})
                </button>

                <button
                  onClick={() => onFavorite(app.id)}
                  className="p-3 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-110"
                  aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart
                    size={24}
                    className={isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradientClass} text-white rounded-xl text-sm font-bold hover:shadow-2xl transition-all transform hover:scale-105 ml-auto shadow-lg`}
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

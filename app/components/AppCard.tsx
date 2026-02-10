'use client';

import { ExternalLink, Heart, ThumbsUp } from 'lucide-react';
import type { App } from '../types';

interface AppCardProps {
  app: App;
  onVote: (id: string) => void;
  onFavorite: (id: string) => void;
  onOpenDetail: (app: App) => void;
  isFavorited: boolean;
  userVotes: Record<string, boolean>;
}

export default function AppCard({
  app,
  onVote,
  onFavorite,
  onOpenDetail,
  isFavorited,
  userVotes,
}: AppCardProps) {
  const hasVoted = userVotes[app.id] || false;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group h-full flex flex-col">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
            {app.name}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">
              {app.category}
            </span>
            <span className="text-gray-500">{app.pricingModel}</span>
          </div>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(app.id);
          }}
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <Heart
            size={20}
            className={isFavorited ? 'fill-pink-500 text-pink-500' : ''}
          />
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
        {app.description}
      </p>

      {/* Tags */}
      {app.tags && app.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {app.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onVote(app.id);
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            hasVoted
              ? 'bg-indigo-100 text-indigo-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <ThumbsUp size={14} className={hasVoted ? 'fill-indigo-600' : ''} />
          {app.votes}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenDetail(app)}
            className="px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Details
          </button>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

'use client';

import { ExternalLink, Heart, ThumbsUp, Tag, Sparkles } from 'lucide-react';
import Dialog, { DialogHeader, DialogTitle, DialogContent } from './ui/Dialog';
import Badge from './ui/Badge';
import Button from './ui/Button';
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
  if (!app) return null;

  const hasVoted = userVotes[app.id] || false;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 -z-10"></div>

      <DialogHeader onClose={onClose}>
        <div className="space-y-4">
          <DialogTitle className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {app.name}
          </DialogTitle>
          <p className="text-lg text-gray-300 leading-relaxed">
            {app.description}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="gradient">{app.category}</Badge>
            <Badge variant="outline">{app.pricingModel}</Badge>
          </div>
        </div>
      </DialogHeader>

      <DialogContent className="max-h-[60vh] overflow-y-auto">
        {/* Detailed Description */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles size={20} className="text-purple-400" />
            <span>About {app.name}</span>
          </h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {app.detailed}
          </p>
        </div>

        {/* Tags */}
        {app.tags && app.tags.length > 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
              <Tag size={16} />
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
          <Button
            variant={hasVoted ? 'gradient' : 'primary'}
            onClick={() => onVote(app.id)}
            className="gap-2"
          >
            <ThumbsUp size={18} className={hasVoted ? 'fill-white' : ''} />
            <span>{hasVoted ? 'Voted' : 'Vote'}</span>
            <span>({app.votes})</span>
          </Button>

          <Button
            variant={isFavorited ? 'gradient' : 'primary'}
            onClick={() => onFavorite(app.id)}
            className="gap-2"
          >
            <Heart size={18} className={isFavorited ? 'fill-white' : ''} />
            <span>{isFavorited ? 'Favorited' : 'Favorite'}</span>
          </Button>

          <Button
            variant="gradient"
            onClick={() => window.open(app.url, '_blank')}
            className="gap-2 ml-auto"
          >
            <span>Visit Website</span>
            <ExternalLink size={18} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

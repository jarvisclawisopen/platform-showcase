'use client';

import { ExternalLink, Heart, ThumbsUp } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
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
    <Card glow hover>
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <CardTitle className="flex-1">{app.name}</CardTitle>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(app.id);
            }}
            className="ml-4 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
          >
            <Heart
              size={24}
              className={isFavorited ? 'fill-pink-400 text-pink-400' : ''}
            />
          </button>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="gradient">{app.category}</Badge>
          <Badge variant="outline">{app.pricingModel}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
          {app.description}
        </p>

        {/* Tags */}
        {app.tags && app.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {app.tags.slice(0, 4).map((tag, index) => (
              <Badge key={index} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <Button
            variant={hasVoted ? 'gradient' : 'primary'}
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onVote(app.id);
            }}
            className="gap-2"
          >
            <ThumbsUp size={16} className={hasVoted ? 'fill-white' : ''} />
            <span className="font-medium">{app.votes}</span>
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenDetail(app)}
            >
              Learn More
            </Button>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

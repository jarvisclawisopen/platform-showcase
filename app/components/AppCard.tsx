'use client';

import { ExternalLink, Heart, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Card3D from './aceternity/Card3D';
import BorderBeam from './aceternity/BorderBeam';
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
    <Card3D className="h-full">
      <div className="relative h-full group">
        {/* Animated border beam on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <BorderBeam size={250} duration={12} delay={Math.random() * 2} />
        </div>

        {/* Card content */}
        <div className="relative h-full bg-navy-light/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300 group-hover:border-white/20 group-hover:bg-navy-light/60">
          
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-3">
              <motion.h3 
                className="flex-1 text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {app.name}
              </motion.h3>
              
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onFavorite(app.id);
                }}
                className="ml-4 text-gray-400 hover:text-pink-400 transition-all duration-300"
              >
                <Heart
                  size={24}
                  className={isFavorited ? 'fill-pink-400 text-pink-400' : ''}
                />
              </motion.button>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="gradient">{app.category}</Badge>
              <Badge variant="outline">{app.pricingModel}</Badge>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
              {app.description}
            </p>

            {/* Tags */}
            {app.tags && app.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {app.tags.slice(0, 4).map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge variant="secondary">
                      #{tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 mt-4">
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
                <motion.div
                  animate={hasVoted ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <ThumbsUp size={16} className={hasVoted ? 'fill-white' : ''} />
                </motion.div>
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
                <motion.a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card3D>
  );
}

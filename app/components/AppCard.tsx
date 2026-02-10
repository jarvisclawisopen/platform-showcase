'use client';

import { ExternalLink, Heart, ThumbsUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Card3D from './aceternity/Card3D';
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
        {/* Multi-layer glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-pink-500/60 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-all duration-500" />

        {/* Card content with premium glassmorphism */}
        <div className="relative h-full bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent backdrop-blur-2xl border border-white/20 rounded-2xl p-8 flex flex-col transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.12] shadow-2xl shadow-black/40 group-hover:shadow-purple-500/30">
          
          {/* Top shine effect */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          
          {/* Header */}
          <div className="mb-6 relative">
            <div className="flex items-start justify-between mb-4">
              <motion.div className="flex-1">
                <motion.h3 
                  className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {app.name}
                </motion.h3>
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  {app.pricingModel}
                </p>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onFavorite(app.id);
                }}
                className={cn(
                  'ml-4 p-2 rounded-full transition-all duration-300',
                  isFavorited 
                    ? 'bg-pink-500/20 text-pink-400 shadow-lg shadow-pink-500/30' 
                    : 'text-gray-400 hover:text-pink-400 hover:bg-pink-500/10'
                )}
              >
                <Heart
                  size={22}
                  className={isFavorited ? 'fill-pink-400' : ''}
                />
              </motion.button>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="gradient">{app.category}</Badge>
              <Badge variant="glass">
                <Sparkles size={10} className="mr-1" />
                Featured
              </Badge>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 mb-6">
            <p className="text-gray-300 leading-relaxed line-clamp-3 text-sm">
              {app.description}
            </p>
          </div>

          {/* Tags */}
          {app.tags && app.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
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

          {/* Footer */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between w-full gap-3">
              <Button
                variant={hasVoted ? 'gradient' : 'glass'}
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onVote(app.id);
                }}
              >
                <motion.div
                  animate={hasVoted ? { scale: [1, 1.3, 1], rotate: [0, 15, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <ThumbsUp size={16} className={hasVoted ? 'fill-white' : ''} />
                </motion.div>
                <span className="font-bold">{app.votes}</span>
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => onOpenDetail(app)}
                >
                  Details
                </Button>
                <motion.a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/20 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg"
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card3D>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

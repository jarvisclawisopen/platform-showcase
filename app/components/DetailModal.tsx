'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAppStore } from '@/lib/store';
import type { App } from '../types';

interface DetailModalProps {
  app: App | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  'AI': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  'Crypto': 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  'Design': 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  'Development': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  'Finance': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
  'Marketing': 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  'Productivity': 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  'Research': 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  'Security': 'bg-gray-500/20 text-gray-300 border-gray-500/40',
  'Other': 'bg-slate-500/20 text-slate-300 border-slate-500/40',
};

export default function DetailModal({ app, isOpen, onClose }: DetailModalProps) {
  const [copied, setCopied] = useState(false);
  const { toggleFavorite, isFavorite } = useAppStore();

  if (!app) return null;

  const favorite = isFavorite(app.id);
  const categoryColor = categoryColors[app.category] || categoryColors['Other'];

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(app.url);
      setCopied(true);
      toast.success('URL copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy URL');
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(app.id);
    toast.success(favorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-slate-800/50 text-white">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl font-semibold text-white mb-3">
                {app.name}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className={`${categoryColor} text-xs font-semibold backdrop-blur-xl`}>
                  {app.category}
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-slate-300 border-white/20 text-xs backdrop-blur-xl">
                  {app.pricingModel}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleFavorite}
              className="shrink-0 hover:bg-white/10"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorite ? 'fill-red-500 text-red-500' : 'text-slate-400'
                }`}
              />
            </Button>
          </div>

          <DialogDescription className="text-base text-slate-300 leading-relaxed">
            {app.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Detailed Description */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              About
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {app.detailed}
            </p>
          </div>

          {/* Tags */}
          {app.tags && app.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-slate-800/50 text-slate-300 border-slate-700/50 text-xs backdrop-blur-xl"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* URL */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              Website
            </h3>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-slate-300 font-mono backdrop-blur-xl">
                {app.url}
              </code>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyUrl}
                className="shrink-0 bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300 backdrop-blur-xl"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              asChild
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl"
            >
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={handleToggleFavorite}
              className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300 backdrop-blur-xl"
            >
              <Heart
                className={`h-4 w-4 mr-2 ${
                  favorite ? 'fill-red-500 text-red-500' : ''
                }`}
              />
              {favorite ? 'Unfavorite' : 'Favorite'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

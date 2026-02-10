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
  'AI': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'Crypto': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Design': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  'Development': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'Finance': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  'Marketing': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  'Productivity': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  'Research': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Security': 'bg-slate-500/10 text-slate-400 border-slate-500/30',
  'Other': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl font-semibold text-white mb-3">
                {app.name}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className={`${categoryColor} text-xs font-semibold`}>
                  {app.category}
                </Badge>
                <Badge variant="outline" className="bg-slate-800 text-slate-300 border-slate-600 text-xs">
                  {app.pricingModel}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleFavorite}
              className="shrink-0"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
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
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              About
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
              {app.detailed}
            </p>
          </div>

          {/* Tags */}
          {app.tags && app.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-800 text-slate-300 border-slate-600 text-xs font-medium hover:bg-slate-700 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-white flex-1 sm:flex-none"
            >
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={handleCopyUrl}
              className="bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy URL
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

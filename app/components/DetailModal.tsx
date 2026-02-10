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
  'AI': 'bg-blue-100 text-blue-700 border-blue-200',
  'Crypto': 'bg-orange-100 text-orange-700 border-orange-200',
  'Design': 'bg-pink-100 text-pink-700 border-pink-200',
  'Development': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Finance': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  'Marketing': 'bg-rose-100 text-rose-700 border-rose-200',
  'Productivity': 'bg-teal-100 text-teal-700 border-teal-200',
  'Research': 'bg-purple-100 text-purple-700 border-purple-200',
  'Security': 'bg-gray-100 text-gray-700 border-gray-200',
  'Other': 'bg-gray-100 text-gray-700 border-gray-200',
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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-gray-200">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl font-semibold text-gray-900 mb-3">
                {app.name}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className={`${categoryColor} text-xs font-semibold`}>
                  {app.category}
                </Badge>
                <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                  {app.pricingModel}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleFavorite}
              className="shrink-0 hover:bg-gray-100"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`}
              />
            </Button>
          </div>

          <DialogDescription className="text-base text-gray-700 leading-relaxed">
            {app.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Detailed Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              About
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
              {app.detailed}
            </p>
          </div>

          {/* Tags */}
          {app.tags && app.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 border-gray-200 text-xs font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <Button
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-white flex-1 sm:flex-none"
            >
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={handleCopyUrl}
              className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
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

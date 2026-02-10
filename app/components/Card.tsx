'use client';

import { Card as ShadcnCard, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { App } from '../types';

interface CardProps {
  app: App;
}

const categoryColors: Record<string, { badge: string; border: string }> = {
  'AI': { badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', border: 'group-hover:border-cyan-400/60' },
  'Crypto': { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30', border: 'group-hover:border-amber-400/60' },
  'Design': { badge: 'bg-pink-500/10 text-pink-400 border-pink-500/30', border: 'group-hover:border-pink-400/60' },
  'Development': { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'group-hover:border-emerald-400/60' },
  'Finance': { badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30', border: 'group-hover:border-indigo-400/60' },
  'Marketing': { badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30', border: 'group-hover:border-rose-400/60' },
  'Productivity': { badge: 'bg-teal-500/10 text-teal-400 border-teal-500/30', border: 'group-hover:border-teal-400/60' },
  'Research': { badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30', border: 'group-hover:border-purple-400/60' },
  'Security': { badge: 'bg-slate-500/10 text-slate-400 border-slate-500/30', border: 'group-hover:border-slate-400/60' },
  'Other': { badge: 'bg-gray-500/10 text-gray-400 border-gray-500/30', border: 'group-hover:border-gray-400/60' },
};

export default function Card({ app }: CardProps) {
  const colors = categoryColors[app.category] || categoryColors['Other'];
  
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <ShadcnCard className={`
        bg-slate-900 border border-slate-700 rounded-2xl card-shadow card-hover
        ${colors.border}
      `}>
        <CardHeader className="space-y-3 p-6">
          {/* Category Badge */}
          <div>
            <Badge 
              variant="outline" 
              className={`${colors.badge} text-xs font-semibold`}
            >
              {app.category}
            </Badge>
          </div>

          {/* Title */}
          <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {app.name}
          </CardTitle>

          {/* Description */}
          <CardDescription className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-normal">
            {app.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6 space-y-4">
          {/* Tags */}
          {app.tags && app.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {app.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-slate-800 text-slate-300 border-slate-600 text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Pricing */}
          <div className="pt-3 border-t border-slate-700/50">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {app.pricingModel}
            </span>
          </div>
        </CardContent>
      </ShadcnCard>
    </a>
  );
}

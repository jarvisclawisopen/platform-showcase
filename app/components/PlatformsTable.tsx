'use client';

import { Heart } from 'lucide-react';
import type { App } from '../types';

interface PlatformsTableProps {
  apps: App[];
  favorites: Set<string>;
  userVotes: Record<string, boolean>;
  onFavorite: (id: string) => void;
  onVote: (id: string) => void;
  onOpenDetail: (app: App) => void;
}

export default function PlatformsTable({
  apps,
  favorites,
  userVotes,
  onFavorite,
  onVote,
  onOpenDetail,
}: PlatformsTableProps) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <table className="w-full border-collapse">
        <tbody>
          {apps.map((app) => (
            <tr 
              key={app.id}
              className="border-b border-black/10 hover:bg-white/30 transition-colors cursor-pointer group"
              onClick={() => onOpenDetail(app)}
            >
              <td className="py-4 pr-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavorite(app.id);
                  }}
                  className="text-black/30 hover:text-[#ff1493] transition-colors"
                >
                  <Heart 
                    size={16} 
                    className={favorites.has(app.id) ? 'fill-[#ff1493] text-[#ff1493]' : ''}
                  />
                </button>
              </td>
              <td className="py-4 pr-12">
                <a 
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#0000ff] hover:opacity-70 font-medium"
                >
                  {app.name}
                </a>
              </td>
              <td className="py-4 pr-12">
                <span className="text-black text-sm">
                  {app.category}
                </span>
              </td>
              <td className="py-4 pr-12">
                <span className="text-black/60 text-sm">
                  {app.tags.slice(0, 3).join(', ')}
                </span>
              </td>
              <td className="py-4 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onVote(app.id);
                  }}
                  className={`text-sm px-3 py-1 rounded-full transition-colors ${
                    userVotes[app.id]
                      ? 'bg-[#0000ff] text-white'
                      : 'bg-black/5 text-black/60 hover:bg-black/10'
                  }`}
                >
                  {app.votes}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

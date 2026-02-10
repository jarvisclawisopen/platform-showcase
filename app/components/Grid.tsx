'use client';

import Card from './Card';
import CompactCard from './CompactCard';
import SkeletonCard from './SkeletonCard';
import { useAppStore } from '@/lib/store';
import type { App } from '../types';

interface GridProps {
  apps: App[];
  isLoading?: boolean;
  onOpenDetail: (app: App) => void;
}

export default function Grid({ apps, isLoading = false, onOpenDetail }: GridProps) {
  const { viewMode } = useAppStore();

  if (isLoading) {
    return (
      <div className="container-max px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (apps.length === 0) {
    return (
      <div className="container-max px-6">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No platforms found</h3>
          <p className="text-gray-600">Try adjusting your filters or search query</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-max px-6 lg:px-8 pb-24">
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {apps.map((app, index) => (
            <Card key={app.id} app={app} onOpenDetail={onOpenDetail} index={index} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {apps.map((app, index) => (
            <CompactCard key={app.id} app={app} onOpenDetail={onOpenDetail} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

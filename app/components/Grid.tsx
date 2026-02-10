'use client';

import Card from './Card';
import type { App } from '../types';

interface GridProps {
  apps: App[];
}

export default function Grid({ apps }: GridProps) {
  if (apps.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-2xl">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-white text-xl font-bold mb-2">No platforms found</p>
          <p className="text-white/70">Try selecting a different category</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      role="list"
    >
      {apps.map((app) => (
        <Card key={app.id} app={app} />
      ))}
    </div>
  );
}

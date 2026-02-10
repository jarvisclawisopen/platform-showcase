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
        <p className="text-neutral-500 text-lg">No platforms found in this category.</p>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      role="list"
    >
      {apps.map((app) => (
        <Card key={app.id} app={app} />
      ))}
    </div>
  );
}

'use client';

import Card from './Card';
import type { App } from '../types';

interface GridProps {
  apps: App[];
}

export default function Grid({ apps }: GridProps) {
  if (apps.length === 0) {
    return (
      <div className="container-max px-6">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-semibold text-white mb-2">No platforms found</h3>
          <p className="text-slate-400 font-normal">Try selecting a different category</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-max px-6 pb-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app) => (
          <Card key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}

'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCard() {
  return (
    <Card className="bg-slate-900 border border-slate-700 rounded-2xl">
      <CardHeader className="space-y-3 p-6">
        <Skeleton className="h-6 w-20 bg-slate-800" />
        <Skeleton className="h-6 w-3/4 bg-slate-800" />
        <Skeleton className="h-4 w-full bg-slate-800" />
        <Skeleton className="h-4 w-5/6 bg-slate-800" />
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 bg-slate-800" />
          <Skeleton className="h-6 w-16 bg-slate-800" />
          <Skeleton className="h-6 w-16 bg-slate-800" />
        </div>
        <Skeleton className="h-4 w-24 bg-slate-800" />
      </CardContent>
    </Card>
  );
}

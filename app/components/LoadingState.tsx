'use client';

export default function LoadingState() {
  return (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="relative h-80 animate-fade-in"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <div className="h-full bg-navy-light/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-pulse">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="h-8 bg-white/10 rounded-lg mb-3 w-3/4"></div>
                <div className="h-6 bg-white/10 rounded-lg w-1/2"></div>
              </div>
              <div className="h-6 w-6 bg-white/10 rounded-full"></div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
              <div className="h-4 bg-white/10 rounded w-4/6"></div>
            </div>

            <div className="flex gap-2 mb-6">
              <div className="h-6 w-16 bg-white/10 rounded"></div>
              <div className="h-6 w-20 bg-white/10 rounded"></div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="h-10 w-24 bg-white/10 rounded-lg"></div>
              <div className="flex gap-2">
                <div className="h-10 w-28 bg-white/10 rounded-lg"></div>
                <div className="h-10 w-10 bg-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

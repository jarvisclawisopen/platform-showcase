'use client';

export default function FloatingBadge() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
      <div className="flex items-center gap-4">
        <span className="px-6 py-3 bg-[#d4d4f0] rounded-full text-sm font-medium text-black">
          platforms
        </span>
        <span className="text-2xl">/</span>
        <span className="px-6 py-3 bg-[#0000ff] rounded-full text-sm font-medium text-white">
          showcase
        </span>
      </div>
    </div>
  );
}

'use client';

import type { App } from '../types';

interface CardProps {
  app: App;
}

export default function Card({ app }: CardProps) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block bg-white rounded-[12px] overflow-hidden
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)]
        hover:-translate-y-1
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2
      "
      role="listitem"
      aria-label={`View ${app.name}`}
    >
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-400">
          {app.name.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
          {app.name}
        </h3>

        {/* Description */}
        <p className="text-[#666] text-sm mb-4 line-clamp-2 leading-relaxed">
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {app.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F5F5F5] text-[#666] text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

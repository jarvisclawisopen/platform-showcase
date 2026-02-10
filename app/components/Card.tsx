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
        group block bg-white rounded-2xl overflow-hidden border border-neutral-200
        hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      "
      role="listitem"
      aria-label={`View ${app.name}`}
    >
      {/* Image placeholder */}
      <div className="w-full h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 
                      flex items-center justify-center
                      group-hover:from-indigo-50 group-hover:to-indigo-100 transition-all duration-200">
        <span className="text-5xl font-semibold text-neutral-300 group-hover:text-indigo-300 transition-colors">
          {app.name.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {app.name}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {app.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

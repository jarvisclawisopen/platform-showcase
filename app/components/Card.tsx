'use client';

import type { App } from '../types';

interface CardProps {
  app: App;
}

const categoryGradients: Record<string, string> = {
  'AI': 'from-blue-400 via-blue-500 to-cyan-500',
  'Crypto': 'from-yellow-400 via-orange-500 to-red-500',
  'Design': 'from-pink-400 via-rose-500 to-red-500',
  'Development': 'from-green-400 via-emerald-500 to-teal-500',
  'Finance': 'from-indigo-400 via-purple-500 to-pink-500',
  'Marketing': 'from-red-400 via-pink-500 to-rose-500',
  'Productivity': 'from-teal-400 via-cyan-500 to-blue-500',
  'Research': 'from-violet-400 via-purple-500 to-indigo-500',
  'Security': 'from-gray-600 via-gray-700 to-gray-900',
  'Other': 'from-gray-400 via-gray-500 to-gray-600',
};

export default function Card({ app }: CardProps) {
  const gradientClass = categoryGradients[app.category] || 'from-gray-400 to-gray-600';
  
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group block bg-white rounded-2xl overflow-hidden
        shadow-xl hover:shadow-2xl
        transform hover:-translate-y-2 hover:scale-105
        transition-all duration-300
        border-2 border-transparent hover:border-white
      "
      role="listitem"
      aria-label={`View ${app.name}`}
    >
      {/* Gradient Header */}
      <div className={`w-full h-32 bg-gradient-to-br ${gradientClass} 
                      flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
        <span className="text-6xl font-bold text-white/90 drop-shadow-lg relative z-10">
          {app.name.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {/* Category Badge */}
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 bg-gradient-to-r ${gradientClass} text-white text-xs font-bold rounded-full shadow-md`}>
            {app.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${gradientClass} transition-all">
          {app.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {app.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Pricing Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            {app.pricingModel}
          </span>
        </div>
      </div>
    </a>
  );
}

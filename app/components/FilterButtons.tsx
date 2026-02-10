'use client';

interface FilterButtonsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const categoryColors: Record<string, string> = {
  'All': 'from-purple-500 to-pink-500',
  'AI': 'from-blue-500 to-cyan-500',
  'Crypto': 'from-yellow-500 to-orange-500',
  'Design': 'from-pink-500 to-rose-500',
  'Development': 'from-green-500 to-emerald-500',
  'Finance': 'from-indigo-500 to-purple-500',
  'Marketing': 'from-red-500 to-pink-500',
  'Productivity': 'from-teal-500 to-green-500',
  'Research': 'from-violet-500 to-purple-500',
  'Security': 'from-gray-700 to-gray-900',
  'Other': 'from-gray-500 to-gray-700',
};

export default function FilterButtons({ categories, selected, onSelect }: FilterButtonsProps) {
  return (
    <nav className="mb-12" role="navigation" aria-label="Category filters">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-2xl">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selected === category;
            const gradientClass = categoryColors[category] || 'from-gray-500 to-gray-700';
            
            return (
              <button
                key={category}
                onClick={() => onSelect(category)}
                className={`
                  px-5 py-3 rounded-xl font-bold text-sm
                  transition-all duration-300 transform
                  ${isSelected
                    ? `bg-gradient-to-r ${gradientClass} text-white shadow-lg scale-105`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:scale-105 hover:shadow-md'
                  }
                `}
                aria-pressed={isSelected}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

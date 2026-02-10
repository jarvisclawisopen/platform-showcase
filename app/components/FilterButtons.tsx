'use client';

interface FilterButtonsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function FilterButtons({ categories, selected, onSelect }: FilterButtonsProps) {
  return (
    <nav className="mb-12" role="navigation" aria-label="Category filters">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-6 py-2.5 rounded-full font-medium text-sm
              transition-all duration-200
              ${selected === category
                ? 'bg-indigo-500 text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
              }
            `}
            aria-pressed={selected === category}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}

'use client';

interface FilterButtonsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function FilterButtons({ categories, selected, onSelect }: FilterButtonsProps) {
  return (
    <nav className="mb-12 md:mb-16" role="navigation" aria-label="Category filters">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-5 py-2.5 rounded-full font-medium text-sm
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${selected === category
                ? 'bg-[#1A1A1A] text-white'
                : 'bg-white text-[#666] hover:bg-[#F0F0F0] hover:text-[#1A1A1A]'
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

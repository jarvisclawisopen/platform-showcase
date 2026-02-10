'use client';

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { cn } from '@/app/lib/utils';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

export default function Select({ 
  value, 
  onChange, 
  options, 
  placeholder = 'Select option',
  className 
}: SelectProps) {
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <Listbox value={value} onChange={onChange}>
      <div className={cn('relative', className)}>
        <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-white/5 border border-white/10 py-3 pl-4 pr-10 text-left text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50">
          <span className="block truncate">
            {selectedOption?.label || placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-navy-light border border-white/10 py-1 shadow-xl backdrop-blur-xl focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  cn(
                    'relative cursor-pointer select-none py-3 pl-10 pr-4 transition-colors duration-150',
                    active ? 'bg-white/10 text-white' : 'text-gray-300'
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={cn(
                        'block truncate',
                        selected ? 'font-semibold text-white' : 'font-normal'
                      )}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

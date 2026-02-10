'use client';

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
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
        <Listbox.Button className="relative w-full cursor-pointer rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 py-3.5 pl-5 pr-12 text-left text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 shadow-lg shadow-black/10 group">
          <span className="block truncate font-medium">
            {selectedOption?.label || placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <motion.div
              animate={{ rotate: [0, 180] }}
              transition={{ duration: 0.3 }}
              className="group-hover:text-white transition-colors"
            >
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </motion.div>
          </span>
          
          {/* Top shine */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </Listbox.Button>
        
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-3 max-h-72 w-full overflow-auto rounded-2xl bg-navy-light/95 backdrop-blur-2xl border border-white/20 py-2 shadow-2xl shadow-black/40 focus:outline-none">
            {/* Top shine */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  cn(
                    'relative cursor-pointer select-none py-3.5 pl-12 pr-4 transition-all duration-200',
                    active ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white' : 'text-gray-300'
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={cn(
                        'block truncate font-medium',
                        selected ? 'text-white' : ''
                      )}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                          <CheckIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                        </motion.div>
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

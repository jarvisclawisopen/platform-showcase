'use client';

import { Fragment } from 'react';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/app/lib/utils';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Dialog({ 
  isOpen, 
  onClose, 
  children,
  className 
}: DialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HeadlessDialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel className={cn(
                'relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-navy-light/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all',
                className
              )}>
                {children}
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
}

interface DialogHeaderProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

export function DialogHeader({ children, onClose, className }: DialogHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between p-6 border-b border-white/10', className)}>
      <div className="flex-1">{children}</div>
      <button
        onClick={onClose}
        className="ml-4 text-gray-400 hover:text-white transition-colors"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <HeadlessDialog.Title className={cn('text-2xl font-bold text-white', className)}>
      {children}
    </HeadlessDialog.Title>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({ children, className }: DialogContentProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogFooter({ children, className }: DialogFooterProps) {
  return (
    <div className={cn('flex items-center justify-end gap-3 p-6 border-t border-white/10', className)}>
      {children}
    </div>
  );
}

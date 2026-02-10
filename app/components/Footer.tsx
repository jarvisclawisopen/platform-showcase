'use client';

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-xl">
      <div className="container-max px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              Platform Showcase
            </h3>
            <p className="text-slate-400 text-sm font-normal">
              © 2026 All rights reserved
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white font-medium"
            >
              <a
                href="https://github.com/jarvisclawisopen/platform-showcase"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-400 font-medium"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

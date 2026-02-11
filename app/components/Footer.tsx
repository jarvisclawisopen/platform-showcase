'use client';

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl mt-24">
      <div className="container-max px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-1 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Platform Showcase
            </h3>
            <p className="text-slate-400 text-sm">
              © 2026 All rights reserved
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              asChild
              variant="outline"
              className="bg-slate-900/50 border-slate-800/50 text-slate-300 hover:bg-slate-800/50 backdrop-blur-xl"
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
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl"
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

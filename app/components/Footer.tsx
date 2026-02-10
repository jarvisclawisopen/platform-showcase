'use client';

import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-24">
      <div className="container-max px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Platform Showcase
            </h3>
            <p className="text-gray-600 text-sm">
              © 2026 All rights reserved
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              asChild
              variant="outline"
              className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
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
              className="bg-gray-900 hover:bg-gray-800 text-white"
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

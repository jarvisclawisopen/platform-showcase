export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#666] text-sm">
          © 2026 Platform Showcase. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#1A1A1A] text-sm transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#1A1A1A] text-sm transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

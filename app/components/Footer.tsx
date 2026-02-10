export default function Footer() {
  return (
    <footer className="pt-20 pb-12 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-500 text-sm">
          © 2026 Platform Showcase
        </p>
        <div className="flex gap-8">
          <a 
            href="https://github.com/jarvisclawisopen/platform-showcase" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-indigo-500 text-sm transition-colors font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-indigo-500 text-sm transition-colors font-medium"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

'use client';

export default function Footer() {
  return (
    <footer className="fixed bottom-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between text-sm">
        <span className="text-black/60">
          © platform showcase 2026
        </span>
        <div className="flex gap-8">
          <a href="https://github.com" className="text-[#0000ff] hover:opacity-70">
            github
          </a>
          <a href="https://twitter.com" className="text-[#0000ff] hover:opacity-70">
            twitter
          </a>
          <a href="https://instagram.com" className="text-[#0000ff] hover:opacity-70">
            instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

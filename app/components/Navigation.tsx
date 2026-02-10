'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-6 left-6 z-50 flex gap-2">
      <a 
        href="#" 
        className="px-5 py-2 bg-[#d4d4f0] rounded-full text-sm font-medium text-black hover:opacity-70 transition-opacity"
      >
        platforms
      </a>
      <a 
        href="#about" 
        className="px-5 py-2 bg-[#d4d4f0] rounded-full text-sm font-medium text-black hover:opacity-70 transition-opacity"
      >
        about
      </a>
      <a 
        href="#contact" 
        className="px-5 py-2 bg-[#d4d4f0] rounded-full text-sm font-medium text-black hover:opacity-70 transition-opacity"
      >
        contact
      </a>
    </nav>
  );
}

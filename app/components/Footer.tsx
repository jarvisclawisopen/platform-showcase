export default function Footer() {
  return (
    <footer className="mt-20 pt-12 pb-8">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-1">
              Platform Showcase
            </p>
            <p className="text-white/70 text-sm">
              © 2026 All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com/jarvisclawisopen/platform-showcase" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/90 hover:bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Header() {
  return (
    <header className="mb-12 md:mb-16 text-center">
      <div className="inline-block mb-6">
        <span className="px-6 py-2 bg-white/20 backdrop-blur-lg rounded-full text-white text-sm font-semibold border border-white/30 shadow-lg">
          ✨ 72 Premium Platforms
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
        Platform Showcase
      </h1>
      <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
        Discover innovative platforms across AI, crypto, design, and development
      </p>
    </header>
  );
}

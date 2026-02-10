'use client';

import { Search, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import TextReveal from './aceternity/TextReveal';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <div className="relative z-10 text-center mb-32 md:mb-40">
      {/* Floating elements with premium animations */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-12 left-1/4 text-purple-400/40"
      >
        <Sparkles size={48} strokeWidth={1.5} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -top-12 right-1/4 text-blue-400/40"
      >
        <Zap size={40} strokeWidth={1.5} />
      </motion.div>

      {/* Premium badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block mb-10"
      >
        <div className="relative group">
          {/* Multi-layer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
          
          <div className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-2xl">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-yellow-400 animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                72 PREMIUM PLATFORMS
              </span>
              <Sparkles size={16} className="text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <div className="mb-10 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight"
        >
          <span className="inline-block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            Platform
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative inline-block"
        >
          {/* Text glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl opacity-40" />
          
          <span className="relative text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
            Showcase
          </span>
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-14"
      >
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover cutting-edge platforms across{' '}
          <span className="text-blue-400 font-bold">AI</span>,{' '}
          <span className="text-purple-400 font-bold">Crypto</span>,{' '}
          <span className="text-pink-400 font-bold">Design</span>, and more
        </p>
      </motion.div>

      {/* Premium search bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative group">
          {/* Multi-layer glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
          
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border-2 border-white/30 rounded-3xl overflow-hidden group-hover:border-white/40 transition-all duration-300 shadow-2xl">
            {/* Top shine */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            
            <div className="flex items-center px-8 py-5">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="mr-5"
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20">
                  <Search className="text-white" size={24} />
                </div>
              </motion.div>
              
              <input
                type="text"
                placeholder="Search 72 platforms..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 bg-transparent text-white text-xl placeholder-gray-400 focus:outline-none font-medium"
              />
              
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onSearchChange('')}
                  className="ml-3 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all duration-300 border border-white/20"
                >
                  ✕
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Quick filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex items-center justify-center gap-3 flex-wrap"
        >
          {['AI', 'Crypto', 'Design', 'Marketing'].map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSearchChange(tag.toLowerCase())}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

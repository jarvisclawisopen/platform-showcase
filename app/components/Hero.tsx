'use client';

import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TextReveal from './aceternity/TextReveal';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Hero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <div className="relative z-10 text-center mb-24 md:mb-32">
      {/* Floating sparkles with animation */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-8 left-1/4 text-purple-400 opacity-30"
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -top-8 right-1/4 text-blue-400 opacity-30"
      >
        <Sparkles size={32} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-8 px-5 py-2.5 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/20 rounded-full px-4 py-2">
          <motion.span 
            className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            ✨ 72 Premium Platforms
          </motion.span>
        </div>
      </motion.div>

      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-white">Platform</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Showcase
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <TextReveal className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto" delay={0.8}>
          Discover cutting-edge platforms across AI crypto design development and more
        </TextReveal>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-navy-light/50 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
            <div className="flex items-center px-6 py-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Search className="text-gray-400 mr-4 group-hover:text-purple-400 transition-colors" size={24} />
              </motion.div>
              <input
                type="text"
                placeholder="Search platforms, tags, or categories..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 bg-transparent text-white text-lg placeholder-gray-500 focus:outline-none"
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  onClick={() => onSearchChange('')}
                  className="ml-2 text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

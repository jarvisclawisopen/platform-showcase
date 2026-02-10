import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  
  // Optimize images - unoptimized for static export
  images: {
    unoptimized: true,
  },
  
  // Production optimizations
  poweredByHeader: false,
};

export default nextConfig;

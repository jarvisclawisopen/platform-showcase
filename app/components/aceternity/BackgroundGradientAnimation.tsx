'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundGradientAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    let frame = 0;

    const animate = () => {
      frame += 0.005;
      
      const gradient1 = ctx.createRadialGradient(
        windowSize.width * (0.5 + Math.sin(frame) * 0.2),
        windowSize.height * (0.5 + Math.cos(frame) * 0.2),
        0,
        windowSize.width * 0.5,
        windowSize.height * 0.5,
        windowSize.width
      );
      
      gradient1.addColorStop(0, 'rgba(102, 126, 234, 0.15)');
      gradient1.addColorStop(0.5, 'rgba(118, 75, 162, 0.1)');
      gradient1.addColorStop(1, 'rgba(236, 72, 153, 0.05)');

      const gradient2 = ctx.createRadialGradient(
        windowSize.width * (0.5 + Math.cos(frame * 1.3) * 0.3),
        windowSize.height * (0.5 + Math.sin(frame * 1.3) * 0.3),
        0,
        windowSize.width * 0.5,
        windowSize.height * 0.5,
        windowSize.width
      );
      
      gradient2.addColorStop(0, 'rgba(236, 72, 153, 0.15)');
      gradient2.addColorStop(0.5, 'rgba(118, 75, 162, 0.1)');
      gradient2.addColorStop(1, 'rgba(102, 126, 234, 0.05)');

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';

      requestAnimationFrame(animate);
    };

    animate();
  }, [windowSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

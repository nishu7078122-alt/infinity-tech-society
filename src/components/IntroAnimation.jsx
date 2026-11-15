import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeInfinityScene from './ThreeInfinityScene';
import { BRAND_CONFIG } from '../data/societyData';

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState(1);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Phase Timeline:
    // Phase 1: 0 - 1.2s (Dark ambient & particles)
    // Phase 2: 1.2s - 3.2s (3D Infinity logo formation & rotation)
    // Phase 3: 3.2s - 5.0s (Brand Reveal & Slogan)
    // Phase 4: 5.0s - 6.0s (Smooth transition into hero)
    const timer1 = setTimeout(() => setPhase(2), 1200);
    const timer2 = setTimeout(() => setPhase(3), 3200);
    const timer3 = setTimeout(() => setPhase(4), 5000);
    const timer4 = setTimeout(() => {
      onComplete();
    }, 6100);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  if (isSkipped) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 4 ? 0 : 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050807] overflow-hidden select-none"
    >
      {/* Top Skip Button */}
      <div className="absolute top-6 right-8 z-30 flex items-center space-x-4">
        <button
          onClick={handleSkip}
          className="group flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-[#A6ADA7] hover:text-[#B6FF39] border border-white/10 hover:border-[#B6FF39]/40 bg-[#0C1210]/60 backdrop-blur-md transition-all duration-300"
        >
          <span>Skip Intro</span>
          <span className="text-[10px] text-white/40 group-hover:text-[#B6FF39]">[ESC]</span>
        </button>
      </div>

      {/* PHASE 1: Subtle Green Ambient Center Glow & Background Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#B6FF39]/10 blur-[130px] transition-all duration-1000 ${
            phase >= 2 ? 'opacity-90 scale-110' : 'opacity-40 scale-75'
          }`}
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      </div>

      {/* Center 3D Infinity Canvas */}
      <div
        className={`relative w-full max-w-4xl h-[400px] flex items-center justify-center transition-all duration-1000 ${
          phase === 4 ? 'scale-75 translate-x-32 -translate-y-20 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <ThreeInfinityScene mode="intro" interactive={true} autoRotate={true} />
      </div>

      {/* PHASE 3: Brand Reveal & Typography */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-20 flex flex-col items-center text-center mt-2 px-4"
          >
            {/* Institution Header */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.35em' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[10px] sm:text-xs font-mono uppercase text-[#A6ADA7] tracking-[0.3em] mb-2"
            >
              {BRAND_CONFIG.institution}
            </motion.p>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[0.25em] text-white drop-shadow-[0_0_35px_rgba(182,255,57,0.35)]"
            >
              INFINITY
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center space-x-3 my-2"
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#B6FF39]" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-[#B6FF39]">
                {BRAND_CONFIG.subtitle}
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#B6FF39]" />
            </motion.div>

            {/* Laser Line Sweep */}
            <div className="relative w-72 sm:w-96 h-[1.5px] bg-white/10 my-3 overflow-hidden rounded-full">
              <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#B6FF39] to-transparent animate-laser-sweep" />
            </div>

            {/* Slogan with highlighted INNOVATE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#A6ADA7] uppercase"
            >
              LEARN. CREATE. DESIGN. BUILD.{' '}
              <span className="text-[#B6FF39] font-bold drop-shadow-[0_0_12px_rgba(182,255,57,0.8)]">
                INNOVATE.
              </span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 sm:w-64 flex flex-col items-center">
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: phase === 1 ? '25%' : phase === 2 ? '60%' : phase === 3 ? '90%' : '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-[#77C83D] to-[#B6FF39] shadow-[0_0_10px_#B6FF39]"
          />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[#A6ADA7]/60 mt-2">
          {phase === 1 && "INITIALIZING SYSTEM..."}
          {phase === 2 && "SYNTHESIZING 3D TOPOLOGY..."}
          {phase === 3 && "INITIALIZING INFINITY OS..."}
          {phase >= 4 && "LAUNCHING EXPERIENCE..."}
        </span>
      </div>
    </motion.div>
  );
}

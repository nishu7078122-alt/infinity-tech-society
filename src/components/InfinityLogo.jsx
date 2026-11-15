import React from 'react';

/**
 * InfinityLogo - Pixel-accurate vector representation of the INFINITY brand icon
 * Featuring neon-lime gradients, glossy metallic highlights, and luminous edge glow.
 */
export default function InfinityLogo({ className = "w-8 h-8", glow = true, animated = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className} ${glow ? 'glow-lime-sm' : ''}`}>
      <svg
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-transform duration-300 ${animated ? 'hover:scale-105' : ''}`}
      >
        <defs>
          {/* Main neon lime gradient */}
          <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#77C83D" />
            <stop offset="50%" stopColor="#B6FF39" />
            <stop offset="100%" stopColor="#9DEB24" />
          </linearGradient>

          {/* Core dark metallic depth */}
          <linearGradient id="darkChromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B130F" />
            <stop offset="50%" stopColor="#1E3821" />
            <stop offset="100%" stopColor="#0B130F" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Outer Glow */}
        <path
          d="M35 12 C18 12 10 24 10 30 C10 36 18 48 35 48 C49 48 60 30 60 30 C60 30 71 12 85 12 C102 12 110 24 110 30 C110 36 102 48 85 48 C71 48 60 30 60 30 C60 30 49 12 35 12 Z"
          stroke="#B6FF39"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
          filter="url(#neonGlow)"
        />

        {/* Outer Neon Lime Contour */}
        <path
          d="M35 12 C18 12 10 24 10 30 C10 36 18 48 35 48 C49 48 60 30 60 30 C60 30 71 12 85 12 C102 12 110 24 110 30 C110 36 102 48 85 48 C71 48 60 30 60 30 C60 30 49 12 35 12 Z"
          stroke="url(#limeGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Core Chrome Body */}
        <path
          d="M35 14 C20 14 13 25 13 30 C13 35 20 46 35 46 C48 46 58 30 58 30 C58 30 68 14 85 14 C100 14 107 25 107 30 C107 35 100 46 85 46 C68 46 58 30 58 30 C58 30 48 14 35 14 Z"
          stroke="url(#darkChromeGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Glossy Top Edge Highlight */}
        <path
          d="M26 15 C31 13 41 15 50 25 M76 15 C82 13 95 15 103 26"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}

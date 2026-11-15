import React, { useState } from 'react';
import { Zap, Play, ArrowUpRight, Award, Box } from 'lucide-react';
import ThreeInfinityScene from './ThreeInfinityScene';
import { BRAND_CONFIG } from '../data/societyData';

export default function Hero({ onExploreEvents, onKnowInfinity, activeSection = '01', onSelectSection }) {
  const [use3DCanvas, setUse3DCanvas] = useState(false);

  const sections = [
    { num: '01', label: 'Home', id: 'home' },
    { num: '02', label: 'About', id: 'about' },
    { num: '03', label: 'Events', id: 'events' },
    { num: '04', label: 'Team', id: 'team' },
    { num: '05', label: 'Bulletin', id: 'bulletin' }
  ];

  return (
    <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background ambient light flare */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#B6FF39]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#77C83D]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Grid: Left Hero Content & Right 3D Visual + Far Right Section Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN: BRAND HERO TEXT (cols 1 - 6) */}
        <div className="lg:col-span-6 z-10 flex flex-col justify-center">
          {/* Institution label with lime line accent */}
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#A6ADA7] font-semibold">
              {BRAND_CONFIG.institution}
            </span>
            <span className="w-8 h-[2px] bg-[#B6FF39] rounded-full inline-block shadow-[0_0_8px_#B6FF39]" />
          </div>

          {/* Large INFINITY heading */}
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-black tracking-tight text-white uppercase italic leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              INFINITY
            </h1>
            {/* Ambient neon light streak behind title */}
            <div className="absolute -top-4 -left-6 w-3/4 h-12 bg-gradient-to-r from-[#B6FF39]/20 via-[#B6FF39]/10 to-transparent blur-xl pointer-events-none" />
          </div>

          {/* Subtitle with trailing neon green gradient block */}
          <div className="flex items-center space-x-4 my-2">
            <span className="text-sm sm:text-base md:text-lg font-mono font-bold tracking-[0.3em] uppercase text-white/90">
              {BRAND_CONFIG.subtitle}
            </span>
            <div className="h-3 w-16 sm:w-24 bg-gradient-to-r from-[#B6FF39] to-transparent rounded-sm shadow-[0_0_12px_#B6FF39]" />
          </div>

          {/* Headline Slogan */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight text-[#F5F7F4] mt-2 mb-3">
            {BRAND_CONFIG.sloganPrefix}
            <span className="text-[#B6FF39] drop-shadow-[0_0_14px_rgba(182,255,57,0.7)]">
              {BRAND_CONFIG.sloganHighlight}
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-[#A6ADA7] max-w-xl leading-relaxed mb-6">
            {BRAND_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            {/* Explore Events Button */}
            <button
              onClick={onExploreEvents}
              className="group flex items-center space-x-2 px-6 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_25px_rgba(182,255,57,0.4)] hover:shadow-[0_0_35px_rgba(182,255,57,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              <span>Explore Events</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Know Infinity Button */}
            <button
              onClick={onKnowInfinity}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-full font-display font-semibold text-xs sm:text-sm text-white bg-[#0C1210]/90 hover:bg-[#14201C] border border-white/15 hover:border-[#B6FF39]/50 shadow-md transition-all duration-300"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Know Infinity</span>
            </button>
          </div>

          {/* Social Proof & Domain Highlights Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 border-t border-white/[0.08]">
            {/* Avatars Stack & Count */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <img
                  src="/assets/avatars.png"
                  alt="Tech Enthusiasts"
                  className="h-7 w-auto object-contain rounded-full shadow-md"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar dots if image fails
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white leading-none">
                  {BRAND_CONFIG.enthusiastsCount}
                </span>
                <span className="text-[10px] font-mono text-[#A6ADA7] uppercase tracking-wider">
                  Tech Enthusiasts
                </span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-white/15" />

            {/* Laurel Wreath Domains Badge */}
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono text-[#A6ADA7] bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06]">
              <Award className="w-3.5 h-3.5 text-[#B6FF39]" />
              <div className="flex flex-col leading-tight">
                <span className="text-white/90">AI • Web3 • Cybersecurity</span>
                <span className="text-[#A6ADA7]/70">Design • Gaming • And More</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D SCULPTURE & ARCHITECTURAL NIGHT VISUAL (cols 7 - 11) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[5/4] rounded-2xl overflow-hidden glass-panel-lime border border-[#B6FF39]/30 shadow-[0_0_40px_rgba(182,255,57,0.15)] group">
            {/* Mode 1: Pixel-Perfect Reference Building & 3D Sculpture Photo */}
            {!use3DCanvas ? (
              <div className="relative w-full h-full">
                <img
                  src="/assets/hero-sculpture.png"
                  alt="Infinity Sculpture in front of SGGSCC Campus"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Vignette & subtle ambient green lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#B6FF39] animate-pulse" />
                  <span className="text-[10px] font-mono text-white/90">SGGSCC Monument • New Delhi</span>
                </div>
              </div>
            ) : (
              /* Mode 2: Interactive Real-time Three.js 3D Canvas */
              <div className="w-full h-full bg-[#070D09]">
                <ThreeInfinityScene mode="hero" interactive={true} autoRotate={true} />
              </div>
            )}

            {/* 3D / Photo Mode Switcher Pill */}
            <button
              onClick={() => setUse3DCanvas(!use3DCanvas)}
              className="absolute top-3 right-3 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#0C1210]/80 hover:bg-[#0C1210] border border-white/20 hover:border-[#B6FF39]/60 text-white backdrop-blur-md transition-all shadow-md"
              title="Toggle Interactive 3D Canvas"
            >
              <Box className="w-3 h-3 text-[#B6FF39]" />
              <span>{use3DCanvas ? 'Photo View' : 'Live 3D View'}</span>
            </button>
          </div>
        </div>

        {/* FAR RIGHT: VERTICAL SECTION INDICATOR (col 12) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center pl-4">
          <div className="relative flex flex-col items-start space-y-6">
            {/* Vertical connector line */}
            <div className="absolute top-2 bottom-2 left-[5px] w-[1px] bg-white/15" />

            {sections.map((sec) => {
              const isActive = activeSection === sec.num;
              return (
                <button
                  key={sec.num}
                  onClick={() => onSelectSection && onSelectSection(sec.id)}
                  className="group flex items-center space-x-2.5 text-left focus:outline-none z-10"
                >
                  <div
                    className={`w-3 h-3 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'border-[#B6FF39] bg-[#050807] shadow-[0_0_10px_#B6FF39]'
                        : 'border-white/30 bg-[#050807] group-hover:border-white'
                    }`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#B6FF39]" />}
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span
                      className={`text-[11px] font-mono font-bold transition-colors ${
                        isActive ? 'text-[#B6FF39]' : 'text-white/40 group-hover:text-white'
                      }`}
                    >
                      {sec.num}
                    </span>
                    <span
                      className={`text-[11px] font-sans font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-[#A6ADA7]/70 group-hover:text-white'
                      }`}
                    >
                      {sec.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

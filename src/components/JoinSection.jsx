import React from 'react';
import { ArrowRight } from 'lucide-react';
import InfinityLogo from './InfinityLogo';

export default function JoinSection({ onApply }) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10">
      <div className="relative rounded-2xl overflow-hidden glass-panel-lime border border-[#B6FF39]/35 px-6 py-6 sm:px-10 sm:py-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group">
        {/* Ambient green particle wave background */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B6FF39]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* LEFT: LOGO & HEADING */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <InfinityLogo className="w-12 h-9" glow={true} animated={true} />
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Join Infinity
            </h2>
          </div>

          {/* VERTICAL DIVIDER & CENTRE TEXT */}
          <div className="hidden xl:block h-12 w-[1px] bg-white/15" />

          <div className="flex flex-col text-center lg:text-left flex-1 max-w-2xl">
            <p className="text-sm sm:text-base font-display font-semibold text-white/95">
              Be a part of SGGSCC's largest tech community.
            </p>
            <p className="text-xs sm:text-sm font-sans text-[#A6ADA7] mt-1">
              Collaborate, learn, innovate and build real-world solutions together.
            </p>
          </div>

          {/* RIGHT: BRIGHT LIME-GREEN APPLY BUTTON */}
          <div className="flex-shrink-0">
            <button
              onClick={onApply}
              className="group flex items-center space-x-2.5 px-6 sm:px-8 py-3 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#B6FF39] hover:bg-[#a5f325] shadow-[0_0_25px_rgba(182,255,57,0.45)] hover:shadow-[0_0_35px_rgba(182,255,57,0.65)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Apply for Recruitment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

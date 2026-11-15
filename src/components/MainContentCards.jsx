import React, { useState } from 'react';
import {
  Flame,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { EVENTS, TECH_BULLETINS } from '../data/societyData';
import { EXECUTIVE_BOARD_2025 } from '../data/executiveBoardData';

export default function MainContentCards({ onOpenEvent, onOpenTeam, onOpenArticle }) {
  const [currentEventIdx, setCurrentEventIdx] = useState(0);

  const currentEvent = EVENTS[currentEventIdx] || EVENTS[0];

  const handlePrevEvent = (e) => {
    e.stopPropagation();
    setCurrentEventIdx((prev) => (prev === 0 ? EVENTS.length - 1 : prev - 1));
  };

  const handleNextEvent = (e) => {
    e.stopPropagation();
    setCurrentEventIdx((prev) => (prev === EVENTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* COLUMN 1: FEATURED EVENT (LEFT) */}
        <div
          onClick={() => onOpenEvent && onOpenEvent(currentEvent)}
          className="group relative cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300 p-5 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
        >
          {/* Background Visual: Controller with green smoke */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/5 h-full pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500 flex items-center justify-end">
            <img
              src="/assets/controller-only.png"
              alt="Game Fest Controller"
              className="max-h-full object-contain filter drop-shadow-[0_0_25px_rgba(182,255,57,0.35)]"
              onError={(e) => {
                e.target.src = "/assets/gamefest-event.png";
              }}
            />
          </div>

          {/* Top Badge */}
          <div className="relative z-10 flex items-center justify-between mb-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-[10px] font-mono font-bold tracking-wider text-[#B6FF39] uppercase shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#B6FF39] fill-[#B6FF39]" />
              <span>{currentEvent.badge}</span>
            </div>
          </div>

          {/* Event Content */}
          <div className="relative z-10 max-w-[65%] mt-1">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight leading-tight group-hover:text-[#B6FF39] transition-colors">
              {currentEvent.title}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#A6ADA7] mt-1.5 leading-snug">
              {currentEvent.subtitle}
            </p>

            {/* Date & Venue */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-[#A6ADA7]/90 mt-5 pt-3 border-t border-white/[0.07]">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B6FF39]" />
                <span>{currentEvent.date}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B6FF39]" />
                <span className="truncate">{currentEvent.venue}</span>
              </div>
            </div>
          </div>

          {/* Bottom Pagination & Navigation */}
          <div className="relative z-10 flex items-center justify-between mt-6 pt-2">
            {/* Dots */}
            <div className="flex items-center space-x-1.5">
              {EVENTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentEventIdx(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentEventIdx
                      ? 'w-6 bg-[#B6FF39] shadow-[0_0_8px_#B6FF39]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevEvent}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#B6FF39] hover:text-[#B6FF39] flex items-center justify-center text-white/70 transition-colors bg-black/40 backdrop-blur-sm"
                aria-label="Previous event"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextEvent}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#B6FF39] hover:text-[#B6FF39] flex items-center justify-center text-white/70 transition-colors bg-black/40 backdrop-blur-sm"
                aria-label="Next event"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* COLUMN 2: OUR TEAM (CENTRE) */}
        <div
          onClick={() => onOpenTeam && onOpenTeam()}
          className="group relative cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
        >
          {/* Top Header */}
          <div className="relative z-20 p-5 pb-0 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-display font-extrabold text-white tracking-wide">
                Our Team
              </h3>
              <span className="px-2 py-0.5 rounded bg-[#0F1D15] border border-[#B6FF39]/30 text-[9px] font-mono text-[#B6FF39] uppercase">
                2025 Board
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenTeam && onOpenTeam();
              }}
              className="inline-flex items-center space-x-1 text-xs font-mono text-[#A6ADA7] hover:text-[#B6FF39] transition-colors"
            >
              <span>Meet the Leaders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Real Executive Board Portrait Gallery Preview */}
          <div className="relative w-full h-44 sm:h-52 my-auto overflow-hidden flex items-center justify-center px-4">
            <div className="grid grid-cols-3 gap-2 w-full max-w-sm h-36 items-center">
              {/* Kulsehaj Singh */}
              <div className="relative h-full rounded-xl overflow-hidden bg-[#070D0A] border border-white/10 group-hover:border-[#B6FF39]/40 transition-all">
                <img
                  src="/assets/kulsehaj-singh.png"
                  alt="Kulsehaj Singh"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-[#B6FF39] truncate">
                  Kulsehaj
                </span>
              </div>

              {/* Harshmohan Singh */}
              <div className="relative h-full rounded-xl overflow-hidden bg-[#070D0A] border border-white/10 group-hover:border-[#B6FF39]/40 transition-all">
                <img
                  src="/assets/harshmohan-singh.png"
                  alt="Harshmohan Singh"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-[#B6FF39] truncate">
                  Harshmohan
                </span>
              </div>

              {/* Prabhleen Kaur */}
              <div className="relative h-full rounded-xl overflow-hidden bg-[#070D0A] border border-white/10 group-hover:border-[#B6FF39]/40 transition-all">
                <img
                  src="/assets/prabhleen-kaur.png"
                  alt="Prabhleen Kaur"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-[#B6FF39] truncate">
                  Prabhleen
                </span>
              </div>
            </div>

            {/* Bottom green rim light line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B6FF39]/40 to-transparent" />
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-20 p-5 pt-0 flex items-end justify-between">
            <div>
              <h4 className="text-lg font-display font-bold text-white group-hover:text-[#B6FF39] transition-colors">
                Executive Team
              </h4>
              <p className="text-xs font-mono text-[#A6ADA7] mt-0.5">
                2025 Board Sign-Off
              </p>
            </div>

            {/* Circular Arrow Button */}
            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#B6FF39] group-hover:bg-[#B6FF39] group-hover:text-black flex items-center justify-center text-white transition-all duration-300 shadow-sm">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* COLUMN 3: TECH BULLETIN (RIGHT) */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300 p-5 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-display font-extrabold text-white tracking-wide">
              Tech Bulletin
            </h3>
            <button
              onClick={() => onOpenArticle && onOpenArticle(null)}
              className="inline-flex items-center space-x-1 text-xs font-mono text-[#A6ADA7] hover:text-[#B6FF39] transition-colors"
            >
              <span>Latest Updates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Article Rows */}
          <div className="space-y-3">
            {TECH_BULLETINS.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle && onOpenArticle(article)}
                className="group/item cursor-pointer p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-[#B6FF39]/30 transition-all duration-200 flex items-center space-x-3.5"
              >
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg bg-[#0F1D15] border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover/item:border-[#B6FF39]/50 transition-colors">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-display font-bold text-white group-hover/item:text-[#B6FF39] transition-colors truncate">
                    {article.title}
                  </h4>
                  <p className="text-[11px] font-sans text-[#A6ADA7] truncate mt-0.5">
                    {article.snippet}
                  </p>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-[#A6ADA7]/70 mt-1">
                    <Clock className="w-3 h-3 text-[#B6FF39]" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-white/30 group-hover/item:text-[#B6FF39] group-hover/item:translate-x-0.5 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

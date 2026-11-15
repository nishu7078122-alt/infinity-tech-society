import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, Flame, Filter, ArrowUpRight } from 'lucide-react';
import { EVENTS } from '../data/societyData';

export default function EventsPage({ onSelectEvent }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Gaming & Esports', 'Hackathon', 'Cybersecurity'];

  const filteredEvents = activeFilter === 'all'
    ? EVENTS
    : EVENTS.filter((e) => e.category === activeFilter);

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>EVENTS & COMPETITIONS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Where Champions Code, Game & Conquer
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-3 leading-relaxed">
          Explore flagship tech festivals, national hackathons, and high-intensity gaming showdowns hosted at SGGSCC.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-[#B6FF39] text-black font-bold shadow-[0_0_15px_rgba(182,255,57,0.4)]'
                  : 'bg-white/5 text-[#A6ADA7] hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Events' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            onClick={() => onSelectEvent(evt)}
            className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          >
            {/* Card Header & Visual */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-[#070D0A] flex items-center justify-center p-6">
              <img
                src={evt.image}
                alt={evt.title}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_20px_rgba(182,255,57,0.3)] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F1D15]/90 border border-[#B6FF39]/40 text-[10px] font-mono font-bold text-[#B6FF39] uppercase backdrop-blur-md">
                <Flame className="w-3 h-3 fill-[#B6FF39]" />
                <span>{evt.badge}</span>
              </div>
              <div className="absolute top-4 right-4 text-[11px] font-mono text-[#A6ADA7] bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                {evt.category}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-[#B6FF39] transition-colors leading-tight">
                  {evt.title}
                </h3>
                <p className="text-xs font-sans text-[#A6ADA7] mt-1.5 leading-snug line-clamp-2">
                  {evt.subtitle}
                </p>

                <div className="space-y-2 text-xs font-mono text-[#A6ADA7] mt-5 pt-4 border-t border-white/[0.07]">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-[#B6FF39]" />
                    <span className="text-white">{evt.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B6FF39]" />
                    <span className="truncate">{evt.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-3.5 h-3.5 text-[#B6FF39]" />
                    <span className="text-[#B6FF39] font-bold">{evt.prizes}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-3 flex items-center justify-between">
                <span className="text-xs font-mono text-[#B6FF39]">
                  View Details & Timeline
                </span>
                <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#B6FF39] group-hover:bg-[#B6FF39] group-hover:text-black flex items-center justify-center text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

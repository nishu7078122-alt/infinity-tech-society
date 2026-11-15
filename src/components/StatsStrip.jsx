import React from 'react';
import { Users, Calendar, Layers, Trophy } from 'lucide-react';
import { STATS } from '../data/societyData';

export default function StatsStrip() {
  const iconMap = {
    community: Users,
    events: Calendar,
    domains: Layers,
    opportunities: Trophy,
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-6">
      <div className="glass-panel rounded-2xl py-5 px-6 sm:px-10 border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {STATS.map((stat, idx) => {
            const Icon = iconMap[stat.id] || Trophy;
            return (
              <div
                key={stat.id}
                className={`flex items-center space-x-4 group ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-8' : ''
                }`}
              >
                {/* Glowing Neon Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#0F1D15] border border-[#B6FF39]/30 flex items-center justify-center text-[#B6FF39] shadow-[0_0_15px_rgba(182,255,57,0.18)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(182,255,57,0.35)] transition-all duration-300 flex-shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-none group-hover:text-[#B6FF39] transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#A6ADA7] mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

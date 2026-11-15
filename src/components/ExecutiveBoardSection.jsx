import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, UserCheck, Sparkles, Instagram } from 'lucide-react';
import { EXECUTIVE_BOARD_2025 } from '../data/executiveBoardData';
import MemberProfileModal from './MemberProfileModal';

export default function ExecutiveBoardSection({ onSelectMember }) {
  const [activeModalMember, setActiveModalMember] = useState(null);

  const handleCardClick = (member) => {
    setActiveModalMember(member);
    if (onSelectMember) onSelectMember(member);
  };

  return (
    <section className="relative my-8 sm:my-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#B6FF39] uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF39] animate-pulse" />
            <span>REAL IDENTITY RECORDS • 2025</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Executive Board
          </h2>
          <p className="text-xs sm:text-sm text-[#A6ADA7] mt-1 max-w-xl">
            Sourced directly from the official 2025 society leadership archives of Sri Guru Gobind Singh College of Commerce.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-[#A6ADA7] bg-white/[0.02] px-3.5 py-1.5 rounded-full border border-white/[0.06] flex-shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#B6FF39]" />
          <span>Verified Society Records</span>
        </div>
      </div>

      {/* 5 Executive Board Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
        {EXECUTIVE_BOARD_2025.map((member) => (
          <div
            key={member.id}
            onClick={() => handleCardClick(member)}
            className="group relative cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/60 hover:shadow-[0_10px_35px_rgba(182,255,57,0.18)] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
          >
            {/* Top Laser Accent on Hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B6FF39] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            <div>
              {/* Member Photograph Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#070D0A] flex items-center justify-center">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0C1210] border-b border-white/[0.05]">
                    <div className="w-14 h-14 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 flex items-center justify-center text-[#B6FF39] mb-3 group-hover:shadow-[0_0_15px_rgba(182,255,57,0.3)] transition-all">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/90">
                      {member.isReservedSlot ? 'RESERVED SLOT' : 'PORTRAIT PENDING'}
                    </span>
                    <span className="text-[10px] font-mono text-[#A6ADA7] mt-1">
                      {member.isReservedSlot ? 'To Be Announced' : 'IMG_4800.jpeg'}
                    </span>
                  </div>
                )}

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1210] via-transparent to-transparent opacity-75" />

                {/* Top Badge (e.g. The Pradhan, The Gen Sec, etc.) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-[#050807]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-[#B6FF39]">
                    {member.cardBadge}
                  </span>
                </div>

                {/* Arrow up-right pill on hover */}
                <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/70 group-hover:border-[#B6FF39] group-hover:text-[#B6FF39] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Member Card Details */}
              <div className="p-4 pt-3">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#B6FF39] transition-colors leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-[#B6FF39] font-medium mt-0.5">
                  {member.designation}
                </p>

                {/* Short Verified Quote */}
                <p className="text-[11px] font-sans text-[#A6ADA7] mt-2 line-clamp-2 leading-relaxed italic">
                  "{member.tagline}"
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#A6ADA7]">
              <span>{member.tenure}</span>
              <span className="text-[#B6FF39] group-hover:underline flex items-center space-x-1">
                <span>View Dossier</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Detail Modal */}
      <MemberProfileModal
        member={activeModalMember}
        onClose={() => setActiveModalMember(null)}
      />
    </section>
  );
}

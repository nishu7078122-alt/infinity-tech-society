import React from 'react';
import { X, ShieldCheck, Instagram, Award, Sparkles, UserCheck } from 'lucide-react';

export default function MemberProfileModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0C1210] border border-[#B6FF39]/40 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient background glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#B6FF39]/10 rounded-full blur-[70px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A6ADA7] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-[10px] font-mono font-bold tracking-wider text-[#B6FF39] uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B6FF39]" />
            <span>{member.tenure}</span>
          </span>
          <span className="text-[11px] font-mono text-[#A6ADA7]">
            SGGSCC · University of Delhi
          </span>
        </div>

        {/* Profile Header (Photo & Name) */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-[#070D0A] border border-[#B6FF39]/30 flex-shrink-0 shadow-[0_0_20px_rgba(182,255,57,0.15)]">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F1D15] text-[#B6FF39]">
                <UserCheck className="w-8 h-8 opacity-70" />
                <span className="text-[9px] font-mono mt-1 text-[#A6ADA7]">
                  {member.isReservedSlot ? 'RESERVED' : 'PHOTO PENDING'}
                </span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-display font-black text-white tracking-tight">
              {member.name}
            </h3>
            <p className="text-sm font-mono text-[#B6FF39] font-semibold mt-0.5">
              {member.designation}
            </p>
            <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px] font-mono text-[#A6ADA7]">
              {member.cardBadge}
            </div>
          </div>
        </div>

        {/* Tagline / Quote */}
        {member.tagline && (
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-4">
            <p className="text-xs font-mono text-[#B6FF39] leading-relaxed italic">
              "{member.tagline}"
            </p>
          </div>
        )}

        {/* Verified Bio */}
        {member.verifiedBio && (
          <div className="mb-6">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#A6ADA7] font-semibold mb-2">
              Verified Society Record
            </h4>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
              {member.verifiedBio}
            </p>
          </div>
        )}

        {/* Pending Note for missing photo */}
        {member.photoPending && (
          <div className="p-3 rounded-lg bg-[#14201C] border border-[#B6FF39]/20 text-[11px] font-mono text-[#B6FF39] mb-4">
            ℹ️ Note: Official photograph `IMG_4800.jpeg` will be updated upon receipt from society organizers.
          </div>
        )}

        {/* Footer info & Verified Instagram */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A6ADA7]">
          <span>INFINITY Tech Society Archives</span>
          {member.socials?.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-white hover:text-[#B6FF39] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B6FF39]" />
              <span>@infinity.sggscc</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

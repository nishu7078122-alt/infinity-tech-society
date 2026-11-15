import React from 'react';
import { Code, Shield, Cpu, Gamepad2, PenTool } from 'lucide-react';
import { TECH_DOMAINS } from '../data/societyData';

export default function DomainsSection({ onSelectDomain }) {
  const iconComponents = {
    Code: Code,
    Shield: Shield,
    Cpu: Cpu,
    Gamepad2: Gamepad2,
    PenTool: PenTool,
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-5 sm:my-8">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
        {/* LEFT SECTION TITLE: // Our Domains */}
        <div className="flex items-center space-x-3.5 lg:pr-4 flex-shrink-0">
          <div className="flex space-x-1">
            <span className="w-1.5 h-6 bg-[#B6FF39] rounded-sm transform skew-x-[-15deg] shadow-[0_0_10px_#B6FF39]" />
            <span className="w-1.5 h-6 bg-[#B6FF39]/60 rounded-sm transform skew-x-[-15deg]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A6ADA7]">
              Our
            </span>
            <span className="text-lg sm:text-xl font-display font-extrabold text-white tracking-wide leading-tight">
              Domains
            </span>
          </div>
        </div>

        {/* 5 HORIZONTAL DOMAIN CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 flex-1">
          {TECH_DOMAINS.map((domain) => {
            const Icon = iconComponents[domain.icon] || Code;
            return (
              <div
                key={domain.id}
                onClick={() => onSelectDomain && onSelectDomain(domain)}
                className="group relative cursor-pointer glass-panel p-3.5 rounded-xl border border-white/[0.08] hover:border-[#B6FF39]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(182,255,57,0.15)] flex items-center space-x-3 overflow-hidden"
              >
                {/* Subtle top neon sheen line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B6FF39] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Green Illuminated Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-[#0F1D15] border border-[#B6FF39]/40 flex items-center justify-center text-[#B6FF39] shadow-[0_0_12px_rgba(182,255,57,0.2)] group-hover:bg-[#B6FF39] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(182,255,57,0.4)] transition-all duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Domain Info */}
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-display font-bold text-white group-hover:text-[#B6FF39] transition-colors truncate">
                    {domain.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#A6ADA7] tracking-tight truncate mt-0.5">
                    {domain.subtitle}
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

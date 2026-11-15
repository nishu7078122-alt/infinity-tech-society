import React from 'react';
import { X, Code, Shield, Cpu, Gamepad2, PenTool, CheckCircle, ArrowRight } from 'lucide-react';

export default function DomainDetailsModal({ domain, onClose, onApplyDomain }) {
  if (!domain) return null;

  const iconMap = {
    Code: Code,
    Shield: Shield,
    Cpu: Cpu,
    Gamepad2: Gamepad2,
    PenTool: PenTool,
  };
  const Icon = iconMap[domain.icon] || Code;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#0C1210] border border-[#B6FF39]/35 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A6ADA7] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-[#0F1D15] border border-[#B6FF39]/40 flex items-center justify-center text-[#B6FF39] shadow-[0_0_20px_rgba(182,255,57,0.3)]">
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B6FF39]">
              Infinity Domain
            </span>
            <h2 className="text-2xl font-display font-extrabold text-white">
              {domain.title}
            </h2>
            <p className="text-xs font-mono text-[#A6ADA7]">{domain.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <div className="my-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold mb-2">
            Overview & Mission
          </h3>
          <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
            {domain.description}
          </p>
        </div>

        {/* Tech Stack */}
        {domain.techStack && (
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold mb-2.5">
              Core Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {domain.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-white flex items-center space-x-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF39]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs font-mono text-[#A6ADA7]">
            Recruiting for session 2025-26
          </span>
          <button
            onClick={() => {
              onClose();
              onApplyDomain(domain.id);
            }}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_15px_#B6FF39] transition-all"
          >
            <span>Apply to this Wing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Users, Github, Linkedin, Twitter, ArrowUpRight, ShieldCheck } from 'lucide-react';
import ExecutiveBoardSection from '../components/ExecutiveBoardSection';

export default function TeamPage({ onApply }) {
  const [tab, setTab] = useState('board2025');

  const domainHeads = [
    { name: "Sneha Roy", role: "AI / ML Wing Head", tenure: "2025", dept: "B.Sc (Hons) Computer Science" },
    { name: "Aryan Verma", role: "Development Wing Head", tenure: "2025", dept: "B.Com (Hons)" },
    { name: "Harpreet Kaur", role: "Cybersecurity Wing Head", tenure: "2025", dept: "B.Sc (Hons) Computer Science" },
    { name: "Rohan Joshi", role: "Gaming & Esports Head", tenure: "2025", dept: "B.A. (Hons) Economics" },
    { name: "Ishaan Mathur", role: "Creative & Design Head", tenure: "2025", dept: "B.Sc (Hons) Computer Science" },
  ];

  const alumni = [
    { name: "Karanbir Singh", role: "Ex-President (2024)", now: "Software Engineer @ Microsoft" },
    { name: "Rhea Chawla", role: "Ex-Tech Head (2024)", now: "AI Researcher @ Google DeepMind" },
    { name: "Jaspreet Sethi", role: "Ex-Gaming Lead (2023)", now: "Game Designer @ Ubisoft" },
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>SOCIETY LEADERSHIP DIRECTORY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          The Minds Powering Infinity
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-3 leading-relaxed">
          Meet the verified Executive Board and domain architects of Sri Guru Gobind Singh College of Commerce, University of Delhi.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center space-x-3 mt-8">
          <button
            onClick={() => setTab('board2025')}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
              tab === 'board2025'
                ? 'bg-[#B6FF39] text-black font-bold shadow-[0_0_15px_rgba(182,255,57,0.4)]'
                : 'bg-white/5 text-[#A6ADA7] hover:text-white border border-white/10'
            }`}
          >
            Executive Board 2025
          </button>
          <button
            onClick={() => setTab('domains')}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
              tab === 'domains'
                ? 'bg-[#B6FF39] text-black font-bold shadow-[0_0_15px_rgba(182,255,57,0.4)]'
                : 'bg-white/5 text-[#A6ADA7] hover:text-white border border-white/10'
            }`}
          >
            Domain Heads
          </button>
          <button
            onClick={() => setTab('alumni')}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
              tab === 'alumni'
                ? 'bg-[#B6FF39] text-black font-bold shadow-[0_0_15px_rgba(182,255,57,0.4)]'
                : 'bg-white/5 text-[#A6ADA7] hover:text-white border border-white/10'
            }`}
          >
            Alumni & Pioneers
          </button>
        </div>
      </div>

      {/* TAB 1: EXECUTIVE BOARD 2025 (Primary Requirement) */}
      {tab === 'board2025' && (
        <div className="animate-fadeIn">
          <ExecutiveBoardSection />
        </div>
      )}

      {/* TAB 2: DOMAIN HEADS */}
      {tab === 'domains' && (
        <div className="mb-16 animate-fadeIn">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 pb-2 border-b border-white/10">
            Domain Heads & Leads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domainHeads.map((dh) => (
              <div
                key={dh.name}
                className="glass-panel p-5 rounded-xl border border-white/[0.08] hover:border-[#B6FF39]/30 transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    {dh.name}
                  </h3>
                  <p className="text-xs font-mono text-[#B6FF39]">{dh.role}</p>
                  <p className="text-[11px] text-[#A6ADA7] mt-0.5">{dh.dept}</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B6FF39]/60 shadow-[0_0_8px_#B6FF39]" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ALUMNI */}
      {tab === 'alumni' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fadeIn">
          {alumni.map((a) => (
            <div
              key={a.name}
              className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-white">{a.name}</h3>
                <p className="text-xs font-mono text-[#B6FF39] mt-0.5">{a.role}</p>
                <p className="text-xs text-[#A6ADA7] mt-3">Currently:</p>
                <p className="text-sm font-semibold text-white mt-0.5">{a.now}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recruitment Callout Banner */}
      <div className="text-center p-8 rounded-2xl glass-panel-lime border border-[#B6FF39]/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <div className="text-left">
          <h3 className="text-lg font-display font-bold text-white">
            Want to Join the Executive Council Next Session?
          </h3>
          <p className="text-xs text-[#A6ADA7] mt-1">
            Recruitment is open across all technical, creative, and operational wings.
          </p>
        </div>
        <button
          onClick={onApply}
          className="px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_20px_rgba(182,255,57,0.4)] transition-all flex items-center space-x-2 flex-shrink-0"
        >
          <span>Apply for Membership</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

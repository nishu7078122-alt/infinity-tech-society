import React from 'react';
import { Award, Compass, Target, Code, HeartHandshake, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import InfinityLogo from '../components/InfinityLogo';
import { BRAND_CONFIG } from '../data/societyData';

export default function AboutPage({ onNavigate }) {
  const pillars = [
    { title: "Learn", desc: "Peer-to-peer knowledge transfer through bootcamps, masterclasses, and code labs." },
    { title: "Create", desc: "Transforming theoretical concepts into functional web applications, tools, and simulations." },
    { title: "Design", desc: "Prioritizing human-centric UI/UX and visual elegance across all technological products." },
    { title: "Build", desc: "Engineering production-ready architectures, APIs, and scalable infrastructure." },
    { title: "Innovate", desc: "Pioneering agentic AI, WebXR, decentralized systems, and algorithmic research." }
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>ABOUT THE SOCIETY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Architecting the Future of Student Technology
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-4 leading-relaxed">
          {BRAND_CONFIG.name} is the premier departmental technology society of {BRAND_CONFIG.institution}, {BRAND_CONFIG.university}.
        </p>
      </div>

      {/* Hero Showcase Card */}
      <div className="glass-panel-lime rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden border border-[#B6FF39]/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <InfinityLogo className="w-10 h-7" glow={true} />
              <span className="text-xs font-mono tracking-widest text-[#B6FF39] uppercase">
                ESTABLISHED 2015 • SGGSCC
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              A Culture of Technical Excellence & Unbounded Curiosity
            </h2>
            <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed mb-4">
              Founded over a decade ago by visionary computer science students at SGGSCC, Infinity has grown into one of Delhi University’s most recognized and respected technological collectives.
            </p>
            <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
              We empower undergraduates to transcend traditional curriculum boundaries through hands-on hackathons, intensive cybersecurity wargames, game jams, and open-source software contributions that impact real communities.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video">
            <img
              src="/assets/hero-sculpture.png"
              alt="SGGSCC Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
              <span>SGGSCC Monument Plaza</span>
              <span className="text-[#B6FF39]">New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Pillars */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B6FF39]">
            OUR CORE SLOGAN
          </span>
          <h2 className="text-3xl font-display font-bold text-white mt-1">
            The 5 Pillars of Infinity
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glass-panel p-6 rounded-xl border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0F1D15] border border-[#B6FF39]/30 flex items-center justify-center text-xs font-mono font-bold text-[#B6FF39] mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-[#A6ADA7] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* College Heritage & Faculty Advisor Note */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="glass-panel p-8 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-6 h-6 text-[#B6FF39]" />
            <h3 className="text-xl font-display font-bold text-white">
              Institutional Heritage
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed mb-4">
            Sri Guru Gobind Singh College of Commerce, accredited with ‘A++’ grade by NAAC, stands as a premier institution under the University of Delhi.
          </p>
          <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
            The college provides state-of-the-art computational infrastructure, high-speed campus networks, and dedicated innovation labs that serve as the launchpad for Infinity's projects and competitions.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-6 h-6 text-[#B6FF39]" />
            <h3 className="text-xl font-display font-bold text-white">
              Vision for 2026 & Beyond
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed mb-4">
            As autonomous AI agents, spatial computing headsets, and quantum-resistant cryptography redefine modern engineering, Infinity equips members with forward-looking technical fluency.
          </p>
          <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
            Our goal is to nurture well-rounded engineers and designers who not only excel academically but build real-world software deployed across millions of users.
          </p>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="text-center py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onNavigate('team')}
          className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
        >
          Meet the Leadership Team
        </button>
        <button
          onClick={() => onNavigate('join')}
          className="flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_20px_rgba(182,255,57,0.4)] transition-all"
        >
          <span>Apply to Join Infinity</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

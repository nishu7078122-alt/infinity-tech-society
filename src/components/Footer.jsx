import React from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Twitter, Disc as Discord, Sparkles } from 'lucide-react';
import InfinityLogo from './InfinityLogo';
import { BRAND_CONFIG, TECH_DOMAINS } from '../data/societyData';

export default function Footer({ onNavigate, onReplayIntro }) {
  return (
    <footer className="relative bg-[#070C0A] border-t border-white/[0.07] pt-14 pb-8 overflow-hidden">
      {/* Subtle top lime glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B6FF39]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <InfinityLogo className="w-10 h-7" glow={true} />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-[0.14em] text-white leading-none">
                  INFINITY
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#B6FF39] leading-tight mt-0.5">
                  THE TECH SOCIETY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A6ADA7] max-w-sm leading-relaxed">
              {BRAND_CONFIG.institution}, {BRAND_CONFIG.university}. Fostering innovation, high-performance engineering, and student collaboration.
            </p>

            <div className="flex items-center space-x-3 pt-2 text-[#A6ADA7]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#B6FF39] hover:text-[#B6FF39] flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#B6FF39] hover:text-[#B6FF39] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#B6FF39] hover:text-[#B6FF39] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#B6FF39] hover:text-[#B6FF39] flex items-center justify-center transition-colors"
                aria-label="Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
            </div>

            {/* Replay 3D Intro Button */}
            <div className="pt-2">
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-[#A6ADA7] hover:text-[#B6FF39] bg-white/[0.03] hover:bg-[#B6FF39]/10 border border-white/10 hover:border-[#B6FF39]/40 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B6FF39]" />
                <span>Replay 3D Cinematic Intro</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A6ADA7]">
              {['Home', 'About', 'Events', 'Team', 'Tech Bulletin', 'Gallery', 'Join Us'].map((item) => {
                const key = item === 'Home' ? 'home' : item === 'About' ? 'about' : item === 'Events' ? 'events' : item === 'Team' ? 'team' : item === 'Tech Bulletin' ? 'bulletin' : item === 'Gallery' ? 'gallery' : 'join';
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(key)}
                      className="hover:text-[#B6FF39] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tech Domains */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white">
              Domains
            </h4>
            <ul className="space-y-2 text-xs text-[#A6ADA7]">
              {TECH_DOMAINS.map((domain) => (
                <li key={domain.id}>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-[#B6FF39] transition-colors"
                  >
                    {domain.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & College Location */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white">
              Headquarters
            </h4>
            <p className="text-xs text-[#A6ADA7] leading-relaxed">
              {BRAND_CONFIG.location}
            </p>
            <p className="text-xs font-mono text-[#B6FF39] pt-1">
              {BRAND_CONFIG.contactEmail}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-[#B6FF39] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A6ADA7]/70 gap-3">
          <p>© 2026 INFINITY — The Tech Society, SGGSCC. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Engineered with precision for</span>
            <span className="text-[#B6FF39]">SGGSCC, University of Delhi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

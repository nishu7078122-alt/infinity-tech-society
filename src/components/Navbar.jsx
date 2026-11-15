import React, { useState, useEffect } from 'react';
import {
  Home,
  Layers,
  Calendar,
  Users,
  BookOpen,
  Image as ImageIcon,
  UserPlus,
  Search,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import InfinityLogo from './InfinityLogo';
import { BRAND_CONFIG } from '../data/societyData';

export default function Navbar({ activePage, setActivePage, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Layers },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'bulletin', label: 'Tech Bulletin', icon: BookOpen },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'join', label: 'Join Us', icon: UserPlus },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#050807]/90 backdrop-blur-md py-3.5 border-b border-white/[0.07]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: BRAND IDENTITY */}
        <div className="flex items-center space-x-3.5">
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center space-x-2.5 group text-left focus:outline-none"
          >
            <InfinityLogo className="w-9 h-7" glow={true} animated={true} />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-[0.14em] text-white leading-none group-hover:text-[#B6FF39] transition-colors">
                INFINITY
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#A6ADA7] leading-tight mt-0.5">
                THE TECH SOCIETY
              </span>
            </div>
          </button>

          {/* Vertical Divider & Institution */}
          <div className="hidden xl:flex items-center space-x-3 pl-3 border-l border-white/10">
            <span className="text-[11px] font-mono tracking-wide text-[#A6ADA7]/80 hover:text-white transition-colors">
              {BRAND_CONFIG.fullInstitution}
            </span>
          </div>
        </div>

        {/* CENTER: NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-[#0F1D15] border border-[#B6FF39]/40 shadow-[0_0_15px_rgba(182,255,57,0.22)]'
                    : 'text-[#A6ADA7] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <IconComponent
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive ? 'text-[#B6FF39]' : 'text-[#A6ADA7] group-hover:text-white'
                  }`}
                />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#B6FF39] rounded-full blur-[1px]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: SEARCH & CONTACT ACTION */}
        <div className="flex items-center space-x-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 rounded-full text-[#A6ADA7] hover:text-white hover:bg-white/[0.05] transition-colors focus:outline-none"
            title="Search (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Contact ↗ Pill Button */}
          <button
            onClick={() => setActivePage('contact')}
            className={`hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
              activePage === 'contact'
                ? 'bg-[#B6FF39] text-black border-[#B6FF39] shadow-[0_0_20px_rgba(182,255,57,0.5)]'
                : 'text-[#B6FF39] border-[#B6FF39]/60 hover:border-[#B6FF39] hover:bg-[#B6FF39]/10 shadow-[0_0_12px_rgba(182,255,57,0.15)]'
            }`}
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A6ADA7] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-5 py-4 mt-2 mx-4 rounded-2xl flex flex-col space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
                  isActive
                    ? 'text-white bg-[#0F1D15] border border-[#B6FF39]/40 text-[#B6FF39]'
                    : 'text-[#A6ADA7] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#B6FF39]' : 'text-[#A6ADA7]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#A6ADA7]">
              {BRAND_CONFIG.institution}
            </span>
            <button
              onClick={() => {
                setActivePage('contact');
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold text-[#B6FF39] border border-[#B6FF39]/60"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

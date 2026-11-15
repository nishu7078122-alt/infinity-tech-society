import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, BookOpen, Users, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import { EVENTS, TECH_BULLETINS, TECH_DOMAINS } from '../data/societyData';
import { EXECUTIVE_BOARD_2025 } from '../data/executiveBoardData';

export default function SearchModal({ isOpen, onClose, onNavigate, onSelectEvent, onSelectArticle, onSelectMember }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingEvents = EVENTS.filter(
    (e) => e.title.toLowerCase().includes(q) || e.subtitle.toLowerCase().includes(q)
  );
  const matchingArticles = TECH_BULLETINS.filter(
    (a) => a.title.toLowerCase().includes(q) || a.snippet.toLowerCase().includes(q)
  );
  const matchingBoard = EXECUTIVE_BOARD_2025.filter(
    (t) => t.name.toLowerCase().includes(q) || t.designation.toLowerCase().includes(q)
  );
  const matchingDomains = TECH_DOMAINS.filter(
    (d) => d.title.toLowerCase().includes(q) || d.subtitle.toLowerCase().includes(q)
  );

  const totalResults =
    matchingEvents.length + matchingArticles.length + matchingBoard.length + matchingDomains.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0C1210] border border-[#B6FF39]/30 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-[#B6FF39] mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, board members, articles, domains..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#A6ADA7]/60 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#A6ADA7] hover:text-white mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] font-mono px-2 py-1 rounded bg-white/10 text-[#A6ADA7] hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {query && totalResults === 0 && (
            <div className="py-8 text-center text-xs font-mono text-[#A6ADA7]">
              No results found for "{query}". Try searching for "Kulsehaj", "Harshmohan", "Game", or "AI".
            </div>
          )}

          {/* Quick Categories when empty */}
          {!query && (
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6ADA7]/70">
                Quick Navigation
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Events', id: 'events', icon: Calendar },
                  { label: 'Executive Board', id: 'team', icon: Users },
                  { label: 'Bulletin', id: 'bulletin', icon: BookOpen },
                  { label: 'Join Us', id: 'join', icon: ArrowRight },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        onClose();
                      }}
                      className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.05] text-xs font-medium text-white transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#B6FF39]" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Executive Board Results */}
          {matchingBoard.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B6FF39] block mb-2">
                Executive Board 2025 ({matchingBoard.length})
              </span>
              <div className="space-y-1.5">
                {matchingBoard.map((mbr) => (
                  <div
                    key={mbr.id}
                    onClick={() => {
                      onNavigate('team');
                      if (onSelectMember) onSelectMember(mbr);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-[#0F1D15] hover:border hover:border-[#B6FF39]/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-md bg-[#0F1D15] border border-[#B6FF39]/30 flex items-center justify-center text-[#B6FF39] text-xs font-bold">
                        {mbr.name[0]}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{mbr.name}</p>
                        <p className="text-[11px] text-[#B6FF39]">{mbr.designation}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#A6ADA7]">{mbr.tenure}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Results */}
          {matchingEvents.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B6FF39] block mb-2">
                Events ({matchingEvents.length})
              </span>
              <div className="space-y-1.5">
                {matchingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => {
                      onSelectEvent(evt);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-[#0F1D15] hover:border hover:border-[#B6FF39]/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-[#B6FF39]" />
                      <div>
                        <p className="text-xs font-bold text-white">{evt.title}</p>
                        <p className="text-[11px] text-[#A6ADA7]">{evt.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#B6FF39]">{evt.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles Results */}
          {matchingArticles.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B6FF39] block mb-2">
                Articles ({matchingArticles.length})
              </span>
              <div className="space-y-1.5">
                {matchingArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-[#0F1D15] hover:border hover:border-[#B6FF39]/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-4 h-4 text-[#B6FF39]" />
                      <div>
                        <p className="text-xs font-bold text-white">{art.title}</p>
                        <p className="text-[11px] text-[#A6ADA7]">{art.snippet}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#A6ADA7]">{art.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Domains Results */}
          {matchingDomains.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B6FF39] block mb-2">
                Domains ({matchingDomains.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {matchingDomains.map((dom) => (
                  <div
                    key={dom.id}
                    onClick={() => {
                      onNavigate('home');
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-[#0F1D15] border border-transparent hover:border-[#B6FF39]/30 flex items-center space-x-2.5 cursor-pointer transition-colors"
                  >
                    <Layers className="w-4 h-4 text-[#B6FF39]" />
                    <span className="text-xs font-bold text-white">{dom.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

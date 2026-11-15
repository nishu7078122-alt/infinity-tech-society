import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { TECH_BULLETINS } from '../data/societyData';

export default function BulletinPage({ onSelectArticle }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = TECH_BULLETINS.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>RESEARCH & PERSPECTIVES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Tech Bulletin
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-3 leading-relaxed">
          Deep dives into artificial intelligence, cybersecurity threat vectors, spatial interfaces, and modern software paradigms by Infinity researchers.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-6">
          <div className="flex items-center px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 focus-within:border-[#B6FF39]/50 transition-colors">
            <Search className="w-4 h-4 text-[#B6FF39] mr-2.5 flex-shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tech articles, topics or authors..."
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-[#A6ADA7]/60 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Featured Lead Article */}
      {TECH_BULLETINS.length > 0 && !searchTerm && (
        <div
          onClick={() => onSelectArticle(TECH_BULLETINS[0])}
          className="group cursor-pointer glass-panel-lime rounded-2xl overflow-hidden border border-[#B6FF39]/35 mb-12 shadow-[0_15px_40px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8"
        >
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#0F1D15] border border-[#B6FF39]/40 text-[10px] font-mono font-bold text-[#B6FF39] uppercase">
                  Featured Lead Article
                </span>
                <span className="text-xs font-mono text-[#A6ADA7]">
                  {TECH_BULLETINS[0].readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white group-hover:text-[#B6FF39] transition-colors leading-tight">
                {TECH_BULLETINS[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A6ADA7] mt-3 leading-relaxed">
                {TECH_BULLETINS[0].snippet}
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
              <span className="text-xs font-mono text-white/90">
                Author: <span className="text-[#B6FF39]">{TECH_BULLETINS[0].author}</span>
              </span>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#B6FF39]">
                <span>Read Full Paper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 h-56 sm:h-72 rounded-xl overflow-hidden bg-[#050807] border border-white/10 flex items-center justify-center">
            <img
              src={TECH_BULLETINS[0].image}
              alt={TECH_BULLETINS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300 p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <div>
              <div className="h-44 rounded-xl overflow-hidden bg-[#070D0A] mb-4 border border-white/10 flex items-center justify-center">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#A6ADA7] mb-2">
                <span className="text-[#B6FF39]">{art.category}</span>
                <span>{art.readTime}</span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-white group-hover:text-[#B6FF39] transition-colors leading-tight">
                {art.title}
              </h3>
              <p className="text-xs text-[#A6ADA7] mt-2 line-clamp-2 leading-relaxed">
                {art.snippet}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A6ADA7]">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B6FF39]" />
                <span>{art.date}</span>
              </div>
              <span className="text-[#B6FF39] group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

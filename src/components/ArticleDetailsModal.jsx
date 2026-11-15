import React from 'react';
import { X, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';

export default function ArticleDetailsModal({ article, onClose }) {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.snippet,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0C1210] border border-[#B6FF39]/35 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A6ADA7] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#0F1D15] border border-[#B6FF39]/40 text-[10px] font-mono font-bold tracking-wider text-[#B6FF39] uppercase">
            {article.category}
          </span>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#A6ADA7]">
            <Calendar className="w-3.5 h-3.5 text-[#B6FF39]" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#A6ADA7]">
            <Clock className="w-3.5 h-3.5 text-[#B6FF39]" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Title & Author */}
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-snug">
          {article.title}
        </h2>
        <div className="flex items-center justify-between py-3 my-3 border-y border-white/[0.08]">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-[#B6FF39]/20 border border-[#B6FF39]/40 flex items-center justify-center text-[#B6FF39]">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-mono text-white/90">
              Written by <span className="text-[#B6FF39] font-bold">{article.author}</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A6ADA7] hover:text-[#B6FF39] transition-colors"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-44 sm:h-56 rounded-xl overflow-hidden my-4 bg-[#050807] border border-white/10 flex items-center justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover filter brightness-90"
          />
        </div>

        {/* Article Content */}
        <div className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed space-y-4 whitespace-pre-line pt-2">
          {article.content}
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A6ADA7]">
          <span>INFINITY Research Publication</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Image as ImageIcon, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/societyData';

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Gaming', 'Team', 'Campus', 'Workshops', 'Innovation'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>VISUAL CHRONICLES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Memories of Innovation
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-3 leading-relaxed">
          Glimpses from Game Fest showdowns, national hackathons, campus installations, and tech bootcamps at SGGSCC.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-[#B6FF39] text-black font-bold shadow-[0_0_15px_rgba(182,255,57,0.4)]'
                  : 'bg-white/5 text-[#A6ADA7] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#B6FF39]/40 transition-all duration-300 relative aspect-video shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Hover expand icon */}
            <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#B6FF39]" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B6FF39] bg-[#0F1D15] px-2 py-0.5 rounded border border-[#B6FF39]/30">
                {item.category}
              </span>
              <h3 className="text-base font-display font-bold text-white mt-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-[#A6ADA7] truncate mt-0.5">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#0C1210] border border-[#B6FF39]/40 rounded-2xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[70vh] w-auto mx-auto object-contain rounded-lg"
            />
            <div className="pt-4 px-2">
              <span className="text-[10px] font-mono text-[#B6FF39] uppercase">
                {selectedPhoto.category}
              </span>
              <h2 className="text-xl font-display font-bold text-white mt-0.5">
                {selectedPhoto.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A6ADA7] mt-1">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

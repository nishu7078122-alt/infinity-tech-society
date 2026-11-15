import React, { useState } from 'react';
import { X, Calendar, MapPin, Trophy, CheckCircle2, Flame, User, Mail, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventDetailsModal({ event, onClose }) {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', college: 'SGGSCC', phone: '' });

  if (!event) return null;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B6FF39', '#77C83D', '#FFFFFF', '#050807']
    });

    setRegistered(true);
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

        {/* Top Badge & Category */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#0F1D15] border border-[#B6FF39]/40 text-[10px] font-mono font-bold tracking-wider text-[#B6FF39] uppercase">
            <Flame className="w-3.5 h-3.5 fill-[#B6FF39]" />
            <span>{event.badge}</span>
          </span>
          <span className="text-xs font-mono text-[#A6ADA7]">
            {event.category}
          </span>
        </div>

        {/* Event Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          {event.title}
        </h2>
        <p className="text-sm font-sans text-[#A6ADA7] mt-1 mb-5">
          {event.subtitle}
        </p>

        {/* Info Grid (Date, Venue, Prize) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
          <div className="flex items-center space-x-2.5">
            <Calendar className="w-4 h-4 text-[#B6FF39]" />
            <div>
              <p className="text-[10px] font-mono uppercase text-[#A6ADA7]">Date</p>
              <p className="text-xs font-bold text-white">{event.date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <MapPin className="w-4 h-4 text-[#B6FF39]" />
            <div>
              <p className="text-[10px] font-mono uppercase text-[#A6ADA7]">Venue</p>
              <p className="text-xs font-bold text-white truncate">{event.venue}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <Trophy className="w-4 h-4 text-[#B6FF39]" />
            <div>
              <p className="text-[10px] font-mono uppercase text-[#A6ADA7]">Prize Pool</p>
              <p className="text-xs font-bold text-[#B6FF39] truncate">{event.prizes}</p>
            </div>
          </div>
        </div>

        {/* Overview Description */}
        <div className="mb-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold mb-2">
            Event Overview
          </h3>
          <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
            {event.overview}
          </p>
        </div>

        {/* Schedule */}
        {event.schedule && (
          <div className="mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold mb-3">
              Event Timeline
            </h3>
            <div className="space-y-2">
              {event.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <span className="text-[11px] font-mono font-bold text-[#B6FF39] w-24">
                    {item.time}
                  </span>
                  <span className="text-xs font-medium text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registration Section */}
        {!showRegisterForm && !registered && (
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs font-mono text-[#A6ADA7]">
              Open for all college & university students
            </span>
            <button
              onClick={() => setShowRegisterForm(true)}
              className="px-6 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_20px_rgba(182,255,57,0.4)] transition-all"
            >
              Register Now
            </button>
          </div>
        )}

        {/* Interactive Registration Form */}
        {showRegisterForm && !registered && (
          <form onSubmit={handleRegisterSubmit} className="pt-4 border-t border-white/10 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B6FF39]">
              Fast Registration Form
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-mono text-[#A6ADA7]">Full Name</label>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10">
                  <User className="w-3.5 h-3.5 text-[#A6ADA7]" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-transparent text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-mono text-[#A6ADA7]">College Email</label>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10">
                  <Mail className="w-3.5 h-3.5 text-[#A6ADA7]" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@college.edu"
                    className="w-full bg-transparent text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowRegisterForm(false)}
                className="px-4 py-2 rounded-lg text-xs font-mono text-[#A6ADA7] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg text-xs font-bold text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_15px_#B6FF39]"
              >
                Confirm Pass
              </button>
            </div>
          </form>
        )}

        {/* Registration Confirmation */}
        {registered && (
          <div className="p-4 rounded-xl bg-[#0F1D15] border border-[#B6FF39]/40 flex items-center space-x-3 text-white">
            <CheckCircle2 className="w-6 h-6 text-[#B6FF39] flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-[#B6FF39]">Registration Confirmed!</p>
              <p className="text-xs text-[#A6ADA7]">
                We've reserved your pass for {event.title}. A confirmation has been logged for {formData.email}.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { BRAND_CONFIG } from '../data/societyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>CONTACT & COLLABORATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Connect with Infinity
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-3 leading-relaxed">
          Inquire about event sponsorships, hackathon collaborations, speaker sessions, or tech workshops at SGGSCC.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left Contact Info & Location (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
            <h3 className="text-lg font-display font-bold text-white mb-4">
              Society Headquarters
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#A6ADA7]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#B6FF39] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Campus Address</p>
                  <p className="mt-0.5">{BRAND_CONFIG.institution}</p>
                  <p>Pitampura, Opposite TV Tower, New Delhi, 110034</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#B6FF39] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Official Inquiries</p>
                  <p className="text-[#B6FF39] font-mono mt-0.5">{BRAND_CONFIG.contactEmail}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#B6FF39] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Lab Operational Hours</p>
                  <p className="mt-0.5">Monday – Friday: 09:00 AM – 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* SGGSCC Campus Image card */}
          <div className="relative rounded-2xl overflow-hidden glass-panel-lime border border-[#B6FF39]/30 aspect-video">
            <img
              src="/assets/hero-sculpture.png"
              alt="SGGSCC Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 text-[11px] font-mono text-white flex items-center justify-between">
              <span>SGGSCC Campus Building</span>
              <span className="text-[#B6FF39]">Pitampura, Delhi</span>
            </div>
          </div>
        </div>

        {/* Right Contact Form (Cols 6-12) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-display font-extrabold text-white">
                  Send a Direct Dispatch
                </h3>

                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Hackathon Sponsorship / Society Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message or proposal..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_25px_rgba(182,255,57,0.4)] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0F1D15] border border-[#B6FF39]/40 flex items-center justify-center text-[#B6FF39] mx-auto shadow-[0_0_25px_rgba(182,255,57,0.35)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-[#A6ADA7] max-w-md mx-auto">
                  Thank you for contacting Infinity. Our executive team will reply to <span className="text-white">{formData.email}</span> within 24-48 business hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 rounded-xl text-xs font-mono text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

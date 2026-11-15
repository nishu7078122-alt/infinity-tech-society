import React, { useState } from 'react';
import { UserPlus, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_CONFIG, TECH_DOMAINS } from '../data/societyData';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'B.Sc (Hons) Computer Science',
    year: '1st Year',
    primaryDomain: 'dev',
    secondaryDomain: 'aiml',
    experience: '',
    portfolioUrl: '',
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Confetti celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#B6FF39', '#77C83D', '#FFFFFF', '#050807']
      });
    }, 800);
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1D15] border border-[#B6FF39]/30 text-xs font-mono text-[#B6FF39] mb-4">
          <UserPlus className="w-3.5 h-3.5" />
          <span>RECRUITMENT 2025 — 2026</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Join the League of Innovators
        </h1>
        <p className="text-sm sm:text-base text-[#A6ADA7] mt-3 leading-relaxed">
          Be a part of {BRAND_CONFIG.institution}’s official technology powerhouse. We seek passionate developers, ethical hackers, AI researchers, gamers, and UI/UX designers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left Information Card (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
            <h3 className="text-lg font-display font-bold text-white mb-3">
              Why Join Infinity?
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A6ADA7]">
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF39] mt-1.5 flex-shrink-0" />
                <span><strong className="text-white">Hands-on Production Projects:</strong> Build real systems deployed across DU campus events.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF39] mt-1.5 flex-shrink-0" />
                <span><strong className="text-white">Hackathon Sponsorship:</strong> Society funding for travel, registration, and hardware gear.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF39] mt-1.5 flex-shrink-0" />
                <span><strong className="text-white">Industry Mentorship:</strong> Direct guidance from alumni working at top tech firms.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF39] mt-1.5 flex-shrink-0" />
                <span><strong className="text-white">Leadership Roles:</strong> Fast-track progression into domain heads and executive board.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel-lime p-6 rounded-2xl border border-[#B6FF39]/30">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#B6FF39] font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>RECRUITMENT TIMELINE</span>
            </div>
            <p className="text-xs text-[#A6ADA7] leading-relaxed">
              Applications are reviewed on a rolling basis. Shortlisted candidates are invited for an informal task-based interview and portfolio walkthrough at the Computer Department Labs.
            </p>
          </div>
        </div>

        {/* Right Application Form (Cols 6-12) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-display font-extrabold text-white">
                  Application Dossier
                </h3>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jaspreet Singh"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                      College / DU Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jaspreet@sggscc.du.ac.in"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                    />
                  </div>
                </div>

                {/* Phone & Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                      Year of Study *
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C1210] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                    >
                      <option value="1st Year">1st Year (Freshers)</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                    </select>
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    Course / Degree Program
                  </label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="B.Sc (Hons) Computer Science"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                {/* Primary & Secondary Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                      Primary Domain of Interest *
                    </label>
                    <select
                      value={formData.primaryDomain}
                      onChange={(e) => setFormData({ ...formData, primaryDomain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C1210] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                    >
                      {TECH_DOMAINS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.title} ({d.subtitle})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                      Secondary Domain
                    </label>
                    <select
                      value={formData.secondaryDomain}
                      onChange={(e) => setFormData({ ...formData, secondaryDomain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0C1210] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                    >
                      {TECH_DOMAINS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Portfolio / GitHub Link */}
                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    GitHub / Portfolio / Behance / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                {/* Motivation / Experience */}
                <div>
                  <label className="text-[11px] font-mono text-[#A6ADA7] block mb-1">
                    Why do you want to join Infinity? What projects have you built?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Tell us about your technical curiosity, tools you enjoy, or events you want to organize..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B6FF39]/60"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-display font-bold text-xs sm:text-sm text-black bg-[#B6FF39] hover:bg-[#a9ff19] shadow-[0_0_25px_rgba(182,255,57,0.4)] transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Transmitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Recruitment Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0F1D15] border border-[#B6FF39]/40 flex items-center justify-center text-[#B6FF39] mx-auto shadow-[0_0_25px_rgba(182,255,57,0.35)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white">
                  Application Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-[#A6ADA7] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your application for Infinity ({formData.primaryDomain.toUpperCase()} domain) has been logged in our registry.
                </p>
                <p className="text-xs font-mono text-[#B6FF39]">
                  We will contact you via {formData.email} regarding interview rounds.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl text-xs font-mono text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

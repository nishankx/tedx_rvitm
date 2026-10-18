import React, { useState } from 'react';
import { SPONSORS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const SponsorsSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="partner" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              09 / ALLIANCES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Partners & Patrons
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Collaborating with leading research labs, venture groups, and technical organizations.
          </p>
        </div>

        {/* Clean Logo Carousel */}
        <div className="py-8 border-y border-white/[0.06] overflow-hidden">
          <div className="flex items-center gap-12 overflow-hidden whitespace-nowrap animate-marquee">
            {[...SPONSORS, ...SPONSORS].map((s, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-4 text-white/40 hover:text-white transition-colors"
              >
                <span className="font-display font-bold text-xl tracking-wider">
                  {s.logoText}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/40">
                  {s.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Proposal Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 rounded-2xl bg-[#111111] border border-white/[0.08]">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase block">
              Corporate & Institutional Patronage
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
              Align your organization with visionary curiosity.
            </h3>
            <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Connect directly with 500 hand-picked builders, founders, researchers, and Bengaluru's elite engineering intellects.
            </p>
            <div className="pt-4 font-mono text-xs text-white/50">
              Direct inquiries: <a href="mailto:partners@rvitm.edu.in" className="text-white underline">partners@rvitm.edu.in</a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-white/[0.03] border border-white/10 text-center space-y-3">
                <h4 className="font-display font-medium text-lg text-white">Inquiry Received</h4>
                <p className="font-body text-xs text-white/60 font-light">
                  Our Partnerships Director will transmit our institutional prospectus within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/50 uppercase">Company / Organization *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Acme Labs"
                      className="w-full p-3 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-sans text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/50 uppercase">Contact Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className="w-full p-3 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/50 uppercase">Corporate Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="alex@acmelabs.com"
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/15 focus:border-[#E62B1E] text-white focus:outline-none font-sans text-sm"
                  />
                </div>

                <div className="pt-2">
                  <BrutalButton type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                    Transmit Partnership Inquiry ↗
                  </BrutalButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

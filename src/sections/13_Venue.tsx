import React, { useState } from 'react';
import { VENUE_DETAILS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const VenueSection: React.FC = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  return (
    <section id="venue" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              10 / VENUE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              The Venue : RVITM
            </h2>
          </div>

          <BrutalButton
            href={VENUE_DETAILS.googleMapsDirectionsUrl}
            variant="outline"
            size="sm"
          >
            Open in Google Maps ↗
          </BrutalButton>
        </div>

        {/* Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Photos */}
          <div className="lg:col-span-7 rounded-2xl bg-[#111111] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
              <img
                src={VENUE_DETAILS.images[currentImgIdx]}
                alt="RVITM Campus and Auditorium"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                {VENUE_DETAILS.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImgIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImgIdx === i ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/[0.06] font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[#E62B1E] block">AUDITORIUM</span>
                <p className="text-white/70">{VENUE_DETAILS.capacity}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#E62B1E] block">TRANSIT</span>
                <p className="text-white/70">{VENUE_DETAILS.metroAccess}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#E62B1E] block">PARKING</span>
                <p className="text-white/70">{VENUE_DETAILS.parking}</p>
              </div>
            </div>
          </div>

          {/* Details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                BENGALURU HEADQUARTERS
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                {VENUE_DETAILS.name}
              </h3>
              <p className="font-mono text-xs text-white/50">{VENUE_DETAILS.subName}</p>
              <p className="font-body text-xs text-white/70 leading-relaxed font-light pt-2 border-t border-white/[0.06]">
                {VENUE_DETAILS.address}
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl border border-white/[0.08] overflow-hidden">
              <iframe
                title="RVITM Campus Map"
                src={VENUE_DETAILS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { UPCOMING_EVENTS } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const UpcomingEventsSection: React.FC = () => {
  return (
    <section id="events" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              02 / GATHERINGS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Upcoming Events
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Curated conferences, research salons, and open stage idea searches across 2026.
          </p>
        </div>

        {/* Clean Spacious Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
            <div
              key={event.id}
              className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase font-semibold">
                    {event.badge}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                    {event.title}
                  </h3>
                  <span className="text-xs font-mono text-white/50 block mt-1">
                    {event.type}
                  </span>
                </div>

                <p className="font-body text-sm text-white/70 leading-relaxed font-light">
                  {event.description}
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/[0.08]">
                <div className="font-mono text-xs text-white/60 space-y-1">
                  <p className="text-white font-medium">{event.date}</p>
                  <p className="text-white/40">{event.venue}</p>
                </div>

                <BrutalButton
                  href={event.link}
                  variant={index === 0 ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full"
                >
                  Reserve Seat ↗
                </BrutalButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

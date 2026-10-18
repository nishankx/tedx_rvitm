import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENDA_SESSIONS } from '../data/content';
import { OptionWheel } from '../components/ui/OptionWheel';

export const ScheduleSection: React.FC = () => {
  const [activeSessionId, setActiveSessionId] = useState(AGENDA_SESSIONS[0].sessionId);
  const currentSession = AGENDA_SESSIONS.find((s) => s.sessionId === activeSessionId) || AGENDA_SESSIONS[0];

  const sessionOptions = AGENDA_SESSIONS.map((s, idx) => ({
    id: s.sessionId,
    label: `0${idx + 1} • ${s.sessionTitle.replace(/SESSION 0\d : /, '')}`,
    sublabel: s.timeRange,
  }));

  return (
    <section id="schedule" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              04 / RUN OF SHOW
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Schedule & Tracks
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Three unbroken intellectual tracks structured without standard corporate interruptions.
          </p>
        </div>

        {/* Clean Executive Agenda Container */}
        <div className="rounded-2xl bg-[#111111] border border-white/[0.08] p-8 sm:p-12 space-y-8">
          {/* ReactBits OptionWheel for Session Tracks */}
          <div className="pb-6 border-b border-white/[0.08]">
            <OptionWheel
              options={sessionOptions}
              selectedId={activeSessionId}
              onSelect={(id) => setActiveSessionId(id)}
            />
          </div>

          {/* Session Theme & Window */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-white/50 pb-6 border-b border-white/[0.06]">
            <span className="text-[#E62B1E] uppercase tracking-wider">{currentSession.theme}</span>
            <span className="text-white font-medium">Time Window: {currentSession.timeRange}</span>
          </div>

          {/* Items List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSessionId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-white/[0.06]"
            >
              {currentSession.items.map((item) => (
                <div
                  key={item.id}
                  className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-white/[0.015] px-4 rounded-xl transition-colors"
                >
                  <div className="md:col-span-2 font-mono text-xs font-semibold text-[#E62B1E]">
                    {item.time}
                  </div>

                  <div className="md:col-span-7 space-y-1">
                    <h4 className="font-display font-medium text-base sm:text-lg text-white">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-white/60 leading-relaxed font-light">
                      {item.description}
                    </p>
                    {item.speaker && (
                      <span className="font-mono text-xs text-white/40 block pt-1">
                        Speaker: {item.speaker}
                      </span>
                    )}
                  </div>

                  <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-3">
                    <span className="text-[10px] font-mono text-white/40">{item.location}</span>
                    <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono uppercase text-white/70">
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

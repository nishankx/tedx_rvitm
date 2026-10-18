import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WATCH_TALKS_FEATURED } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const WatchLiveSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="watch" className="relative bg-[#080808] text-white py-32 px-6 md:px-12 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              11 / BROADCAST
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white">
              Watch Keynote Talks
            </h2>
          </div>

          <BrutalButton
            href="https://www.youtube.com/results?search_query=tedx+rvitm"
            variant="outline"
            size="sm"
          >
            YouTube Channel ↗
          </BrutalButton>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-black group">
          <img
            src={WATCH_TALKS_FEATURED.videoPoster}
            alt={WATCH_TALKS_FEATURED.title}
            className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
          />

          {/* Clean Minimal Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-[#E62B1E] text-white flex items-center justify-center shadow-glow-red hover:scale-110 transition-transform pl-1 cursor-pointer focus:outline-none"
              aria-label="Play video"
            >
              ▶
            </button>
          </div>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                {WATCH_TALKS_FEATURED.speaker}
              </span>
              <h3 className="font-display font-medium text-lg sm:text-xl text-white">
                "{WATCH_TALKS_FEATURED.title}"
              </h3>
            </div>
            <span className="font-mono text-xs text-white/50 shrink-0">
              {WATCH_TALKS_FEATURED.duration}
            </span>
          </div>
        </div>

        {/* Player Modal */}
        <AnimatePresence>
          {isPlaying && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/20 bg-black aspect-[16/9]"
              >
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center text-sm border border-white/20"
                >
                  ✕
                </button>
                <iframe
                  title="TEDx Keynote Video"
                  src={`https://www.youtube-nocookie.com/embed/${WATCH_TALKS_FEATURED.youtubeId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

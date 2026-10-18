import React, { useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { WATCH_TALKS_FEATURED } from '../data/content';
import { BrutalButton } from '../components/ui/BrutalButton';

export const WatchLiveSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scroll-controlled sequence: header motion, video stage scaling, and revolving radar ring
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.35, 1, 1, 0.4]);

  const videoY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.01, 0.96]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const radarRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="watch"
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header with scroll control */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div className="space-y-2 sm:space-y-3">
            <span className="font-mono text-xs text-[#E62B1E] tracking-widest uppercase block">
              11 / BROADCAST
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
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
        </motion.div>

        {/* Cinematic Video Showcase with scroll-controlled elevation & revolving accent */}
        <motion.div
          style={{
            y: videoY,
            scale: videoScale,
            rotate: videoRotate,
          }}
          className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-black group"
        >
          <img
            src={WATCH_TALKS_FEATURED.videoPoster}
            alt={WATCH_TALKS_FEATURED.title}
            className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
          />

          {/* Clean Minimal Play Button with revolving radar indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              style={{ rotate: radarRotate }}
              className="absolute w-20 sm:w-28 h-20 sm:h-28 rounded-full border border-dashed border-[#E62B1E]/40 pointer-events-none"
            />
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="relative z-10 w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-[#E62B1E] text-white flex items-center justify-center shadow-glow-red pl-1 cursor-pointer focus:outline-none"
              aria-label="Play video"
            >
              ▶
            </motion.button>
          </div>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#E62B1E] uppercase">
                {WATCH_TALKS_FEATURED.speaker}
              </span>
              <h3 className="font-display font-medium text-sm sm:text-lg md:text-xl text-white line-clamp-1 sm:line-clamp-none">
                "{WATCH_TALKS_FEATURED.title}"
              </h3>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-white/50 shrink-0">
              {WATCH_TALKS_FEATURED.duration}
            </span>
          </div>
        </motion.div>

        {/* Player Modal */}
        <AnimatePresence>
          {isPlaying && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/20 bg-black aspect-[16/9]"
              >
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center text-sm border border-white/20 hover:bg-white hover:text-black transition-colors"
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

export default WatchLiveSection;

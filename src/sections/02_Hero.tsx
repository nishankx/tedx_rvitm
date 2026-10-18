import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_META } from '../data/content';
import DitherVeil from '../components/ui/DitherVeil';
import { Aurora } from '../components/animations/Aurora';
import { TextLoop } from '../components/animations/TextLoop';
import { CurvedLoop } from '../components/animations/CurvedLoop';
import { SpecularButton } from '../components/ui/SpecularButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#080808] pt-28 pb-8">
      {/* ReactBits Aurora Atmospheric Background Layer */}
      <Aurora
        colorStops={['#b81833', '#ff0101', '#ff0000']}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Cinematic Dark Stage Background Photo with Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=85"
          alt="TEDx Auditorium Stage"
          className="grayscale w-full h-full object-cover object-center filter brightness-[0.16] contrast-125 mix-blend-luminosity"
        />
        {/* Soft Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,43,30,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Main Grid: Left side DitherVeil (Transparent, borderless, seamless), Right side Typography & Specular CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: DITHER VEIL - Seamless, Large, Borderless */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex items-center justify-center"
          >
            {/* Seamless wrapper: zero borders, zero background box, feathered edge mask */}
            <div
              className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] xl:h-[780px]"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
              }}
            >
              <DitherVeil
                src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
                pattern="floyd"
                fit="cover"
                pixelSize={2}
                inkColor="#080808"
                paperColor="#f5f5f5"
                revealRadius={220}
                softness={0.7}
                linger={1.2}
                rimColor="#e62b1e"
                rim={0.08}
                reverse={false}
                wander={false}
                clickBurst={true}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: SPACIOUS EXECUTIVE TYPOGRAPHY */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-8 text-left">
            {/* Meta Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-white/80 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
              <span>{EVENT_META.date}</span>
              <span className="text-white/30">•</span>
              <span>RVITM, BENGALURU</span>
            </motion.div>

            {/* Display Title with ReactBits TextLoop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]">
                UNRAVEL
              </h1>
              <div className="font-mono text-sm sm:text-base md:text-lg text-[#E62B1E] tracking-[0.25em] uppercase font-semibold flex items-center gap-3">
                <span>THE</span>
                <TextLoop
                  words={['UNCHARTED', 'UNSEEN', 'FEARLESS', 'RESILIENT', 'FUTURE']}
                  interval={2600}
                  className="text-white bg-[#E62B1E]/20 px-3 py-1 rounded-md border border-[#E62B1E]/40"
                />
              </div>
            </motion.div>

            {/* Subhead with negative space */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base sm:text-lg md:text-xl text-white/65 max-w-xl leading-relaxed font-light"
            >
              An independent convergence of fearless researchers, creators, and technologists questioning convention. Live on the official red circle stage.
            </motion.p>

            {/* CTA Buttons featuring ReactBits SpecularButton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <SpecularButton href="/passes" variant="primary">
                Reserve Your Pass ↗
              </SpecularButton>
              <SpecularButton href="#speakers" variant="outline">
                Explore Lineup
              </SpecularButton>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 font-mono text-xs text-white/50"
            >
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-white block">16+</span>
                <span className="tracking-wider">KEYNOTE TALKS</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-white block">500</span>
                <span className="tracking-wider">DELEGATES</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-white block">RVITM</span>
                <span className="tracking-wider">BENGALURU</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ReactBits CurvedLoop - Ambient ticker curve at the bottom of hero */}
      <div className="relative z-10 w-full mt-4">
        <CurvedLoop
          text="TEDxRVITM 2026 • IDEAS WORTH SPREADING • BENGALURU • UNRAVEL THE UNCHARTED"
          curveDepth={25}
          className="opacity-40"
        />
      </div>
    </section>
  );
};

export default HeroSection;

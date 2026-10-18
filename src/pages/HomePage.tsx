import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Aurora from '../components/animations/Aurora';
import { Loader } from '../sections/01_Loader';
import { HeroSection } from '../sections/02_Hero';
import { MarqueeTapeSection } from '../sections/03_MarqueeTape';
import { AboutSection } from '../sections/04_About';
import { UpcomingEventsSection } from '../sections/05_UpcomingEvents';
import { SpeakersSection } from '../sections/06_Speakers';
import { ScheduleSection } from '../sections/07_Schedule';
import { WhyAttendSection } from '../sections/08_WhyAttend';
import { VoicesSection } from '../sections/10_Voices';
import { VenueSection } from '../sections/13_Venue';
import { WatchLiveSection } from '../sections/14_WatchLive';
import { TeamSection } from '../sections/15_Team';
import { FaqSection } from '../sections/16_Faq';
import { NewsletterSection } from '../sections/17_Newsletter';
import { FooterWordmarkSection } from '../sections/18_FooterWordmark';
import { CurvedLoop } from '../components/ui/CurvedLoop';
import { TextLoop } from '../components/ui/TextLoop';

export const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-controlled subtle parallax & fade for background image
  const bgImgY = useTransform(scrollYProgress, [0, 0.4], [0, 160]);
  const bgImgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const bgImgOpacity = useTransform(scrollYProgress, [0, 0.45], [0.85, 0.15]);

  return (
    <main ref={containerRef} className="relative w-full bg-[#0A0A0A] overflow-x-clip mt-[76px] sm:mt-[80px]">
      {/* 01: Loader / Intro */}
      <Loader />

      {/* Grayscale Background Image: RVITM Campus with high visibility fading seamlessly under aurora */}
      <div className="absolute inset-x-0 top-0 h-[720px] sm:h-[840px] lg:h-[940px] pointer-events-none overflow-hidden z-0 select-none">
        <motion.img
          src="/rvitm-campus.png"
          alt="RVITM Campus"
          style={{
            y: bgImgY,
            scale: bgImgScale,
            opacity: bgImgOpacity,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 95%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 95%)',
          }}
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-80"
        />
        {/* Soft edge feathering and vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/30 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0A0A0A_92%)]" />
      </div>

      {/* React Bits WebGL2 Aurora Background on top of grayscale image */}
      <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[720px] lg:h-[800px] pointer-events-none overflow-hidden z-0 select-none">
        <Aurora
          colorStops={['#ff0000', '#b81833', '#ff0000']}
          speed={2.8}
          amplitude={1.6}
          scale={1.5}
          blend={0.4}
          height={0.38}
          glow={0.5}
          direction="top"
          className="w-full h-full"
        />
        {/* Prominent black fade: keeps red high above and deepens black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] pointer-events-none" />
      </div>

      {/* 02: Hero */}
      <HeroSection />

      {/* 03: Crossing Marquee Tape */}
      <MarqueeTapeSection />

      {/* 04: About / Our Story */}
      <AboutSection />

      {/* 05: Upcoming Events */}
      <UpcomingEventsSection />

      {/* 06: Speakers Lineup */}
      <SpeakersSection />

      {/* Dynamic In-Between Design: React Bits CurvedLoop (Wave) */}
      <section className="relative w-full py-16 md:py-24 bg-[#060606] border-b border-white/[0.08] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.12),transparent_70%)] pointer-events-none" />
        <div className="w-full relative z-10">
          <CurvedLoop
            marqueeText="RESONANCE ✦ IDEAS WORTH SPREADING ✦ TEDxRVITM ✦ BENGALURU ✦ DISRUPT THE ECHO CHAMBER ✦"
            shape="wave"
            speed={2.2}
            curveAmount={360}
            direction="left"
            fontSize={88}
            fontWeight={800}
            letterSpacing={1}
            separator="✦"
            separatorColor="#E62B1E"
            color="#FFFFFF"
            scrollBoost={1.4}
            edgeFade={0.2}
            interactive={true}
            pauseOnHover={false}
            className="font-display tracking-tight text-white/95 drop-shadow-[0_4px_20px_rgba(230,43,30,0.25)]"
          />
        </div>
        <div className="relative z-10 mt-3 flex items-center justify-center flex-wrap gap-2 text-[10px] md:text-xs font-mono tracking-widest text-white/40 uppercase text-center px-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E] animate-ping" />
          <span>DRAG & FLING TO ACCELERATE WAVE • SCROLL BOOST ACTIVATED</span>
        </div>
      </section>

      {/* 07: Schedule / Agenda */}
      <ScheduleSection />

      {/* 08: Why Attend Throwable Cards */}
      <WhyAttendSection />

      {/* Dynamic In-Between Design: React Bits CurvedLoop (Arc) */}
      <section className="relative w-full py-12 md:py-20 bg-[#090909] border-b border-white/[0.08] overflow-hidden flex flex-col items-center justify-center">
        <div className="w-full relative z-10">
          <CurvedLoop
            marqueeText="VOICES OF TOMORROW ✦ UNFILTERED PERSPECTIVES ✦ SHAPING THE FUTURE ✦ IMPACT BEYOND THE STAGE ✦"
            shape="arc"
            speed={1.8}
            curveAmount={280}
            direction="right"
            fontSize={80}
            fontWeight={700}
            letterSpacing={2}
            separator="✦"
            separatorColor="#E62B1E"
            color="#FFFFFF"
            scrollBoost={1.2}
            edgeFade={0.25}
            interactive={true}
            pauseOnHover={false}
            className="font-display tracking-tight text-white/90"
          />
        </div>
      </section>

      {/* Attendee / Alumni Voices */}
      <VoicesSection />

      {/* 13: Venue Block & Map */}
      <VenueSection />

      {/* 14: Watch Live Video Teaser */}
      <WatchLiveSection />

      {/* Dynamic Ribbon Loop: React Bits TextLoop (Infinity Ribbon) */}
      <section className="relative w-full py-12 md:py-20 bg-[#060606] border-b border-white/[0.08] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,43,30,0.09),transparent_65%)] pointer-events-none" />
        <div className="w-full relative z-10 max-w-6xl mx-auto px-4">
          <TextLoop
            text="IMAGINE THE UNSEEN ✦ SPARK DIALOGUE ✦ EMPOWER MINDS ✦ TEDxRVITM"
            shape="infinity"
            speed={85}
            direction="forward"
            separator="✦"
            curviness={75}
            fontSize={38}
            fontWeight={800}
            letterSpacing={2}
            uppercase
            ribbon
            ribbonColor="#E62B1E"
            ribbonWidth={72}
            cross={true}
            crossColor="#141414"
            crossAngle={14}
            draggable={true}
            scrollBoost={1.5}
            edgeFade={0.16}
            pauseOnHover
          />
        </div>
        <div className="relative z-10 mt-2 text-[10px] md:text-xs font-mono tracking-widest text-white/30 uppercase flex items-center justify-center flex-wrap gap-2 text-center px-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E62B1E] animate-ping" />
          <span>DRAGGABLE INFINITY LOOP • DYNAMIC VELOCITY</span>
        </div>
      </section>

      {/* 15: Team Organizers */}
      <TeamSection />

      {/* 16: FAQ Accordion */}
      <FaqSection />

      {/* 17: Newsletter & Contact */}
      <NewsletterSection />

      {/* 18: Footer & Giant Wordmark */}
      <FooterWordmarkSection />
    </main>
  );
};

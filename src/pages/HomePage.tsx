import React, { useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import { HeroSection } from '../sections/02_Hero';
import { AboutSection } from '../sections/04_About';
import { UpcomingEventsSection } from '../sections/05_UpcomingEvents';
import { SpeakersSection } from '../sections/06_Speakers';
import { ScheduleSection } from '../sections/07_Schedule';
import { WhyAttendSection } from '../sections/08_WhyAttend';
import { VoicesSection } from '../sections/10_Voices';
import { VenueSection } from '../sections/13_Venue';
import { TeamSection } from '../sections/15_Team';
import { FaqSection } from '../sections/16_Faq';
import { NewsletterSection } from '../sections/17_Newsletter';
import { FooterWordmarkSection } from '../sections/18_FooterWordmark';
import { CurvedLoop } from '../components/ui/CurvedLoop';
import { TextLoop } from '../components/ui/TextLoop';

export interface HomePageProps {
  scrollY?: MotionValue<number>;
  scrollYProgress?: MotionValue<number>;
}

export const HomePage: React.FC<HomePageProps> = ({ scrollY, scrollYProgress }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="relative w-full bg-[#080808] overflow-x-clip mt-[76px] sm:mt-[80px]">
      {/* 02: Hero */}
      <HeroSection />

      {/* 04: About / Our Story */}
      <AboutSection />

      {/* 05: Upcoming Events (White Background Section) */}
      <UpcomingEventsSection scrollY={scrollY} scrollYProgress={scrollYProgress} />

      {/* 06: Speakers Lineup (Kinetic Picture Marquee) */}
      <SpeakersSection />

      {/* Dynamic In-Between Design: React Bits CurvedLoop (Wave) */}
      <section className="relative w-full py-16 md:py-24 bg-[#080808] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,43,30,0.12),transparent_70%)] pointer-events-none" />
        <div className="w-full relative z-10">
          <CurvedLoop
            marqueeText="RESONANCE ✦ IDEAS WORTH SPREADING ✦ TEDxRVITM ✦ BENGALURU ✦ DISRUPT THE ECHO CHAMBER ✦"
            shape="wave"
            speed={3.2}
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
      </section>

      {/* 07: Schedule & Event Plans (Event Specific with Circular Option Wheel) */}
      <ScheduleSection />

      {/* 08: Why Attend Cards */}
      <WhyAttendSection />

      {/* Dynamic In-Between Design: React Bits CurvedLoop (Arc) */}
      <section className="relative w-full py-12 md:py-20 bg-[#080808] overflow-hidden flex flex-col items-center justify-center">
        <div className="w-full relative z-10">
          <CurvedLoop
            marqueeText="VOICES OF TOMORROW ✦ UNFILTERED PERSPECTIVES ✦ SHAPING THE FUTURE ✦ IMPACT BEYOND THE STAGE ✦"
            shape="arc"
            speed={2.6}
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

      {/* Attendee / Alumni Voices (Kinetic Marquee) */}
      <VoicesSection />

      {/* 13: Venue Block & Map */}
      <VenueSection />

      {/* Dynamic Ribbon Loop: React Bits TextLoop (Infinity Ribbon) */}
      <section className="relative w-full py-12 md:py-20 bg-[#080808] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,43,30,0.09),transparent_65%)] pointer-events-none" />
        <div className="w-full relative z-10 max-w-6xl mx-auto px-4">
          <TextLoop
            text="IMAGINE THE UNSEEN ✦ SPARK DIALOGUE ✦ EMPOWER MINDS ✦ TEDxRVITM"
            shape="infinity"
            speed={130}
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
      </section>

      {/* 15: Team Organizers (Borderless & Centered) */}
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

export default HomePage;

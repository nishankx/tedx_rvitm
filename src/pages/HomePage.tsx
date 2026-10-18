import React from 'react';
import { Loader } from '../sections/01_Loader';
import { HeroSection } from '../sections/02_Hero';
import { MarqueeTapeSection } from '../sections/03_MarqueeTape';
import { AboutSection } from '../sections/04_About';
import { UpcomingEventsSection } from '../sections/05_UpcomingEvents';
import { SpeakersSection } from '../sections/06_Speakers';
import { ScheduleSection } from '../sections/07_Schedule';
import { WhyAttendSection } from '../sections/08_WhyAttend';
import { PassesSection } from '../sections/09_Passes';
import { VoicesSection } from '../sections/10_Voices';
import { PastSpeakersSection } from '../sections/11_PastSpeakers';
import { SponsorsSection } from '../sections/12_Sponsors';
import { VenueSection } from '../sections/13_Venue';
import { WatchLiveSection } from '../sections/14_WatchLive';
import { TeamSection } from '../sections/15_Team';
import { FaqSection } from '../sections/16_Faq';
import { NewsletterSection } from '../sections/17_Newsletter';
import { FooterWordmarkSection } from '../sections/18_FooterWordmark';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full bg-[#0A0A0A] overflow-hidden">
      {/* 01: Loader / Intro */}
      <Loader />

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

      {/* 07: Schedule / Agenda */}
      <ScheduleSection />

      {/* 08: Why Attend Throwable Cards */}
      <WhyAttendSection />

      {/* 09: Passes / Tickets */}
      <PassesSection />

      {/* 10: Attendee / Alumni Voices */}
      <VoicesSection />

      {/* 11: Past Speakers Archive */}
      <PastSpeakersSection />

      {/* 12: Sponsors & Partners */}
      <SponsorsSection />

      {/* 13: Venue Block & Map */}
      <VenueSection />

      {/* 14: Watch Live Video Teaser */}
      <WatchLiveSection />

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

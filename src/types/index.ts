export interface Speaker {
  id: string;
  slug: string;
  name: string;
  role: string;
  roleMarquee: string;
  company: string;
  talkTitle: string;
  category: string;
  bio: string;
  fullBio: string;
  keyTakeaway: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker?: string;
  speakerSlug?: string;
  type: 'Keynote' | 'Performance' | 'Fireside' | 'Networking' | 'Break' | 'Interactive' | string;
  location: string;
  description: string;
}

export interface AgendaSession {
  sessionId: string;
  sessionTitle: string;
  timeRange: string;
  theme: string;
  items: AgendaItem[];
}

export interface TicketTier {
  id: string;
  name: string;
  code: string;
  price: string;
  originalPrice?: string;
  type: 'Student' | 'General' | 'VIP' | 'Group' | 'Scholarship';
  status: 'available' | 'selling_fast' | 'sold_out' | 'application_based';
  description: string;
  benefits: string[];
  barcode: string;
  popular?: boolean;
}

export interface EventCard {
  id: string;
  title: string;
  shortName?: string;
  type: string;
  date: string;
  venue: string;
  description: string;
  status: string;
  badge: string;
  link: string;
  image?: string;
  caption?: string;
}

export interface WhyAttendCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  sticker: string;
  accentColor: string;
  tilt: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  batchOrAffiliation: string;
  avatar: string;
}

export interface PastSpeaker {
  id: string;
  name: string;
  edition: string;
  talk: string;
  image: string;
  category: string;
  views: string;
}

export interface Sponsor {
  name: string;
  tier: 'Title Partner' | 'Platinum' | 'Tech Innovation' | 'Community' | 'Beverage';
  logoText: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  dept: string;
  quote: string;
  image: string;
  color: string;
  linkedin: string;
  github?: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: 'Tickets' | 'Event Day' | 'Venue' | 'General';
}

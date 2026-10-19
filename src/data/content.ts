import type { Speaker, AgendaSession, TicketTier, EventCard, WhyAttendCard, Testimonial, PastSpeaker, Sponsor, TeamMember, FAQItem } from '../types';

export const EVENT_META = {
  name: 'TEDxRVITM',
  tagline: 'IDEAS WORTH SPREADING',
  theme: 'RESONANCE',
  themePlaceholder: '{{THEME}}',
  date: 'NOVEMBER 14, 2026',
  datePlaceholder: '{{DATE}}',
  time: '09:00 AM — 06:30 PM IST',
  venue: 'RVITM Campus Auditorium, 8th Mile, JP Nagar, Bengaluru',
  venuePlaceholder: '{{VENUE}}',
  licenseLine: 'This independent TEDx event is operated under license from TED.',
  speakerCountPlaceholder: '{{N}}',
  speakerCount: '16',
  registrationStatus: 'REGISTRATIONS LIVE • LIMITED CAPACITY 500 PASSES',
  ticketUrl: '/passes',
  nominateUrl: '/speakers#nominate',
  communityUrl: 'https://chat.whatsapp.com/TEDxRVITM-community',
};

export const HERO_CONTENT = {
  badgeText: 'IDEAS WORTH SPREADING ✳ BENGALURU ✳ RVITM ✳ 2026 ✳ ',
  statusPill: 'LIVE: TICKETS OPEN FOR EDITION IV',
  headlineLine1: 'TEDx',
  headlineLine2: 'RVITM',
  yearBadge: '2026',
  tagline: 'WHERE UNCOMPROMISING CURIOSITY DISRUPTS CONVENTIONAL REALITY.',
  ctaPrimary: 'GET PASSES',
  ctaSecondary: 'EXPLORE LINEUP',
  ctaTertiary: 'NOMINATE A SPEAKER',
  stats: [
    { label: 'ATTENDEES', value: '1,200+' },
    { label: 'TALKS RECORDED', value: '38' },
    { label: 'YOUTUBE VIEWS', value: '4.8M+' },
    { label: 'GLOBAL REACH', value: '42 COUNTRIES' }
  ]
};

export const MARQUEE_PHRASES = [
  'IDEAS WORTH SPREADING',
  'UNRAVEL THE UNCHARTED',
  'BENGALURU TECH CAPITAL',
  'RADICAL INNOVATION',
  'RAW CONVICTION',
  'FRONTIER SCIENCE',
  'FUTURE CULTURE',
  'DISRUPTIVE PHILOSOPHY',
  'NO FLUFF, ONLY DEPTH',
  'RVITM ED IV',
];

export const ABOUT_CONTENT = {
  sectionTag: '[ 04 / OUR MANIFESTO ]',
  title: 'WHAT HAPPENS WHEN WE TEAR DOWN THE MAPS WE WERE HANDED?',
  statement:
    'TEDxRVITM IS NOT A POLITE CORPORATE GATHERING. IT IS A HIGH-OCTANE CONVERGENCE OF REBEL SCIENTISTS, UNFILTERED ARTISTS, CODE CRAFTSMEN, AND PHILOSOPHERS WHO REFUSE TO SLEEPWALK THROUGH THE TWENTY-FIRST CENTURY. HOSTED AT THE HEART OF BENGALURU\'S CUTTING-EDGE TECH DISTRICT, WE CURATE IDEAS RAW ENOUGH TO PIERCE THE NOISE AND RESILIENT ENOUGH TO RESHAPE REALITY.',
  metrics: [
    { target: 1200, suffix: '+', label: 'ATTENDEES UNITED' },
    { target: 18, suffix: '+', label: 'TRAILBLAZING SPEAKERS' },
    { target: 94, suffix: '%', label: 'IDEA ACTIONABILITY RATE' },
    { target: 65, suffix: '+', label: 'STUDENT CREW BUILDERS' },
  ],
  quote: '"The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."',
  quoteAuthor: 'ALVIN TOFFLER',
};

export const UPCOMING_EVENTS: EventCard[] = [
  {
    id: 'main-conf',
    title: 'TEDxRVITM 2026: UNRAVEL',
    shortName: 'UNRAVEL',
    type: 'ANNUAL FLAGSHIP CONFERENCE',
    date: 'SATURDAY, NOV 14, 2026',
    venue: 'RVITM Grand Auditorium, Bengaluru',
    description: '18 disruptive keynotes, live experimental musical interludes, interactive innovation lounge, curated lunch & delegate networking banquet.',
    status: 'PLAN READY',
    badge: 'FLAGSHIP',
    link: '#schedule',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format&fit=crop',
    caption: '1,200 delegates gathering at RVITM Grand Auditorium for 18 transformative talks.',
  },
  {
    id: 'salon-quantum',
    title: 'TEDx SALON : THE QUANTUM LEAP',
    shortName: 'Quantum Leap',
    type: 'INTIMATE 100-SEAT ROUNDTABLE',
    date: 'FRIDAY, OCT 09, 2026',
    venue: 'RVITM Innovation Lab 04',
    description: 'Hands-on symposium examining quantum computing, cryogenic semiconductors, and post-silicon cryptography with hardware architects.',
    status: 'PLAN READY',
    badge: 'SALON',
    link: '#schedule',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop',
    caption: '100 researchers & founders deconstructing frontier quantum hardware architecture.',
  },
  {
    id: 'catalyst-pitch',
    title: 'CATALYST : STUDENT IDEA SEARCH',
    shortName: 'Catalyst',
    type: 'OPEN MIC & PITCH SLAM',
    date: 'WEDNESDAY, SEP 23, 2026',
    venue: 'RVITM Amphitheatre',
    description: 'Undergraduate wildcards compete for a guaranteed speaking slot on the official red circle stage. 3 minutes. No slides. Raw vision.',
    status: 'CALL FOR ENTRIES',
    badge: 'IDEA SEARCH',
    link: '#schedule',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1400&auto=format&fit=crop',
    caption: '3 minutes. No slides. Undergraduate wildcards pitching raw transformative ideas.',
  },
  {
    id: 'salon-synthetic',
    title: 'SYNTHETIC MINDS : NEURAL FRONTIERS',
    shortName: 'Synthetic Minds',
    type: 'COGNITIVE AI ROUNDTABLE',
    date: 'SATURDAY, AUG 15, 2026',
    venue: 'RVITM Media Center',
    description: 'Exploring bio-silicon interfaces, cryptographic cognition, and artificial consciousness with leading neuro-technologists.',
    status: 'COMING SOON',
    badge: 'SYMPOSIUM',
    link: '/passes',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop',
    caption: 'Deep dive into bio-silicon cognition and neuro-cryptography with AI pioneers.',
  },
  {
    id: 'workshop-biophilic',
    title: 'LIVING ARCHITECTURE : DESIGN LAB',
    shortName: 'Living Architecture',
    type: 'EXPERIMENTAL BIOMATERIALS WORKSHOP',
    date: 'THURSDAY, JUL 02, 2026',
    venue: 'RVITM Design Studio',
    description: 'Hands-on living architecture laboratory prototyping self-healing mycelium structures and microbial urban retrofits.',
    status: 'COMING SOON',
    badge: 'WORKSHOP',
    link: '/passes',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
    caption: 'Prototyping self-healing mycelium structures & bio-responsive material systems.',
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 'spk-1',
    slug: 'dr-arundhati-sen',
    name: 'Dr. Arundhati Sen',
    role: 'Cognitive Neuroscientist & AI Ethicist',
    roleMarquee: 'Neuroscientist / AI Ethicist / MIT Media Lab Fellow / Brain-Computer Interface Researcher /',
    company: 'NeuralFrontiers Labs',
    talkTitle: 'Synthetic Synapses: When Human Memory Becomes Open-Source Code',
    category: 'Neuroscience & AI',
    bio: 'Pioneering non-invasive optical neural decoders and questioning who owns our dream telemetry when thoughts can be streamed to the cloud.',
    fullBio: 'Dr. Arundhati Sen is an internationally acclaimed neuroscientist whose work bridges quantum optics and mammalian neocortex modeling. Her research at NeuralFrontiers focuses on decoding hippocampal replay patterns. In her talk at TEDxRVITM, she deconstructs the imminent arrival of biometric cognitive backups and lays bare the radical ethics of cognitive sovereignty.',
    keyTakeaway: 'The moment neural states become readable in real-time, privacy ceases to be a legal right and becomes a cryptographic battleground.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'spk-2',
    slug: 'karan-mehta',
    name: 'Karan Mehta',
    role: 'Aerospace Architect & Fusion Propulsion Lead',
    roleMarquee: 'Propulsion Engineer / ISRO Alum / Deep Space Pioneer / Magnetic Containment /',
    company: 'Vayu Dynamics',
    talkTitle: 'Beyond Chemical Rockets: The 45-Day Transit to Mars',
    category: 'Deep Tech & Space',
    bio: 'Building compact magneto-plasma thrusters designed to slash interplanetary flight time and make cis-lunar industry economically self-sustaining.',
    fullBio: 'Karan Mehta has spent 14 years on the vanguard of plasma acceleration systems. Having led critical telemetry subsystems during early national launch vehicles, Karan founded Vayu Dynamics to address the ultimate bottleneck of human interplanetary survival: transit velocity. At TEDxRVITM, Karan pulls back the curtain on fusion magnetic mirrors test-fired right here in Karnataka.',
    keyTakeaway: 'We are trapped in the solar system not by gravity, but by chemical enthalpy limits we refused to abandon sixty years ago.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'spk-3',
    slug: 'zoya-farooqui',
    name: 'Zoya Farooqui',
    role: 'Regenerative Urbanist & Biophilic Materials Director',
    roleMarquee: 'Material Scientist / Mycelium Architect / Climate Adaptation / Venice Biennale Fellow /',
    company: 'Metabolic Cities Institute',
    talkTitle: 'Concrete is Dead: Growing Self-Healing Megacities Out of Fungal Roots',
    category: 'Architecture & Climate',
    bio: 'Replacing carbon-heavy masonry with genetically reinforced mycelial scaffolding that breathes, sequesters nitrogen, and metabolizes toxic urban runoff.',
    fullBio: 'Zoya Farooqui transforms architectural paradigms from extractive consumption to biological homeostasis. Working with indigenous bamboo structuralists and microbial geneticists, she built the world\'s first multi-storey structural mycelium pavilion in Singapore. Her TEDxRVITM talk unveils how Bengalurus concrete jungle can be retrofitted with living bio-composites.',
    keyTakeaway: 'Architecture must stop acting like a dead mineral shell and start behaving like a photosynthetic skin.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: 'https://linkedin.com' }
  },
  {
    id: 'spk-4',
    slug: 'vikramaditya-nair',
    name: 'Vikramaditya Nair',
    role: 'Algorithmic Antiquities Cryptographer',
    roleMarquee: 'Cryptographer / Sanskrit Decipherment / Quantum Annealing / Epigraphy AI /',
    company: 'Indus Epigraph AI Initiative',
    talkTitle: 'Cracking the Undeciphered: Machine Intelligence Reads Lost Dravidian Bronze Tablets',
    category: 'Cultural Informatics',
    bio: 'Deploying geometric transformer networks on weathered Harappan and Chola seals to unlock forgotten astronomical treaties.',
    fullBio: 'Vikramaditya combines classical philology with high-dimensional embedding spaces. By treating weathered seal impressions as stochastic noise channels, his research team has reconstructed linguistic patterns lost for over 3,800 years. His talk reveals explosive findings on ancient metallurgy and astronomical alignment formulas encoded in Vedic rhythm.',
    keyTakeaway: 'Our deepest historical mysteries are not locked behind ruined stone walls, but behind high-dimensional semantic latent vectors.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'spk-5',
    slug: 'tanya-deshmukh',
    name: 'Tanya Deshmukh',
    role: 'Cybernetic Musician & Sonic Synthesist',
    roleMarquee: 'Modular Synthesist / Bio-Acoustic Composer / Sound Sculptor / Sensor Weaver /',
    company: 'Resonance Void',
    talkTitle: 'The Architecture of Noise: Converting Sub-Atomic Particle Vibrations into Emotional Polyphony',
    category: 'Art & Sonic Science',
    bio: 'Composing symphonies using live radioactive isotope decay sensors and high-voltage Tesla coil resonant oscillators.',
    fullBio: 'Tanya Deshmukh lives at the bleeding edge where psychoacoustics meets pure physics. Trained at Berklee and having collaborated with CERN acoustic research labs, Tanya constructs physical instruments that turn electromagnetic radiation and cosmic rays into visceral, low-frequency soundscapes. Her live TEDx talk features an acoustic demonstration on stage.',
    keyTakeaway: 'Sound is not an entertainment format; it is the fundamental vibrational clock through which living systems synchronize with space.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: 'https://linkedin.com', website: 'https://tanyasound.io' }
  },
  {
    id: 'spk-6',
    slug: 'advait-krishna',
    name: 'Advait Krishna',
    role: 'Post-Scarcity Economist & Decentralized Water Sovereignty Advocate',
    roleMarquee: 'Ecological Economist / Watershed Hydrologist / Open Hardware Commons / Rural Tech /',
    company: 'Cauvery Commons Project',
    talkTitle: 'Zero-Dollar Aquifers: How Open-Source Mesh Networks Restored 40 Dried Lakes in Kolar',
    category: 'Ecological Economics',
    bio: 'Deploying peer-to-peer solar telemetry and decentralized ledger hydrological governance to revive parched agricultural belts.',
    fullBio: 'Advait Krishna abandoned wall street algorithmic trading to fix the water crisis in southern India. Through the Cauvery Commons Project, Advait engineered open-hardware telemetry sensors costing less than 300 rupees each, empowering 18,000 farmers to autonomously meter and restore groundwater levels without state bureaucracy.',
    keyTakeaway: 'Scarcity is rarely an absolute physical shortage; it is an informational failure caused by centralized gatekeepers.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    socials: { linkedin: 'https://linkedin.com' }
  }
];

export const AGENDA_SESSIONS: AgendaSession[] = [
  {
    sessionId: 'event-flagship',
    sessionTitle: 'TEDxRVITM 2026 : UNRAVEL',
    timeRange: 'SATURDAY, NOV 14, 09:00 AM — 06:30 PM',
    theme: 'Flagship annual conference: 18 talks, live modular acoustics, delegate labs, and evening banquet.',
    items: [
      {
        id: 'ag-1',
        time: '09:00 AM',
        title: 'DOORS OPEN & BADGE REGISTRATION',
        type: 'Networking',
        location: 'Atrium Foyer',
        description: 'Collect your embossed pass, sticker pack, limited screenprint poster, and artisanal coffee.'
      },
      {
        id: 'ag-2',
        time: '09:45 AM',
        title: 'CURATOR\'S PROLOGUE : THE UNRAVEL THESIS',
        speaker: 'TEDxRVITM Curatorial Team',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'Setting the frame: why comfort is the enemy of breakthrough insight in an age of automated consensus.'
      },
      {
        id: 'ag-3',
        time: '10:15 AM',
        title: 'Synthetic Synapses: Human Memory on Open Code',
        speaker: 'Dr. Arundhati Sen',
        speakerSlug: 'dr-arundhati-sen',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'Live demonstration of neural telemetry capture and ethical boundaries of cognitive sovereignty.'
      },
      {
        id: 'ag-4',
        time: '11:00 AM',
        title: 'Beyond Chemical Rockets: 45 Days to Mars',
        speaker: 'Karan Mehta',
        speakerSlug: 'karan-mehta',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'Magnetic plasma acceleration mechanics and why the solar system belongs to rapid-propulsion engineers.'
      },
      {
        id: 'ag-5',
        time: '11:45 AM',
        title: 'SONIC INTERLUDE : RADIATION RESONANCES',
        speaker: 'Tanya Deshmukh',
        speakerSlug: 'tanya-deshmukh',
        type: 'Performance',
        location: 'Main Auditorium',
        description: 'Live modular synthesiser performance driven by cosmic ray detector feeds.'
      },
      {
        id: 'ag-6',
        time: '01:15 PM',
        title: 'Concrete is Dead: Self-Healing Fungal Cities',
        speaker: 'Zoya Farooqui',
        speakerSlug: 'zoya-farooqui',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'Live bio-composite structural strength test and blueprint for carbon-negative urban facades.'
      },
      {
        id: 'ag-7',
        time: '02:00 PM',
        title: 'Cracking the Undeciphered: AI Reads Lost Dravidian Bronze',
        speaker: 'Vikramaditya Nair',
        speakerSlug: 'vikramaditya-nair',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'Revealing newly translated epigraphs and their shocking algorithmic insights into Vedic metallurgy.'
      },
      {
        id: 'ag-8',
        time: '03:15 PM',
        title: 'DELEGATE LAB EXPERIMENTS & RESEARCH COMMONS',
        type: 'Interactive',
        location: 'Innovation Courtyard',
        description: 'Hands-on stations featuring VR brain visualizers, mycelium bricks, and open hydrological meters.'
      },
      {
        id: 'ag-9',
        time: '04:15 PM',
        title: 'Zero-Dollar Aquifers: Mesh Networks Reviving 40 Lakes',
        speaker: 'Advait Krishna',
        speakerSlug: 'advait-krishna',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'How decentralized telemetry broke a 20-year drought without waiting for bureaucratic permission.'
      },
      {
        id: 'ag-10',
        time: '05:40 PM',
        title: 'CLOSING SYNTHESIS & COMMENCEMENT',
        type: 'Keynote',
        location: 'Main Auditorium',
        description: 'Reflecting on the collective roadmap: from passive audience to relentless idea execution.'
      },
      {
        id: 'ag-11',
        time: '06:15 PM',
        title: 'SPEAKERS & DELEGATES AFTER-HOURS SOIRÉE',
        type: 'Networking',
        location: 'RVITM Rooftop Garden',
        description: 'High-energy banquet, acoustic sets, speaker one-on-ones, and collaborative project genesis.'
      }
    ]
  },
  {
    sessionId: 'event-salon',
    sessionTitle: 'TEDx SALON : THE QUANTUM LEAP',
    timeRange: 'FRIDAY, OCT 09, 02:00 PM — 06:00 PM',
    theme: '100-Seat intimate roundtable examining quantum computing, cryogenic chips, and post-silicon physics.',
    items: [
      {
        id: 'sl-1',
        time: '02:00 PM',
        title: 'CHECK-IN & CRYOGENIC LAB TOUR',
        type: 'Lab Tour',
        location: 'RVITM Innovation Lab 04',
        description: 'Walkthrough of sub-zero helium test chambers and semiconductor fabrication microscopes.'
      },
      {
        id: 'sl-2',
        time: '02:30 PM',
        title: 'SALON THESIS: PHYSICAL LIMITS OF SILICON COMPUTATION',
        speaker: 'Hardware Research Fellows',
        type: 'Prologue',
        location: 'Roundtable Chamber',
        description: 'Why Moore’s Law is mathematically dead and what replaces atomic gate electron tunneling.'
      },
      {
        id: 'sl-3',
        time: '03:15 PM',
        title: 'KEYNOTE & LIVE DEMO: SOLID-STATE QUBITS AT 4 KELVIN',
        speaker: 'Vikramaditya Rao',
        speakerSlug: 'vikramaditya-rao',
        type: 'Keynote',
        location: 'Roundtable Chamber',
        description: 'Live sensor telemetry of coherent quantum states and cryogenic transistor switching.'
      },
      {
        id: 'sl-4',
        time: '04:15 PM',
        title: 'CLOSED FIRESIDE: POST-QUANTUM CRYPTOGRAPHY & CHIP WARFARE',
        type: 'Fireside',
        location: 'Roundtable Chamber',
        description: 'Uncensored debate with silicon defense engineers on backdoor kill-switches and open fabrication.'
      },
      {
        id: 'sl-5',
        time: '05:15 PM',
        title: 'LAB SOIRÉE & HIGH-PRECISION PROJECT EXCHANGE',
        type: 'Networking',
        location: 'Atrium Terrace',
        description: 'Direct collaboration matching between student researchers, quantum fellows, and venture architects.'
      }
    ]
  },
  {
    sessionId: 'event-catalyst',
    sessionTitle: 'CATALYST : STUDENT IDEA SEARCH',
    timeRange: 'WEDNESDAY, SEP 23, 04:00 PM — 07:30 PM',
    theme: 'Open mic & pitch slam: undergraduate wildcards compete for a spot on the official red circle stage.',
    items: [
      {
        id: 'ct-1',
        time: '04:00 PM',
        title: 'AMPHITHEATRE DOORS & VOTING PADS DISTRIBUTION',
        type: 'Registration',
        location: 'RVITM Amphitheatre',
        description: 'Collect your digital delegate voting dial to score wildcard pitches in real-time.'
      },
      {
        id: 'ct-2',
        time: '04:30 PM',
        title: 'THE RULES OF THE SLAM: 3 MINUTES, NO SLIDES, RAW CONVICTION',
        speaker: 'Curatorial Jury',
        type: 'Briefing',
        location: 'Amphitheatre Stage',
        description: 'Introducing the strict criteria: originality, evidentiary rigor, and transformative potential.'
      },
      {
        id: 'ct-3',
        time: '05:00 PM',
        title: 'PITCH BATCH 01 : DEEP TECH, ROBOTICS & ENERGY',
        type: 'Pitch Slam',
        location: 'Amphitheatre Stage',
        description: '6 student inventors pitch breakthrough hardware prototypes without PR fluff.'
      },
      {
        id: 'ct-4',
        time: '05:50 PM',
        title: 'PITCH BATCH 02 : BIO-COMMONS, CULTURE & URBAN DESIGN',
        type: 'Pitch Slam',
        location: 'Amphitheatre Stage',
        description: '6 student researchers present grassroots ecological systems and speculative media.'
      },
      {
        id: 'ct-5',
        time: '06:40 PM',
        title: 'LIVE AUDIENCE & JURY VOTE FOR MAIN STAGE SPOT',
        type: 'Deliberation',
        location: 'Amphitheatre Stage',
        description: 'Real-time live telemetry vote tallying to select the official TEDx speaker wildcard.'
      },
      {
        id: 'ct-6',
        time: '07:10 PM',
        title: 'WINNER COMMENCEMENT & STUDENT CREATOR MIXER',
        type: 'Celebration',
        location: 'Amphitheatre Lawn',
        description: 'Celebrate the selected wildcard and network with fellow undergraduate builders.'
      }
    ]
  }
];

export const WHY_ATTEND_CARDS: WhyAttendCard[] = [
  {
    id: 'wa-1',
    number: '01',
    title: 'LEARN FROM THE DISRUPTIVE',
    subtitle: 'Zero platitudes. 100% intellectual velocity.',
    description: 'We ban scripted PR talks and canned corporate slides. Our speakers spend 6 months in curatorial bootcamps refining ideas that provoke, perturb, and permanently alter your mental models.',
    sticker: 'starburst',
    accentColor: '#D6F23A',
    tilt: -3
  },
  {
    id: 'wa-2',
    number: '02',
    title: 'FIND THE UNAPOLOGETIC MAGIC',
    subtitle: 'Where science collides with brutal aesthetics.',
    description: 'Immerse in an uncompromising live experience: high-fidelity acoustic design, sensory stagecraft, raw typography, and minds operating at the farthest outer boundary of what is currently possible.',
    sticker: 'scallop',
    accentColor: '#FF5CC8',
    tilt: 2.5
  },
  {
    id: 'wa-3',
    number: '03',
    title: 'BE PART OF A HIGH-DENSITY TRIBE',
    subtitle: 'Your next co-founder or co-conspirator is here.',
    description: '500 carefully screened delegates: from hardware hackers building DIY quantum gates to venture partners, documentary makers, and student prodigies who refuse mediocrity.',
    sticker: 'pinwheel',
    accentColor: '#FF7A00',
    tilt: -4
  },
  {
    id: 'wa-4',
    number: '04',
    title: 'BUILD LIFELONG CONVICTIONS',
    subtitle: 'Step outside algorithmic echo chambers.',
    description: 'Social feeds feed you what confirms your existing biases. TEDxRVITM is constructed specifically to shatter comfort zones and introduce non-linear serendipity.',
    sticker: 'diamond',
    accentColor: '#5B2EFF',
    tilt: 3
  },
  {
    id: 'wa-5',
    number: '05',
    title: 'JOIN A SELF-SUSTAINING MOVEMENT',
    subtitle: 'The red circle is just day zero.',
    description: 'Attendees gain lifetime access to the RVITM Idea Incubator, quarterly salon dinners, early research whitepapers, and closed Discord channels with global innovators.',
    sticker: 'cross',
    accentColor: '#E62B1E',
    tilt: -2
  }
];

export const TICKETS: TicketTier[] = [
  {
    id: 'ticket-event-1',
    name: 'EVENT 01: UNRAVEL PASS',
    code: 'EVT-01',
    price: '₹ 999',
    originalPrice: '₹ 1,499',
    type: 'General',
    status: 'selling_fast',
    description: 'Full delegate pass for Annual Flagship Conference UNRAVEL: 18 transformative talks, innovation lounge, and curated lunch.',
    benefits: [
      'Full Day Access to all 18 Stage Keynotes',
      'Brutalist Delegate Kit & Lanyard',
      'Official TEDx Certificate of Attendance',
      'Curated Lunch & High-Tea Refreshments',
      'Interactive Innovation Lounge Access',
      'Post-Event Talk Transcripts & Whitepaper'
    ],
    barcode: '||||| |||| || |||||| |||| |||',
    popular: true
  },
  {
    id: 'ticket-event-2',
    name: 'EVENT 02: QUANTUM LEAP PASS',
    code: 'EVT-02',
    price: '₹ 499',
    originalPrice: '₹ 799',
    type: 'General',
    status: 'available',
    description: 'Intimate 100-seat roundtable symposium examining quantum computing, cryogenic semiconductors, and post-silicon cryptography.',
    benefits: [
      'Reserved Roundtable Seating (Lab 04)',
      'Frontier Hardware Architecture Dossier',
      'Interactive Live Cryogenic Lab Demo',
      'Networking with Deep Tech Founders',
      'Certificate of Salon Participation'
    ],
    barcode: '|||||| || |||| ||||| || |||||'
  },
  {
    id: 'ticket-event-3',
    name: 'EVENT 03: CATALYST PASS',
    code: 'EVT-03',
    price: '₹ 299',
    originalPrice: '₹ 499',
    type: 'Student',
    status: 'available',
    description: 'Open mic pitch slam pass: undergraduate wildcards competing for an official speaking slot on the red circle stage.',
    benefits: [
      'Amphitheatre Priority Seating',
      'Audience Voting Keypad Access',
      'Networking with Student Innovators',
      'Refreshment & Beverage Voucher'
    ],
    barcode: '|| |||||| |||| || |||||| ||||'
  },
  {
    id: 'ticket-all-access',
    name: 'ALL-ACCESS SEASON PASS',
    code: 'SEASON-PASS',
    price: '₹ 1,999',
    originalPrice: '₹ 2,795',
    type: 'VIP',
    status: 'available',
    description: 'Comprehensive season pass providing guaranteed delegate entry to all 5 flagship conferences, salons, and design labs.',
    benefits: [
      'Guaranteed Entry to All 5 Events & Salons',
      'VIP Front-Row Seating at Flagship',
      'Speaker Green Room & Soirée Pass',
      'Hardcover Limited Edition Bookazine',
      'Annual TEDxRVITM Patron Recognition'
    ],
    barcode: '|||| |||||| || |||| |||| ||||'
  }
];

export const COMPARISON_BENEFITS = [
  { benefit: '18 Flagship Conference Talks', event1: true, event2: false, event3: false, allAccess: true },
  { benefit: 'Quantum Roundtable & Lab Demo', event1: false, event2: true, event3: false, allAccess: true },
  { benefit: 'Catalyst Pitch Voting Keypad', event1: false, event2: false, event3: true, allAccess: true },
  { benefit: 'Curated Lunch & High Tea', event1: true, event2: true, event3: true, allAccess: true },
  { benefit: 'Official Delegate Swag & Poster', event1: true, event2: true, event3: false, allAccess: true },
  { benefit: 'Innovation Lab Sandbox Entry', event1: true, event2: true, event3: false, allAccess: true },
  { benefit: 'Speaker Green Room & VIP Dinner', event1: false, event2: false, event3: false, allAccess: true },
  { benefit: 'All 5 Conferences & Salons Access', event1: false, event2: false, event3: false, allAccess: true },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'TEDxRVITM ruined standard conferences for me forever. The brutal honesty, the raw set design, and speakers who treated us like intellectual equals — it felt more like an underground revolution than a symposium.',
    author: 'Pooja Hegde',
    role: 'Staff Product Architect, Razorpay',
    batchOrAffiliation: 'Edition III Attendee',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    quote: 'I came as a skeptical third-year engineering student. Three hours in, Dr. Varma\'s talk on neural cryptography made me rewrite my entire final-year thesis. Fast forward one year: my lab received a seed grant born right in the RVITM lobby.',
    author: 'Raghavan S.',
    role: 'Co-founder, SynapseChip',
    batchOrAffiliation: 'RVITM CSE Alumnus',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    quote: 'Most events are polite corporate theater. TEDxRVITM was unhinged in the best possible way: dark lighting, visceral music, ideas that provoked genuine arguments in the corridors between sessions.',
    author: 'Nandita Rao',
    role: 'Creative Director, Studio Null',
    batchOrAffiliation: 'Edition II Speaker & Patron',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-4',
    quote: 'The organizers didn\'t just host an event; they built an intellectual sanctuary for Bengaluru\'s misfits. The ticket stub is still pinned to my workbench wall.',
    author: 'Aditya Chawla',
    role: 'Robotics Researcher, IISc',
    batchOrAffiliation: 'Edition III Delegate',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const PAST_SPEAKERS: PastSpeaker[] = [
  { id: 'ps-1', name: 'Dr. Ramesh Sundaram', edition: '2025 — VELOCITY', talk: 'Hyperloop Dynamics & Atmospheric Drag', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', category: 'Deep Tech', views: '480K' },
  { id: 'ps-2', name: 'Ananya Deshpande', edition: '2025 — VELOCITY', talk: 'The Geometry of Radical Empathy', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', category: 'Culture', views: '890K' },
  { id: 'ps-3', name: 'Kabir Vohra', edition: '2024 — LIMINAL', talk: 'Why Smart Cities Make Dumb Humans', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', category: 'Urbanism', views: '1.2M' },
  { id: 'ps-4', name: 'Dr. Shalini Mukerji', edition: '2024 — LIMINAL', talk: 'CRISPR in your Kitchen: DIY Biology', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80', category: 'Genetics', views: '730K' },
  { id: 'ps-5', name: 'Pranav Roy', edition: '2023 — GENESIS', talk: 'Algorithmic Music & Mathematical Grief', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', category: 'Art & Tech', views: '610K' },
  { id: 'ps-6', name: 'Meera Nambiar', edition: '2023 — GENESIS', talk: 'Dark Skies: Reclaiming Night in Megacities', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80', category: 'Ecology', views: '950K' },
];

export const SPONSORS: Sponsor[] = [
  { name: 'INFOSYS INNOVATION LABS', tier: 'Title Partner', logoText: 'INFOSYS', category: 'Next-Gen Compute' },
  { name: 'TITAN DIGITAL', tier: 'Platinum', logoText: 'TITAN', category: 'Design & Craft' },
  { name: 'ZERODHA RAINMATTER', tier: 'Platinum', logoText: 'RAINMATTER', category: 'Climate & Climate Tech' },
  { name: 'HASURA CLOUD', tier: 'Tech Innovation', logoText: 'HASURA', category: 'GraphQL & APIs' },
  { name: 'POSTMAN LABS', tier: 'Tech Innovation', logoText: 'POSTMAN', category: 'Developer Tools' },
  { name: 'BLUE TOKAI COFFEE', tier: 'Beverage', logoText: 'BLUE TOKAI', category: 'Specialty Roasters' },
  { name: 'RED BULL BASICS', tier: 'Beverage', logoText: 'RED BULL', category: 'Energy & Culture' },
  { name: 'YOURSTORY MEDIA', tier: 'Community', logoText: 'YOURSTORY', category: 'Digital Media' },
];

export const VENUE_DETAILS = {
  name: 'RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT',
  subName: 'CENTRAL AUDITORIUM COMPLEX & AMPHITHEATRE',
  address: 'Chaithanya Layout, 8th Mile, Kothnoor Dinne, JP Nagar 8th Phase, Bengaluru, Karnataka 560076',
  landmark: 'Adjacent to RVITM Tech Incubator Block',
  metroAccess: 'Yelachenahalli / Silk Institute Green Line (10 min feeder shuttle available)',
  parking: 'Free secured multi-level underground parking for 400+ vehicles on campus',
  capacity: '600 Tiered Acoustic Seats with Meyer Sound Array',
  coordinates: '12.8718° N, 77.5855° E',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3138402431707!2d77.58309197592966!3d12.887532387420237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15617a2ec3cf%3A0xb35a09ce7d61c360!2sRV%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/pKNpiJanEnf41bJ66',
  images: [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80'
  ]
};

export const WATCH_TALKS_FEATURED = {
  title: 'WHAT LIES BEYOND SILICON: THE COMING POST-TRANSISTOR COMPUTING CRASH',
  speaker: 'Dr. Vimal Narayan (TEDxRVITM 2025 Highlight)',
  duration: '16:42 MIN',
  youtubeId: 'dQw4w9WgXcQ',
  views: '840,192 VIEWS',
  keyQuote: '"We built civilization on sand crystals that can no longer get any smaller without electrons jumping through physics itself."',
  videoPoster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Nikhil R. Gowda',
    role: 'Lead Organizer & Licensee',
    dept: 'Final Year CSE — Systems Architecture',
    quote: '"Ideas are weightless until someone risks their reputation to stage them."',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    color: '#D6F23A',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-2',
    name: 'Sanjana Krishnamurthy',
    role: 'Head of Curation & Content',
    dept: 'Third Year ISE — Cognitive Systems',
    quote: '"We read 420 talk proposals to find the 6 that gave us actual goosebumps."',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    color: '#FF5CC8',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-3',
    name: 'Harshith Varma',
    role: 'Art Director & Visual Identity',
    dept: 'Fourth Year Mech — Computational Aesthetics',
    quote: '"If the typography doesn\'t intimidate you slightly, it\'s not brutalist enough."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    color: '#5B2EFF',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-4',
    name: 'Ananya S. Rao',
    role: 'Experience & Stagecraft Lead',
    dept: 'Third Year ECE — Psychoacoustics',
    quote: '"Every second a delegate spends in the hall is an orchestrated electrical circuit."',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    color: '#FF7A00',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-5',
    name: 'Devadath Nair',
    role: 'Technical Operations & Broadcast',
    dept: 'Final Year AI & Data Science',
    quote: '"Zero packet drops on the livestream or we pull an all-nighter fixing the fiber."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    color: '#D6F23A',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'team-6',
    name: 'Shreya Sundar',
    role: 'Partnerships & Patron Relations',
    dept: 'Third Year CSE — Venture Scout',
    quote: '"We partner only with companies whose technology our speakers would actually dissect."',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    color: '#FF5CC8',
    linkedin: 'https://linkedin.com'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'WHAT EXACTLY IS TEDxRVITM AND WHO RUNS IT?',
    answer: 'TEDxRVITM is an independently organized TED event operated under official license from TED Conferences, LLC. It is run entirely by a passionate student and faculty team at RV Institute of Technology and Management, Bengaluru, with non-profit community objectives.',
    category: 'General'
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'CAN ANYONE ATTEND OR IS IT EXCLUSIVELY FOR RVITM STUDENTS?',
    answer: 'TEDxRVITM is 100% open to the public worldwide! We warmly welcome university students from any institution, founders, engineers, researchers, artists, and intellectual seekers. You just need a confirmed pass.',
    category: 'Tickets'
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'ARE TICKETS REFUNDABLE OR TRANSFERRABLE?',
    answer: 'Due to strictly capped auditorium seating (500 maximum authorized by TED), passes are non-refundable. However, you can transfer your ticket to another person up to 72 hours before the event via your booking confirmation link.',
    category: 'Tickets'
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'WHAT DOES MY TICKET INCLUDE?',
    answer: 'Every pass grants access to all 18 speaker keynotes and performances, our high-energy brutalist delegate kit (lanyard, sticker pack, screenprint poster), curated multi-course lunch, evening high-tea, and entrance to the interactive innovation lounge.',
    category: 'Tickets'
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'HOW CAN I NOMINATE MYSELF OR SOMEONE ELSE AS A SPEAKER?',
    answer: 'Use our "Nominate a Speaker" portal on the site! Nominations are vetted by our curatorial committee against strict TED guidelines: no commercial pitches, no pseudoscience, only original ideas with strong evidentiary backing.',
    category: 'General'
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'WHAT IS THE DRESS CODE AND CODE OF CONDUCT?',
    answer: 'Brutalist casual, creative formal, or whatever makes you feel unapologetically yourself. We maintain zero tolerance for harassment, discrimination, or disrespectful conduct. We are an inclusive, fierce, and open-hearted community.',
    category: 'Event Day'
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'IS PARKING AVAILABLE AT THE RVITM CAMPUS?',
    answer: 'Yes! Free multi-level underground parking is available for two-wheelers and four-wheelers upon presenting your digital delegate ticket at the main security gate.',
    category: 'Venue'
  }
];

export const NAV_LINKS = [
  { name: 'About', href: '#about', path: '/#about' },
  { name: 'Events', href: '#events', path: '/#events' },
  { name: 'Speakers', href: '#speakers', path: '/#speakers' },
  { name: 'Schedule', href: '#schedule', path: '/#schedule' },
  { name: 'Venue', href: '#venue', path: '/#venue' },
  { name: 'Team', href: '#team', path: '/#team' },
  { name: 'FAQ', href: '#faq', path: '/#faq' },
  { name: 'Contact', href: '#contact', path: '/#contact' },
];

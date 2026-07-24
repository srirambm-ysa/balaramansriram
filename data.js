// ═══════════════════════════════════════════════════════════════════════════════
//  SITE CONTENT  —  Edit this file to update your website.
//  Change text, links, images, or add items below. The design stays untouched.
// ═══════════════════════════════════════════════════════════════════════════════

const DATA = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    logo: 'BALARAMAN SRIRAM',
    logoImage: 'logo.svg',
    links: [
      { label: 'The Lab',        href: '#lab' },
      { label: 'The Study',      href: '#study' },
      { label: 'The Blueprint',  href: '#blueprint' },
      { label: 'Contact',        href: '#contact' }
    ]
  },

  // ── Hero Section ────────────────────────────────────────────────────────────
  hero: {
    watermark: 'INTERSECTION',
    label: 'Systems & Stories',
    headline: 'Making AI accessible.<br>By Building Simple Apps.',
    subhead: 'The portfolio of a veteran technology strategist, AI developer, and fiction writer. Exploring the space where algorithmic intelligence meets narrative suspense.',
    ctas: [
      { label: 'Explore The Lab →',   href: '#lab' },
      { label: 'Enter The Study →',   href: '#study' }
    ],
    profile: {
      image: 'profile.jpg',     // ← place your photo in this folder
      alt: 'Balaraman Sriram'
    }
  },

  // ── The Lab  (Technical / Strategic Advisor) ────────────────────────────────
  lab: {
    watermark: 'LOGIC',
    tag: '// The Lab',
    title: 'Your Strategic Advisor',
    logo: {
      image: 'lab-logo.jpg',    // ← place your lab logo here (optional)
      alt: 'The Lab'
    },
    featured: {
      title: 'Career Planner AI',
      desc: 'A lightweight single-page framework for rapid AI risk assessment',
      links: [
        { label: 'Live Environment ↗',  url: 'https://career-planner-q1mq.onrender.com/' },
        { label: 'Repository ↗',        url: 'https://github.com/srirambm-ysa/career-plannerAI' }
      ]
    },
    expandLabel: 'Show All Systems & Code Archive',
    archive: [
      { name: 'Travel Itinerary Planner',   desc: 'Travel Itinerary Generator'},
      { name: 'GLQuoter',  desc: 'CRM for small Travel Agencies' },
      { name: 'Flight Price Intelligence',          desc: 'offline Airfare Comparison' },
      { name: 'Siddha Guna Padam Chatbot',   desc: 'Vegetables & Fruits Properties for Ayurvedic Body Types' },
      { name: 'Trade Watch',   desc: 'Custom Indian market momentum scanner' }
    ]
  },

  // ── The Study  (Literary / Creative) ────────────────────────────────────────
  study: {
    watermark: 'RESONANCE',
    tag: '// The Study',
    title: 'Reason & Resonance',
    logo: {
      image: 'study-logo.png',  // ← place your study logo here (optional)
      alt: 'The Study'
    },
    featured: {
      cardLabel: 'Featured Publication',
      title: 'The Roussel Disappearance',
      desc: 'Serialized investigative thriller moving from Marseille to North Africa.',
      link: { label: 'Open Publication via Substack →',  url: 'https://balaramansriram.substack.com/p/the-roussel-disappearance' }
    },
    expandLabel: 'Browse Bookshelf & Archives',
    bookshelf: [
      { title: 'Wisdom Poems',   status: 'Available on Amazon Kindle ↗',  url: 'https://a.co/d/0in3tbfj' },
      { title: 'Light Body',   status: 'Available on Amazon Kindle ↗', url:'https://a.co/d/00VWxcvG' },
      { title: 'Saint Thayumanavar',  status: 'Available on Amazon Kindle ↗', url:'https://a.co/d/0fHjaTqw' },
      { title: 'Vinayagar Agaval',  status: 'Published on Medium ↗', url: 'https://medium.com/@ibala72/vinayagar-agaval-f51d4bcb4fa0' },
      { title: 'Kandar Anubhoothi',  status: 'Published on Medium ↗', url: 'https://medium.com/@ibala72/kandar-anubhoothi-with-english-meaning-bb04a8dda28f' },
      { title: 'Gitasaara Thalattu',  status: 'Published on Medium ↗', url:'https://medium.com/@ibala72/bhagvadgita-as-a-lullaby-91d6d875e2d1' },
      { title: 'The Holy Science of Sri Yukteshwar Giri',  status: 'Published on Medium ↗', url:'https://medium.com/@ibala72/sri-swami-yukteshwar-giri-727bab702a88' },
      { title: 'Pamban Swamigal ChitraKavi',  status: 'Published on Medium ↗', url:'https://medium.com/@ibala72/pamban-swamigal-showed-his-mathematical-genius-as-well-as-poetic-skills-when-he-created-the-7e60c10e397e' }
    ]
  },

  // ── The Blueprint  (Foundation + Career Timeline) ──────────────────────────
  blueprint: {
  "title": "The Blueprint",
  "education": {
    "title": "Foundation",
    "items": [
      { "degree": "B.E (Computer Science)", "school": "University of Madras", "note": "The foundational knowledge" },
      { "degree": "MBA (Year 1 — redirected focus)", "school": "", "note": "The real education was in the systems I built along the way." }
    ]
  },
  "items": [
    {
      "year": "2023-",
      "title": "Principal Consultant & AI Experimenter & Researcher",
      "subtitle": "Your Strategic Advisor",
      "desc": "The Advent of AI was a turning point for my business ideas. Your strategic advisor was a brand as well as a lab for me to try out various business ideas. What started as a climate focused consulting practice, turned to focus on custom AI integration, local LLM orchestration workflows, desktop automation environments, and quantitative algorithmic investment analytics. The resulting products are showcased in this site and product pages."
    },
    {
      "year": "2019-2023",
      "title": "Writer, Storyteller-Sabbatical and Spiritual Focus",
      "subtitle": "Reason & Resonance",
      "desc": "The jarring arrival of COVID and the subsequent havoc in society, created a moment of spiritual necessity. It became a period of discovering the ancient roots of my religion and spirituality. Trained in yoga - multiple systems like isha, SKY, Art of Living, wrote poetry, performed deep study of religious texts, the outcome of which was expressed in my medium blogs and kindle books and later took a more professional turn on substack. A period of rest, rejuvenation and blossoming."
    },
    {
      "year": "2017-2018",
      "title": "Chief Product Officer",
      "subtitle": "YKnot Systems / Legal Software SaaS ",
      "desc": "Guided the comprehensive product requirements & marketing for Litmas (Litigation Management System for high end law firms), a high-efficiency cloud litigation platform. Designed a frictionless 150-screen UI operating under a strict 3-click maximum workflow budget."
    },
    {
      "year": "2010-2017",
      "title": "Associate General Manager",
      "subtitle": "HCL Technologies / Global Delivery Operations",
      "desc": "Directed large-scale system delivery portfolios for global accounts. Spearheaded critical onsite engineering governance for Tyco Fire & Security in Ratingen, Germany, and managed core Citibank TTS Asia Pacific DevOps."
    },
    {
      "year": "2004-2010",
      "title": "Independent 3rd Party Testing & Quality/Process Focus",
      "subtitle": "Cognizant / TCS / Thinksoft Global",
      "desc": "Designed and established specialized Testing Centers of Excellence (TCoE) for Tier-1 financial institutions including Morgan Stanley. Pioneered architectural concepts for enterprise data warehouse framework verification. Managed Large testing accounts like PepsiCo"
    },
    {
      "year": "1994-2001",
      "title": " Technical Programming & Developer Roots",
      "subtitle": "TAKE Solutions / Syntel / Riyam/ Innovation Software",
      "desc": "Built core foundational expertise across startup and enterprise ecosystems. Engineered custom BPM event-driven architectures using Pub/Sub design patterns and developed mission-critical telecom operational toolsets globally."
    }
  ]
},

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    title: 'Get in Touch',
    intro: "Whether it's about AI systems, narrative projects, or strategic collaborations — I'd be glad to hear from you.",
    email: 'srirambm@gmail.com',     // ← your email
    mobile: '9884388877',
    address: 'Chennai, India · Available for remote collaboration worldwide',
    availability: 'Open to consulting, speaking engagements, and narrative collaborations.'
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    copyright: '© 2026 Balaraman Sriram',
    links: [
      { label: 'GitHub',    url: 'https://github.com/srirambm-ysa' },
      { label: 'Substack',  url: 'https://substack.com/@balaramansriram' },
      { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/srirambm' }
    ]
  }

};

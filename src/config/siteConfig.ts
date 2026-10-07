export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  pricePeriod?: string;
  headline: string;
  description: string;
  tagline: string;
  badge?: string;
  supportingLine: string;
  ctaText: string;
  secondaryCtaText: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioProject {
  id: string;
  name: string;
  title: string; // for backward compatibility
  industry: string;
  category: string;
  projectType: string;
  location?: string;
  badge: string; // "REAL PROJECT"
  description: string;
  desktopHero: string;
  desktopSecondary: string;
  mobileImage: string;
  heroImage: string; // for backward compatibility
  url?: string;
  status: "real" | "concept";
  designObjective: string;
  challenge: string;
  solution: string;
  scope: string[];
}

export interface CoreServiceItem {
  id: string;
  title: string;
  description: string;
}

export const siteConfig = {
  // Brand & Legal Identity
  brandName: "1UpSites",
  brandWordmark: "1UpSites",
  legalCompanyName: "Call Master LLC",
  dbaText: "Call Master LLC d/b/a 1UpSites",
  primaryTagline: "Level up your online presence.",
  tagline: "BETTER WEBSITES. STRONGER FIRST IMPRESSIONS. BUILT AROUND WHAT YOUR BUSINESS ACTUALLY NEEDS.",
  subTagline: "We don't sell extra pages just to make the project bigger. We build the website structure that makes sense for your business.",
  heroHeadline: "Your business deserves a website that’s a level above.",
  trustLine: "Premium websites for contractors, service businesses, and growing local companies.",

  // Real Contact Information
  contact: {
    phoneDisplay: "203-444-5273",
    phoneTel: "+12034445273",
    email: "mike@1upsites.com",
    serviceArea: "Connecticut + Remote / Nationwide",
    businessHours: "Mon – Fri: 8:00 AM – 6:00 PM EST",
    locationDetail: "Based in Connecticut · Serving clients nationwide.",
  },

  // Color Palette Constants
  colors: {
    accent: "#c5a059", // Warm burnished brass / gold
    accentHover: "#b8934b",
    accentLight: "rgba(197, 160, 89, 0.12)",
    surfaceDark: "#0c0d0e",
    surfaceCard: "#141618",
    surfaceElevated: "#1a1c1f",
    textMuted: "#8e9196",
  },

  // Direct Phone Call URL (Direct conversion path)
  phoneCallUrl: "tel:2034445273",

  // Calls to Action
  cta: {
    primary: {
      label: "GET A FREE WEBSITE REVIEW",
      href: "/review",
    },
    secondary: {
      label: "CALL NOW",
      href: "tel:2034445273",
      displayPhone: "203-444-5273",
    },
    callMicrocopy: "Prefer to talk now? Call Michael directly at 203-444-5273.",
  },

  // Founder Information (Real owner)
  founder: {
    name: "Michael Caprio",
    role: "Founder & Lead Designer",
    image: "/images/owner.jpg",
    statement: "Your work is already good. Your website should prove it.",
    bio: "1UpSites was built around a simple idea: a strong business deserves an online presence that reflects the quality of the work behind it. I created 1UpSites to help local business owners upgrade that first impression without dealing with bloated agency processes, confusing tech jargon, or overpriced retainers. You work directly with me to build a clean, high-performing website that earns trust and wins customers.",
  },

  // Social Links
  socials: {
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    instagram: "https://instagram.com",
  },

  // Analytics & Tracking Placeholders
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX",
  },

  // Honest 4-Step Process (Expedited Build-First Philosophy)
  process: [
    {
      step: "01",
      name: "RESEARCH",
      summary: "We study your business, services, reviews, competitors, customers, and existing online presence.",
    },
    {
      step: "02",
      name: "BUILD FIRST",
      summary: "We create a highly developed website direction before asking you to sit through endless planning meetings.",
    },
    {
      step: "03",
      name: "REVIEW & REFINE",
      summary: "We walk through the work together. You tell us what you love, what needs adjusting, and what needs to feel more like your business.",
    },
    {
      step: "04",
      name: "COMPLETE & LAUNCH",
      summary: "We make the final refinements, test everything, connect your domain, and launch.",
    },
  ],

  // 6 Concise Core Services for Homepage
  coreServices: [
    {
      id: "custom-design",
      title: "CUSTOM WEBSITE DESIGN",
      description: "Premium, custom-designed websites built around your company, customers, and services. No generic templates or clunky page builders.",
    },
    {
      id: "mobile-optimization",
      title: "MOBILE OPTIMIZATION",
      description: "Fast, intuitive experiences designed for customers browsing and calling from their phones. Tap-to-call headers and effortless navigation.",
    },
    {
      id: "lead-systems",
      title: "LEAD & ESTIMATE SYSTEMS",
      description: "Simple forms and clear calls to action that make reaching your company effortless, without overwhelming prospective clients.",
    },
    {
      id: "local-seo",
      title: "LOCAL SEO FOUNDATIONS",
      description: "Clean technical structure, service architecture, metadata, and local search fundamentals to help customers find you in your service area.",
    },
    {
      id: "copy-content",
      title: "COPY & CONTENT",
      description: "Clear messaging that communicates what you do, why customers should trust you, and what they should do next.",
    },
    {
      id: "hosting-support",
      title: "HOSTING & SUPPORT",
      description: "Reliable cloud hosting, maintenance, updates, and ongoing website support after launch so you never worry about downtime.",
    },
  ],

  // Compact Strip Industries
  compactIndustries: [
    "Landscaping & Hardscaping",
    "Home Improvement & Remodeling",
    "HVAC & Plumbing",
    "Electrical Contracting",
    "Tree & Outdoor Services",
    "Auto Services & Detailing",
    "Masonry & Concrete",
    "Roofing & Siding",
  ],

  // Real Work Projects Portfolio
  portfolio: [
    {
      id: "tradegram",
      name: "TradeGram",
      title: "TradeGram",
      industry: "Digital Platform / Fintech",
      category: "Digital Platform / Fintech",
      projectType: "Fintech Platform & Interactive Web Experience",
      location: "Interactive Platform",
      badge: "REAL PROJECT",
      description: "A modern digital platform designed around a clean, premium interface and a clear user experience.",
      desktopHero: "/images/portfolio/tradegram-desktop-hero.png",
      desktopSecondary: "/images/portfolio/tradegram-desktop-secondary.png",
      mobileImage: "/images/portfolio/tradegram-mobile.jpg",
      heroImage: "/images/portfolio/tradegram-desktop-hero.png",
      status: "real" as const,
      designObjective: "Build a high-trust, intuitive financial technology interface that combines sophisticated visual density with immediate user clarity.",
      challenge: "Financial platforms frequently suffer from visual clutter, confusing navigation, and overwhelming technical data that intimidate users and erode trust.",
      solution: "Engineered a refined dark interface with meticulous spacing, deliberate data hierarchy, and responsive interaction design that makes complex workflows feel calm, intuitive, and authoritative.",
      scope: [
        "High-density dashboard architecture",
        "Interactive component design system",
        "Mobile-first responsive workflows",
        "Real-time data visualization layout",
        "Typography & contrast optimization",
        "Subtle micro-interaction polish",
      ],
    },
    {
      id: "condor-coffee",
      name: "Condor Coffee",
      title: "Condor Coffee",
      industry: "Restaurant / Hospitality",
      category: "Restaurant / Hospitality",
      projectType: "Hospitality Brand Experience & Local Storefront",
      location: "Specialty Roastery & Cafe",
      badge: "REAL PROJECT",
      description: "A warm, modern hospitality website designed to showcase the brand, menu experience, and local identity.",
      desktopHero: "/images/portfolio/ecuadorian-coffee-desktop-hero.png",
      desktopSecondary: "/images/portfolio/ecuadorian-coffee-desktop-secondary.png",
      mobileImage: "/images/portfolio/ecuadorian-coffee-mobile.jpg",
      heroImage: "/images/portfolio/ecuadorian-coffee-desktop-hero.png",
      status: "real" as const,
      designObjective: "Translate specialty coffee heritage into a warm, appetizing online presence with effortless menu browsing and visit planning.",
      challenge: "Independent hospitality and specialty roastery brands often lose online customers because mobile visitors cannot quickly find menus, store hours, location directions, or what makes their product unique.",
      solution: "Created an inviting editorial layout featuring Ecuadorian coffee origin stories, prominent mobile tap-to-directions, structured menu browsing, and a warm visual palette.",
      scope: [
        "Brand storytelling & origin narrative",
        "Mobile tap-to-directions & hours header",
        "Structured food & beverage menu showcase",
        "High-fidelity product photography grid",
        "Local business schema & Google map integration",
        "Fast-loading mobile asset optimization",
      ],
    },
  ],

  // Single Transparent Website Offer ($499 One-Time)
  pricing: [
    {
      id: "custom-website",
      name: "Custom Website",
      price: "$499",
      pricePeriod: "ONE-TIME",
      headline: "A custom website built around your business.",
      description: "A custom website built around your business, designed to look professional, work beautifully on mobile, and make it easy for customers to take action.",
      tagline: "Custom design, mobile optimization, and standard hosting included.",
      badge: "ONE-TIME PURCHASE",
      supportingLine: "Includes standard website hosting, domain connection, and a 7-day post-launch revision window. Zero required monthly retainers.",
      ctaText: "GET A FREE WEBSITE REVIEW",
      secondaryCtaText: "CALL NOW",
      features: [
        "Custom website design",
        "Mobile optimization",
        "Website launch",
        "Connection to the client’s existing domain",
        "Standard website hosting",
        "Contact form setup",
        "Booking or external link setup when needed",
        "7-day post-launch revision window",
      ],
      recommended: true,
    },
  ],

  // Clear Post-Launch Structure: No Forced Retainers
  postLaunch: {
    eyebrow: "POST-LAUNCH SUPPORT & HOSTING",
    headline: "NO REQUIRED MONTHLY SUBSCRIPTIONS.",
    body: "A website build is primarily a one-time purchase. Every website includes a 7-day post-launch revision window for reasonable final adjustments. After that, you are never locked into a monthly retainer. You can simply reach out whenever you need an update, with one-off changes starting at $49.",
    steps: [
      {
        number: "01",
        title: "7-DAY POST-LAUNCH REVISION WINDOW",
        description: "During the first 7 days after launch, request reasonable final adjustments—such as minor wording changes, replacing supplied photos, or small design tweaks—at no additional charge.",
        badge: "Included Free",
      },
      {
        number: "02",
        title: "ONE-OFF UPDATES STARTING AT $49",
        description: "No monthly subscription required. Request updates only when you actually need them. One-off website updates start at $49, with pricing based on the scope of work.",
        badge: "Pay As You Go",
      },
      {
        number: "03",
        title: "LARGER CHANGES QUOTED SEPARATELY",
        description: "Need new pages, new sections, or expanded functionality down the road? We provide a straightforward, upfront price quote before any work is completed.",
        badge: "Upfront Quotes",
      },
    ],
  },

  // One-Off Updates Details
  oneOffUpdates: {
    headline: "One-off website updates starting at $49.",
    subheadline: "You don't need a monthly subscription to keep your site updated. After your included 7-day revision window, simply reach out whenever you need a change.",
    price: "Starting at $49",
    priceDetail: "per request · zero monthly commitments",
    disclaimer: "Pricing depends on the amount of work involved. Upfront quote confirmed before any work begins.",
    points: [
      "No monthly maintenance or subscription required",
      "Pay only when you actually need an update",
      "Price confirmed upfront before any work begins",
      "Keep and control your existing domain name",
    ],
  },

  // 16 Targeted Industries List (for modal, footer & dropdowns)
  industries: [
    { id: "landscaping", title: "Landscaping & Lawn Care" },
    { id: "hardscaping", title: "Hardscaping & Outdoor Living" },
    { id: "tree-services", title: "Tree Services & Arborists" },
    { id: "concrete", title: "Concrete Contractors" },
    { id: "masonry", title: "Masonry & Stone Work" },
    { id: "fencing", title: "Fencing & Deck Builders" },
    { id: "painting", title: "Painting Contractors" },
    { id: "plumbing", title: "Plumbing Contractors" },
    { id: "hvac", title: "HVAC Specialists" },
    { id: "electrical", title: "Electrical Contractors" },
    { id: "roofing", title: "Roofing Companies" },
    { id: "paving", title: "Paving & Asphalt" },
    { id: "auto-services", title: "Auto Detailing & Specialty" },
    { id: "gyms", title: "Private Gyms & Studios" },
    { id: "cleaning", title: "Cleaning Companies" },
    { id: "general", title: "General Contractors & Remodelers" },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "How much does a website cost?",
      a: "Our core offer is straightforward: a Custom Website for $499 one-time. This includes custom website design, mobile optimization, launch, connection to your existing domain, standard website hosting, contact form setup, external booking or link integration when needed, and a 7-day post-launch revision window. Zero monthly subscription required.",
    },
    {
      q: "Am I required to pay a monthly fee after my website is built?",
      a: "No, absolutely not. A website build is primarily a one-time purchase. Standard website hosting is included, and you are never locked into any monthly maintenance plan or retainer. If you ever need updates in the future, one-off website updates start at $49 only when you request them.",
    },
    {
      q: "How do website updates work after launch?",
      a: "Every website includes a 7-day post-launch revision window for reasonable final adjustments (such as minor wording changes, replacing supplied photos, or small design tweaks) at no extra charge. After that, you can request one-off updates starting at $49 whenever you need them, or receive an upfront flat quote for larger changes.",
    },
    {
      q: "Can I keep my existing domain name?",
      a: "Yes. You maintain full ownership and control of your existing domain name. We connect your domain to your new website seamlessly as part of your launch.",
    },
    {
      q: "How does the process work?",
      a: "We start with a quick discovery session to understand your services, target customers, and goals. Next, we build your custom design, review it with you to fine-tune the details, and launch your upgraded site on your domain.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. Many of our clients have an outdated WordPress, Wix, Squarespace, or GoDaddy site. We rebuild your online presence with clean modern code while preserving your domain name and search rankings.",
    },
    {
      q: "Will my website work well on phones?",
      a: "Yes. Mobile-first usability is our core standard. Every website features clean navigation, tap-to-call headers, and fast loading on smartphones.",
    },
    {
      q: "How do we get started?",
      a: "Request a Free Website Review or reach out directly by phone at 203-444-5273 or email at mike@1upsites.com. We will review your current site and show you what we'd improve.",
    },
  ],

  // Regional SEO Landing Pages
  seoLandingPages: [
    {
      slug: "web-design-connecticut",
      title: "1UpSites | Website Design in Connecticut for Local Contractors",
      metaDescription: "Premium custom web design for local service companies across Connecticut. Level up your online presence.",
      headline: "Connecticut's Premier Web Design for Trade & Service Businesses",
      region: "Connecticut",
      focusTrades: ["Landscaping", "Hardscaping", "Tree Service", "HVAC", "Plumbing", "Masonry"],
    },
    {
      slug: "web-design-fairfield-county",
      title: "1UpSites | Web Design Fairfield County CT – Contractor Websites",
      metaDescription: "High-converting web design for local service businesses in Fairfield County, CT.",
      headline: "Position Your Business for Fairfield County's High-Value Clients",
      region: "Fairfield County, CT",
      focusTrades: ["Luxury Hardscapes", "High-End Painting", "Custom Decks", "Architectural Concrete"],
    },
    {
      slug: "web-design-new-haven",
      title: "1UpSites | Web Design New Haven CT – Local Business Websites",
      metaDescription: "Bespoke websites for contractors across the greater New Haven area and shoreline.",
      headline: "Outshine Competitors in the Greater New Haven & Shoreline Market",
      region: "New Haven County, CT",
      focusTrades: ["Tree Care", "Roofing", "Electrical", "Paving", "Plumbing"],
    },
    {
      slug: "contractor-web-design",
      title: "1UpSites | Contractor Website Design – Built to Level Up Inquiries",
      metaDescription: "We build websites for general contractors and specialty trades that command higher prices.",
      headline: "Websites That Prove Your Craftsmanship Before You Pick Up the Phone",
      region: "National & Regional",
      focusTrades: ["General Contractors", "Remodelers", "Commercial Trades", "Home Services"],
    },
  ],
};

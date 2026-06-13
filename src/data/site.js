// ============================================================
// Hawthorne Development — central content file
// All site copy lives here (per page). Edit text here, not in components.
//
// Copy source: Bevin's finalized website copy (2026-06).
// Positioning: high-net-worth audience; understated, elegant, confident.
// The firm is new and solo-principal — sold as an advantage (direct access,
// single accountability, selectivity), never faking scale or a portfolio.
//
// >>> BLANKS TO FILL BEFORE LAUNCH <<<
// Anything wrapped in NEEDS() renders as a visible placeholder in the UI so
// it's obvious what still needs real, verifiable input. Replace the NEEDS(...)
// call with a plain string once you have the real content. Do NOT invent
// these — this audience verifies (founder background, projects, etc.).
// ============================================================

// Marks a value that still needs real input. Components render these as a
// tasteful "to fill" placeholder rather than shipping bracketed text.
export const NEEDS = (label, hint = '') => ({ __needsInput: true, label, hint })
export const isBlank = (v) => v && typeof v === 'object' && v.__needsInput === true

export const company = {
  name: 'Hawthorne Development',
  shortName: 'Hawthorne',
  location: 'Telluride & San Miguel County, Colorado',
  serviceArea: 'Telluride & San Miguel County, Colorado',
  // Existing address from prior site — confirm before launch.
  email: 'info@hawthornedevco.com',
  phone: NEEDS('Phone', 'Add the business line in src/data/site.js'),
  domain: 'hawthornedevco.com',
  url: 'https://hawthornedevco.com',
}

// Primary navigation — Bevin's sitemap.
export const nav = [
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

// ---------------------------------------------------------------- HOME
export const home = {
  seo: {
    title: 'Hawthorne Development — Custom homes & commercial building in Telluride, CO',
    description:
      'Hawthorne Development builds custom homes and commercial spaces across Telluride and San Miguel County — built to last, managed with financial discipline, with direct access to the principal.',
  },
  hero: {
    eyebrow: company.location,
    headline: 'Built in this valley to last in it.',
    subhead:
      'Hawthorne Development builds custom homes and commercial spaces across Telluride and San Miguel County — designed with restraint, built without compromise, and managed with the financial discipline a significant asset deserves.',
    primaryCta: { label: 'Begin a conversation', to: '/contact' },
    secondaryCta: { label: 'See our approach', to: '/about' },
  },
  unifying: {
    eyebrow: 'One standard. Two kinds of work.',
    heading: 'There is a difference between something that is built and something that is built to last.',
    body: [
      'In this terrain, at this elevation, in these seasons, the difference shows.',
      'Whether it’s a family’s home or a commercial building meant to anchor a block for decades, we build for the same outcome: quality that endures, value that holds, and a project run with discipline from the first drawing to the last walkthrough.',
    ],
  },
  differentiators: [
    {
      title: 'You work with the principal — not a layer of project managers.',
      body: 'The person accountable for your project is the person building it. Direct access, direct answers, and a single point of responsibility from start to finish.',
    },
    {
      title: 'Built to hold value.',
      body: 'Material choices, construction quality, and documentation that protect resale and refinancing strength — for homes and commercial assets alike.',
    },
    {
      title: 'Local where it counts.',
      body: 'Building in San Miguel County is not the same as building anywhere else. Permitting, elevation, weather, and trades all behave differently here.',
    },
    {
      title: 'Selective by design.',
      body: 'We take on a limited number of projects so each one gets the attention it deserves. That focus is the entire point.',
    },
  ],
  paths: [
    {
      kind: 'Residential',
      body: 'Custom homes built to be lived in, and to hold their worth. For full-time residents and second-home owners alike.',
      cta: { label: 'Explore residential', to: '/residential' },
    },
    {
      kind: 'Commercial',
      body: 'Spaces built with budget certainty and long-term value in view.',
      cta: { label: 'Explore commercial', to: '/commercial' },
    },
  ],
  closing: {
    heading: 'Some things are built. The best ones are entrusted.',
    body: 'If you’re planning a home or a commercial project in Telluride and you want it built to last — and to hold its worth — we’d welcome the conversation.',
    cta: { label: 'Start a conversation', to: '/contact' },
  },
}

// ---------------------------------------------------------------- RESIDENTIAL
export const residential = {
  seo: {
    title: 'Residential — Custom homes in Telluride | Hawthorne Development',
    description:
      'Custom homes built to be lived in and to hold their worth, across Telluride and San Miguel County. Single-point accountability, honest budgets, built for the climate.',
  },
  hero: {
    eyebrow: 'Residential',
    headline: 'Custom homes built to be lived in — and to hold their worth.',
    subhead:
      'A home in Telluride is among the most significant assets most owners will ever hold. We build it accordingly: with the craftsmanship the place is known for, and the cost control and documentation that protect what it’s worth for as long as you own it.',
  },
  audiences: [
    {
      title: 'For those who live here',
      body: 'Your home is your daily life and your community. We build it to perform through every season, with the quality and detail that make it worth coming home to — and a builder who’s still standing behind the work years later.',
    },
    {
      title: 'For those who are away',
      body: 'A second home is only as good as the people you trust to build and protect it while you’re not here. We manage your project with full transparency from afar — clear reporting, controlled costs, no surprises — and hand back a home that’s ready the moment you return.',
    },
  ],
  howWeBuildHeading: 'How we build',
  howWeBuild: [
    { title: 'One point of accountability.', body: 'The principal runs your project personally.' },
    { title: 'Honest budgets.', body: 'Real cost tracking, no surprises dressed up as change orders.' },
    { title: 'Built for the climate.', body: 'Elevation, weather, and short seasons planned for, not discovered.' },
    {
      title: 'Documented and warranted.',
      body: NEEDS('Warranty terms', 'Confirm the warranty you offer before publishing'),
    },
  ],
  cta: { label: 'Plan your home', to: '/contact' },
}

// ---------------------------------------------------------------- COMMERCIAL
export const commercial = {
  seo: {
    title: 'Commercial — Building & development in Telluride | Hawthorne Development',
    description:
      'Commercial spaces built with budget certainty and long-term value in view. Ground-up development and tenant build-outs across San Miguel County, with rigorous cost control.',
  },
  hero: {
    eyebrow: 'Commercial',
    headline: 'Commercial spaces built with budget certainty and long-term value in view.',
    subhead:
      'Commercial work demands a different discipline: code, timelines, returns, and a building that has to earn its keep. We bring rigorous cost control, dependable scheduling, and construction quality that protects the asset’s value and keeps it leasable and serviceable for the long haul.',
  },
  handleHeading: 'What we handle',
  handle: [
    'Ground-up development and tenant build-outs',
    'Transparent budgets and real cost tracking',
    'Single-point accountability for schedule and quality',
    'Local command of permitting, terrain, and trades in San Miguel County',
  ],
  whyHeading: 'Why it matters',
  why:
    'A commercial building is a financial instrument as much as a structure. Every decision we make — materials, systems, finish — is weighed against what it costs to run, maintain, and hold the asset over time, not just what it costs to build.',
  cta: { label: 'Discuss your project', to: '/contact' },
}

// ---------------------------------------------------------------- ABOUT
export const about = {
  seo: {
    title: 'About — A builder’s standard, applied to one valley | Hawthorne Development',
    description:
      'Hawthorne Development is led directly by its founder and builds only in Telluride and San Miguel County — carefully, honestly, and to last.',
  },
  hero: {
    eyebrow: 'About',
    headline: 'A builder’s standard, applied to one valley.',
    subhead:
      'Hawthorne Development was founded to build in Telluride and San Miguel County the way the best mountain homes and buildings should be built — carefully, honestly, and to last.',
  },
  principleHeading: 'The principle',
  // The founder name is woven into the sentence; rendered specially so the
  // placeholder reads cleanly until filled.
  founderName: NEEDS('Founder name', 'Add the founder’s name'),
  principleLead:
    'Hawthorne is led directly by its founder, {FOUNDER}. That’s deliberate. When you hire us, you work with the person responsible for the outcome — not a sales team that hands you off after the contract is signed.',
  founderBackground: NEEDS(
    'Founder background — the most important item on the site',
    'Write 3–5 sentences of real, verifiable experience: prior construction / development / real-estate work, where, how long, notable past projects or roles. A new firm’s credibility rests on this.'
  ),
  howWeWorkHeading: 'How we work',
  howWeWork: [
    'We take on a limited number of projects at a time, work with a hand-selected network of trades, and stay personally involved from feasibility through final walkthrough. The result is a level of attention and accountability that larger firms structurally can’t offer.',
    'We are intentionally early in our story. That means every project we take on matters — to our clients and to our reputation. We build like it.',
  ],
  valuesHeading: 'What we stand for',
  values: [
    { title: 'Built to last.', body: 'We don’t cut what can’t be seen.' },
    { title: 'Honest with money.', body: 'Transparent budgets, tracked costs, no surprises.' },
    { title: 'Of this place.', body: 'We build only here, and we know how building here works.' },
  ],
  cta: { label: 'Start a conversation', to: '/contact' },
}

// ---------------------------------------------------------------- PORTFOLIO
export const portfolio = {
  seo: {
    title: 'Portfolio — Now building | Hawthorne Development',
    description:
      'We’re currently at work on our first projects across Telluride and San Miguel County. As they complete, they’ll appear here.',
  },
  hero: {
    eyebrow: 'Portfolio',
    headline: 'Now building.',
    subhead:
      'We’re currently at work on our first projects across Telluride and San Miguel County. As they complete, they’ll appear here.',
  },
  underwayHeading: 'Currently underway',
  // Real, in-progress work only — never stock photos or others' projects.
  // Leave `projects` empty to show the honest single-statement fallback below.
  projects: [
    // Example shape once you have a real project:
    // { name: 'Custom home — Mountain Village', type: 'Custom home', area: 'Mountain Village, CO',
    //   description: 'New construction, 4-bed mountain-modern residence.', status: 'Framing' },
  ],
  fallback: {
    body: 'Our first homes are under construction now. We’re taking a small number of new projects for {SEASON} — if you’d like to be among them, let’s talk.',
    season: NEEDS('Season / year', 'e.g. “Fall 2026”'),
  },
  selectivityHeading: 'A note on selectivity',
  selectivity:
    'We take on few projects by choice. If you don’t see a long gallery here, that’s the reason — and it’s the same reason your project would get our full attention.',
  cta: { label: 'Inquire about your project', to: '/contact' },
}

// ---------------------------------------------------------------- CONTACT
export const contact = {
  seo: {
    title: 'Contact — Let’s talk about what you’re building | Hawthorne Development',
    description:
      'Tell us about your home or commercial project in Telluride & San Miguel County. Every project starts with a conversation.',
  },
  hero: {
    eyebrow: 'Contact',
    headline: 'Let’s talk about what you’re building.',
    subhead:
      'Every project starts with a conversation. Tell us what you have in mind and we’ll take it from there.',
  },
  formHeading: 'Send us a note',
  projectTypes: ['Custom home', 'Renovation', 'Commercial', 'Other'],
  submitLabel: 'Send inquiry',
  directHeading: 'Reach us directly',
}

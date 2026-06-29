export const site = {
  name: 'Nicolás Bugedo',
  role: 'Full Stack Developer & Founder',
  availability: 'Available for remote work',
  tagline: 'I build software.',
  subheadline:
    'Production-grade web applications that replace manual workflows with automated, data-driven systems.',
  stackAgnostic:
    'I adapt to your stack. The tools follow the problem, not the other way around.',
  cvUrl: '/Nicolas_Bugedo_CV.pdf',
  email: 'nicolas@bugedo.dev',
  github: 'https://github.com/Bugedo',
  linkedin: 'https://www.linkedin.com/in/nicobugedo/',
  developingBridges: 'https://developingbridges.com',
} as const;

export const navLinks = [
  { label: 'What I do', id: 'what-i-do' },
  { label: 'Why me', id: 'why-me' },
  { label: 'Process', id: 'process' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
] as const;

export const marqueeWords = ['PRODUCTS.', 'SYSTEMS.', 'WORKFLOWS.'] as const;

export const services = [
  {
    title: 'Ordering & Commerce',
    description:
      'Multi-location ordering flows, dynamic catalogs, and checkout experiences built for real businesses.',
  },
  {
    title: 'Operations & Booking',
    description:
      'Scheduling, reservations, and in-app tracking that replace phone calls and spreadsheets.',
  },
  {
    title: 'Internal Tools',
    description:
      'CRMs, dashboards, and approval workflows that eliminate manual data entry.',
  },
  {
    title: 'Client-Facing Products',
    description:
      'Landing pages, portals, and full web applications — designed, built, and deployed end to end.',
  },
  {
    title: 'Full Delivery',
    description:
      'Architecture, development, deployment, and handoff. One person accountable for the whole cycle.',
  },
] as const;

export const advantages = [
  {
    title: 'End-to-end ownership',
    description:
      'As founder of **Developing Bridges**, I own sales, architecture, development, and deployment — not just a ticket on a board.',
  },
  {
    title: 'Faster without cutting corners',
    description:
      'AI-augmented workflows let me ship **roughly 3× faster** than typical agency timelines while keeping code maintainable.',
  },
  {
    title: 'Remote, US & EU clients',
    description:
      'Based in Argentina, working with teams and founders across **US and European markets**.',
  },
  {
    title: 'Stack-agnostic',
    description:
      'Your product dictates the tools. I work across modern web stacks without making technology the selling point.',
  },
  {
    title: 'Systems thinking',
    description:
      'Years as an electrician taught **systematic troubleshooting** under pressure — a mindset I bring to every build.',
  },
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand the workflow, define scope, and agree on what shipped looks like.',
  },
  {
    step: '02',
    title: 'Build',
    description: 'Iterative development with regular demos — you see working software early.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Deploy to production, hand off cleanly, and support what goes live.',
  },
] as const;

export const projects = [
  {
    title: 'Abdonur',
    description:
      'Ordering platform for a multi-location Arabic food brand — dynamic catalog, location routing, and WhatsApp checkout.',
    image: null,
    imageAlt: 'Abdonur ordering platform',
    liveUrl: 'https://abdonur.com',
    repoUrl: null,
  },
  {
    title: 'Mundo Padel Club',
    description:
      'Booking system for 3 courts with 50+ weekly reservations, auth, email confirmations, and cantina tracking.',
    image: '/mundopadel.jpg',
    imageAlt: 'Mundo Padel Club',
    liveUrl: 'https://www.mundopadelclub.com/',
    repoUrl: 'https://github.com/CaimanBrujo/mundo-padel',
  },
  {
    title: 'Wedding Invitation',
    description:
      'Guest portal for 1,500+ attendees — confirmations, payments, and live pricing from Google Sheets.',
    image: '/yasymanu.jpg',
    imageAlt: 'Wedding invitation platform',
    liveUrl: 'https://yasymanu.vercel.app/',
    repoUrl: 'https://github.com/Bugedo/yasymanu',
  },
  {
    title: 'Developing Bridges',
    description:
      'Studio site for the consultancy behind these builds — services, case studies, and client intake.',
    image: '/devbridges.jpg',
    imageAlt: 'Developing Bridges',
    liveUrl: 'https://developingbridges.com',
    repoUrl: 'https://github.com/CaimanBrujo/dev-bridges',
  },
] as const;

export const contactLinks = [
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Developing Bridges', href: site.developingBridges },
] as const;

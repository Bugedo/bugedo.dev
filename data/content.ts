export type Locale = 'en' | 'es';

export const shared = {
  name: 'Nicolás Bugedo',
  tagline: 'Nicolás Bugedo',
  email: 'nicolas@bugedo.dev',
  github: 'https://github.com/Bugedo',
  linkedin: 'https://www.linkedin.com/in/nicobugedo/',
  developingBridges: 'https://developingbridges.com',
} as const;

const skillGroupsShared = [
  {
    labelKey: 'core' as const,
    items: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Angular 18'],
  },
  {
    labelKey: 'backend' as const,
    items: ['Hono (Cloudflare Workers)', 'Express', 'REST', 'Prisma'],
  },
  {
    labelKey: 'databases' as const,
    items: ['PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    labelKey: 'infra' as const,
    items: ['Docker', 'Hetzner (Ubuntu)', 'Vercel', 'Railway', 'CI/CD'],
  },
  {
    labelKey: 'ai' as const,
    items: ['Claude', 'Cursor', 'GitHub Copilot'],
  },
];

const projectsShared = [
  {
    id: 'abdonur' as const,
    title: 'Abdonur',
    stack: ['Next.js', 'TypeScript', 'WhatsApp'],
    image: '/abdonur_screen.png',
    liveUrl: 'https://abdonur.com',
    repoUrl: 'https://github.com/Bugedo/abdonur' as string | null,
    metricEn: 'In production · orders across multiple branches daily',
    metricEs: 'En producción · pedidos de múltiples sucursales a diario',
  },
  {
    id: 'mundopadel' as const,
    title: 'Mundo Padel Club',
    stack: ['Next.js', 'Supabase', 'PostgreSQL'],
    image: '/mundopadel.jpg',
    liveUrl: 'https://www.mundopadelclub.com/',
    repoUrl: 'https://github.com/Bugedo/mundo-padel',
    metricEn: '50+ confirmed reservations per week',
    metricEs: '50+ reservas confirmadas por semana',
  },
  {
    id: 'wedding' as const,
    title: 'Wedding Invitation',
    stack: ['Next.js', 'Google Sheets API'],
    image: '/yasymanu.jpg',
    liveUrl: 'https://yasymanu.vercel.app/',
    repoUrl: 'https://github.com/Bugedo/yasymanu',
    metricEn: '1,500+ guests · RSVPs and payments processed',
    metricEs: '1.500+ invitados · RSVPs y pagos procesados',
  },
  {
    id: 'devbridges' as const,
    title: 'Developing Bridges',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/devbridges.jpg',
    liveUrl: 'https://developingbridges.com',
    repoUrl: 'https://github.com/Bugedo/dev-bridges',
    metricEn: null as string | null,
    metricEs: null as string | null,
  },
];

type LocaleCopy = {
  role: string;
  availability: string;
  stackFlexible: string;
  cvUrl: string;
  nav: { label: string; id: string }[];
  experienceTitle: string;
  experienceSubtitle: string;
  experience: {
    role: string;
    company: string;
    companyUrl: string | null;
    period: string;
    location: string;
    summary: string;
  }[];
  workTitle: string;
  workSubtitle: string;
  projects: {
    id: (typeof projectsShared)[number]['id'];
    description: string;
    role: string;
    imageAlt: string;
  }[];
  skillsTitle: string;
  skillsIntro: string;
  skillLabels: Record<(typeof skillGroupsShared)[number]['labelKey'], string>;
  educationTitle: string;
  education: {
    title: string;
    school: string;
    period: string;
  }[];
  contactTitle: string;
  downloadCv: string;
  email: string;
  liveSite: string;
  source: string;
  contactHeading: string;
  menu: string;
  goHome: string;
  openMenu: string;
  closeMenu: string;
};

const en: LocaleCopy = {
  role: 'Full Stack Developer',
  availability: 'Remote · GMT-3 (US-overlap friendly) · Available immediately',
  stackFlexible:
    "Full stack developer maintaining three production systems clients rely on daily: bookings, ordering, and payments for 1,500+ users. I own the full delivery cycle — from discovery to deployment — and I'm comfortable plugging into your team's stack from day one.",
  cvUrl: '/Nicolas_Bugedo_CV_EN.pdf',
  nav: [
    { label: 'Experience', id: 'experience' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ],
  experienceTitle: '# Experience.',
  experienceSubtitle: 'Where I’ve worked. Details live in the CV.',
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Developing Bridges',
      companyUrl: 'https://developingbridges.com',
      period: 'May 2025 to Present',
      location: 'Remote',
      summary:
        'Building and shipping production web products end to end: ordering, booking, and client platforms.',
    },
    {
      role: 'Full Stack Engineer (Contract)',
      company: 'Ewents',
      companyUrl: 'https://ewents.io',
      period: 'Aug 2025 to Mar 2026',
      location: 'USA · Remote',
      summary:
        'Greenfield internal CRM and edge APIs with automated invoicing, commissions, and timesheets that cut about 80% of manual spreadsheet work.',
    },
    {
      role: 'Electrician & Solar Energy Technician',
      company: 'Self-employed',
      companyUrl: null,
      period: '2017 to 2024',
      location: 'Argentina',
      summary:
        'Electrical and solar installations with hands-on troubleshooting under time and safety pressure.',
    },
  ],
  workTitle: '# Work.',
  workSubtitle: 'Selected production projects: role, impact, and stack.',
  projects: [
    {
      id: 'abdonur',
      description:
        'Ordering platform for a multi location Arabic food brand with dynamic catalog, location routing, and WhatsApp checkout. Largest production project to date.',
      role: 'Full stack builder',
      imageAlt: 'Abdonur ordering platform',
    },
    {
      id: 'mundopadel',
      description:
        'Booking system for 3 courts with 50+ weekly reservations, auth, email confirmations, and cantina tracking.',
      role: 'Full stack builder',
      imageAlt: 'Mundo Padel Club',
    },
    {
      id: 'wedding',
      description:
        'Guest portal for 1,500+ attendees with confirmations, payments, and live pricing from Google Sheets.',
      role: 'Full stack builder',
      imageAlt: 'Wedding invitation platform',
    },
    {
      id: 'devbridges',
      description:
        'Studio site for the consultancy behind these builds: services, case studies, and client intake.',
      role: 'Design & development',
      imageAlt: 'Developing Bridges',
    },
  ],
  skillsTitle: '# Skills.',
  skillsIntro:
    'I work comfortably with any stack. The list below is what I use most. I’m happy to adopt whatever your team already ships with.',
  skillLabels: {
    core: 'Core Stack',
    backend: 'Backend & APIs',
    databases: 'Databases',
    infra: 'Infrastructure',
    ai: 'AI Workflow',
  },
  educationTitle: '# Education.',
  education: [
    {
      title: 'Information Systems Engineering (3 years)',
      school: 'Universidad Tecnológica Nacional FRC, Córdoba',
      period: '2013 to 2016',
    },
    {
      title: 'Full Stack Developer Curriculum',
      school: 'The Odin Project · freeCodeCamp',
      period: '2024 to 2025',
    },
  ],
  contactTitle: '# Contact.',
  downloadCv: 'Download CV',
  email: 'Email',
  liveSite: 'Live site',
  source: 'Source',
  contactHeading: 'Contact',
  menu: 'Menu',
  goHome: 'Go to home',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
};

const es: LocaleCopy = {
  role: 'Desarrollador Full Stack',
  availability: 'Remoto · GMT-3 (compatible con horario de EE. UU.) · Disponible de inmediato',
  stackFlexible:
    'Desarrollador full stack manteniendo tres sistemas productivos que mis clientes usan a diario: reservas, pedidos y pagos para más de 1.500 usuarios. Llevo el ciclo completo de entrega —desde el descubrimiento hasta el despliegue— y me adapto al stack de tu equipo desde el primer día.',
  cvUrl: '/Nicolas_Bugedo_CV_ES.pdf',
  nav: [
    { label: 'Experiencia', id: 'experience' },
    { label: 'Trabajo', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Educación', id: 'education' },
    { label: 'Contacto', id: 'contact' },
  ],
  experienceTitle: '# Experiencia.',
  experienceSubtitle: 'Dónde trabajé. El detalle está en el CV.',
  experience: [
    {
      role: 'Desarrollador Full Stack',
      company: 'Developing Bridges',
      companyUrl: 'https://developingbridges.com',
      period: 'Mayo 2025 a Presente',
      location: 'Remoto',
      summary:
        'Diseño y entrega de productos web en producción de punta a punta: pedidos, reservas y plataformas para clientes.',
    },
    {
      role: 'Ingeniero Full Stack (Contrato)',
      company: 'Ewents',
      companyUrl: 'https://ewents.io',
      period: 'Ago 2025 a Mar 2026',
      location: 'USA · Remoto',
      summary:
        'CRM interno desde cero y APIs en el edge, con facturación, comisiones y hojas de horas que eliminaron cerca del 80% del trabajo manual en planillas.',
    },
    {
      role: 'Electricista & Técnico en Energía Solar',
      company: 'Cuenta propia',
      companyUrl: null,
      period: '2017 a 2024',
      location: 'Argentina',
      summary:
        'Instalaciones eléctricas y solares, con resolución de problemas bajo presión de tiempo y seguridad.',
    },
  ],
  workTitle: '# Trabajo.',
  workSubtitle: 'Proyectos en producción: rol, impacto y stack.',
  projects: [
    {
      id: 'abdonur',
      description:
        'Plataforma de pedidos para una marca de comida árabe con múltiples locales, catálogo dinámico, enrutamiento por sucursal y checkout por WhatsApp. El mayor proyecto productivo hasta la fecha.',
      role: 'Full stack',
      imageAlt: 'Plataforma de pedidos Abdonur',
    },
    {
      id: 'mundopadel',
      description:
        'Sistema de reservas para 3 canchas con más de 50 turnos semanales, autenticación, emails y seguimiento de cantina.',
      role: 'Full stack',
      imageAlt: 'Mundo Padel Club',
    },
    {
      id: 'wedding',
      description:
        'Portal de invitados para más de 1.500 personas, con confirmaciones, pagos y precios en vivo desde Google Sheets.',
      role: 'Full stack',
      imageAlt: 'Invitación de casamiento',
    },
    {
      id: 'devbridges',
      description:
        'Sitio del estudio detrás de estos proyectos: servicios, casos y contacto con clientes.',
      role: 'Diseño y desarrollo',
      imageAlt: 'Developing Bridges',
    },
  ],
  skillsTitle: '# Skills.',
  skillsIntro:
    'Trabajo cómodo con cualquier stack. La lista de abajo es lo que más uso. Me adapto a lo que ya tenga tu equipo.',
  skillLabels: {
    core: 'Stack principal',
    backend: 'Backend y APIs',
    databases: 'Bases de datos',
    infra: 'Infraestructura',
    ai: 'Flujo con IA',
  },
  educationTitle: '# Educación.',
  education: [
    {
      title: 'Ingeniería en Sistemas de Información (3 años)',
      school: 'Universidad Tecnológica Nacional FRC, Córdoba',
      period: '2013 a 2016',
    },
    {
      title: 'Currículo Full Stack Developer',
      school: 'The Odin Project · freeCodeCamp',
      period: '2024 a 2025',
    },
  ],
  contactTitle: '# Contacto.',
  downloadCv: 'Descargar CV',
  email: 'Email',
  liveSite: 'Sitio',
  source: 'Código',
  contactHeading: 'Contacto',
  menu: 'Menú',
  goHome: 'Ir al inicio',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
};

export const content = { en, es } as const;

export function getProjects(locale: Locale) {
  const copy = content[locale];
  return projectsShared.map(({ metricEn, metricEs, ...base }) => {
    const localized = copy.projects.find((p) => p.id === base.id)!;
    return {
      ...base,
      description: localized.description,
      role: localized.role,
      imageAlt: localized.imageAlt,
      metric: locale === 'en' ? metricEn : metricEs,
    };
  });
}

export function getSkillGroups(locale: Locale) {
  const labels = content[locale].skillLabels;
  return skillGroupsShared.map((group) => ({
    label: labels[group.labelKey],
    items: group.items,
  }));
}

export const LOCALE_STORAGE_KEY = 'locale';

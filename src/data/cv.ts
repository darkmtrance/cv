import type { Lang } from '../i18n/utils';

export interface Project {
  name: Record<Lang, string>;
  start: string;
  end: string | null;
  highlights: Record<Lang, string[]>;
}

export interface Job {
  id: string;
  company: string;
  location: Record<Lang, string>;
  role: Record<Lang, string>;
  /** Inclusive month range, `YYYY-MM`. `end: null` means current. */
  start: string;
  end: string | null;
  /** HTML allowed: wrap measurable results in <strong>. */
  highlights?: Record<Lang, string[]>;
  /** Engagements within the same job, newest first. */
  projects?: Project[];
}

export const person = {
  name: 'Michael Antonio Tomaylla Mendoza',
  shortName: 'Michael Tomaylla',
  email: 'michael.tomaylla@pucp.edu.pe',
  phone: '+51 991 214 131',
  phoneHref: 'tel:+51991214131',
  linkedin: 'https://www.linkedin.com/in/mtm2019/',
  github: 'https://github.com/darkmtrance',
  credly: 'https://www.credly.com/users/michael-tomaylla',
  blog: 'https://matomaylla.com',
  blogLabel: 'matomaylla.com',
  cv: '/doc/CV-MichaelTomaylla2026.pdf',
};

export const careerStart = '2010-02';

export const jobs: Job[] = [
  {
    id: 'indra',
    company: 'Indra',
    location: { es: 'Lima y España', en: 'Lima and Spain' },
    role: { es: 'Arquitecto de Información', en: 'Information Architect' },
    start: '2020-10',
    end: null,
    projects: [
      {
        name: { es: 'Proyecto tributario de Canarias', en: 'Canary Islands tax platform' },
        start: '2026-04',
        end: null,
        highlights: {
          es: [
            'Reasignado tras estabilizar el ATC para asumir nuevos retos de evolutivo y modernización en Java.',
            'Diseñé y desarrollé un CLI que consulta JIRA y el repositorio de código desde la terminal, agilizando las consultas habituales del equipo.',
          ],
          en: [
            'Reassigned after stabilizing ATC to take on new enhancement and modernization work in Java.',
            "Designed and built a CLI that queries JIRA and the code repository from the terminal, speeding up the team's everyday lookups.",
          ],
        },
      },
      {
        name: { es: 'Agència Tributària de Catalunya (ATC)', en: 'Catalan Tax Agency (ATC)' },
        start: '2020-10',
        end: '2026-03',
        highlights: {
          es: [
            'Analicé, diseñé y desarrollé evolutivos en Java de la plataforma tributaria catalana, que gestiona <strong>2.28 millones de contribuyentes</strong> y <strong>4.3 millones de declaraciones</strong> al año.',
            'Apliqué IA generativa (GitHub Copilot) para optimizar procesos y reducir los tiempos de análisis y desarrollo.',
            'Mentor técnico de <strong>más de 20 desarrolladores</strong> en equipos LATAM, promoviendo buenas prácticas de arquitectura, Clean Code y DDD.',
            'Impulsé DevOps y CI/CD con GitLab CI y GitHub Actions, con control de calidad en SonarQube.',
            'Coordiné entregas en equipos distribuidos con un <strong>95% de hitos cumplidos</strong>.',
          ],
          en: [
            'Analyzed, designed and built Java enhancements for the Catalan tax platform, which serves <strong>2.28 million taxpayers</strong> and <strong>4.3 million returns</strong> a year.',
            'Applied generative AI (GitHub Copilot) to streamline processes and cut analysis and development time.',
            'Mentored <strong>more than 20 developers</strong> across LATAM teams in architecture best practices, Clean Code and DDD.',
            'Drove DevOps and CI/CD with GitLab CI and GitHub Actions, with quality gates in SonarQube.',
            'Coordinated deliveries across distributed teams, meeting <strong>95% of project milestones</strong>.',
          ],
        },
      },
    ],
  },
  {
    id: 'sapia',
    company: 'Sapia',
    location: { es: 'Lima', en: 'Lima' },
    role: { es: 'Arquitecto de Información', en: 'Information Architect' },
    start: '2017-04',
    end: '2020-09',
    highlights: {
      es: [
        'Definí y gestioné los requisitos no funcionales de una arquitectura de microservicios y contenedores (Docker, Kubernetes), alcanzando <strong>99.9% de disponibilidad</strong>.',
        'Lideré pruebas de concepto en cloud (Azure y AWS) con Terraform que <strong>redujeron 20% los costos</strong> de infraestructura.',
        'Optimicé servicios críticos en Java y <strong>reduje 40% las incidencias</strong> en producción.',
      ],
      en: [
        'Defined and owned non-functional requirements for a microservices and container architecture (Docker, Kubernetes), reaching <strong>99.9% availability</strong>.',
        'Led cloud proofs of concept (Azure and AWS) with Terraform that <strong>cut infrastructure costs by 20%</strong>.',
        'Optimized critical Java services, <strong>reducing production incidents by 40%</strong>.',
      ],
    },
  },
  {
    id: 'sunat',
    company: 'SUNAT',
    location: { es: 'Lima', en: 'Lima' },
    role: { es: 'Analista de Sistemas', en: 'Systems Analyst' },
    start: '2010-02',
    end: '2016-12',
    highlights: {
      es: [
        'Contribuí a modernizar plataformas tributarias en Java usadas por <strong>más de 1,000 usuarios</strong> internos.',
        'Implementé mejoras que <strong>redujeron 25% el tiempo</strong> de los procesos batch.',
        'Participé en proyectos de alto impacto nacional en el ecosistema tributario peruano.',
      ],
      en: [
        'Helped modernize Java tax platforms used by <strong>more than 1,000 internal users</strong>.',
        'Shipped improvements that <strong>cut batch processing time by 25%</strong>.',
        "Worked on high-impact national projects across Peru's tax ecosystem.",
      ],
    },
  },
];

type Level = 'expert' | 'advanced';

export const levelLabel: Record<Lang, Record<Level, string>> = {
  es: { expert: 'experto', advanced: 'avanzado' },
  en: { expert: 'expert', advanced: 'advanced' },
};

/** A stack item: its name (or an [es, en] pair) and an optional level. */
export interface StackItem {
  name: string | [string, string];
  level?: Level;
}

const item = (name: StackItem['name'], level?: Level): StackItem => ({ name, level });

export const stack: { label: Record<Lang, string>; items: StackItem[] }[] = [
  { label: { es: 'Lenguajes', en: 'Languages' }, items: [item('Java', 'expert'), item('SQL', 'advanced')] },
  {
    label: { es: 'Frameworks', en: 'Frameworks' },
    items: [item('Spring Boot', 'expert'), item('Spring Framework'), item('Quarkus'), item('Hibernate'), item('JPA'), item('JUnit')],
  },
  {
    label: { es: 'Arquitectura', en: 'Architecture' },
    items: [
      item(['Microservicios', 'Microservices'], 'expert'),
      item(['Arquitectura hexagonal', 'Hexagonal architecture']),
      item(['APIs REST', 'REST APIs']),
      item('Clean Architecture'),
      item('DDD'),
    ],
  },
  {
    label: { es: 'DevOps', en: 'DevOps' },
    items: [item('Docker', 'expert'), item('Kubernetes', 'advanced'), item('CI/CD'), item('GitLab CI'), item('GitHub Actions'), item('SonarQube')],
  },
  { label: { es: 'Cloud', en: 'Cloud' }, items: [item('Azure', 'advanced'), item('AWS', 'advanced'), item('Google Cloud')] },
  { label: { es: 'Infraestructura como código', en: 'Infrastructure as code' }, items: [item('Terraform')] },
  {
    label: { es: 'IA aplicada al desarrollo', en: 'AI for development' },
    items: [item('GitHub Copilot'), item('Spring AI'), item(['IA generativa', 'Generative AI'])],
  },
  { label: { es: 'Bases de datos', en: 'Databases' }, items: [item('PostgreSQL'), item('MySQL'), item('Oracle'), item('MongoDB')] },
  { label: { es: 'Herramientas', en: 'Tooling' }, items: [item('Linux'), item('Maven'), item('Gradle'), item('Git'), item('Jira')] },
];

export const specialties: Record<Lang, string[]> = {
  es: [
    'Arquitectura de software empresarial',
    'Microservicios y arquitectura hexagonal',
    'Cloud en Azure, AWS y Google Cloud',
    'DevOps y CI/CD',
    'Kubernetes y contenedores',
    'IA generativa aplicada al desarrollo',
    'Mentoría y liderazgo técnico',
  ],
  en: [
    'Enterprise software architecture',
    'Microservices and hexagonal architecture',
    'Cloud on Azure, AWS and Google Cloud',
    'DevOps and CI/CD',
    'Kubernetes and containers',
    'Generative AI applied to development',
    'Mentoring and technical leadership',
  ],
};

export const softSkills: Record<Lang, string[]> = {
  es: [
    'Liderazgo técnico de equipos de desarrollo',
    'Mentoría de ingenieros y arquitectos junior',
    'Comunicación con stakeholders técnicos y de negocio',
    'Gestión de equipos distribuidos',
    'Decisiones basadas en datos',
  ],
  en: [
    'Technical leadership of development teams',
    'Mentoring junior engineers and architects',
    'Communicating with technical and business stakeholders',
    'Leading distributed teams',
    'Data-driven decisions',
  ],
};

/** Latest posts from the blog, newest first. */
export const publications: { title: string; url: string; date: string; topics: Record<Lang, string> }[] = [
  {
    title: 'La IA construye. Tú pones los planos',
    url: 'https://matomaylla.com/publicaciones/openspec-vs-speckit/',
    date: '2026-09',
    topics: { es: 'Spec-Driven Development, OpenSpec y Spec Kit', en: 'Spec-driven development, OpenSpec and Spec Kit' },
  },
  {
    title: 'Aether: el arnés que convierte un LLM en un agente confiable',
    url: 'https://matomaylla.com/publicaciones/aether/',
    date: '2026-07',
    topics: { es: 'Java, Spring AI y agentes de IA', en: 'Java, Spring AI and AI agents' },
  },
  {
    title: 'Construyendo con Confianza — API First',
    url: 'https://matomaylla.com/publicaciones/api-first/',
    date: '2026-03',
    topics: { es: 'Arquitectura de APIs y OpenAPI', en: 'API architecture and OpenAPI' },
  },
  {
    title: 'De Código Local a ACR Rápido',
    url: 'https://matomaylla.com/publicaciones/quarkus-acr-cicd/',
    date: '2026-03',
    topics: { es: 'Quarkus, Docker, GitHub Actions y CI/CD', en: 'Quarkus, Docker, GitHub Actions and CI/CD' },
  },
  {
    title: 'Docker Deep Dive con IA Generativa',
    url: 'https://matomaylla.com/publicaciones/docker-deep-dive/',
    date: '2025-10',
    topics: { es: 'Docker, IA y DevOps', en: 'Docker, AI and DevOps' },
  },
];

export const testimonials: { quote: Record<Lang, string>; author: string; title: Record<Lang, string> }[] = [
  {
    quote: {
      es: 'Michael es un emprendedor que ha sabido aprovechar una necesidad latente para hacer valer su potencial como profesional. Cuando acudí a él supe que me daría solución en el área de sistemas de VICSATEX y así fue, con un enfoque y orientación de las nuevas tecnologías.',
      en: 'Michael is an entrepreneur who has known how to take advantage of a latent need to assert his potential as a professional. When I came to him, I knew he would provide a solution for the systems area at VICSATEX, and so it was, with a focus on new technologies.',
    },
    author: 'Miguel Vicente',
    title: { es: 'Gerente General, VICSATEX EIRL', en: 'General Manager, VICSATEX EIRL' },
  },
  {
    quote: {
      es: 'Cuando la preparación profesional encuentra un enfoque estratégico, las oportunidades se muestran solas. Un placer trabajar contigo. Que sigan los éxitos.',
      en: 'When professional preparation meets a strategic approach, opportunities appear on their own. A pleasure to work with you. May the success continue.',
    },
    author: 'Jorge Pérez Osterling',
    title: { es: 'Gerente Comercial, ORBIS MOBILE SAC', en: 'Commercial Manager, ORBIS MOBILE SAC' },
  },
];

/** Certifications to feature first, matched against Credly badge names (in order). */
export const featuredCerts = [
  'AWS Certified Solutions Architect',
  'CKA: Certified Kubernetes Administrator',
  'CKAD: Certified Kubernetes Application Developer',
  'Microsoft Certified: DevOps Engineer Expert',
  'Microsoft Certified: Azure Developer Associate',
  'Generative AI Leader Certification',
  'Associate Cloud Engineer Certification',
  'KCNA: Kubernetes and Cloud Native Associate',
];

/** Curated, grouped certification list for the printable CV. */
export const certGroups: { label: Record<Lang, string>; items: string[] }[] = [
  {
    label: { es: 'Arquitectura cloud', en: 'Cloud architecture' },
    items: ['AWS Certified Solutions Architect – Associate', 'Azure Administrator Associate', 'Azure Developer Associate', 'Google Associate Cloud Engineer'],
  },
  {
    label: { es: 'DevOps y Kubernetes', en: 'DevOps and Kubernetes' },
    items: ['Azure DevOps Engineer Expert', 'CKA – Certified Kubernetes Administrator', 'CKAD – Certified Kubernetes Application Developer', 'KCNA – Kubernetes and Cloud Native Associate'],
  },
  {
    label: { es: 'IA', en: 'AI' },
    items: ['Azure AI Apps and Agents Developer Associate', 'Google Generative AI Leader', 'Azure AI Fundamentals'],
  },
  {
    label: { es: 'Seguridad y datos', en: 'Security and data' },
    items: ['Security, Compliance and Identity Fundamentals', 'Azure Data Fundamentals'],
  },
  {
    label: { es: 'Ágil y fundamentos', en: 'Agile and foundations' },
    items: [
      'Professional Scrum Master I (PSM I)',
      'Scrum Foundation Professional Certification',
      'Enterprise Design Thinking Practitioner',
      'GitHub Foundations',
      'GitLab Certified Git Associate',
      'Power Platform Fundamentals',
      'Build Infrastructure with Terraform on Google Cloud',
    ],
  },
];

/** Certifications earned outside Credly (Microsoft Learn), listed with the rest. */
export const extraCerts = [
  { name: 'Microsoft Certified: Azure Administrator Associate', issuer: 'Microsoft' },
  { name: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate', issuer: 'Microsoft' },
  { name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals', issuer: 'Microsoft' },
];

const monthNames: Record<Lang, string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export function toMonthIndex(ym: string | null, now = new Date()): number {
  if (!ym) return now.getFullYear() * 12 + now.getMonth();
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
}

export function formatMonth(ym: string | null, lang: Lang): string {
  if (!ym) return lang === 'es' ? 'hoy' : 'present';
  const [y, m] = ym.split('-').map(Number);
  return `${monthNames[lang][m - 1]} ${y}`;
}

/** Duration of an inclusive month range, e.g. "6 años 11 meses". */
export function formatDuration(start: string, end: string | null, lang: Lang): string {
  const total = toMonthIndex(end) - toMonthIndex(start) + 1;
  const y = Math.floor(total / 12);
  const m = total % 12;
  const words = lang === 'es'
    ? { y: ['año', 'años'], m: ['mes', 'meses'] }
    : { y: ['year', 'years'], m: ['month', 'months'] };
  const parts = [];
  if (y) parts.push(`${y} ${words.y[y === 1 ? 0 : 1]}`);
  if (m) parts.push(`${m} ${words.m[m === 1 ? 0 : 1]}`);
  return parts.join(' ');
}

/** Compact duration for the timeline, e.g. "6a 11m" / "6y 11m". */
export function formatDurationShort(start: string, end: string | null, lang: Lang): string {
  const total = toMonthIndex(end) - toMonthIndex(start) + 1;
  const y = Math.floor(total / 12);
  const m = total % 12;
  const yl = lang === 'es' ? 'a' : 'y';
  return [y ? `${y}${yl}` : '', m ? `${m}m` : ''].filter(Boolean).join(' ');
}

export function yearsOfExperience(): number {
  return Math.floor((toMonthIndex(null) - toMonthIndex(careerStart)) / 12);
}

import type { Lang } from '../i18n/utils';

export interface Job {
  id: string;
  company: string;
  location: Record<Lang, string>;
  role: Record<Lang, string>;
  /** Inclusive month range, `YYYY-MM`. `end: null` means current. */
  start: string;
  end: string | null;
  /** HTML allowed: wrap measurable results in <strong>. */
  highlights: Record<Lang, string[]>;
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
    highlights: {
      es: [
        'Analizo, planifico y desarrollo evolutivos de sistemas tributarios (ATC), mejorando su rendimiento y mantenibilidad.',
        'Implementé optimizaciones apoyadas en IA para mejorar procesos.',
        'Doy mentoría técnica a <strong>más de 20 desarrolladores</strong> en equipos LATAM.',
        'Impulso prácticas DevOps: CI/CD y observabilidad.',
        'Coordiné entregas en equipos distribuidos con un <strong>95% de hitos cumplidos</strong>.',
      ],
      en: [
        'I analyze, plan and build enhancements to tax systems (ATC), improving performance and maintainability.',
        'Implemented AI-assisted optimizations to improve processes.',
        'Mentor <strong>more than 20 developers</strong> across LATAM teams.',
        'Drive DevOps practices: CI/CD and observability.',
        'Coordinated deliveries across distributed teams, meeting <strong>95% of project milestones</strong>.',
      ],
    },
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
        'Gestioné los requisitos no funcionales y llevé la <strong>disponibilidad del sistema a 99.9%</strong>.',
        'Lideré pruebas de concepto en cloud que <strong>redujeron 20% los costos</strong> de infraestructura.',
        'Optimicé servicios críticos y <strong>reduje 40% las incidencias</strong> en producción.',
      ],
      en: [
        'Owned non-functional requirements and raised <strong>system availability to 99.9%</strong>.',
        'Led cloud proofs of concept that <strong>cut infrastructure costs by 20%</strong>.',
        'Optimized critical services, <strong>reducing production incidents by 40%</strong>.',
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
        'Participé en la modernización de sistemas usados por <strong>más de 1,000 usuarios</strong> internos.',
        'Implementé mejoras que <strong>redujeron 25% el tiempo</strong> de los procesos batch.',
        'Contribuí a proyectos nacionales de alto impacto tributario.',
      ],
      en: [
        'Helped modernize systems used by <strong>more than 1,000 internal users</strong>.',
        'Shipped improvements that <strong>cut batch processing time by 25%</strong>.',
        'Contributed to national projects with high tax impact.',
      ],
    },
  },
];

export const stack: { label: Record<Lang, string>; items: string[] }[] = [
  { label: { es: 'Lenguajes', en: 'Languages' }, items: ['Java', 'SQL'] },
  { label: { es: 'Frameworks', en: 'Frameworks' }, items: ['Spring Boot', 'Spring Framework', 'Quarkus', 'Hibernate', 'JPA', 'JUnit'] },
  { label: { es: 'Arquitectura', en: 'Architecture' }, items: ['Microservicios|Microservices', 'Arquitectura hexagonal|Hexagonal architecture', 'APIs REST|REST APIs', 'Clean Architecture'] },
  { label: { es: 'DevOps', en: 'DevOps' }, items: ['Docker', 'Kubernetes', 'CI/CD', 'GitLab CI', 'GitHub Actions'] },
  { label: { es: 'Cloud', en: 'Cloud' }, items: ['Azure', 'AWS', 'Google Cloud'] },
  { label: { es: 'Infraestructura como código', en: 'Infrastructure as code' }, items: ['Terraform'] },
  { label: { es: 'Bases de datos', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'Oracle'] },
  { label: { es: 'Herramientas', en: 'Tooling' }, items: ['Linux', 'Maven', 'Gradle', 'Git', 'SonarQube'] },
];

export const softSkills: Record<Lang, string[]> = {
  es: [
    'Liderazgo técnico',
    'Mentoría y formación de equipos',
    'Comunicación con stakeholders',
    'Pensamiento estratégico',
    'Gestión de equipos distribuidos',
    'Decisiones basadas en datos',
    'Resolución de problemas complejos',
  ],
  en: [
    'Technical leadership',
    'Mentoring and team building',
    'Stakeholder communication',
    'Strategic thinking',
    'Leading distributed teams',
    'Data-driven decisions',
    'Complex problem solving',
  ],
};

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
  'Associate Cloud Engineer Certification',
  'Generative AI Leader Certification',
  'KCNA: Kubernetes and Cloud Native Associate',
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

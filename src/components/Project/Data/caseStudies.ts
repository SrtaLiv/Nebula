export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "linkhub-manager",
    title: "Link Share",
    description: "Sistema de gestión de enlaces inteligente que permite a usuarios organizar, categorizar y compartir colecciones de links con análisis detallado de clics.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["WEB"],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel Analytics", "Auth0"]
  },
  {
    id: "proyectos-planos",
    title: "Proyectos y Planos",
    description: "Sitio web para un Maestr Mayor de Obras en el que mostramos sus servicios.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI", "WEB"],
    technologies: ["Vue.js", "Vuex", "TailwindCSS", "Firebase", "Google Analytics", "Stripe"]
  },
  {
    id: "portfolio-olivia",
    title: "Portfolio Developer",
    description: "Podemos crear tu portafolio como Diseñador, Programador, entre otros para mostrar tus trabajos!",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI", "WEB"],
    technologies: ["Three.js", "React", "WebGL", "Stripe", "Contentful", "Netlify"]
  }
];
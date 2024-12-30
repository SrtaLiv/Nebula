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
    id: "nutrilife-wellness",
    title: "NutriLife Wellness",
    description: "Una plataforma moderna para una nutricionista profesional, ofreciendo consultas online, planes personalizados y recursos educativos sobre nutrición saludable.",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI", "WEB"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS"]
  },
  {
    id: "linkhub-manager",
    title: "LinkHub Manager",
    description: "Sistema de gestión de enlaces inteligente que permite a usuarios organizar, categorizar y compartir colecciones de links con análisis detallado de clics.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["WEB"],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel Analytics", "Auth0"]
  },
  {
    id: "ecostore-dashboard",
    title: "EcoStore Dashboard",
    description: "Panel de control para una tienda de productos ecológicos, con análisis de ventas en tiempo real e integración con sistemas de inventario.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI", "WEB"],
    technologies: ["Vue.js", "Vuex", "TailwindCSS", "Firebase", "Google Analytics", "Stripe"]
  },
  {
    id: "artgallery-virtual",
    title: "ArtGallery Virtual",
    description: "Experiencia inmersiva para una galería de arte, permitiendo tours virtuales y compra de obras con tecnología 3D.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI"],
    technologies: ["Three.js", "React", "WebGL", "Stripe", "Contentful", "Netlify"]
  }
];
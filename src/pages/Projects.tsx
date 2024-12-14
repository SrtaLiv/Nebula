import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [transition, setTransition] = useState(false);

  const projects = [
    {
      title: "LinkShare",
      description:
        "Plataforma innovadora para compartir y organizar enlaces profesionales. Incluye análisis de datos y personalización avanzada para optimizar la gestión de recursos digitales.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      projectUrl: "https://linkshare.example.com",
    },
    {
      title: "CloudSync",
      description:
        "Solución empresarial de sincronización en la nube con características de seguridad avanzada y colaboración en tiempo real para equipos distribuidos.",
      technologies: ["TypeScript", "AWS", "Docker", "GraphQL"],
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
      projectUrl: "https://cloudsync.example.com",
    },
  ];

  useEffect(() => {
    // Activa la animación de entrada al montar el componente.
    setTransition(true);
  }, []);

  return (
    <section
      className={`bg-purple-950 py-24 transform transition-all duration-1000 ${
        transition ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] text-white text-center mb-16 tracking-wider">
          Nuestros Proyectos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} style={{ cursor: 'pointer' }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

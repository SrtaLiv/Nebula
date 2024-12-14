import React from 'react';
import TeamMemberCard from './TeamMemberCard';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Santiago Llaurado",
      role: "Full Stack Developer & UX Designer",
      description: "Especialista en desarrollo web y diseño de experiencias de usuario con más de 5 años de experiencia en proyectos innovadores.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      githubUrl: "https://github.com/santikzz",
      linkedinUrl: "https://www.linkedin.com/in/santiago-bugn%C3%B3n-a71a54217/"
    },
    {
      name: "Ana Olivia Todesco",
      role: "Full Stack Developer & UI Designer",
      description: "Experta en desarrollo móvil y diseño de interfaces con un enfoque en crear experiencias intuitivas y atractivas.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      githubUrl: "https://github.com/SrtaLiv",
      linkedinUrl: "https://www.linkedin.com/in/anaoliviatodesco/"
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] text-purple-950 text-center mb-16 tracking-wider">
          Sobre Nosotros
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
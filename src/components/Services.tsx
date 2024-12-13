import React from 'react';
import { Globe, Smartphone, Palette } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-8 transition-all hover:transform hover:scale-105 hover:bg-purple-900/30 group">
      <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
        <div className="text-purple-300">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-['Bebas_Neue'] text-white mb-4">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Desarrollo Web",
      description: "Creamos sitios web y aplicaciones web escalables, rápidas y seguras utilizando las últimas tecnologías y mejores prácticas del mercado."
    },
    {
      icon: <Palette size={32} />,
      title: "UX/UI Design",
      description: "Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión de tu negocio."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Desarrollo Mobile",
      description: "Desarrollamos aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de aplicaciones."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-purple-950 to-black py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3')] bg-cover bg-center animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] text-white text-center mb-16 tracking-wider">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
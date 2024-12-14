import React from 'react';
import { X, Palette, Globe, Smartphone } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ isOpen, onClose }: ServiceModalProps) {
  if (!isOpen) return null;

  const services = [
    {
      title: "UX/UI",
      icon: <Palette size={32} />,
      description: "Diseño de interfaces y experiencias de usuario",
    },
    {
      title: "WEB",
      icon: <Globe size={32} />,
      description: "Desarrollo de aplicaciones web",
    },
    {
      title: "MOBILE",
      icon: <Smartphone size={32} />,
      description: "Desarrollo de aplicaciones móviles",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-purple-950 w-full max-w-4xl m-4 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-4xl font-['Bebas_Neue'] text-white text-center mb-8 tracking-wider">
            ¿Qué servicio quieres elegir?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <button
                key={index}
                className="group flex flex-col items-center p-6 bg-purple-900/50 rounded-xl hover:bg-purple-800/50 transition-all transform hover:scale-105"
              >
                <div className="text-purple-300 group-hover:text-purple-100 transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-purple-200 text-center text-sm">
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
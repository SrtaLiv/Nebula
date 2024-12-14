import React from 'react';
import { Palette, Globe, Smartphone } from 'lucide-react';

interface ServiceStepProps {
  selectedServices: string[];
  onServiceToggle: (service: string) => void;
  onNext: () => void;
}

export default function ServiceStep({ selectedServices, onServiceToggle, onNext }: ServiceStepProps) {
  const services = [
    {
      id: "uxui",
      title: "UX/UI",
      icon: <Palette size={32} />,
      description: "Diseño de interfaces y experiencias de usuario",
    },
    {
      id: "web",
      title: "WEB",
      icon: <Globe size={32} />,
      description: "Desarrollo de aplicaciones web",
    },
    {
      id: "mobile",
      title: "MOBILE",
      icon: <Smartphone size={32} />,
      description: "Desarrollo de aplicaciones móviles",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-['Bebas_Neue'] text-white text-center mb-8 tracking-wider">
        ¿Qué servicio quieres elegir?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceToggle(service.id)}
            className={`group flex flex-col items-center p-6 rounded-xl transition-all transform hover:scale-105 ${
              selectedServices.includes(service.id)
                ? 'bg-purple-600 shadow-lg shadow-purple-500/25'
                : 'bg-purple-900/50 hover:bg-purple-800/50'
            }`}
          >
            <div className={`transition-colors mb-4 ${
              selectedServices.includes(service.id)
                ? 'text-white'
                : 'text-purple-300 group-hover:text-purple-100'
            }`}>
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

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={selectedServices.length === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            selectedServices.length === 0
              ? 'bg-purple-800/50 text-purple-300 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
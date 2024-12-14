import React from 'react';
import { Palette, Globe, Smartphone } from 'lucide-react';

interface ServiceTimeProps {
  selectedServices: string[];
  onServiceToggle: (service: string) => void;
  onNext: () => void;
}

export default function ServiceTime({ selectedServices, onServiceToggle, onNext }: ServiceTimeProps) {
  const services = [
    {
      id: "1",
      title: "1-30 dias",
    },
    {
      id: "2",
      title: "30-90 dias",
    },
    {
      id: "3",
      title: "+90 dias",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-['Bebas_Neue'] text-white text-center mb-8 tracking-wider">
      ¿Cuánto tiempo tenemos?
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
              {/* {service.icon} */}
            </div>
            <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-2">
              {service.title}
            </h3>
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
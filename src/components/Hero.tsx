import React, { useState } from 'react';
import '../index.css';
import { Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import ServiceModal from './ServiceModal/StepModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-7xl font-['Bebas_Neue'] text-white mb-8 tracking-wider">
          Hacemos tus ideas realidad
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            <Rocket size={20} />
            Contactanos
          </button>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
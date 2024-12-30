import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ServiceModal from './ServiceModal/StepModal';

export default function CallToAction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className="relative bg-gradient-to-b from-black to-purple-950 py-24">
      {/* Background stars effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3')] bg-cover bg-center animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-['Bebas_Neue'] text-white mb-8 tracking-wider">
          ¿Tienes algún proyecto en mente?
        </h2>
        
        <button onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <Sparkles className="animate-pulse" />
          Comencemos
        </button>
      </div>
        {/* Service Modal */}
            <ServiceModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
    </section>
  );
}
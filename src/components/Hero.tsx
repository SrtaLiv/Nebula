import React from 'react';
import '../index.css';
import { Rocket, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with nebula effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>


      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-7xl font-['Bebas_Neue'] text-white mb-8 tracking-wider">
          Hacemos tu pagina realidad
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105" >
            <Rocket size={20} />
            Comienza tu viaje
          </button>

          <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-full flex items-center justify-center gap-2 transition-all">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-4xl text-white tracking-wider ${isActive ? "active" : ""}`
              }
            >
            </NavLink>
            Conoce más
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
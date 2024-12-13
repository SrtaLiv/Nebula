import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="font-['Bebas_Neue'] text-4xl text-white tracking-wider">
              NEBULA
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-purple-400 transition-colors">Inicio</a>
              <a href="#contacto" className="text-white hover:text-purple-400 transition-colors">Contacto</a>
              <a href="#sobre-nosotros" className="text-white hover:text-purple-400 transition-colors">Sobre nosotros</a>
              <button className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                <Globe size={20} />
                Idioma
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="text-white block px-3 py-2 hover:text-purple-400"
              onClick={closeMenu}
            >
              Inicio
            </a>
            <a
              href="#contacto"
              className="text-white block px-3 py-2 hover:text-purple-400"
              onClick={closeMenu}
            >
              Contacto
            </a>
            <a
              href="#sobre-nosotros"
              className="text-white block px-3 py-2 hover:text-purple-400"
              onClick={closeMenu}
            >
              Sobre nosotros
            </a>
            <button className="text-white flex items-center gap-2 px-3 py-2 hover:text-purple-400">
              <Globe size={20} />
              Idioma
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
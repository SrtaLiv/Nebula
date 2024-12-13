import React from 'react';
import { Instagram, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-['Bebas_Neue'] text-3xl mb-4 tracking-wider">NEBULA</h2>
            <p className="text-purple-300 max-w-md">
              Transformando ideas en soluciones tecnológicas innovadoras para impulsar el futuro digital.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-xl mb-4 text-purple-400">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-purple-300 hover:text-purple-100 transition-colors">Inicio</a></li>
              <li><a href="#contacto" className="text-purple-300 hover:text-purple-100 transition-colors">Contacto</a></li>
              <li><a href="#sobre-nosotros" className="text-purple-300 hover:text-purple-100 transition-colors">Sobre nosotros</a></li>
              <li>
                <button className="text-purple-300 hover:text-purple-100 transition-colors flex items-center gap-2">
                  <Globe size={16} />
                  Idioma
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-xl mb-4 text-purple-400">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-900 pt-8">
          <p className="text-center text-purple-400 text-sm">
            © {new Date().getFullYear()} NEBULA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
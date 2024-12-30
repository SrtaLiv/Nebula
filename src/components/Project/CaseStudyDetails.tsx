import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from './Data/caseStudies';
import { Link, useParams } from 'react-router';

export function CaseStudyDetail() {
  const { id } = useParams();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>
        
        <img 
          src={caseStudy.imageUrl} 
          alt={caseStudy.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">{caseStudy.title}</h1>
        
        <div className="flex gap-2 mb-6">
          {caseStudy.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-700 mb-8">{caseStudy.description}</p>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tecnologías utilizadas</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
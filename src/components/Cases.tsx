import React from 'react';
import { caseStudies } from './Project/Data/caseStudies';
import { CaseStudy } from './Project/CaseStudy';

export default function Cases() {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Casos de Estudio
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Explora algunos de nuestros proyectos más destacados, donde transformamos ideas en experiencias digitales excepcionales.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {caseStudies.map((study) => (
                        <CaseStudy
                            key={study.id}
                            id={study.id}
                            title={study.title}
                            description={study.description}
                            imageUrl={study.imageUrl}
                            tags={study.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import { Lightbulb, Code, TestTube, Rocket } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

function ProcessStep({ icon, title, description, stepNumber }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center p-6">
      <div className="absolute top-0 -ml-px w-0.5 h-full bg-purple-200 left-1/2 -translate-x-1/2" />
      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple-950 rounded-full border-4 border-white shadow-xl">
        <span className="text-white">{icon}</span>
      </div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center font-bold text-purple-950">
        {stepNumber}
      </div>
      <h3 className="mt-8 text-xl font-bold text-purple-950">{title}</h3>
      <p className="mt-2 text-center text-gray-600">{description}</p>
    </div>
  );
}

export default function DevelopmentProcess() {
  const steps = [
    {
      icon: <Lightbulb size={24} />,
      title: "Ideación y Planificación",
      description: "Transformamos ideas innovadoras en planes de acción concretos, definiendo objetivos claros y estrategias efectivas."
    },
    {
      icon: <Code size={24} />,
      title: "Desarrollo Ágil",
      description: "Implementamos soluciones utilizando metodologías ágiles y las últimas tecnologías del mercado."
    },
    {
      icon: <TestTube size={24} />,
      title: "Testing Riguroso",
      description: "Realizamos pruebas exhaustivas para garantizar la calidad y el rendimiento óptimo de cada solución."
    },
    {
      icon: <Rocket size={24} />,
      title: "Despliegue y Mejora Continua",
      description: "Lanzamos al mercado y continuamos optimizando basándonos en datos y feedback real."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-['Bebas_Neue'] text-purple-950 text-center mb-16 tracking-wider">
          Nuestro Proceso de Desarrollo
        </h2>
        <div className="relative grid md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
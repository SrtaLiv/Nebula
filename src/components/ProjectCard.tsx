import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  projectUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-['Bebas_Neue'] text-white">{title}</h3>
          <a 
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-100 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-purple-100 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-700/50 text-purple-100 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
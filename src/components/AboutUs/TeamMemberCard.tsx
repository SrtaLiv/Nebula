import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export default function TeamMemberCard({
  name,
  role,
  description,
  imageUrl,
  githubUrl,
  linkedinUrl
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-['Bebas_Neue'] text-purple-950 mb-1">{name}</h3>
        <p className="text-purple-600 font-semibold mb-4">{role}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
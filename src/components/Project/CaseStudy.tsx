import React from 'react';
import type { CaseStudy as CaseStudyType } from './Data/caseStudies';
import { Link } from 'react-router';

type CaseStudyProps = Omit<CaseStudyType, 'id' | 'technologies'> & {
  id: string;
};

export function CaseStudy({ id, title, description, imageUrl, tags = [] }: CaseStudyProps) {
  return (
    <div className="flex flex-col">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg mb-4 group">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-center">{description}</p>
        </div>
      </div>
      <Link
        to={`/proyecto/${id}`}
        className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors"
      >
        {title}
      </Link>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import projects from '../assets/project.json';

const Portfolio = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const displayProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div id="portfolio" className="min-h-screen bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-pink-500">
          My Works
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div 
              key={project.id} 
              className="work group relative overflow-hidden rounded-lg"
            >
             <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />

              <div className="absolute inset-0 bg-zinc-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold text-amber-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-pink-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-pink-600/30 text-amber-200 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.linkUrl} 
                  className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-400 transition-colors"
                >
                  <ArrowUpRightIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAllProjects && projects.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllProjects(true)}
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-400 transition-colors"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio;
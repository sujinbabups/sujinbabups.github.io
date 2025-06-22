import React from 'react';
import { Award } from 'lucide-react';
import { achievements } from '../assets/awards.json'

const Achievements = () => {
  const getIconColor = (type) => {
    switch (type.toLowerCase()) {
      case 'award':
        return 'text-pink-400';
      case 'certification':
        return 'text-pink-300';
      case 'recognition':
        return 'text-pink-500';
      default:
        return 'text-pink-400';
    }
  };

  return (
    <div id="achievements" className="min-h-screen bg-zinc-900 flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-500">
            Achievements & Certifications
          </h2>
          <p className="text-pink-300 mt-4">Milestones in My Professional Journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/70 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:border-pink-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <Award className={`w-6 h-6 ${getIconColor(item.type)}`} />
                  <span className="text-sm font-medium text-pink-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="ml-auto text-sm text-pink-300/60">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-pink-300 mb-2">{item.org}</p>
                <p className="text-sm text-pink-300/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
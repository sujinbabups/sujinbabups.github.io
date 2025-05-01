import React, { useState } from 'react';
import pic from '../assets/imgeditted.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about" className="min-h-screen bg-zinc-900 flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture Section */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src={pic} 
              alt="Profile" 
              className="w-[70%] rounded-lg shadow-lg object-cover border-2 border-pink-500"
            />
          </div>

          {/* About Content Section */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-pink-500 mb-6">About Me</h1>
            <p className="leading-relaxed mb-6 opacity-90">
            A tech-driven Software Engineer currently working at aTeam Soft Solutions as a Node.js Developer, with a strong focus on building scalable backend systems and dynamic web applications.

I am a passionate blockchain developer with hands-on experience in Hyperledger Fabric, Ethereum, and Zero Knowledge Proofs, leveraging my expertise to design secure and efficient decentralized solutions. Skilled in full-stack development using the MERN stack, I focus on creating dynamic, user-centric applications. I am driven by innovation, continuously exploring emerging technologies, and actively contributing to impactful projects and hackathons.
            </p>
            
{/* Tabs Section */}
<div className="mb-6">
  <div className="flex space-x-4 mb-4">
    {/* Skills Tab */}
    <button 
      className={`tab-link text-pink-500 font-semibold border-b-2 transition-colors duration-300 
        ${activeTab === 'skills' 
          ? 'border-pink-500 text-white' 
          : 'border-transparent hover:text-pink-300 hover:border-pink-500'}`}
      onClick={() => openTab('skills')}
    >
      Skills
    </button>

    {/* Education Tab */}
    <button 
      className={`tab-link text-pink-500 font-semibold border-b-2 transition-colors duration-300 
        ${activeTab === 'education' 
          ? 'border-pink-500 text-white' 
          : 'border-transparent hover:text-pink-300 hover:border-pink-500'}`}
      onClick={() => openTab('education')}
    >
      Education
    </button>

    {/* Tools Tab (New) */}
    <button 
      className={`tab-link text-pink-500 font-semibold border-b-2 transition-colors duration-300 
        ${activeTab === 'tools' 
          ? 'border-pink-500 text-white' 
          : 'border-transparent hover:text-pink-300 hover:border-pink-500'}`}
      onClick={() => openTab('tools')}
    >
      Tools
    </button>
  </div>

  {/* Skills Tab Content */}
  {activeTab === 'skills' && (
    <div id="skills" className="tab-content">
      <ul className="grid grid-cols-2 gap-4">
        {['Solidity', 'Ethereum', 'Hyperledger', 'MERN Stack', 'Javascript', 'Docker', 'Tailwind CSS', 'Github'].map((skill) => (
          <li 
            key={skill} 
            className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 shadow rounded-md p-3 text-center font-semibold transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Education Tab Content */}
  {activeTab === 'education' && (
    <div id="education" className="tab-content">
      <ul className="space-y-4">
        <li className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 shadow rounded-md p-4 transition-colors">
          <span className="text-sm text-pink-200 block mb-1">2024 - 2025</span>
          <p className="font-semibold">PG Diploma in Blockchain</p>
        </li>
        <li className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 shadow rounded-md p-4 transition-colors">
          <span className="text-sm text-pink-200 block mb-1">2018 - 2021</span>
          <p className="font-semibold">Bachelor of Computer Applications</p>
        </li>
        <li className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 shadow rounded-md p-4 transition-colors">
          <span className="text-sm text-pink-200 block mb-1">Till 2018</span>
          <p className="font-semibold">Secondary Education</p>
        </li>
      </ul>
    </div>
  )}

  {/* Tools Tab Content (New) */}
  {activeTab === 'tools' && (
    <div id="tools" className="tab-content">
      <ul className="grid grid-cols-2 gap-4">
        {['VS Code', 'GitHub', 'GitLab', 'Postman', 'Figma','Hardhat'].map((tool) => (
          <li 
            key={tool} 
            className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 shadow rounded-md p-3 text-center font-semibold transition-colors"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
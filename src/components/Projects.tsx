import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SecureNet',
    description: 'A comprehensive network security analysis tool',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/securenet',
    demo: 'https://securenet-demo.com',
  },
  {
    title: 'CryptoGuard',
    description: 'End-to-end encryption library for secure communication',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/cryptoguard',
    demo: 'https://cryptoguard-demo.com',
  },
  {
    title: 'VulnScanner',
    description: 'Automated vulnerability scanner for web applications',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/vulnscanner',
    demo: 'https://vulnscanner-demo.com',
  },
  {
    title: 'Web3Wallet',
    description: 'Secure wallet for managing cryptocurrencies and NFTs',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/web3wallet',
    demo: 'https://web3wallet-demo.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
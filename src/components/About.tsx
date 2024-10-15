import React from 'react';
import { Shield, Code, Server, Bitcoin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Shield className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">Cybersecurity Expert</h3>
            <p className="text-gray-300 text-center">Passionate about protecting digital assets and ensuring data privacy.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Code className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">Skilled Programmer</h3>
            <p className="text-gray-300 text-center">Proficient in multiple programming languages and frameworks.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Server className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">Linux Enthusiast</h3>
            <p className="text-gray-300 text-center">Proficient in Linux command-line operations and system management.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Bitcoin className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">Web3 Enthusiast</h3>
            <p className="text-gray-300 text-center">Exploring the potential of blockchain and decentralized technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
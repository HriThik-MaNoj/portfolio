import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <img src="https://via.placeholder.com/200" alt="Hrithik Manoj" className="rounded-full w-40 h-40 mx-auto border-4 border-green-400 shadow-lg" />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Hrithik Manoj
        </h1>
        <p className="text-xl mb-4">Cybersecurity Enthusiast & Programmer</p>
        <p className="text-lg mb-8">Securing the digital world, one line of code at a time.</p>
        <p className="text-lg mb-8">Passionate about Web3 and blockchain technology</p>
        <a href="#about" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Explore My Work
        </a>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;
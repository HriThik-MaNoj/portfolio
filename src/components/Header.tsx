import React, { useState } from 'react';
import { Shield, Code, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-green-400" />
          <Code className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Hrithik Manoj
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-green-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="#about" className="block py-2 px-4 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="block py-2 px-4 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="block py-2 px-4 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
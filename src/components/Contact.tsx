import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Get in Touch</h2>
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-center mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="text-white hover:text-green-400 transition-colors transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors transform hover:scale-110">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
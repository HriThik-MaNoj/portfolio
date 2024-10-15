import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Hrithik Manoj. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-500">
          Cybersecurity Enthusiast, Programmer, & Web3 Explorer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
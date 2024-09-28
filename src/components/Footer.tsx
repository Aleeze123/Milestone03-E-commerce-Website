import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-2">Aleeza&apos;s Styles Heaven</h2>
        <p className="mb-4">Your gateway to exclusive offers!</p>
        
        <p>&copy; {new Date().getFullYear()} Aleeza&apos;s Styles Heaven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

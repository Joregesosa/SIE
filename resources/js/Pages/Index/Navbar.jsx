import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">Mi TRC</a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
          <a href="#" className="text-gray-300 hover:text-white">Nuestra Institución</a>
          <a href="#" className="text-gray-300 hover:text-white">Admisiones</a>
          <a href="#" className="text-gray-300 hover:text-white">Tour 360</a>
          <a href="#" className="text-gray-300 hover:text-white">Servicios</a>
          <a href="#" className="text-gray-300 hover:text-white">Mi TRC</a>
          <a href="#" className="text-gray-300 hover:text-white">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import heroImage from './path/to/your/image.png';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-bold mb-4">Educación a otro nivel</h1>
        <p className="text-white text-lg mb-8">
          Formamos seres humanos justos, democráticos, pacíficos y responsables para una sana convivencia con la sociedad y la naturaleza, en un ambiente de calidad y calidez.
        </p>
        <a href="#" className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">Saber Más</a>
      </div>
    </div>
  );
};

export default Hero;

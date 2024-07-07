import React from "react";

const Hero = () => {

    return (
      <div className="relative  w-screen overflow-hidden h-full flex p-10   ">
        <div className="background "></div>
        
      <div className="bg-black bg-opacity-50 p-5 w-full flex flex-col justify-center items-center text-center my-auto">
        <h1 className="text-white text-5xl font-bold mb-4">
          Educación a otro nivel
        </h1>
        <p className="text-white text-lg mb-8">
          Formamos seres humanos justos, democráticos, pacíficos y
          responsables para una sana convivencia con la sociedad y
          la naturaleza, en un ambiente de calidad y calidez.
        </p>
        <a
          href="#"
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          Saber Más
        </a>
      </div>
    </div>
    
    );
};

export default Hero;

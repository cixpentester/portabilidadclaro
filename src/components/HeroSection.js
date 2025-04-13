import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Portabilidad Numérica en Perú
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-red-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Cambia de operador móvil manteniendo tu número con los colores de nuestra patria
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';

const StepsIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Datos Personales' },
    { id: 2, name: 'Información del Número' },
    { id: 3, name: 'Confirmación' },
  ];

  return (
    <nav className="border-b border-gray-200">
      <ul className="flex justify-center space-x-8">
        {steps.map((step) => (
          <li key={step.id} className="flex">
            <span
              className={`flex items-center pb-4 text-sm font-medium ${
                currentStep >= step.id
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {step.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StepsIndicator;
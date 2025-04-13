import React from 'react';
import EmailService from './EmailService';

const ConfirmationStep = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="space-y-8">
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">
              Revisa cuidadosamente la información antes de enviar tu solicitud de portabilidad.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Datos Personales</h3>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-500">Nombre Completo</p>
              <p className="mt-1 text-sm text-gray-900">{formData.fullName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">DNI</p>
              <p className="mt-1 text-sm text-gray-900">{formData.dni}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="mt-1 text-sm text-gray-900">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Teléfono</p>
              <p className="mt-1 text-sm text-gray-900">{formData.phone}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Información de Portabilidad</h3>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-500">Operador Actual</p>
              <p className="mt-1 text-sm text-gray-900">{formData.currentOperator}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Número a Portar</p>
              <p className="mt-1 text-sm text-gray-900">{formData.numberToPort}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Nuevo Operador</p>
              <p className="mt-1 text-sm text-gray-900">{formData.newOperator}</p>
            </div>
          </div>
        </div>
      </div>

      <EmailService formData={formData} />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={submitForm}
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Confirmar y Finalizar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
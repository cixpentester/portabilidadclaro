import React, { useState } from 'react';

const NumberInfoForm = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.currentOperator) newErrors.currentOperator = 'Campo obligatorio';
    if (!formData.numberToPort) newErrors.numberToPort = 'Campo obligatorio';
    if (!/^\d{9}$/.test(formData.numberToPort)) newErrors.numberToPort = 'El número debe tener 9 dígitos';
    if (!formData.newOperator) newErrors.newOperator = 'Campo obligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="currentOperator" className="block text-sm font-medium text-gray-700">
          Operador Actual
        </label>
        <select
          name="currentOperator"
          id="currentOperator"
          value={formData.currentOperator}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.currentOperator ? 'border-red-500' : 'border'
          }`}
        >
          <option value="">Seleccione operador</option>
          <option value="Movistar">Movistar</option>
          <option value="Claro">Claro</option>
          <option value="Entel">Entel</option>
          <option value="Bitel">Bitel</option>
        </select>
        {errors.currentOperator && (
          <p className="mt-2 text-sm text-red-600">{errors.currentOperator}</p>
        )}
      </div>

      <div>
        <label htmlFor="numberToPort" className="block text-sm font-medium text-gray-700">
          Número a Portar
        </label>
        <input
          type="text"
          name="numberToPort"
          id="numberToPort"
          value={formData.numberToPort}
          onChange={handleChange}
          maxLength="9"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.numberToPort ? 'border-red-500' : 'border'
          }`}
        />
        {errors.numberToPort && <p className="mt-2 text-sm text-red-600">{errors.numberToPort}</p>}
      </div>

      <div>
        <label htmlFor="newOperator" className="block text-sm font-medium text-gray-700">
          Nuevo Operador
        </label>
        <select
          name="newOperator"
          id="newOperator"
          value={formData.newOperator}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm ${
            errors.newOperator ? 'border-red-500' : 'border'
          }`}
        >
          <option value="">Seleccione operador</option>
          <option value="Movistar">Movistar</option>
          <option value="Claro">Claro</option>
          <option value="Entel">Entel</option>
          <option value="Bitel">Bitel</option>
        </select>
        {errors.newOperator && <p className="mt-2 text-sm text-red-600">{errors.newOperator}</p>}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Anterior
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default NumberInfoForm;
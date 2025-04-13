import React, { useState } from 'react';

const EmailService = ({ formData }) => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/tu-email@ejemplo.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Solicitud de Portabilidad - ${formData.fullName}`,
          _template: 'table'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSendStatus('success');
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setSendStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-8">
      {sendStatus === 'success' ? (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Datos enviados correctamente al administrador
              </p>
            </div>
          </div>
        </div>
      ) : sendStatus === 'error' ? (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                Error al enviar los datos. Por favor inténtalo nuevamente.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={isSending}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {isSending ? 'Enviando...' : 'Enviar datos al administrador'}
        </button>
      )}
    </div>
  );
};

export default EmailService;
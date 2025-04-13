import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import StepsIndicator from './components/StepsIndicator';
import PersonalDataForm from './components/PersonalDataForm';
import NumberInfoForm from './components/NumberInfoForm';
import ConfirmationStep from './components/ConfirmationStep';
import SuccessMessage from './components/SuccessMessage';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dni: '',
    email: '',
    phone: '',
    currentOperator: '',
    numberToPort: '',
    newOperator: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const submitForm = () => {
    // Simulación de envío a backend
    console.log('Datos completos:', formData);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <main className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg -mt-10 mb-10 border border-gray-100">
        {!isSubmitted ? (
          <>
            <StepsIndicator currentStep={currentStep} />
            
            <div className="mt-8">
              {currentStep === 1 && (
                <PersonalDataForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                />
              )}
              
              {currentStep === 2 && (
                <NumberInfoForm
                  formData={formData}
                  setFormData={setFormData}
                  prevStep={prevStep}
                  nextStep={nextStep}
                />
              )}
              
              {currentStep === 3 && (
                <ConfirmationStep
                  formData={formData}
                  prevStep={prevStep}
                  submitForm={submitForm}
                />
              )}
            </div>
          </>
        ) : (
          <SuccessMessage />
        )}
      </main>
    </div>
  );
};

export default App;

// DONE
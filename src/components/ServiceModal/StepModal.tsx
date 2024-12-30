import React, { useState } from 'react';
import { X } from 'lucide-react';
import ServiceStep from './ServiceStep';
import BudgetStep from './BudgetStep';
import ContactStep from './ContactStep';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ isOpen, onClose }: ServiceModalProps) {
  const [step, setStep] = useState<'service' | 'budget' | 'contact'>('service');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [contactData, setContactData] = useState({ name: '', email: '', country: '', phone: '' });

  if (!isOpen) return null;

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    if (step === 'service') setStep('budget');
    if (step === 'budget') setStep('contact');
  };

  const handleBack = () => {
    if (step === 'budget') setStep('service');
    if (step === 'contact') setStep('budget');
  };

  const handleBudgetSelect = (budgetId: string) => {
    setSelectedBudget(budgetId);
  };

  const handleContactSubmit = (formData: { name: string; email: string; country: string; phone: string }) => {
    setContactData(formData);
    // Submit logic can go here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-purple-950 w-full max-w-4xl m-4 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8">
          {step === 'service' && (
            <ServiceStep
              selectedServices={selectedServices}
              onServiceToggle={handleServiceToggle}
              onNext={handleNext}
            />
          )}

          {step === 'budget' && (
            <BudgetStep
              selectedBudget={selectedBudget}
              onBudgetSelect={handleBudgetSelect}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {step === 'contact' && (
            <ContactStep
              onNext={handleContactSubmit}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
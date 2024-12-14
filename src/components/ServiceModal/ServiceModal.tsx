import React, { useState } from 'react';
import { X } from 'lucide-react';
import ServiceStep from './ServiceStep';
import BudgetStep from './BudgetStep';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ isOpen, onClose }: ServiceModalProps) {
  const [step, setStep] = useState<'service' | 'budget'>('service');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    setStep('budget');
  };

  const handleBack = () => {
    setStep('service');
  };

  const handleBudgetSelect = (budgetId: string) => {
    setSelectedBudget(budgetId);
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
          {step === 'service' ? (
            <ServiceStep
              selectedServices={selectedServices}
              onServiceToggle={handleServiceToggle}
              onNext={handleNext}
            />
          ) : (
            <BudgetStep
              selectedBudget={selectedBudget}
              onBudgetSelect={handleBudgetSelect}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
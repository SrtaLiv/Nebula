import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BudgetStepProps {
  selectedBudget: string | null;
  onBudgetSelect: (budget: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BudgetStep({ selectedBudget, onBudgetSelect, onBack, onNext }: BudgetStepProps) {
  const budgetRanges = [
    {
      id: "small",
      title: "0 - 100",
      description: "Proyectos pequeños y puntuales"
    },
    {
      id: "medium",
      title: "100 - 1000",
      description: "Proyectos medianos con más funcionalidades"
    },
    {
      id: "large",
      title: "1000 - 10000",
      description: "Proyectos grandes y complejos"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="text-purple-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-4xl font-['Bebas_Neue'] text-white tracking-wider">
          ¿Cuál es tu presupuesto?
        </h2>
      </div>

      <div className="grid gap-4">
        {budgetRanges.map((budget) => (
          <button
            key={budget.id}
            onClick={() => onBudgetSelect(budget.id)}
            className={`flex items-center p-6 rounded-xl transition-all ${
              selectedBudget === budget.id
                ? 'bg-purple-600 shadow-lg shadow-purple-500/25'
                : 'bg-purple-900/50 hover:bg-purple-800/50'
            }`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-['Bebas_Neue'] text-white mb-1">
                ${budget.title}
              </h3>
              <p className="text-purple-200 text-sm">
                {budget.description}
              </p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 ${
              selectedBudget === budget.id
                ? 'border-white bg-white'
                : 'border-purple-300'
            }`} />
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button
        className="px-6 py-3 rounded-lg font-semibold transition-all bg-purple-600 text-white hover:bg-purple-700"
          onClick={onNext}
          disabled={!selectedBudget}
        >
          Siguiente
        </button>
      </div>
      
    </div>
  );
}
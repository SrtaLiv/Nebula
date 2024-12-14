import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';

interface ContactStepProps {
    onNext: (formData: { name: string; email: string; country: string; phone: string }) => void;
    onBack: () => void;
}

export default function ContactStep({ onNext, onBack }: ContactStepProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="space-y-8">
            <button
                onClick={onBack}
                className="text-purple-300 hover:text-white transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <h2 className="text-4xl font-['Bebas_Neue'] text-white text-center mb-8 tracking-wider">
                ¿Cómo podemos contactarte?
            </h2>
            <p className="text-lg text-gray-300 text-center mb-6">
                Ya casi terminamos, déjanos tus datos para poder hablarte luego.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-1 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Escribe tu nombre completo"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Escribe tu correo electrónico"
                        />
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-300">
                            País
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Escribe tu país"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Escribe tu número de teléfono"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-lg font-semibold transition-all bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
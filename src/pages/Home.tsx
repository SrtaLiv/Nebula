import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Cases from '../components/Cases';
import Services from '../components/Services';
import DevelopmentProcess from '../components/DevelopmentProcess';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';


export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hide');
        hiddenElements.forEach(element => {
            observer.observe(element);
        });

        // Limpiar el observador al desmontar el componente
        return () => {
            hiddenElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Hero />
            <Cases />
            <Services />
            <DevelopmentProcess />
            <CallToAction />
            <Footer />
        </div>
    );
}


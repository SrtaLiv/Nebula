import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import DevelopmentProcess from '../components/DevelopmentProcess';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="proyectos">
        <Projects />
      </section>
      <section id="proceso">
        <DevelopmentProcess />
      </section>
      <section id="contacto">
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
}
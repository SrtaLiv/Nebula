import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import DevelopmentProcess from './components/DevelopmentProcess';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { CursorifyProvider } from '@cursorify/react';
import EmojiCursor from './components/EmojiCursor';
import { Routes } from 'react-router';
import AboutResume from './components/AboutUs/AboutResume';

export default function App() {
  return (
    <CursorifyProvider cursor={<EmojiCursor />}>
      <div className="min-h-screen bg-black">
        <Navbar />
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicios">
          <AboutResume />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="proceso">
          <DevelopmentProcess />
        </section>
        <section id="contacto">
          <CallToAction />
        </section>
        <section id="sobre-nosotros">
          <Footer />
        </section>
      </div>
    </CursorifyProvider>
  );
}


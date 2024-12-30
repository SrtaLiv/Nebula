import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DevelopmentProcess from './components/DevelopmentProcess';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { CursorifyProvider } from '@cursorify/react';
import EmojiCursor from './components/EmojiCursor';
import { Routes } from 'react-router';
import AboutResume from './components/AboutUs/AboutResume';
import Projects from './pages/Projects';

export default function App() {
  return (
    <CursorifyProvider cursor={<EmojiCursor />}>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <AboutResume />
        <Services />
        <DevelopmentProcess />
        <CallToAction />
        <Footer />
      </div>
    </CursorifyProvider>
  );
}


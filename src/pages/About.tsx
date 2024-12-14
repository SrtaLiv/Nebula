import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs/AboutUs';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}
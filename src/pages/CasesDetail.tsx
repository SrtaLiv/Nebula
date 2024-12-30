import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CaseStudyDetail } from '../components/Project/CaseStudyDetails';

export default function CasesDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CaseStudyDetail />
      <Footer />
    </div>
  );
}
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CaseStudyDetail } from '../components/Project/CaseStudyDetails';
import Cases from '../components/Cases';

export default function CasesAll() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Cases />
            <Footer />
        </div>
    );
}
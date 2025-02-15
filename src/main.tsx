import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router";
import About from './pages/About.tsx';
import { CaseStudyDetail } from './components/Project/CaseStudyDetails.tsx';
import Cases from './components/Cases.tsx';
import CasesDetail from './pages/CasesDetail.tsx';
import CasesAll from './pages/CasesAll.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/proyectos" element={<CasesAll />} />
      <Route path="/proyectos/:id" element={<CasesDetail />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);

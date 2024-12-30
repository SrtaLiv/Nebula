import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router";
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        {/* Ruta principal */}
      <Route path="/" element={<App />} />
      {/* Ruta para Contact */}
      <Route path="/proyectos" element={<Projects />} />
      <Route path="/nosotros" element={<About />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);

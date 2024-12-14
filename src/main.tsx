import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Project from './Projects.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        {/* Ruta principal */}
      <Route path="/" element={<App />} />
      {/* Ruta para Contact */}
      <Route path="/projects" element={<Project />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);

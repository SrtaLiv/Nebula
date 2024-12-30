import React, { useEffect, useState } from 'react';
// import ProjectCard from '../components/Project/ProjectCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project/Projects';

export default function Projects() {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    // Activa la animación de entrada al montar el componente.
    setTransition(true);
  }, []);

  return (
    <>
      <Navbar />
      <Project />
      <Footer />
    </>
  );
}

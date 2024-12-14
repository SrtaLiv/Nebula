import React, { useEffect, useState, useTransition } from 'react';

export default function Projects() {
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    setTransitionClass("in:wipe:up");
  }, []);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-purple-500 text-white`}
      transition-style={transitionClass}
    >
      <h1 className="text-4xl font-bold">Bienvenido a Projects</h1>
    </div>

  );
}

import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  isTriggered: boolean;
  onTransitionEnd?: () => void;
}

export default function PageTransition({ isTriggered, onTransitionEnd }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isTriggered) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        onTransitionEnd?.();
      }, 2500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isTriggered, onTransitionEnd]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-purple-950 transition-transform duration-[2500ms] ease-[cubic-bezier(.25,1,.30,1)] origin-bottom"
      style={{
        animation: 'wipeInUp 2.5s cubic-bezier(.25, 1, .30, 1) forwards'
      }}
    />
  );
}
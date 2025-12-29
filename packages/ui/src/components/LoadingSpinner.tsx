// packages/ui/src/components/LoadingSpinner.tsx
"use client";

import React from 'react';

const LoadingSpinner: React.FC = () => {
  const spinnerStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '2rem',
    height: '2rem',
    border: '2px solid #FFC800',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={spinnerStyle} />
  );
};

export default LoadingSpinner;
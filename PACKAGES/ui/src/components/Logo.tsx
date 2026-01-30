"use client";


import React from 'react';

interface LogoProps {
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  src, 
  size = 'md',
  className = '',
  alt = 'BoldMind Logo'
}) => {
  // Handle both string sizes and numeric sizes
  const getSize = () => {
    if (typeof size === 'number') return size;
    
    const sizeMap = {
      sm: 32,
      md: 48,
      lg: 64,
      xl: 96
    };
    return sizeMap[size];
  };

  const pixelSize = getSize();

  // If src is provided, use img tag (compatible with all React apps)
  if (src) {
    return (
      <div className={`inline-block ${className}`}>
        <img 
          src={src}
          alt={alt}
          width={pixelSize}
          height={pixelSize}
          className="object-contain rounded-full"
          style={{ width: pixelSize, height: pixelSize }}
        />
      </div>
    );
  }

  // Fallback to styled text logo if no image
  return (
    <div className={`flex items-center ${className}`}>
      <div 
        className="rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold"
        style={{ width: pixelSize, height: pixelSize }}
      >
        {size === 'sm' || pixelSize <= 32 ? 'BM' : 'BM'}
      </div>
    </div>
  );
};

export default Logo;
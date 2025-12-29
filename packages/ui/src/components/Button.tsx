// packages/ui/src/components/Button.tsx
"use client";

import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false, 
    isLoading = false,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      borderRadius: '0.5rem',
      transition: 'all 0.2s',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      width: fullWidth ? '100%' : 'auto',
      position: 'relative',
      overflow: 'hidden',
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: isHovered ? '#FFD700' : '#FFC800',
        color: '#00143C',
        border: 'none',
        boxShadow: isHovered 
          ? '0 4px 12px rgba(255, 200, 0, 0.3)' 
          : 'none',
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      },
      secondary: {
        backgroundColor: isHovered ? '#002A5C' : '#00143C',
        color: 'white',
        border: 'none',
        boxShadow: isHovered ? '0 4px 12px rgba(0, 20, 60, 0.3)' : 'none',
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      },
      outline: {
        backgroundColor: isHovered ? '#00143C' : 'transparent',
        color: isHovered ? 'white' : '#00143C',
        border: '2px solid #00143C',
        boxShadow: isHovered ? '0 4px 12px rgba(0, 20, 60, 0.1)' : 'none',
      },
      ghost: {
        backgroundColor: isHovered ? 'rgba(0, 20, 60, 0.1)' : 'transparent',
        color: '#00143C',
        border: 'none',
      },
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
      },
      md: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
      },
      lg: {
        padding: '1rem 2rem',
        fontSize: '1.125rem',
      },
    };

    const activeStyle: React.CSSProperties = {
      transform: 'translateY(0)',
      boxShadow: 'none',
    };

    const styles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...(isActive ? activeStyle : {}),
    };

    const spinnerStyle: React.CSSProperties = {
      width: '1rem',
      height: '1rem',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '0.5rem',
    };

    return (
      <button
        ref={ref}
        className={cn(className)}
        style={styles}
        disabled={disabled || isLoading}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        onMouseDown={() => !disabled && setIsActive(true)}
        onMouseUp={() => !disabled && setIsActive(false)}
        {...props}
      >
        {isLoading ? (
          <>
            <div style={spinnerStyle} />
            Loading...
          </>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
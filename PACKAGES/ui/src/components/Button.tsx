// packages/ui/src/components/Button.tsx
"use client";

import React, { useState } from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      fontFamily: 'var(--font-primary)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-md)',
      transition: 'all var(--transition-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      width: fullWidth ? '100%' : 'auto',
      position: 'relative',
      overflow: 'hidden',
      border: '2px solid transparent',
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--product-primary)',
        color: 'var(--product-background)',
        boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      },
      secondary: {
        backgroundColor: 'transparent',
        color: 'var(--product-primary)',
        borderColor: 'var(--product-primary)',
        boxShadow: isHovered ? 'var(--shadow-sm)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      },
      outline: {
        backgroundColor: isHovered ? 'var(--product-primary)' : 'transparent',
        color: isHovered ? 'var(--product-background)' : 'var(--product-primary)',
        borderColor: 'var(--product-primary)',
        boxShadow: isHovered ? 'var(--shadow-sm)' : 'none',
      },
      ghost: {
        backgroundColor: isHovered ? 'var(--product-highlight)' : 'transparent',
        color: 'var(--product-primary)',
        border: 'none',
      },
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: '0.625rem 1.25rem',
        fontSize: '0.9375rem',
      },
      md: {
        padding: '0.875rem 1.75rem',
        fontSize: '1rem',
      },
      lg: {
        padding: '1.125rem 2.25rem',
        fontSize: '1.125rem',
        borderRadius: 'var(--radius-lg)',
      },
    };

    const activeStyle: React.CSSProperties = {
      transform: 'translateY(0)',
      boxShadow: 'var(--shadow-xs)',
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


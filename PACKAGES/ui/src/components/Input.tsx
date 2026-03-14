// packages/ui/src/components/Input.tsx
"use client";

import React from 'react';
import { cn } from '../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div style={{ width: '100%' }}>
        {label && (
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500,
            color: 'var(--product-primary)'
          }}>
            {label}
          </label>
        )}
        <div style={{ position: 'relative' }}>
          {icon && (
            <div style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--neutral-500)',
              pointerEvents: 'none' as const,
            }}>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            style={{
              width: '100%',
              padding: icon ? '0.875rem 1.25rem 0.875rem 3rem' : '0.875rem 1.25rem',
              border: `2px solid ${error ? 'var(--color-error)' : 'var(--product-muted)'}`,
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-primary)',
              fontSize: '1rem',
              lineHeight: '1.5',
              color: 'var(--product-foreground)',
              backgroundColor: 'var(--product-background)',
              transition: 'all var(--transition-quick)',
              outline: 'none',
              boxShadow: 'none',
            }}
            className={cn(className)}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--product-primary)';
              e.currentTarget.style.boxShadow = '0 0 0 3px var(--product-highlight)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error ? 'var(--color-error)' : 'var(--product-muted)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            {...props}
          />
        </div>
        {error && (
          <p style={{
            color: 'var(--color-error)',
            fontSize: '0.875rem',
            marginTop: '0.25rem'
          }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';


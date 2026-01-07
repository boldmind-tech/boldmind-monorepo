// packages/ui/src/components/Input.tsx
"use client";

import React from 'react';
import { cn } from '../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div style={{ width: '100%' }}>
        {label && (
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontWeight: 500,
            color: '#00143C'
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
              color: '#6B7280',
              pointerEvents: 'none' as const,
            }}>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            style={{
              width: '100%',
              padding: icon ? '0.75rem 1rem 0.75rem 3rem' : '0.75rem 1rem',
              border: `1px solid ${error ? '#EF4444' : '#D1D5DB'}`,
              borderRadius: '0.5rem',
              fontSize: '1rem',
              color: '#00143C',
              backgroundColor: 'white',
              transition: 'all 0.2s',
              outline: 'none',
              boxShadow: 'none',
            }}
            className={cn(className)}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#00143C';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 20, 60, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error ? '#EF4444' : '#D1D5DB';
              e.currentTarget.style.boxShadow = 'none';
            }}
            {...props}
          />
        </div>
        {error && (
          <p style={{ 
            color: '#EF4444',
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

export default Input;
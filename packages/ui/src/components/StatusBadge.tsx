"use client";


import React from 'react';
import { cn } from '../lib/utils';

export type BadgeVariant = 'live' | 'building' | 'planned' | 'concept' | 'hiring' | 'new' | 'premium';

export interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    live: {
      backgroundColor: 'color-mix(in srgb, var(--color-success) 15%, transparent)',
      color: 'var(--color-success)',
    },
    building: {
      backgroundColor: 'color-mix(in srgb, var(--color-warning) 15%, transparent)',
      color: 'var(--color-warning)',
    },
    planned: {
      backgroundColor: 'color-mix(in srgb, var(--color-info) 15%, transparent)',
      color: 'var(--color-info)',
    },
    concept: {
      backgroundColor: 'color-mix(in srgb, var(--product-accent) 15%, transparent)',
      color: 'var(--product-accent)',
    },
    hiring: {
      backgroundColor: 'color-mix(in srgb, var(--color-error) 15%, transparent)',
      color: 'var(--color-error)',
    },
    new: {
      backgroundColor: 'color-mix(in srgb, var(--product-accent) 15%, transparent)',
      color: 'var(--product-accent)',
    },
    premium: {
      backgroundColor: 'color-mix(in srgb, var(--color-warning) 15%, transparent)',
      color: 'var(--color-warning)',
    },
  };

  return (
    <span
      className={cn(className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.8125rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  );
}

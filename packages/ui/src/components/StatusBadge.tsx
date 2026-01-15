"use client";


import React from 'react';
import { cn } from '../lib/utils';

export type BadgeVariant = 'live' | 'building' | 'planned' | 'concept' | 'hiring' | 'new';

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  const variantStyles = {
    live: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    building: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    concept: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    hiring: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    new: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variantStyles[variant],
      className
    )}>
      {children}
    </span>
  );
}

export default StatusBadge;
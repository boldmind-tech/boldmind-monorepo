// packages/ui/src/components/StatusBadge.tsx
"use client";

import React from 'react';

interface StatusBadgeProps {
  status: string;
  color?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, color = '#10B981' }) => {
  const badgeStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    backgroundColor: `rgba(${hexToRgb(color)}, 0.1)`,
    color: color,
    display: 'inline-block',
  };

  return <span style={badgeStyle}>{status}</span>;
};

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '16, 185, 129'; // default green
}

export default StatusBadge;
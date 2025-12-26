// packages/ui/src/components/StatusBadge.tsx
import React from 'react';

interface StatusBadgeProps {
  status: string;
  color?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, color = 'text-green-400' }) => {
  return <span className={`text-xs font-bold px-3 py-1 rounded-full bg-black/30 ${color}`}>{status}</span>;
};

export default StatusBadge;
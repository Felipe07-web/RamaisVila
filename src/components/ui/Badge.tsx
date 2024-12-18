import React from 'react';
import { Status } from '../../types';

interface BadgeProps {
  status: Status;
}

const statusConfig = {
  online: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    label: 'Online'
  },
  busy: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    label: 'Ocupado'
  },
  offline: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    label: 'Offline'
  }
};

export const Badge: React.FC<BadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  icon: Icon,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    secondary: 'bg-gray-50 text-gray-700 hover:bg-gray-100'
  };

  return (
    <button
      {...props}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${variantClasses[variant]}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};
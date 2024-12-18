import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  growth?: string;
  variant?: 'emerald' | 'blue' | 'purple' | 'orange';
}

const variantStyles = {
  emerald: {
    gradient: 'from-emerald-500 to-emerald-400',
    background: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100'
  },
  blue: {
    gradient: 'from-blue-500 to-blue-400',
    background: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-100'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-400',
    background: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-100'
  },
  orange: {
    gradient: 'from-orange-500 to-orange-400',
    background: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-100'
  }
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  growth,
  variant = 'emerald'
}) => {
  const styles = variantStyles[variant];

  return (
    <div className={cn(
      "bg-white rounded-2xl p-6 relative overflow-hidden border transition-all duration-200",
      styles.border,
      "hover:shadow-lg hover:-translate-y-0.5"
    )}>
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-8 -mt-8",
        styles.gradient
      )} />
      
      <div className="relative z-10">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
          styles.background
        )}>
          <Icon className={cn("w-6 h-6", styles.text)} />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
            {growth && (
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                styles.background,
                styles.text
              )}>
                +{growth}%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
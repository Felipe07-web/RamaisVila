import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  growth?: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, growth }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {growth && (
            <p className="text-sm text-emerald-600 mt-1">
              {growth}% aumento
            </p>
          )}
        </div>
        <div className="p-3 bg-emerald-50 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
      </div>
    </div>
  );
}
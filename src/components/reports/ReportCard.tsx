import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Report } from '../../types';
import { cn } from '../../utils/cn';

export const ReportCard: React.FC<Report> = ({
  title,
  description,
  type,
  lastGenerated
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <FileText className="w-6 h-6 text-emerald-600" />
        </div>
        <button className="text-gray-400 hover:text-emerald-600 transition-colors">
          <Download className="w-5 h-5" />
        </button>
      </div>

      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Última geração:</span>
        <span className="text-gray-900">{lastGenerated}</span>
      </div>
    </div>
  );
};
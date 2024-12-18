import React from 'react';
import { ReportCard } from '../components/reports/ReportCard';
import { reports } from '../data/mockData';

export const Reports = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
        <p className="text-gray-500">Visualize e exporte relatórios do sistema</p>
      </header>

      <div className="grid grid-cols-3 gap-6">
        {reports.map(report => (
          <ReportCard key={report.id} {...report} />
        ))}
      </div>
    </div>
  );
};
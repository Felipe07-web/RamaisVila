import React from 'react';
import { Phone, Users, FileText, Menu } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ExtensionTable } from '../components/extensions/ExtensionTable';
import { extensions } from '../data/mockData';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Visão geral do sistema de ramais</p>
      </header>

      <div className="grid grid-cols-4 gap-4">
        <StatsCard 
          title="Total de Ramais"
          value={150}
          growth="12"
          icon={Phone}
          variant="emerald"
        />
        <StatsCard 
          title="Colaboradores"
          value={89}
          growth="2"
          icon={Users}
          variant="blue"
        />
        <StatsCard 
          title="Setores"
          value={15}
          icon={FileText}
          variant="purple"
        />
        <StatsCard 
          title="Regiões"
          value={4}
          icon={Menu}
          variant="orange"
        />
      </div>

      <ExtensionTable extensions={extensions} />
    </div>
  );
};
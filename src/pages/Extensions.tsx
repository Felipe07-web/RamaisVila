import React from 'react';
import { Plus } from 'lucide-react';
import { ExtensionTable } from '../components/extensions/ExtensionTable';
import { extensions } from '../data/mockData';

export const Extensions = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ramais</h1>
          <p className="text-gray-500">Gerencie os ramais da empresa</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Plus className="w-4 h-4" />
          Novo Ramal
        </button>
      </div>

      <ExtensionTable extensions={extensions} />
    </div>
  );
};
import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Extension } from '../../types';
import { cn } from '../../utils/cn';

interface ExtensionTableProps {
  extensions: Extension[];
}

export const ExtensionTable: React.FC<ExtensionTableProps> = ({ extensions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome, ramal ou setor..."
              className="block w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              Total: <span className="font-medium text-gray-900">8 ramais</span>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ramal</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Setor</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Região</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {extensions.map((ext) => (
              <tr key={ext.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-medium text-sm",
                      ext.status === 'online' ? 'bg-emerald-50 text-emerald-600' :
                      ext.status === 'busy' ? 'bg-amber-50 text-amber-600' :
                      'bg-gray-50 text-gray-600'
                    )}>
                      {ext.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{ext.name}</div>
                      <div className="text-sm text-gray-500">{ext.position}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-medium">
                    {ext.extension}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500">{ext.department}</td>
                <td className="py-4 px-6 text-gray-500">{ext.region}</td>
                <td className="py-4 px-6">
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                    ext.status === 'online' ? 'bg-emerald-50 text-emerald-700' :
                    ext.status === 'busy' ? 'bg-amber-50 text-amber-700' :
                    'bg-gray-50 text-gray-700'
                  )}>
                    {ext.status === 'online' ? 'Online' :
                     ext.status === 'busy' ? 'Ocupado' : 'Offline'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Mostrando <span className="font-medium text-gray-900">5</span> de <span className="font-medium text-gray-900">8</span> resultados
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg">
              Anterior
            </button>
            <button className="px-4 py-2 text-sm text-white bg-emerald-500 rounded-lg">
              1
            </button>
            <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg">
              2
            </button>
            <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg">
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
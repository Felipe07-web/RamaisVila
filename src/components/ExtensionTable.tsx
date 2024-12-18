import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Extension } from '../types';

interface ExtensionTableProps {
  extensions: Extension[];
}

export const ExtensionTable: React.FC<ExtensionTableProps> = ({ extensions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExtensions = extensions.filter(ext => 
    ext.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ext.extension.includes(searchTerm) ||
    ext.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar ramal..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
          <Filter className="w-4 h-4" />
          Filtros
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">NOME</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">RAMAL</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">SETOR</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">REGIÃO</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredExtensions.map((ext) => (
              <tr key={ext.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img src={ext.avatar} alt={ext.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-medium">{ext.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-emerald-600 font-medium">{ext.extension}</td>
                <td className="py-3 px-4">{ext.department}</td>
                <td className="py-3 px-4">{ext.region}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${ext.status === 'online' ? 'bg-green-100 text-green-800' : 
                      ext.status === 'busy' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {ext.status === 'online' ? 'Online' : 
                     ext.status === 'busy' ? 'Ocupado' : 'Offline'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
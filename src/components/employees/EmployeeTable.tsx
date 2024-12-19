import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Employee } from '../../types';
import { cn } from '../../utils/cn';

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
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
              placeholder="Buscar colaborador..."
              className="block w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colaborador</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Setor</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ramal</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-medium text-sm",
                      "bg-emerald-50 text-emerald-600"
                    )}>
                      {employee.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-500">{employee.position}</td>
                <td className="py-4 px-6 text-gray-500">{employee.department}</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-medium">
                    {employee.extension}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                    employee.active ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-700'
                  )}>
                    {employee.active ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
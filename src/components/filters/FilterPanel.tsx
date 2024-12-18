import React from 'react';
import { X } from 'lucide-react';
import { FilterOptions, Status } from '../../types';
import { Button } from '../ui/Button';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}) => {
  if (!isOpen) return null;

  const handleStatusChange = (status: Status) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    onFilterChange({ ...filters, status: newStatuses });
  };

  const handleDepartmentChange = (dept: string) => {
    const newDepartments = filters.department.includes(dept)
      ? filters.department.filter(d => d !== dept)
      : [...filters.department, dept];
    onFilterChange({ ...filters, department: newDepartments });
  };

  return (
    <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg p-4 z-10 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Filtros</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Status</h4>
          <div className="space-y-2">
            {['online', 'busy', 'offline'].map((status) => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.status.includes(status as Status)}
                  onChange={() => handleStatusChange(status as Status)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm">{status === 'online' ? 'Online' : status === 'busy' ? 'Ocupado' : 'Offline'}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            onClick={() => onFilterChange({ department: [], region: [], status: [] })}
          >
            Limpar
          </Button>
          <Button variant="primary" onClick={onClose}>
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { EmployeeTable } from '../components/employees/EmployeeTable';
import { employees } from '../data/mockData';

export const Employees = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Colaboradores</h1>
        <p className="text-gray-500">Gerencie os colaboradores e suas permissões</p>
      </header>

      <EmployeeTable employees={employees} />
    </div>
  );
};
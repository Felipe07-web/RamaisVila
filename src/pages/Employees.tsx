import React from 'react';
import { motion } from 'framer-motion';
import { EmployeeTable } from '../components/employees/EmployeeTable';
import { employees } from '../data/mockData';

export const Employees = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      variants={containerVariants}
    >
      {/* Título */}
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Colaboradores</h1>
        <p className="text-gray-500">Todos os colaboradores da empresa</p>
      </motion.header>

      {/* Tabela de Colaboradores */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <EmployeeTable employees={employees} />
      </motion.div>
    </motion.div>
  );
};

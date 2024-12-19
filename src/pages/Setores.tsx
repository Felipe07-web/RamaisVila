import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Dados mockados
const sectors = [
  { id: 1, name: 'Marketing' },
  { id: 2, name: 'Financeiro' },
  { id: 3, name: 'TI' },
  { id: 4, name: 'RH' },
  { id: 5, name: 'Vendas' },
];

const users = [
  { id: 1, name: 'Ana Oliveira', sector: 'Marketing', ramal: '1237', status: 'Online' },
  { id: 2, name: 'Carlos Souza', sector: 'Financeiro', ramal: '1238', status: 'Ocupado' },
  { id: 3, name: 'João Silva', sector: 'TI', ramal: '1234', status: 'Offline' },
  { id: 4, name: 'Maria Santos', sector: 'RH', ramal: '1235', status: 'Online' },
  { id: 5, name: 'Pedro Costa', sector: 'Vendas', ramal: '1236', status: 'Online' },
];

export const Setores = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const filteredUsers = selectedSector
    ? users.filter((user) => user.sector === selectedSector)
    : [];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="p-8 bg-gray-50 min-h-screen"
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Setores</h1>
      <p className="text-gray-600 mb-6">
        Selecione um setor para visualizar os usuários associados e seus ramais.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {sectors.map((sector) => (
          <motion.div
            key={sector.id}
            onClick={() => setSelectedSector(sector.name)}
            className={`cursor-pointer bg-white p-6 border rounded-lg shadow-sm transition hover:shadow-md ${
              selectedSector === sector.name
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-400'
            }`}
            variants={variants}
          >
            <h3 className="text-lg font-medium text-gray-700">{sector.name}</h3>
          </motion.div>
        ))}
      </div>

      {selectedSector && (
        <motion.div
          className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 text-gray-600 font-medium">Nome</th>
                <th className="text-left p-4 text-gray-600 font-medium">Ramal</th>
                <th className="text-left p-4 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <td className="p-4 flex items-center gap-3 text-gray-700">
                    <div
                      className={`w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full text-gray-800 bg-emerald-50`}
                    >
                      {user.name[0].toUpperCase()}
                    </div>
                    {user.name}
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg">
                      {user.ramal}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-lg text-sm ${
                        user.status === 'Online'
                          ? 'bg-emerald-50 text-emerald-700'
                          : user.status === 'Ocupado'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ExtensionTable } from '../components/extensions/ExtensionTable';
import { extensions } from '../data/mockData';

export const Extensions = () => {
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
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ramais</h1>
          <p className="text-gray-500">Ramais da empresa</p>
        </div>
      </motion.div>

      {/* Tabela de Ramais */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <ExtensionTable extensions={extensions} />
      </motion.div>
    </motion.div>
  );
};

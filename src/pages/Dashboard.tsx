import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, FileText, Menu } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ExtensionTable } from '../components/extensions/ExtensionTable';
import { extensions } from '../data/mockData';

export const Dashboard = () => {
  const shuffleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: () => Math.random() * 300 - 150, // Posição inicial aleatória no eixo X
      y: () => Math.random() * 300 - 150, // Posição inicial aleatória no eixo Y
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="space-y-6 bg-gray-100 min-h-screen p-6"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Visão geral do sistema de ramais</p>
      </header>

      {/* Grid de Cards com efeito de embaralhar */}
      <div className="grid grid-cols-4 gap-4">
        <motion.div variants={shuffleVariants}>
          <StatsCard
            title="Total de Ramais"
            value={150}
            growth="12"
            icon={Phone}
            variant="emerald"
          />
        </motion.div>
        <motion.div variants={shuffleVariants}>
          <StatsCard
            title="Colaboradores"
            value={89}
            growth="2"
            icon={Users}
            variant="blue"
          />
        </motion.div>
        <motion.div variants={shuffleVariants}>
          <StatsCard
            title="Setores"
            value={15}
            icon={FileText}
            variant="purple"
          />
        </motion.div>
        <motion.div variants={shuffleVariants}>
          <StatsCard
            title="Regiões"
            value={4}
            icon={Menu}
            variant="orange"
          />
        </motion.div>
      </div>

      {/* Tabela de Extensões */}
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

import React, { useState } from 'react';
import { Phone, Users, FileText, BarChart2 } from 'lucide-react';
import { Dashboard } from './pages/Dashboard';
import { Extensions } from './pages/Extensions';
import { Employees } from './pages/Employees';
import { Setores } from './pages/Setores';
import VilaNovaLogo from './img/logo.png';

type Page = 'dashboard' | 'extensions' | 'employees' | 'setores';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  // Função para renderizar páginas
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'extensions':
        return <Extensions />;
      case 'employees':
        return <Employees />;
      case 'setores':
        return <Setores />;
      default:
        return <Dashboard />; // Fallback para evitar erros
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 p-4 flex flex-col">
        {/* Logo e título */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Lista de Ramais</span>
        </div>

        {/* Menu de navegação */}
        <nav className="space-y-1">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`flex w-full items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 'dashboard'
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BarChart2 className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('extensions')}
            className={`flex w-full items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 'extensions'
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Phone className="w-5 h-5" />
            Ramais
          </button>
          <button
            onClick={() => setCurrentPage('employees')}
            className={`flex w-full items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 'employees'
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-5 h-5" />
            Colaboradores
          </button>
          <button
            onClick={() => setCurrentPage('setores')}
            className={`flex w-full items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 'setores'
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            Setores
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={VilaNovaLogo} alt="Logo Vilanova" className="h-8 w-auto" />
          </div>

          {/* Barra de busca */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center relative">
              <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2" />
            </button>
          </div>
        </header>

        {/* Conteúdo da página */}
        <main className="p-8">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;

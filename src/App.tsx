import React, { useState } from 'react';
import { Phone, Users, FileText, BarChart2, ChevronDown, Bell } from 'lucide-react';
import { Dashboard } from './pages/Dashboard';
import { Extensions } from './pages/Extensions';
import { Employees } from './pages/Employees';
import { Setores } from './pages/Setores';
import VilaNovaLogo from './img/logo.png';

type Page = 'dashboard' | 'extensions' | 'employees' | 'setores';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    'Novo colaborador adicionado: Ana Oliveira',
    'Atualização no setor de TI',
    'Reunião agendada para sexta-feira',
  ];

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
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Lista de Ramais</span>
        </div>

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
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={VilaNovaLogo} alt="Logo Vilanova" className="h-8 w-auto" />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              <Bell className="w-5 h-5" />
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  notificationsOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {notificationsOpen && (
              <div
                className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                style={{ animation: 'fade-in 0.2s ease-out' }}
              >
                <div className="p-4 bg-emerald-50 rounded-t-lg border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Notificações</h3>
                  <p className="text-sm text-gray-500">Últimas atualizações</p>
                </div>
                <ul className="divide-y divide-gray-100">
                  {notifications.map((notification, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 text-gray-700 hover:bg-gray-100 transition flex items-start gap-3"
                    >
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mt-1" />
                      <span className="text-sm">{notification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </header>

        <main className="p-8">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;

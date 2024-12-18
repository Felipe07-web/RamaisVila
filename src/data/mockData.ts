import { Extension, Employee, Report } from '../types';

export const extensions: Extension[] = [
  {
    id: '1',
    name: 'Ana Silva',
    extension: '1001',
    department: 'Marketing',
    region: 'Sul',
    status: 'online',
    email: 'ana.silva@empresa.com',
    position: 'Coordenadora de Marketing'
  },
  {
    id: '2',
    name: 'Carlos Santos',
    extension: '1002',
    department: 'Vendas',
    region: 'Sudeste',
    status: 'busy',
    email: 'carlos.santos@empresa.com',
    position: 'Gerente de Vendas'
  },
  // Add more extensions...
];

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana.silva@empresa.com',
    position: 'Coordenadora de Marketing',
    department: 'Marketing',
    extension: '1001',
    active: true
  },
  {
    id: '2',
    name: 'Carlos Santos',
    email: 'carlos.santos@empresa.com',
    position: 'Gerente de Vendas',
    department: 'Vendas',
    extension: '1002',
    active: true
  },
  // Add more employees...
];

export const reports: Report[] = [
  {
    id: '1',
    title: 'Relatório de Uso de Ramais',
    description: 'Análise detalhada do uso dos ramais por departamento',
    type: 'pdf',
    lastGenerated: '22/03/2024'
  },
  {
    id: '2',
    title: 'Lista de Colaboradores',
    description: 'Lista completa de colaboradores e seus ramais',
    type: 'excel',
    lastGenerated: '21/03/2024'
  },
  {
    id: '3',
    title: 'Histórico de Chamadas',
    description: 'Registro de chamadas dos últimos 30 dias',
    type: 'csv',
    lastGenerated: '20/03/2024'
  }
];
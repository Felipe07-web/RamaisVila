export type Status = 'online' | 'offline' | 'busy';

export interface Extension {
  id: string;
  name: string;
  extension: string;
  department: string;
  region: string;
  status: Status;
  email: string;
  position: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  extension: string;
  active: boolean;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'excel' | 'csv';
  lastGenerated: string;
}

export interface DashboardStats {
  totalExtensions: number;
  activeUsers: number;
  sectors: number;
  regions: number;
  growthRate: number;
  onlineUsers: number;
  busyUsers: number;
}
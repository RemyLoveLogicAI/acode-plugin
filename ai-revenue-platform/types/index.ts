export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  totalInvested: number;
  totalEarned: number;
  joinedAt: Date;
}

export interface Investment {
  id: string;
  userId: string;
  amount: number;
  strategy: InvestmentStrategy;
  status: 'active' | 'paused' | 'completed';
  createdAt: Date;
  currentValue: number;
  totalReturn: number;
  returnPercentage: number;
}

export type InvestmentStrategy = 
  | 'balanced'
  | 'aggressive'
  | 'conservative'
  | 'ai-optimized';

export interface AIAgent {
  id: string;
  name: string;
  type: AgentType;
  status: 'active' | 'idle' | 'processing' | 'paused';
  performance: number;
  tasksCompleted: number;
  revenue: number;
  efficiency: number;
  lastActivity: string;
  description: string;
}

export type AgentType = 
  | 'affiliate-marketing'
  | 'content-monetization'
  | 'micro-trading'
  | 'api-arbitrage'
  | 'automated-services';

export interface RevenueStream {
  id: string;
  name: string;
  type: AgentType;
  status: 'active' | 'inactive';
  revenue: number;
  growth: number;
  lastUpdate: Date;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'earning' | 'investment';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
  description: string;
}

export interface DashboardStats {
  totalBalance: number;
  totalInvested: number;
  totalEarnings: number;
  activeAgents: number;
  dailyRevenue: number;
  monthlyRevenue: number;
  roi: number;
  growthRate: number;
}

export interface ChartDataPoint {
  time: string;
  value: number;
  label?: string;
}

export interface ActivityLog {
  id: string;
  agentId: string;
  agentName: string;
  action: string;
  revenue: number;
  timestamp: Date;
  status: 'success' | 'pending' | 'failed';
}

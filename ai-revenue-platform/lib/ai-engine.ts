import { AIAgent, AgentType, ActivityLog, RevenueStream } from '@/types';

export class AIRevenueEngine {
  private static instance: AIRevenueEngine;
  private agents: Map<string, AIAgent> = new Map();
  private activityLogs: ActivityLog[] = [];
  private revenueStreams: Map<string, RevenueStream> = new Map();

  private constructor() {
    this.initializeAgents();
    this.initializeRevenueStreams();
  }

  static getInstance(): AIRevenueEngine {
    if (!AIRevenueEngine.instance) {
      AIRevenueEngine.instance = new AIRevenueEngine();
    }
    return AIRevenueEngine.instance;
  }

  private initializeAgents(): void {
    const agentConfigs: Array<{type: AgentType; name: string; description: string}> = [
      {
        type: 'affiliate-marketing',
        name: 'Affiliate Bot Alpha',
        description: 'Automated product promotion and commission generation'
      },
      {
        type: 'content-monetization',
        name: 'Content Creator AI',
        description: 'AI-generated content with ad revenue optimization'
      },
      {
        type: 'micro-trading',
        name: 'Trading Algorithm X',
        description: 'High-frequency micro-trading with risk management'
      },
      {
        type: 'api-arbitrage',
        name: 'Arbitrage Scanner',
        description: 'Real-time price difference detection across platforms'
      },
      {
        type: 'automated-services',
        name: 'Service Provider Bot',
        description: 'Automated micro-service delivery and fulfillment'
      }
    ];

    agentConfigs.forEach((config, index) => {
      const agent: AIAgent = {
        id: `agent-${index + 1}`,
        name: config.name,
        type: config.type,
        status: 'active',
        performance: 75 + Math.random() * 20,
        tasksCompleted: Math.floor(Math.random() * 500) + 100,
        revenue: Math.random() * 50 + 10,
        efficiency: 80 + Math.random() * 15,
        lastActivity: this.getRandomActivity(config.type),
        description: config.description
      };
      this.agents.set(agent.id, agent);
    });
  }

  private initializeRevenueStreams(): void {
    this.agents.forEach(agent => {
      const stream: RevenueStream = {
        id: `stream-${agent.id}`,
        name: agent.name,
        type: agent.type,
        status: 'active',
        revenue: agent.revenue,
        growth: (Math.random() * 30) - 5,
        lastUpdate: new Date()
      };
      this.revenueStreams.set(stream.id, stream);
    });
  }

  private getRandomActivity(type: AgentType): string {
    const activities: Record<AgentType, string[]> = {
      'affiliate-marketing': [
        'Promoted tech product - $2.50 commission',
        'Generated affiliate link clicks',
        'Optimized product placement',
        'Converted 3 sales - $7.80 earned'
      ],
      'content-monetization': [
        'Published AI-generated article',
        'Optimized ad placement - $1.20',
        'Content reached 1.2K views',
        'Generated sponsored content'
      ],
      'micro-trading': [
        'Executed 15 micro-trades',
        'Profit from price fluctuation: $3.40',
        'Risk-adjusted position closed',
        'Market opportunity detected'
      ],
      'api-arbitrage': [
        'Price difference detected: $0.80',
        'Arbitrage opportunity executed',
        'Cross-platform sync completed',
        'Profit margin secured: $1.50'
      ],
      'automated-services': [
        'Completed 5 micro-tasks',
        'Service delivery automated',
        'Client request fulfilled - $4.20',
        'Quality check passed'
      ]
    };

    const typeActivities = activities[type];
    return typeActivities[Math.floor(Math.random() * typeActivities.length)];
  }

  calculateRevenue(investmentAmount: number, hoursActive: number): number {
    const baseRate = 0.015;
    const randomFactor = 0.8 + Math.random() * 0.4;
    const timeMultiplier = Math.min(hoursActive / 24, 5);
    
    return investmentAmount * baseRate * randomFactor * timeMultiplier;
  }

  simulateAgentActivity(investmentAmount: number): ActivityLog {
    const agentsArray = Array.from(this.agents.values());
    const randomAgent = agentsArray[Math.floor(Math.random() * agentsArray.length)];
    
    const revenue = (Math.random() * 5 + 0.5) * (investmentAmount / 10);
    
    const activity: ActivityLog = {
      id: `activity-${Date.now()}-${Math.random()}`,
      agentId: randomAgent.id,
      agentName: randomAgent.name,
      action: this.getRandomActivity(randomAgent.type),
      revenue: parseFloat(revenue.toFixed(2)),
      timestamp: new Date(),
      status: Math.random() > 0.1 ? 'success' : 'pending'
    };

    this.activityLogs.unshift(activity);
    if (this.activityLogs.length > 50) {
      this.activityLogs.pop();
    }

    randomAgent.revenue += revenue;
    randomAgent.tasksCompleted += 1;
    randomAgent.lastActivity = activity.action;

    const stream = this.revenueStreams.get(`stream-${randomAgent.id}`);
    if (stream) {
      stream.revenue += revenue;
      stream.lastUpdate = new Date();
    }

    return activity;
  }

  getAgents(): AIAgent[] {
    return Array.from(this.agents.values());
  }

  getRevenueStreams(): RevenueStream[] {
    return Array.from(this.revenueStreams.values());
  }

  getRecentActivities(limit: number = 10): ActivityLog[] {
    return this.activityLogs.slice(0, limit);
  }

  updateAgentStatus(agentId: string, status: AIAgent['status']): void {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = status;
    }
  }

  resetAgentMetrics(): void {
    this.agents.forEach(agent => {
      agent.revenue = 0;
      agent.tasksCompleted = 0;
    });
    this.activityLogs = [];
  }
}

export const aiEngine = AIRevenueEngine.getInstance();

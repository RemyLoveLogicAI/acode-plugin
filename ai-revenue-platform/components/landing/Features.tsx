import React from 'react';
import Card from '@/components/ui/Card';

const features = [
  {
    title: 'Affiliate Marketing Bot',
    description: 'Automated product promotion across multiple platforms with intelligent targeting and commission optimization.',
    icon: '🎯'
  },
  {
    title: 'Content Monetization AI',
    description: 'Generate and publish AI-powered content with automatic ad placement and revenue optimization.',
    icon: '📝'
  },
  {
    title: 'Micro-Trading Algorithm',
    description: 'Execute high-frequency micro-trades with advanced risk management and profit maximization.',
    icon: '📈'
  },
  {
    title: 'API Arbitrage Scanner',
    description: 'Detect and exploit price differences across platforms in real-time for guaranteed profits.',
    icon: '🔍'
  },
  {
    title: 'Automated Services',
    description: 'AI-powered micro-service delivery with automatic client matching and fulfillment.',
    icon: '⚡'
  },
  {
    title: 'Smart Risk Management',
    description: 'Intelligent portfolio balancing and risk assessment to protect your investment.',
    icon: '🛡️'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">AI-Powered</span> Revenue Streams
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Multiple autonomous agents working 24/7 to maximize your returns through diverse revenue channels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover glow>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Invest Your Seed Capital',
    description: 'Start with just $5-$20. Choose your risk tolerance and investment strategy.',
    color: 'from-primary to-primary-dark'
  },
  {
    number: '02',
    title: 'AI Agents Activate',
    description: 'Our intelligent agents analyze opportunities and deploy across multiple revenue streams.',
    color: 'from-secondary to-secondary-dark'
  },
  {
    number: '03',
    title: 'Autonomous Operations',
    description: 'Agents work 24/7, executing trades, creating content, and generating commissions.',
    color: 'from-accent to-accent-dark'
  },
  {
    number: '04',
    title: 'Watch Revenue Grow',
    description: 'Monitor real-time earnings, withdraw anytime, or reinvest for compound growth.',
    color: 'from-primary to-secondary'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400">
            Four simple steps to autonomous revenue generation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-effect rounded-xl p-6 h-full card-hover">
                <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-primary text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

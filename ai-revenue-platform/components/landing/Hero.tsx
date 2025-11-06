'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full glass-effect text-primary text-sm font-semibold border border-primary/30">
            🚀 Revolutionary AI Revenue Generation
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Turn <span className="text-gradient">$5-$20</span> Into
          <br />
          <span className="text-gradient">Autonomous Revenue</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Leverage cutting-edge AI agents to multiply your micro-investment through 
          intelligent automation, multiple revenue streams, and 24/7 autonomous operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/dashboard">
            <Button size="lg" className="w-full sm:w-auto">
              Start Earning Now
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { value: '5+', label: 'AI Agents' },
            { value: '24/7', label: 'Automation' },
            { value: '15%+', label: 'Avg. ROI' },
            { value: '$50K+', label: 'Generated' }
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 card-hover">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

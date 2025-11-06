import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <footer className="relative z-10 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <span className="text-lg font-bold text-gradient">AI Revenue Platform</span>
          </div>
          <p className="text-gray-400 mb-4">
            Revolutionary autonomous revenue generation powered by cutting-edge AI
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 AI Revenue Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

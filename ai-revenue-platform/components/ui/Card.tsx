import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = false, glow = false }: CardProps) {
  const hoverClass = hover ? 'card-hover' : '';
  const glowClass = glow ? 'glow-border' : '';
  
  return (
    <div className={`glass-effect rounded-xl p-6 ${hoverClass} ${glowClass} ${className}`}>
      {children}
    </div>
  );
}

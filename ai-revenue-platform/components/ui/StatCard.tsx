'use client';

import React from 'react';
import { formatCurrency, formatPercentage } from '@/utils/formatters';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  prefix?: string;
  isCurrency?: boolean;
}

export default function StatCard({ title, value, change, icon, prefix = '', isCurrency = false }: StatCardProps) {
  const displayValue = isCurrency && typeof value === 'number' 
    ? formatCurrency(value) 
    : value;

  return (
    <div className="glass-effect rounded-xl p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="text-gray-400 text-sm font-medium">{title}</div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold text-white mb-1">
            {prefix}{displayValue}
          </div>
          {change !== undefined && (
            <div className={`text-sm font-medium ${change >= 0 ? 'text-accent' : 'text-red-500'}`}>
              {formatPercentage(change)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

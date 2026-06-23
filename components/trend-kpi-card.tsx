'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface TrendKPICardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend: 'up' | 'down' | 'stable';
  trendPercent: number;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

const colorStyles = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
  red: 'from-red-500 to-red-600',
  purple: 'from-purple-500 to-purple-600',
};

const bgColorStyles = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  orange: 'bg-orange-50 border-orange-200',
  red: 'bg-red-50 border-red-200',
  purple: 'bg-purple-50 border-purple-200',
};

export function TrendKPICard({
  title,
  value,
  unit = '',
  trend,
  trendPercent,
  description,
  icon,
  color,
}: TrendKPICardProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-600 bg-green-100';
    if (trend === 'down') return 'text-red-600 bg-red-100';
    return 'text-slate-600 bg-slate-100';
  };

  return (
    <div
      className={`${bgColorStyles[color]} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
        isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } transform`}
    >
      {/* Header with icon and title */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
        </div>
        <div
          className={`p-3 rounded-lg bg-gradient-to-br ${colorStyles[color]} text-white`}
        >
          {icon}
        </div>
      </div>

      {/* Value section */}
      <div className="mb-4">
        <p className="text-3xl font-bold text-slate-900">
          {value}
          {unit && <span className="text-lg ml-1 text-slate-600">{unit}</span>}
        </p>
      </div>

      {/* Trend indicator */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${getTrendColor()}`}>
          {getTrendIcon()}
          <span>{Math.abs(trendPercent)}%</span>
        </div>
        <span className="text-xs text-slate-600">vs last period</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  );
}

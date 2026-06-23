'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, Zap, BarChart3 } from 'lucide-react';

interface Metric {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

const metrics: Metric[] = [
  {
    label: 'Total Records Processed',
    value: '2.4M',
    change: '+18% from last week',
    trend: 'up',
    icon: <Activity className="w-5 h-5" />,
    color: 'from-blue-600 to-cyan-600'
  },
  {
    label: 'Classification Accuracy',
    value: '94.2%',
    change: '+2.1% improvement',
    trend: 'up',
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'from-purple-600 to-pink-600'
  },
  {
    label: 'Processing Speed',
    value: '12K/sec',
    change: '+8% faster',
    trend: 'up',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-orange-600 to-red-600'
  },
  {
    label: 'System Uptime',
    value: '99.9%',
    change: 'Stable',
    trend: 'stable',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'from-green-600 to-emerald-600'
  }
];

export function PipelineMetrics() {
  const [displayValues, setDisplayValues] = useState<(string | number)[]>(metrics.map(() => 0));

  useEffect(() => {
    // Animate counter from 0 to final value
    const timers = metrics.map((metric, idx) => {
      const finalValue = metric.value;
      const isPercentage = typeof finalValue === 'string' && finalValue.includes('%');
      const isK = typeof finalValue === 'string' && finalValue.includes('K');
      const numValue = isPercentage ? parseFloat(finalValue) : isK ? parseFloat(finalValue) * 1000 : parseInt(finalValue.toString().replace(/M|K/, ''));
      
      const startTime = Date.now();
      const duration = 1500; // 1.5 seconds

      const animateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * numValue);
        
        let displayValue: string | number;
        if (isPercentage) {
          displayValue = `${(progress * numValue).toFixed(1)}%`;
        } else if (isK) {
          displayValue = `${(progress * numValue / 1000).toFixed(1)}K`;
        } else if (finalValue.toString().includes('M')) {
          displayValue = `${(progress * numValue / 1000000).toFixed(1)}M`;
        } else {
          displayValue = current;
        }

        setDisplayValues(prev => {
          const newValues = [...prev];
          newValues[idx] = displayValue;
          return newValues;
        });

        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        } else {
          setDisplayValues(prev => {
            const newValues = [...prev];
            newValues[idx] = finalValue;
            return newValues;
          });
        }
      };

      animateCounter();
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="w-full mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Live Platform Metrics</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:scale-105"
          >
            {/* Background gradient that appears on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} text-white p-2.5 mb-4 flex items-center justify-center shadow-md`}>
                {metric.icon}
              </div>

              {/* Label */}
              <p className="text-sm font-medium text-slate-600 mb-2">{metric.label}</p>

              {/* Value with animation */}
              <div className="flex items-baseline gap-2 mb-3">
                <div className="text-3xl font-bold text-slate-900 tabular-nums">
                  {displayValues[idx]}
                </div>
              </div>

              {/* Change indicator */}
              <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full w-fit ${
                metric.trend === 'up' ? 'bg-green-100 text-green-700' : metric.trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
              }`}>
                <TrendingUp className={`w-3 h-3 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                <span>{metric.change}</span>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{
              animation: 'shimmer 3s infinite'
            }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

'use client';

import React from 'react';
import { AlertCircle, TrendingUp, ArrowRight } from 'lucide-react';

interface TrendAlertCardProps {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  trend: number;
  category: string;
  action?: string;
}

const severityStyles = {
  high: 'bg-red-50 border-red-200 text-red-900',
  medium: 'bg-orange-50 border-orange-200 text-orange-900',
  low: 'bg-yellow-50 border-yellow-200 text-yellow-900',
};

const severityBadgeStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-orange-100 text-orange-700',
  low: 'bg-yellow-100 text-yellow-700',
};

const severityIconStyles = {
  high: 'text-red-600',
  medium: 'text-orange-600',
  low: 'text-yellow-600',
};

export function TrendAlertCard({
  title,
  description,
  severity,
  trend,
  category,
  action = 'Review Details',
}: TrendAlertCardProps) {
  return (
    <div
      className={`${severityStyles[severity]} border rounded-xl p-5 hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${severityBadgeStyles[severity]}`}>
          <AlertCircle className={`w-5 h-5 ${severityIconStyles[severity]}`} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-sm">{title}</h4>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${severityBadgeStyles[severity]}`}
            >
              {severity === 'high'
                ? 'Critical'
                : severity === 'medium'
                  ? 'Warning'
                  : 'Notice'}
            </span>
          </div>

          <p className="text-sm opacity-90 mb-3">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium opacity-75">Category:</span>
              <span className="text-xs font-semibold">{category}</span>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white bg-opacity-40">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs font-medium">+{trend}%</span>
              </div>
            </div>

            <button className="flex items-center gap-1 text-xs font-semibold opacity-75 hover:opacity-100 transition-opacity">
              {action}
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

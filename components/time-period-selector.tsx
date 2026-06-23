'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

type TimePeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly';

interface TimePeriodSelectorProps {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

export function TimePeriodSelector({
  selectedPeriod,
  onPeriodChange,
}: TimePeriodSelectorProps) {
  const periods: Array<{ label: string; value: TimePeriod }> = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
  ];

  return (
    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl">
      <Calendar className="w-5 h-5 text-slate-600" />
      <span className="text-sm font-medium text-slate-700">Time Period:</span>
      <div className="flex gap-2">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => onPeriodChange(period.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedPeriod === period.value
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>
    </div>
  );
}

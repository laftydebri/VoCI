'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface SentimentBreakdownProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

export function SentimentBreakdown({ data }: SentimentBreakdownProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">Sentiment Distribution</h3>
        <p className="text-sm text-slate-600 mt-1">Breakdown of customer sentiment across all feedback</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chart */}
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${((value / total) * 100).toFixed(1)}%`}
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#f1f5f9',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-center gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-slate-900">{item.name}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{item.value}</p>
                <p className="text-xs text-slate-600">
                  {((item.value / total) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

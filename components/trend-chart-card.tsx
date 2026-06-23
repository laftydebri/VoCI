'use client';

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TrendChartCardProps {
  title: string;
  description: string;
  data: any[];
  type: 'line' | 'bar';
  lines?: Array<{
    key: string;
    name: string;
    color: string;
  }>;
}

export function TrendChartCard({
  title,
  description,
  data,
  type,
  lines = [],
}: TrendChartCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {type === 'line' ? (
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px',
                color: '#f1f5f9',
              }}
            />
            <Legend />
            {lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                name={line.name}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        ) : (
          <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px',
                color: '#f1f5f9',
              }}
            />
            <Legend />
            {lines.map((line) => (
              <Bar
                key={line.key}
                dataKey={line.key}
                fill={line.color}
                name={line.name}
              />
            ))}
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { TrendKPICard } from '@/components/trend-kpi-card';
import { TrendChartCard } from '@/components/trend-chart-card';
import { TrendAlertCard } from '@/components/trend-alert-card';
import { SentimentBreakdown } from '@/components/sentiment-breakdown';
import { TimePeriodSelector } from '@/components/time-period-selector';
import { Users, MessageSquare, TrendingUp, Zap } from 'lucide-react';

type TimePeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly';

export default function TrendDashboard() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('weekly');

  // Sample data for trends
  const sentimentTrendData = [
    { name: 'Week 1', positive: 65, neutral: 25, negative: 10 },
    { name: 'Week 2', positive: 72, neutral: 20, negative: 8 },
    { name: 'Week 3', positive: 68, neutral: 24, negative: 8 },
    { name: 'Week 4', positive: 75, neutral: 18, negative: 7 },
    { name: 'Week 5', positive: 78, neutral: 17, negative: 5 },
    { name: 'Week 6', positive: 82, neutral: 14, negative: 4 },
  ];

  const volumeTrendData = [
    { name: 'Week 1', feedback: 245 },
    { name: 'Week 2', feedback: 312 },
    { name: 'Week 3', feedback: 298 },
    { name: 'Week 4', feedback: 405 },
    { name: 'Week 5', feedback: 418 },
    { name: 'Week 6', feedback: 512 },
  ];

  const categoryDistribution = [
    { name: 'Product Quality', value: 45, color: '#3b82f6' },
    { name: 'Customer Service', value: 32, color: '#10b981' },
    { name: 'Pricing', value: 18, color: '#f59e0b' },
    { name: 'Delivery', value: 15, color: '#ef4444' },
    { name: 'Other', value: 10, color: '#8b5cf6' },
  ];

  const sentimentData = [
    { name: 'Positive', value: 425, color: '#10b981' },
    { name: 'Neutral', value: 185, color: '#94a3b8' },
    { name: 'Negative', value: 60, color: '#ef4444' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Trend Analysis Dashboard</h1>
          <p className="text-lg text-slate-600">
            Real-time insights from your ML-powered feedback analysis pipeline
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="mb-8">
          <TimePeriodSelector
            selectedPeriod={timePeriod}
            onPeriodChange={setTimePeriod}
          />
        </div>

        {/* KPI Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TrendKPICard
              title="Total Feedback"
              value="2,145"
              trend="up"
              trendPercent={12.5}
              description="Customer feedback entries processed"
              icon={<Users className="w-6 h-6" />}
              color="blue"
            />
            <TrendKPICard
              title="Positive Sentiment"
              value="82%"
              trend="up"
              trendPercent={8.2}
              description="Percentage of positive feedback"
              icon={<TrendingUp className="w-6 h-6" />}
              color="green"
            />
            <TrendKPICard
              title="Avg Response Time"
              value="2.3"
              unit="hrs"
              trend="down"
              trendPercent={5.1}
              description="Average time to respond to feedback"
              icon={<Zap className="w-6 h-6" />}
              color="purple"
            />
            <TrendKPICard
              title="Classification Accuracy"
              value="94.2%"
              trend="up"
              trendPercent={3.7}
              description="ML model accuracy for categorization"
              icon={<MessageSquare className="w-6 h-6" />}
              color="orange"
            />
          </div>
        </section>

        {/* Charts Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Trend Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrendChartCard
              title="Sentiment Over Time"
              description="How customer sentiment has evolved"
              data={sentimentTrendData}
              type="line"
              lines={[
                { key: 'positive', name: 'Positive', color: '#10b981' },
                { key: 'neutral', name: 'Neutral', color: '#94a3b8' },
                { key: 'negative', name: 'Negative', color: '#ef4444' },
              ]}
            />
            <TrendChartCard
              title="Feedback Volume Trend"
              description="Number of feedback entries over time"
              data={volumeTrendData}
              type="bar"
              lines={[{ key: 'feedback', name: 'Feedback Count', color: '#3b82f6' }]}
            />
          </div>
        </section>

        {/* Sentiment Breakdown and Alerts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Insights & Distribution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <SentimentBreakdown data={sentimentData} />
            </div>

            {/* Alerts and Key Metrics */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Emerging Issues</h3>
                <div className="space-y-3">
                  <TrendAlertCard
                    title="Product Quality Issues Rising"
                    description="Quality-related complaints increased by 15% this week. Multiple mentions of defects reported."
                    severity="high"
                    trend={15}
                    category="Product"
                    action="View Details"
                  />
                  <TrendAlertCard
                    title="Delivery Times Improving"
                    description="Average delivery time decreased by 8%. Customers are noticing faster shipping."
                    severity="low"
                    trend={-8}
                    category="Logistics"
                    action="Celebrate"
                  />
                  <TrendAlertCard
                    title="Support Response Time Alert"
                    description="Support team response time increased by 12%. Consider staffing adjustments."
                    severity="medium"
                    trend={12}
                    category="Support"
                    action="Review"
                  />
                </div>
              </div>

              {/* Category Distribution */}
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Category Distribution</h3>
                <div className="space-y-3">
                  {categoryDistribution.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-sm font-medium text-slate-700">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">{category.value}</p>
                        <p className="text-xs text-slate-600">
                          {((category.value / 120) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Actionable Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-slate-900 mb-2">Priority 1: Address Quality Issues</h3>
                <p className="text-sm text-slate-600">
                  With quality complaints rising 15%, conduct an immediate audit of production processes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-slate-900 mb-2">Priority 2: Support Staffing</h3>
                <p className="text-sm text-slate-600">
                  Consider additional support staff to maintain response time SLAs amid volume increase.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-slate-900 mb-2">Priority 3: Scale Success</h3>
                <p className="text-sm text-slate-600">
                  Replicate the successful delivery improvements across all fulfillment centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-8 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            Dashboard updates every 30 minutes • Last update: {new Date().toLocaleTimeString()}
          </p>
        </section>
      </main>
    </div>
  );
}

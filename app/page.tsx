'use client';

import React from 'react';
import { ArrowRight, Database, Brain, TrendingUp, BarChart3, MessageSquare, Zap, CheckCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Page() {
  const trendData = [
    { period: 'Q1 2024', productQuality: 120, delivery: 45, service: 38, sentiment: 78 },
    { period: 'Q2 2024', productQuality: 150, delivery: 60, service: 52, sentiment: 73 },
    { period: 'Q3 2024', productQuality: 210, delivery: 95, service: 68, sentiment: 65 },
    { period: 'Q4 2024', productQuality: 280, delivery: 140, service: 95, sentiment: 58 }
  ];

  const themeData = [
    { theme: 'Device Battery Life', 2024: 320, 2025: 610, change: '+91%', color: '#3b82f6' },
    { theme: 'App Login Issues', 2024: 80, 2025: 340, change: '+325%', color: '#ef4444' },
    { theme: 'Product Quality', 2024: 450, 2025: 390, change: '-13%', color: '#10b981' },
    { theme: 'Delivery Speed', 2024: 210, 2025: 185, change: '-12%', color: '#f59e0b' },
    { theme: 'Customer Support', 2024: 165, 2025: 201, change: '+22%', color: '#8b5cf6' }
  ];

  const sentimentData = [
    { name: 'Positive', value: 35, color: '#10b981' },
    { name: 'Neutral', value: 42, color: '#94a3b8' },
    { name: 'Negative', value: 23, color: '#ef4444' }
  ];

  const ProcessStep = ({ icon: Icon, title, description, number }: any) => (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 p-3 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-xs font-bold text-blue-600 mb-1">STEP {number}</div>
      <h3 className="font-bold text-sm text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-xs font-bold text-blue-600">AI-POWERED INTELLIGENCE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Feedback Intelligence Platform
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transform hundreds of thousands of consumer feedback into actionable insights for product development and strategy
          </p>
        </div>

        {/* Main Presentation Slide */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-12">
          
          {/* Process Flow */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">End-to-End Processing Pipeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <ProcessStep 
                icon={Database}
                title="Data Ingestion"
                description="Collect feedback from surveys, reviews, social media, support tickets"
                number="1"
              />
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-slate-300" />
              </div>
              <ProcessStep 
                icon={Brain}
                title="NLP Classification"
                description="Auto-categorize by topic: Quality, Delivery, Service, Pricing, Tech Issues"
                number="2"
              />
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-slate-300" />
              </div>
              <ProcessStep 
                icon={MessageSquare}
                title="Sentiment Analysis"
                description="Assign sentiment scores and emotional intensity to each feedback"
                number="3"
              />
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-slate-300" />
              </div>
              <ProcessStep 
                icon={Zap}
                title="Topic Modeling"
                description="Discover emerging patterns using LDA, BERTopic, embeddings"
                number="4"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-slate-900">Trend Detection</h4>
                </div>
                <p className="text-sm text-slate-700">Track emerging themes over time with quarterly analysis</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-bold text-slate-900">Performance Metrics</h4>
                </div>
                <p className="text-sm text-slate-700">Monitor accuracy, precision, recall, F1, coherence scores</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                  <h4 className="font-bold text-slate-900">Action Intelligence</h4>
                </div>
                <p className="text-sm text-slate-700">Generate executive summaries and recommendations</p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-slate-200 pt-12 mt-12">
            
            {/* Trend Analysis Charts */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Emerging Themes & Sentiment Tracking</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Sentiment Over Time */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Sentiment Trend (2024)</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="period" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }} />
                      <Legend />
                      <Line type="monotone" dataKey="sentiment" stroke="#3b82f6" strokeWidth={2} name="Positive %" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Complaint Categories */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Complaint Volume by Category</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="period" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }} />
                      <Legend />
                      <Bar dataKey="productQuality" fill="#3b82f6" name="Product Quality" />
                      <Bar dataKey="delivery" fill="#10b981" name="Delivery" />
                      <Bar dataKey="service" fill="#f59e0b" name="Service" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Emerging Themes Table */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                <h4 className="font-bold text-slate-900 mb-4">Top Emerging Themes & Growth Rate</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-300">
                        <th className="text-left py-2 px-3 font-bold text-slate-900">Theme</th>
                        <th className="text-center py-2 px-3 font-bold text-slate-900">2024 Count</th>
                        <th className="text-center py-2 px-3 font-bold text-slate-900">2025 Count</th>
                        <th className="text-center py-2 px-3 font-bold text-slate-900">Change</th>
                        <th className="text-center py-2 px-3 font-bold text-slate-900">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {themeData.map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-200 hover:bg-slate-100 transition">
                          <td className="py-3 px-3 text-slate-900 font-medium">{item.theme}</td>
                          <td className="text-center py-3 px-3 text-slate-700">{item[2024]}</td>
                          <td className="text-center py-3 px-3 text-slate-700">{item[2025]}</td>
                          <td className="text-center py-3 px-3">
                            <span className={`font-bold ${item.change.includes('+') ? 'text-red-600' : 'text-green-600'}`}>
                              {item.change}
                            </span>
                          </td>
                          <td className="text-center py-3 px-3">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              item.change.includes('+') 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {item.change.includes('+') ? '⚠ Rising' : '✓ Improving'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Key Metrics & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Performance Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                    <span className="text-slate-700 font-medium">Classification Accuracy</span>
                    <span className="text-blue-600 font-bold">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                    <span className="text-slate-700 font-medium">Sentiment Precision</span>
                    <span className="text-blue-600 font-bold">91.8%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                    <span className="text-slate-700 font-medium">Topic Coherence Score</span>
                    <span className="text-blue-600 font-bold">0.68</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                    <span className="text-slate-700 font-medium">Forecast Accuracy (MAE)</span>
                    <span className="text-blue-600 font-bold">±8.5%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Modern Architecture Stack</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-slate-900 font-medium">Data Layer</p>
                    <p className="text-sm text-slate-600">Scalable database with real-time ingestion</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded border border-purple-200">
                    <p className="text-slate-900 font-medium">AI/ML Pipeline</p>
                    <p className="text-sm text-slate-600">LLM embeddings, BERTopic, LDA clustering</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded border border-green-200">
                    <p className="text-slate-900 font-medium">Analytics Engine</p>
                    <p className="text-sm text-slate-600">Real-time trend detection & forecasting</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded border border-orange-200">
                    <p className="text-slate-900 font-medium">Visualization Dashboard</p>
                    <p className="text-sm text-slate-600">Interactive insights & executive reports</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sentiment Distribution */}
            <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Current Sentiment Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="space-y-3">
                    {sentimentData.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                        <span className="text-slate-900 font-medium">{item.name}:</span>
                        <span className="ml-auto text-slate-700 font-bold text-lg">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-4 pt-4 border-t border-slate-300">
                    Overall trend shows declining positive sentiment, indicating need for urgent product improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Faster Decision Making</h3>
            <p className="text-slate-600 text-sm">Identify trends in real-time rather than quarterly reviews, enabling agile response</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Data-Driven Strategy</h3>
            <p className="text-slate-600 text-sm">Make product decisions backed by quantifiable customer insights and patterns</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Competitive Advantage</h3>
            <p className="text-slate-600 text-sm">Stay ahead by automatically discovering emerging customer needs before competitors</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-slate-600 text-sm">
            Processing thousands of feedback entries • Real-time trend detection • Enterprise-grade accuracy
          </p>
        </div>
      </div>
    </div>
  );
}

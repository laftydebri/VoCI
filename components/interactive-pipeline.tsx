'use client';

import React, { useState, useEffect } from 'react';
import { Database, Brain, MessageSquare, Zap, ChevronDown, TrendingUp, BarChart3, Sparkles } from 'lucide-react';

interface PipelineStep {
  id: string;
  number: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  color: string;
  gradient: string;
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'ingestion',
    number: 1,
    title: 'Data Ingestion',
    icon: <Database className="w-6 h-6" />,
    description: 'Collect feedback from surveys, reviews, social media, support tickets',
    details: [
      'Real-time data streaming',
      'Multi-source integration',
      'Automatic deduplication',
      'Quality validation'
    ],
    color: 'from-blue-600 to-cyan-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200',
    metrics: [
      { label: 'Records Processed', value: '2.4M', trend: '+18%' },
      { label: 'Sources Connected', value: '12', trend: '+3' },
      { label: 'Avg Latency', value: '240ms', trend: '-12%' }
    ]
  },
  {
    id: 'classification',
    number: 2,
    title: 'NLP Classification',
    icon: <Brain className="w-6 h-6" />,
    description: 'Auto-categorize by topic: Quality, Delivery, Service, Pricing, Tech Issues',
    details: [
      'Multi-label classification',
      'Entity recognition',
      'Intent detection',
      'Custom taxonomy support'
    ],
    color: 'from-purple-600 to-pink-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
    metrics: [
      { label: 'Accuracy', value: '94.2%', trend: '+2.1%' },
      { label: 'Categories', value: '24', trend: 'stable' },
      { label: 'Processing Speed', value: '12K/sec', trend: '+8%' }
    ]
  },
  {
    id: 'sentiment',
    number: 3,
    title: 'Sentiment Analysis',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Assign sentiment scores and emotional intensity to each feedback',
    details: [
      'Multi-dimensional sentiment',
      'Emotion detection',
      'Intensity scoring',
      'Contextual analysis'
    ],
    color: 'from-orange-600 to-red-600',
    gradient: 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200',
    metrics: [
      { label: 'Precision', value: '91.8%', trend: '+1.5%' },
      { label: 'Emotions Tracked', value: '8', trend: 'stable' },
      { label: 'Avg Confidence', value: '0.87', trend: '+0.03' }
    ]
  },
  {
    id: 'modeling',
    number: 4,
    title: 'Topic Modeling',
    icon: <Zap className="w-6 h-6" />,
    description: 'Discover emerging patterns using LDA, BERTopic, embeddings',
    details: [
      'Pattern discovery',
      'Trend forecasting',
      'Anomaly detection',
      'Recommendation generation'
    ],
    color: 'from-green-600 to-emerald-600',
    gradient: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
    metrics: [
      { label: 'Topics Identified', value: '47', trend: '+5' },
      { label: 'Coherence Score', value: '0.68', trend: '+0.04' },
      { label: 'Predictions', value: '94.1%', trend: '+3.2%' }
    ]
  }
];

export function InteractivePipeline() {
  const [expandedStep, setExpandedStep] = useState<string | null>('ingestion');
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">End-to-End Processing Pipeline</h2>
        </div>
        <p className="text-slate-600 text-lg max-w-3xl">
          Click on any step to explore its capabilities, metrics, and real-time performance indicators
        </p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-4 gap-4 mb-8">
        {pipelineSteps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <button
              onClick={() => setExpandedStep(step.id)}
              className={`relative group transition-all duration-300 transform hover:scale-105 focus:outline-none ${
                expandedStep === step.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}
            >
              <div className={`${step.gradient} rounded-xl border-2 p-6 h-full backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}>
                {/* Gradient Background Animation */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} text-white p-3 mb-4 flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">STEP {step.number}</div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 text-left">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-600 text-left mb-4">{step.description}</p>
                  
                  {/* Expand Indicator */}
                  <div className={`flex items-center justify-between text-xs font-semibold text-slate-700 transition-all duration-300 ${expandedStep === step.id ? 'text-blue-600' : 'group-hover:text-blue-500'}`}>
                    <span>View Details</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedStep === step.id ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* Connector Line (hidden on last item) */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-slate-300 to-transparent hidden lg:block group-hover:from-blue-400 transition-colors duration-300" style={{
                    animation: animationComplete ? 'none' : 'slideIn 0.8s ease-out forwards'
                  }} />
                )}
              </div>
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile/Tablet Vertical Layout */}
      <div className="lg:hidden space-y-4 mb-8">
        {pipelineSteps.map((step) => (
          <button
            key={step.id}
            onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
            className="w-full text-left focus:outline-none"
          >
            <div className={`${step.gradient} rounded-xl border-2 p-6 transition-all duration-300 ${expandedStep === step.id ? 'ring-2 ring-offset-2 ring-blue-500 shadow-xl' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} text-white p-3 flex items-center justify-center shadow-lg flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">STEP {step.number}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${expandedStep === step.id ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Expanded Details Section */}
      {expandedStep && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-xl">
            {pipelineSteps.map((step) => (
              step.id === expandedStep && (
                <div key={step.id}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white p-4 flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">STEP {step.number}</div>
                      <h3 className="text-3xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-700 mb-8 max-w-3xl">{step.description}</p>

                  {/* Two Column Layout */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Details */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${step.color}`} />
                        Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-700">
                            <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-slate-600" />
                            </div>
                            <span className="font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${step.color}`} />
                        Live Metrics
                      </h4>
                      <div className="space-y-3">
                        {step.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-slate-300 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-700">{metric.label}</span>
                              {metric.trend && (
                                <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${
                                  metric.trend.includes('+') || metric.trend === 'stable'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {metric.trend.includes('+') && <TrendingUp className="w-3 h-3" />}
                                  {metric.trend}
                                </span>
                              )}
                            </div>
                            <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Summary */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
                    <div className="flex items-start gap-3">
                      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${step.color}`} />
                      <div>
                        <h5 className="font-bold text-slate-900 mb-2">Why This Step Matters</h5>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {step.id === 'ingestion' && 'High-quality data collection ensures accurate downstream analysis. Our multi-source integration handles 2.4M+ records daily with 99.9% uptime and automatic validation protocols.'}
                          {step.id === 'classification' && 'Precise topic classification enables targeted insights. With 94.2% accuracy and support for 24 categories, we ensure every piece of feedback is properly understood and actionable.'}
                          {step.id === 'sentiment' && 'Understanding emotional context reveals customer satisfaction trends. Our multi-dimensional approach captures not just positive/negative but also intensity and specific emotions, providing deeper insights.'}
                          {step.id === 'modeling' && 'Pattern discovery unlocks emerging opportunities. We identify trending topics before they become obvious, enabling proactive product strategy and competitive advantage.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

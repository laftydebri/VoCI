'use client';

import { Zap, Database, Brain, AlertCircle, Bell, BarChart3, Cog } from 'lucide-react';

export function CapabilitiesSection() {
  const capabilities = [
    { icon: Zap, title: 'Dynamic Trend Detection', description: 'Automated pattern discovery with adaptive thresholds' },
    { icon: Database, title: 'Multi-Source Integration', description: 'Consolidate FMS, inquiries, complaints into unified view' },
    { icon: Brain, title: 'Verbatim Analysis', description: 'Extract insights and themes from feedback text' },
    { icon: AlertCircle, title: 'Criticality Scoring', description: 'AI-powered severity assessment for prioritization' },
    { icon: Bell, title: 'Automated Notifications', description: 'Push alerts via Teams, email, or custom webhooks' },
    { icon: BarChart3, title: 'Dashboard Visualization', description: 'Power BI integration for executive dashboards' },
    { icon: Cog, title: 'Workflow Integration', description: 'Trigger QI/SQI processes automatically' },
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/20 border border-accent/50">
            <p className="text-sm font-medium text-accent">Core Capabilities</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What We Build</h2>
          <p className="text-xl text-foreground/70 mt-4">Key features that power intelligent decision-making</p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const colors = ['from-primary', 'from-secondary', 'from-accent'];
            const colorIdx = idx % 3;
            const bgColor = colors[colorIdx];

            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className={`mb-4 p-3 w-fit rounded-lg bg-gradient-to-br ${bgColor} to-background border border-primary/20 group-hover:border-primary/50 transition-all`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-foreground/70 text-sm">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

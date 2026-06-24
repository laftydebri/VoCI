'use client';

import { Database, Layers, Brain, TrendingUp, Bell, CheckSquare, Zap } from 'lucide-react';

export function ProcessFlowSection() {
  const steps = [
    { icon: Database, label: 'Collect Feedback', description: 'FMS, inquiries, complaints' },
    { icon: Layers, label: 'Consolidate', description: 'Data layer (CDLP)' },
    { icon: Brain, label: 'Classify & Analyze', description: 'ML / NLP / rules' },
    { icon: TrendingUp, label: 'Identify Trends', description: 'Dynamic criteria' },
    { icon: Bell, label: 'Notify', description: 'Push alerts' },
    { icon: CheckSquare, label: 'Assess', description: 'Human review' },
    { icon: Zap, label: 'Act', description: 'QI/SQI triggers' },
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/20 border border-accent/50">
            <p className="text-sm font-medium text-accent">Process Flow</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">End-to-End Intelligence Pipeline</h2>
          <p className="text-xl text-foreground/70 mt-4">From feedback ingestion to actionable insights</p>
        </div>

        {/* Process flow */}
        <div className="bg-card rounded-xl border border-border p-8 md:p-12">
          {/* Desktop flow */}
          <div className="hidden md:block overflow-x-auto">
            <div className="flex gap-4 min-w-max pb-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-center">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center mb-3 group hover:border-primary transition-all">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-sm font-semibold text-center">{step.label}</p>
                      <p className="text-xs text-foreground/60 text-center mt-1">{step.description}</p>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-4 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile flow - vertical */}
          <div className="md:hidden space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{step.label}</p>
                      <p className="text-sm text-foreground/60">{step.description}</p>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="ml-8 h-6 border-l-2 border-primary my-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Key insight box */}
        <div className="mt-12 p-6 rounded-lg bg-accent/10 border-l-4 border-accent">
          <p className="text-foreground/80">
            <span className="font-semibold">Key Differentiator:</span> Push-based notifications vs. pull-based dashboards — alerts reach decision-makers immediately when trends emerge.
          </p>
        </div>
      </div>
    </section>
  );
}

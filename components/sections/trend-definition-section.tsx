'use client';

import { CheckCircle2 } from 'lucide-react';

export function TrendDefinitionSection() {
  const definitions = [
    'Increase in routine issues that reaches critical threshold',
    'Cross-market signals indicating systemic problems',
    'Inquiry pattern changes suggesting product gaps',
    'Severity + frequency combinations in specific categories',
    'Geographic or batch-specific anomalies',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
            <p className="text-sm font-medium text-primary">Concept Definition</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What Do We Mean by "Trend"?</h2>
        </div>

        {/* Definition box */}
        <div className="rounded-xl p-8 md:p-12 bg-card border-2 border-primary/30 mb-12">
          <p className="text-lg text-foreground/80 mb-6">
            A trend is <span className="font-semibold">NOT</span> only pre-defined complaints. It&apos;s a dynamic signal that emerges from data:
          </p>

          <ul className="space-y-4">
            {definitions.map((def, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">{def}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key parameters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Market', 'Product', 'Severity', 'Frequency'].map((param, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
              <p className="font-semibold text-foreground">{param}</p>
              <p className="text-sm text-foreground/60 mt-1">Parameterized dimension</p>
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-12 p-6 rounded-lg bg-secondary/10 border border-secondary/30">
          <p className="text-foreground/80">
            <span className="font-semibold">Discovery & Training:</span> Trend definitions require discovery phase and model training with your QA teams to validate against historical patterns and business context.
          </p>
        </div>
      </div>
    </section>
  );
}

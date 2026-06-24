'use client';

import { Database, Layers, BarChart3, Bell } from 'lucide-react';

export function ArchitectureSection() {
  const sources = ['FMS', 'Consumer Feedback', 'QMS (Future)'];
  const outputs = ['Dashboard (Power BI)', 'Notifications (Teams/Email)', 'Workflow Triggers'];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50">
            <p className="text-sm font-medium text-secondary">System Design</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Simplified Architecture</h2>
          <p className="text-xl text-foreground/70 mt-4">Non-technical overview of the solution</p>
        </div>

        {/* Architecture diagram */}
        <div className="bg-card rounded-xl border-2 border-border p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {/* Sources */}
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-4">Data Sources</p>
              <div className="space-y-3">
                {sources.map((source, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 text-sm text-foreground/80">
                    {source}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-secondary font-bold text-2xl">→</div>
            </div>

            {/* Processing layer */}
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-4">Processing Layer</p>
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 text-center">
                <Layers className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Data Lake (CDLP)</p>
                <p className="text-xs text-foreground/60 mt-2">AI/ML/Rules</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-primary font-bold text-2xl">→</div>
            </div>

            {/* Outputs */}
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-4">Outputs</p>
              <div className="space-y-3">
                {outputs.map((output, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-sm text-foreground/80">
                    {output}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile flow */}
          <div className="md:hidden space-y-4 mt-6">
            <div className="text-center text-primary font-bold">↓</div>
            <p className="text-xs font-semibold text-primary uppercase text-center">Data Lake & Analytics</p>
            <div className="text-center text-primary font-bold">↓</div>
            <p className="text-xs font-semibold text-accent uppercase text-center">Insights & Alerts</p>
          </div>
        </div>

        {/* Key note */}
        <div className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/30">
          <p className="text-foreground/80">
            <span className="font-semibold">Note:</span> This is a non-technical overview emphasizing data flow and integration points, not infrastructure complexity.
          </p>
        </div>
      </div>
    </section>
  );
}

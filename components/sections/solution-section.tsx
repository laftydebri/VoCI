'use client';

import { TrendingUp, Zap } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
            <p className="text-sm font-medium text-primary">Our Approach</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Proposed Solution</h2>
          <p className="text-xl text-foreground/70 mt-4">Two core pillars for intelligent QA decision-making</p>
        </div>

        {/* Two pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Trend Analysis */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/30 hover:border-primary/60 transition-all group">
            <div className="mb-6 p-4 w-fit rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Trend Analysis Engine</h3>
            
            <p className="text-foreground/70 mb-6">
              Detect emerging patterns across markets, products, and feedback categories with dynamic, data-driven criteria.
            </p>

            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Move beyond static definitions and fixed thresholds</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Enable dynamic identification of emerging risks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Cross-market and cross-product signal detection</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>ML-powered pattern discovery</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: QA Integration */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-secondary/10 via-background to-background border-2 border-secondary/30 hover:border-secondary/60 transition-all group">
            <div className="mb-6 p-4 w-fit rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">QA Decision Integration</h3>
            
            <p className="text-foreground/70 mb-6">
              Translate insights into action through automated notifications, human-in-the-loop assessment, and workflow initiation.
            </p>

            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Real-time push notifications (Teams, email)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Support QI/SQI assessment and escalation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Bridge insights to business processes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Automated workflow triggers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

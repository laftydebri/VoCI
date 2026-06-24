'use client';

import { ArrowRight } from 'lucide-react';

export function PrototypeAppendixSection() {
  return (
    <section className="py-20 bg-background/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20">
            <p className="text-sm font-medium text-foreground/70">Interactive Prototype</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Working Prototype Reference</h2>
          <p className="text-xl text-foreground/70 mt-4">Explore the interactive pipeline, trend dashboard, and visualizations</p>
        </div>

        {/* Prototype cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Overview',
              description: 'Interactive end-to-end processing pipeline with animated metrics',
              href: '/',
              icon: '📊',
            },
            {
              title: 'Trend Dashboard',
              description: 'Real-time KPIs, trend charts, and emerging issue alerts',
              href: '/trend-dashboard',
              icon: '📈',
            },
            {
              title: 'Process Details',
              description: 'Deep dive into each stage of data preparation and analysis',
              href: '/data-preparation',
              icon: '⚙️',
            },
          ].map((proto, idx) => (
            <a
              key={idx}
              href={proto.href}
              className="p-6 rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-lg transition-all group"
            >
              <p className="text-3xl mb-3">{proto.icon}</p>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{proto.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{proto.description}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/30 text-center">
          <p className="text-foreground/80">
            <span className="font-semibold">Note:</span> The prototype below demonstrates the interactive capabilities and data visualization approach. In production, this would be powered by real feedback data sources and integrated with your enterprise systems.
          </p>
        </div>
      </div>
    </section>
  );
}

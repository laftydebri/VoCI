'use client';

import { X, Check } from 'lucide-react';

export function CurrentVsFutureSection() {
  const comparison = [
    { aspect: 'Analysis Method', today: 'Manual', future: 'Automated AI/ML' },
    { aspect: 'Trend Definition', today: 'Static thresholds', future: 'Dynamic, data-driven' },
    { aspect: 'Data Consolidation', today: 'Fragmented systems', future: 'Unified data lake' },
    { aspect: 'Decision Making', today: 'Pull-based dashboards', future: 'Push-based alerts' },
    { aspect: 'Escalation', today: 'Manual review', future: 'Automated workflows' },
    { aspect: 'Speed', today: 'Days to weeks', future: 'Real-time' },
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
            <p className="text-sm font-medium text-primary">Evolution</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Today vs. Tomorrow</h2>
          <p className="text-xl text-foreground/70 mt-4">The transformation we're enabling</p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="pb-4 font-semibold text-foreground/80 w-1/3">Aspect</th>
                <th className="pb-4 font-semibold text-foreground/80 w-1/3">Today (2026)</th>
                <th className="pb-4 font-semibold text-foreground/80 w-1/3">Target (2027)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                  <td className="py-4 font-semibold text-foreground">{row.aspect}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="text-foreground/70">{row.today}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 font-medium">{row.future}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

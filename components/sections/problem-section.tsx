'use client';

import { AlertCircle, Database, BarChart3, Eye } from 'lucide-react';

export function ProblemSection() {
  const challenges = [
    {
      icon: Database,
      title: 'Fragmented Feedback',
      description: 'Consumer feedback scattered across FMS, inquiries, complaints, and multiple systems with no unified view.',
    },
    {
      icon: BarChart3,
      title: 'Manual Analysis',
      description: 'Over-reliance on manual Power BI analysis and static dashboards, slowing decision-making.',
    },
    {
      icon: AlertCircle,
      title: 'Undefined Trends',
      description: 'No clear definition of what constitutes a "trend" — static thresholds miss emerging signals.',
    },
    {
      icon: Eye,
      title: 'Hidden Signals',
      description: 'Critical business signals buried in routine feedback, requiring manual excavation by teams.',
    },
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50">
            <p className="text-sm font-medium text-destructive">Current Challenges</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">The Problem Today</h2>
          <p className="text-xl text-foreground/70 mt-4">Why current approaches fall short</p>
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:border-destructive/50 hover:shadow-lg transition-all group"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-destructive/20 group-hover:bg-destructive/30 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                <p className="text-foreground/70">{challenge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

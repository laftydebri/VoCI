'use client';

import { CheckCircle2, Circle } from 'lucide-react';

export function RoadmapSection() {
  const phase1 = [
    'Define trend logic with stakeholders',
    'Test models with pilot data',
    'Manual validation and refinement',
    'Gather feedback from QA teams',
  ];

  const phase2 = [
    'Integrate with IT systems (FMS, CDLP)',
    'Automate notification workflows',
    'Deploy production-grade infrastructure',
    'Scale across all markets and products',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
            <p className="text-sm font-medium text-primary">Timeline</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Implementation Roadmap</h2>
          <p className="text-xl text-foreground/70 mt-4">From prototype to production-ready solution</p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Phase 1 - 2026 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="sticky top-8 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>
              </div>

              <div>
                <div className="mb-8">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Phase 1</p>
                  <h3 className="text-3xl font-bold mt-2">Discovery & Prototype</h3>
                  <p className="text-foreground/70 mt-2">2026</p>
                </div>

                <div className="space-y-4">
                  {phase1.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-lg bg-card border border-primary/20 hover:border-primary/50 transition-all">
                      <Circle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 - 2027 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="sticky top-8 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="w-1 h-full bg-gradient-to-b from-secondary to-transparent"></div>
              </div>

              <div>
                <div className="mb-8">
                  <p className="text-sm font-semibold text-secondary uppercase tracking-wide">Phase 2</p>
                  <h3 className="text-3xl font-bold mt-2">Scale & Integrate</h3>
                  <p className="text-foreground/70 mt-2">2027</p>
                </div>

                <div className="space-y-4">
                  {phase2.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-lg bg-card border border-secondary/20 hover:border-secondary/50 transition-all">
                      <Circle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

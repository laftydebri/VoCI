'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { ProcessFlowSection } from '@/components/sections/process-flow-section';
import { TrendDefinitionSection } from '@/components/sections/trend-definition-section';
import { CapabilitiesSection } from '@/components/sections/capabilities-section';
import { CurrentVsFutureSection } from '@/components/sections/current-vs-future-section';
import { ArchitectureSection } from '@/components/sections/architecture-section';
import { RoadmapSection } from '@/components/sections/roadmap-section';
import { ClosingSection } from '@/components/sections/closing-section';
import { PrototypeAppendixSection } from '@/components/sections/prototype-appendix-section';
import { InteractivePipeline } from '@/components/interactive-pipeline';
import { PipelineMetrics } from '@/components/pipeline-metrics';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Business Narrative Sections */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessFlowSection />
      <TrendDefinitionSection />
      <CapabilitiesSection />
      <CurrentVsFutureSection />
      <ArchitectureSection />
      <RoadmapSection />
      <ClosingSection />
      
      {/* Prototype Appendix */}
      <PrototypeAppendixSection />
      
      {/* Technical Prototype Components - Appendix Style */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Interactive Prototype Reference</h3>
            <p className="text-foreground/70">Below you can explore the live interactive pipeline, metrics, and dashboard components</p>
          </div>

          {/* Pipeline Metrics Display */}
          <div className="bg-card rounded-xl border border-border p-8 mb-12">
            <h4 className="text-xl font-bold mb-8">Live Metrics Dashboard</h4>
            <PipelineMetrics />
          </div>

          {/* Interactive Pipeline */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h4 className="text-xl font-bold mb-8">Processing Pipeline Visualization</h4>
            <InteractivePipeline />
          </div>
        </div>
      </section>
    </div>
  );
}

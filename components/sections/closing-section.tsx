'use client';

import { ArrowRight } from 'lucide-react';

export function ClosingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main message */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Not Just Analytics
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            A Decision-Enabling QA Intelligence System
          </span>
        </h2>

        <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
          Transform how your QA teams respond to consumer feedback. Move from reactive manual analysis to proactive, data-driven decision-making.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center gap-2">
            Align on Concept
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all transform hover:scale-105">
            Start Prototype
          </button>
        </div>

        {/* Supporting text */}
        <p className="text-sm text-foreground/60 mt-12">
          Ready to revolutionize your QA decision process? Let&apos;s discuss how this solution can drive impact.
        </p>
      </div>
    </section>
  );
}

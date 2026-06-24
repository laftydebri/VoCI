'use client';

import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow text */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50">
          <p className="text-sm font-medium text-secondary">Consumer Feedback Intelligence</p>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          From Consumer Feedback to Actionable QA Insights
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-balance max-w-3xl mx-auto">
          Transform fragmented consumer feedback into structured trends, critical signals, and decision-ready insights that drive action.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center gap-2">
            Explore Concept
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all transform hover:scale-105">
            View Process
          </button>
        </div>

        {/* Visual element - animated boxes */}
        <div className="mt-20 relative h-64 md:h-80 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg transform rotate-45 animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-28 h-28 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg transform rotate-12 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg transform -rotate-45 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

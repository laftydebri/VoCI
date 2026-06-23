'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, FileText, Tags, Smile, Brain, TrendingUp, Code } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const pages = [
    { href: '/', label: 'Overview', icon: BarChart3 },
    { href: '/data-preparation', label: 'Data Prep', icon: FileText },
    { href: '/nlp-classification', label: 'NLP', icon: Tags },
    { href: '/sentiment-analysis', label: 'Sentiment', icon: Smile },
    { href: '/topic-modeling', label: 'Topics', icon: Brain },
    { href: '/metrics', label: 'Metrics', icon: TrendingUp },
    { href: '/code-examples', label: 'Code', icon: Code },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-700 shadow-lg">
      <div className="max-w-full mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-bold text-blue-400">AI Feedback Intelligence Guide</h1>
          <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Interactive Guide</span>
        </div>
        
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
          {pages.map((page) => {
            const IconComponent = page.icon;
            const active = isActive(page.href);
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm font-medium ${
                  active
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                <IconComponent size={16} />
                <span>{page.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BarChart3, FileText, Tags, Smile, Brain, TrendingUp, Code } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { href: '/', label: 'Overview', icon: BarChart3 },
    { href: '/data-preparation', label: 'Data Preparation', icon: FileText },
    { href: '/nlp-classification', label: 'NLP Classification', icon: Tags },
    { href: '/sentiment-analysis', label: 'Sentiment Analysis', icon: Smile },
    { href: '/topic-modeling', label: 'Topic Modeling', icon: Brain },
    { href: '/metrics', label: 'Metrics & Evaluation', icon: TrendingUp },
    { href: '/code-examples', label: 'Code Examples', icon: Code },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:bg-slate-900 md:text-white md:p-6 md:overflow-y-auto md:z-40">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-400">AI Feedback Guide</h2>
          <p className="text-sm text-slate-400 mt-1">Hands-on Learning Platform</p>
        </div>

        <ul className="space-y-2">
          {pages.map((page) => {
            const IconComponent = page.icon;
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(page.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="text-sm font-medium">{page.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 pt-6 border-t border-slate-700">
          <p className="text-xs text-slate-500">
            A comprehensive guide for AI practitioners and data scientists
          </p>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 flex justify-between items-center">
        <h2 className="text-lg font-bold text-blue-400">AI Feedback Guide</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-slate-800 rounded"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-slate-800 text-white p-4 z-40 max-h-[calc(100vh-64px)] overflow-y-auto">
          <ul className="space-y-2">
            {pages.map((page) => {
              const IconComponent = page.icon;
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(page.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="text-sm font-medium">{page.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

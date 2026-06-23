'use client';

import { Navigation } from '@/components/navigation';
import { AlertCircle, CheckCircle, Database, Filter, RefreshCw } from 'lucide-react';

export default function DataPreparation() {
  const businessRequirements = [
    {
      category: "Feedback Sources",
      items: [
        "Identify all channels: customer surveys, reviews, support tickets, social media mentions, direct feedback",
        "Determine data volume and collection frequency",
        "Establish data quality standards and validation rules"
      ]
    },
    {
      category: "Data Schema & Structure",
      items: [
        "Define feedback fields: text, author ID, timestamp, source, product type, device model",
        "Determine metadata: customer demographics, product category, purchase date, customer segment",
        "Specify data format: JSON, CSV, database records, API streams"
      ]
    },
    {
      category: "Business Context",
      items: [
        "Document product portfolio: traditional cigarettes, RRP devices, other tobacco products",
        "Define business goals: improve satisfaction, reduce complaints, identify new features",
        "Identify key stakeholders and decision-makers who will use insights"
      ]
    },
    {
      category: "Data Governance",
      items: [
        "Establish data retention and compliance policies (GDPR, privacy laws)",
        "Define access controls and user permissions",
        "Create audit trails for data usage and modifications"
      ]
    }
  ];

  const preparationSteps = [
    {
      step: 1,
      title: "Data Collection & Aggregation",
      description: "Pull feedback from all sources into centralized storage",
      details: [
        "Set up API connectors or manual import processes for each channel",
        "Create a unified schema that normalizes data from different sources",
        "Store raw data with timestamps and source attribution"
      ],
      example: "Combine survey responses (XML), Twitter mentions (JSON), and support tickets (CSV) into a single database table"
    },
    {
      step: 2,
      title: "Data Cleaning & Validation",
      description: "Remove duplicates, fix formatting, and validate completeness",
      details: [
        "Remove duplicate feedback entries",
        "Standardize text encoding (UTF-8)",
        "Fix missing or malformed data (null values, broken links)",
        "Remove extremely short feedback (< 5 words)"
      ],
      example: "Remove exact duplicates by comparing hash of feedback text and timestamp, validate all records have required fields"
    },
    {
      step: 3,
      title: "Text Preprocessing",
      description: "Normalize and prepare text for NLP models",
      details: [
        "Convert to lowercase for consistency",
        "Remove HTML tags, URLs, email addresses",
        "Handle special characters, emojis, and encoding issues",
        "Remove extra whitespace and normalize line breaks"
      ],
      example: "Input: 'Check out my review! 😍 Visit https://example.com #happy' → Output: 'check out my review happy'"
    },
    {
      step: 4,
      title: "PII (Personally Identifiable Information) Removal",
      description: "Anonymize sensitive customer data for privacy",
      details: [
        "Detect and redact phone numbers, emails, names",
        "Mask payment information and account numbers",
        "Maintain anonymity while preserving context"
      ],
      example: "Replace 'Call John at 555-1234' with 'Call [PERSON] at [PHONE]'"
    },
    {
      step: 5,
      title: "Data Splitting & Organization",
      description: "Prepare data for model training and validation",
      details: [
        "Split into train (70%), validation (15%), and test (15%) sets",
        "Ensure balanced distribution across categories",
        "Create stratified samples if data is imbalanced"
      ],
      example: "If you have 100k feedback entries, use 70k for training models, 15k for tuning parameters, 15k for final testing"
    }
  ];

  const dataAuditChecklist = [
    { item: "Total feedback records collected", status: "pending" },
    { item: "Time period coverage (date range)", status: "pending" },
    { item: "Sources represented (breakdown %)", status: "pending" },
    { item: "Product categories covered", status: "pending" },
    { item: "Language distribution", status: "pending" },
    { item: "Average feedback length (words)", status: "pending" },
    { item: "Null/missing values rate (%)", status: "pending" },
    { item: "Duplicate records found (%)", status: "pending" },
    { item: "PII identified and redacted", status: "pending" },
    { item: "Training/Validation/Test split ratio", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="md:ml-64 p-6 md:p-12">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span className="text-xs font-bold text-amber-700">STEP 1: FOUNDATION</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Data Preparation & Business Requirements</h1>
            <p className="text-lg text-slate-600">
              Before building any AI model, you need clean, well-organized data and clear business objectives. This section explains what information your business must provide.
            </p>
          </div>

          {/* Business Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Database className="text-amber-600" />
              What Your Business Needs to Provide
            </h2>
            <div className="space-y-6">
              {businessRequirements.map((req, idx) => (
                <div key={idx} className="border-l-4 border-slate-200 pl-4">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{req.category}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-slate-700">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Preparation Pipeline</h2>
            <div className="space-y-4">
              {preparationSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-b border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-slate-900 mb-2">How to do it:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Real Example:</h4>
                      <code className="text-xs text-slate-700 bg-slate-50 p-2 rounded block">{step.example}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Audit Checklist */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Filter className="text-blue-600" />
              Data Quality Checklist
            </h2>
            <p className="text-slate-600 mb-6">Use this checklist before proceeding to NLP classification:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataAuditChecklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded cursor-pointer" />
                  <span className="text-slate-700">{item.item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-600" />
                Do's
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Collect data from multiple sources</li>
                <li>✓ Validate data quality before processing</li>
                <li>✓ Document all data transformations</li>
                <li>✓ Maintain data lineage and audit trails</li>
                <li>✓ Test with sample data first</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertCircle className="text-red-600" />
                Don'ts
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✗ Skip cleaning steps - garbage in, garbage out</li>
                <li>✗ Use imbalanced datasets without acknowledgment</li>
                <li>✗ Forget to anonymize PII</li>
                <li>✗ Use all data for training (no test set)</li>
                <li>✗ Ignore data quality metrics</li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready for the Next Step?</h3>
            <p className="mb-6">Once your data is clean and validated, you're ready to move to NLP Classification where we'll automatically categorize your feedback.</p>
            <a href="/nlp-classification" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Go to NLP Classification →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

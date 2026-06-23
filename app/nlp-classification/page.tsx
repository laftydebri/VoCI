'use client';

import { Navigation } from '@/components/navigation';
import { AlertCircle, CheckCircle, Zap, Code2 } from 'lucide-react';

export default function NLPClassification() {
  const classificationCategories = [
    {
      name: "Product Quality",
      description: "Issues with product taste, consistency, or defects",
      examples: [
        "Device tastes burnt",
        "Flavor inconsistency between packs",
        "Battery drains too quickly"
      ],
      keywords: ["taste", "quality", "defect", "broken", "damaged", "issue"]
    },
    {
      name: "Delivery & Logistics",
      description: "Issues with shipping, packaging, or delivery time",
      examples: [
        "Package arrived damaged",
        "Late delivery",
        "Missing items in order"
      ],
      keywords: ["deliver", "ship", "packaging", "late", "fast", "damage"]
    },
    {
      name: "Customer Service",
      description: "Interactions with support team and responsiveness",
      examples: [
        "Support team was rude",
        "Long wait time",
        "Problem resolved quickly"
      ],
      keywords: ["support", "service", "help", "customer care", "response"]
    },
    {
      name: "Pricing",
      description: "Cost, value for money, and pricing concerns",
      examples: [
        "Too expensive",
        "Good value for money",
        "Price increase not justified"
      ],
      keywords: ["price", "expensive", "cost", "money", "value", "affordable"]
    },
    {
      name: "Website/App Issues",
      description: "Technical problems with digital platforms",
      examples: [
        "App crashes on login",
        "Website is slow",
        "Cannot complete payment"
      ],
      keywords: ["app", "website", "login", "error", "crash", "bug", "slow"]
    },
    {
      name: "Feature Requests",
      description: "Requests for new features or improvements",
      examples: [
        "Need dark mode",
        "Want subscription option",
        "Should have loyalty points"
      ],
      keywords: ["feature", "wish", "request", "should have", "want", "need"]
    }
  ];

  const nlpTechniques = [
    {
      title: "Rule-Based Classification",
      description: "Define keywords and patterns manually",
      pros: [
        "Fast to implement",
        "Highly interpretable",
        "Works well with small datasets"
      ],
      cons: [
        "Requires manual keyword engineering",
        "Doesn't handle typos or variations",
        "Limited scalability"
      ],
      example: "if 'app' in text and ('crash' or 'error') in text: return 'App Issue'"
    },
    {
      title: "Naive Bayes Classifier",
      description: "Statistical model that learns word probabilities from examples",
      pros: [
        "Simple and fast",
        "Works with imbalanced data",
        "Good baseline model"
      ],
      cons: [
        "Assumes independence between words (unrealistic)",
        "Lower accuracy than modern methods",
        "Sensitive to training data"
      ],
      example: "Learns that 'crash' has 85% probability of being App Issue category"
    },
    {
      title: "Support Vector Machine (SVM)",
      description: "Finds optimal boundary to separate categories",
      pros: [
        "Works well in high dimensions",
        "Good for binary classification",
        "Computationally efficient"
      ],
      cons: [
        "Harder to interpret results",
        "Requires feature engineering",
        "Can be slow with large datasets"
      ],
      example: "Maps words to vector space and finds decision boundary between categories"
    },
    {
      title: "Deep Learning (BERT/Transformers)",
      description: "Modern neural networks that understand context deeply",
      pros: [
        "State-of-the-art accuracy (95%+)",
        "Understands context and nuance",
        "Works with minimal feature engineering"
      ],
      cons: [
        "Requires large training dataset (1000+ examples)",
        "Computationally expensive",
        "Less interpretable (black box)"
      ],
      example: "BERT learns that 'the device stopped working' means Product Quality, not App Issues"
    }
  ];

  const implementationWorkflow = [
    {
      step: 1,
      title: "Prepare Training Data",
      description: "Create labeled examples for each category",
      details: "Manually label 300-500 feedback samples with correct categories. Example: 'Received package late' → Delivery",
      icon: "📝"
    },
    {
      step: 2,
      title: "Feature Extraction",
      description: "Convert text into machine-readable format",
      details: "Convert words to numbers using techniques like TF-IDF (Term Frequency-Inverse Document Frequency) or Word Embeddings",
      icon: "🔢"
    },
    {
      step: 3,
      title: "Train Model",
      description: "Learn patterns from labeled data",
      details: "Use labeled data to train the classifier to recognize which words/patterns indicate which category",
      icon: "🧠"
    },
    {
      step: 4,
      title: "Validate Performance",
      description: "Test on unseen data",
      details: "Test the model on data it hasn't seen before. Aim for 90%+ accuracy on test set",
      icon: "✓"
    },
    {
      step: 5,
      title: "Deploy & Monitor",
      description: "Use in production and track performance",
      details: "Apply to all new feedback and monitor if accuracy drops over time (data drift)",
      icon: "🚀"
    }
  ];

  const comparison = [
    {
      method: "Rule-Based",
      trainingTime: "< 1 hour",
      accuracy: "75-80%",
      scalability: "Low",
      cost: "$",
      whenToUse: "Quick MVP or small dataset"
    },
    {
      method: "Naive Bayes",
      trainingTime: "< 5 minutes",
      accuracy: "82-87%",
      scalability: "Medium",
      cost: "$",
      whenToUse: "Fast baseline, limited resources"
    },
    {
      method: "SVM",
      trainingTime: "1-5 hours",
      accuracy: "85-90%",
      scalability: "Medium",
      cost: "$$",
      whenToUse: "Good balance of speed & accuracy"
    },
    {
      method: "Deep Learning",
      trainingTime: "4-24 hours",
      accuracy: "92-96%",
      scalability: "High",
      cost: "$$$",
      whenToUse: "Need best accuracy, have resources"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="md:ml-64 p-6 md:p-12">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-xs font-bold text-blue-700">STEP 2: CATEGORIZATION</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">NLP Classification Explained</h1>
            <p className="text-lg text-slate-600">
              Learn how to automatically categorize feedback into topics like Product Quality, Delivery, Customer Service, and more.
            </p>
          </div>

          {/* What is NLP Classification */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is NLP Classification?</h2>
            <p className="text-slate-700 mb-4">
              NLP Classification is an automated process of reading text feedback and assigning it to one of several predefined categories. Instead of manually reading each feedback and deciding "this is about Product Quality" or "this is about Delivery", a machine learning model learns to do this automatically.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-slate-900 mb-2">Simple Example:</p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-mono">Input: "The device battery drains in 2 hours"</p>
                <p className="font-mono text-blue-600">→ Classification Model →</p>
                <p className="font-mono">Output: Category = "Product Quality" (confidence: 94%)</p>
              </div>
            </div>
          </div>

          {/* Categories Explained */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Classification Categories for Tobacco Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classificationCategories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{cat.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-bold text-slate-700 mb-2 uppercase">Examples:</p>
                    <ul className="space-y-1">
                      {cat.examples.map((ex, exIdx) => (
                        <li key={exIdx} className="text-xs text-slate-600">• {ex}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded p-3">
                    <p className="text-xs font-bold text-slate-700 mb-1 uppercase">Key Words:</p>
                    <div className="flex flex-wrap gap-1">
                      {cat.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NLP Techniques */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Different Approaches to Classification</h2>
            <div className="space-y-6">
              {nlpTechniques.map((tech, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 border-b border-purple-200">
                    <h3 className="text-lg font-bold text-slate-900">{tech.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{tech.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                          <CheckCircle size={18} />
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {tech.pros.map((pro, pIdx) => (
                            <li key={pIdx} className="text-sm text-slate-700">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                          <AlertCircle size={18} />
                          Cons
                        </h4>
                        <ul className="space-y-2">
                          {tech.cons.map((con, cIdx) => (
                            <li key={cIdx} className="text-sm text-slate-700">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <p className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                        <Code2 size={16} />
                        How It Works
                      </p>
                      <code className="text-xs text-slate-700 bg-slate-100 p-2 rounded block font-mono overflow-x-auto">
                        {tech.example}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Comparison: Which Method to Use?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Method</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Training Time</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Accuracy</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Scalability</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Cost</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-4 px-4 font-bold text-slate-900">{row.method}</td>
                      <td className="py-4 px-4 text-slate-700">{row.trainingTime}</td>
                      <td className="py-4 px-4 text-slate-700">{row.accuracy}</td>
                      <td className="py-4 px-4 text-slate-700">{row.scalability}</td>
                      <td className="py-4 px-4 text-slate-700">{row.cost}</td>
                      <td className="py-4 px-4 text-slate-700 text-xs">{row.whenToUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Implementation Steps */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Implement Classification</h2>
            <div className="space-y-4">
              {implementationWorkflow.map((item) => (
                <div key={item.step} className="flex gap-6 bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{item.description}</p>
                    <p className="text-sm text-slate-700 bg-blue-50 border-l-2 border-blue-500 p-3 rounded">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
              <Zap className="text-yellow-600" />
              Critical Success Factors
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">1.</span>
                <span><strong>Quality training data:</strong> Each category needs 50-100 manually labeled examples. Garbage in = garbage out</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">2.</span>
                <span><strong>Clear category definitions:</strong> Your team must agree on what belongs in each category</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">3.</span>
                <span><strong>Regular monitoring:</strong> Track if accuracy drops over time as customer language evolves</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">4.</span>
                <span><strong>Human-in-the-loop:</strong> Always have humans review low-confidence predictions</span>
              </li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Next: Sentiment Analysis</h3>
            <p className="mb-6">After categorizing feedback, you'll learn how to determine if each comment is Positive, Neutral, or Negative.</p>
            <a href="/sentiment-analysis" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Go to Sentiment Analysis →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

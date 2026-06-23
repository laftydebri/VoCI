'use client';

import { Navigation } from '@/components/navigation';
import { Brain, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

export default function TopicModeling() {
  const topicConcepts = [
    {
      title: "Latent Dirichlet Allocation (LDA)",
      subtitle: "Statistical approach to discover hidden topics",
      description: "LDA assumes that each document (feedback) is a mixture of topics, and each topic is a collection of words that frequently appear together.",
      howItWorks: [
        "1. Start with random topic assignments",
        "2. Look at each word and count: which topics appear with this word in other documents?",
        "3. Reassign words to topics that make sense",
        "4. Repeat until stable pattern emerges"
      ],
      example: {
        feedback: "Battery dies too quickly, app crashes frequently, customer support slow",
        topics: {
          topic1: ["battery", "dies", "quick", "device"] + " (30%)",
          topic2: ["app", "crash", "error", "technical"] + " (40%)",
          topic3: ["customer", "support", "slow", "response"] + " (30%)"
        }
      },
      pros: [
        "Interprets results as word distributions",
        "Scales well to large datasets",
        "Well-established mathematical foundation",
        "Fast and computationally efficient"
      ],
      cons: [
        "Requires specifying number of topics beforehand",
        "Can struggle with very short texts (tweets, single-line feedback)",
        "Produces some incoherent topics",
        "Difficult to handle domain-specific jargon"
      ],
      bestFor: "Large datasets, where you want explainability and have computational limits"
    },
    {
      title: "BERTopic",
      subtitle: "Modern neural approach using embeddings",
      description: "BERTopic uses transformers (BERT) to understand deep semantic meaning of words. It first converts text to embeddings (numerical vectors), then groups similar documents together.",
      howItWorks: [
        "1. Convert each piece of feedback to a 'semantic embedding' (vector of numbers)",
        "2. Group similar embeddings together using clustering algorithms",
        "3. Find the most representative words for each cluster",
        "4. Generate topic labels automatically"
      ],
      example: {
        feedback: "Device not working properly, software has bugs, help desk is unresponsive",
        process: "Embedding → Clustering → Topic Generation",
        topics: {
          topic1: "Device & Performance Issues",
          topic2: "Software & Technical Bugs",
          topic3: "Support Quality Concerns"
        }
      },
      pros: [
        "Automatically determines number of topics (no manual tuning)",
        "Highly coherent, interpretable topics",
        "Handles context and synonyms better",
        "Works well with domain-specific language",
        "Can generate topic labels automatically"
      ],
      cons: [
        "Requires more computational power (GPUs preferred)",
        "Needs larger dataset (200+ documents)",
        "Black box - harder to explain the model",
        "Longer processing time"
      ],
      bestFor: "When you have computational resources and want state-of-the-art results"
    },
    {
      title: "Embedding-Based Clustering",
      subtitle: "Using pre-trained language models",
      description: "Convert feedback to semantic vectors, then use clustering algorithms (K-means, DBSCAN) to find natural groupings.",
      howItWorks: [
        "1. Use pre-trained model (Word2Vec, GloVe, BERT) to convert text → numbers",
        "2. Treat each document as a point in multi-dimensional space",
        "3. Group nearby points together (e.g., using K-means clustering)",
        "4. Extract keywords from each cluster to name topics"
      ],
      example: {
        feedback: "The product is excellent vs This product is amazing",
        before: "Different words → might miss that they mean the same thing",
        after: "Both have similar embeddings → grouped into same cluster",
        insight: "Understands that 'excellent' and 'amazing' are semantically similar"
      },
      pros: [
        "Simple to implement",
        "Can use pre-trained models (no training needed)",
        "Handles synonyms and semantic similarity",
        "Flexible with multiple clustering algorithms"
      ],
      cons: [
        "Still need to choose number of clusters",
        "Computational cost of generating embeddings",
        "Quality depends on choice of pre-trained model",
        "May generate overlapping or fuzzy topics"
      ],
      bestFor: "Quick prototyping and when you want flexibility in clustering approach"
    }
  ];

  const comparisonTable = [
    {
      aspect: "Speed",
      lda: "Fast",
      bertopic: "Slower",
      embedding: "Medium"
    },
    {
      aspect: "Interpretability",
      lda: "High (word distributions)",
      bertopic: "Medium (generated labels)",
      embedding: "Medium-High"
    },
    {
      aspect: "Number of Topics",
      lda: "Specify in advance",
      bertopic: "Automatic detection",
      embedding: "Specify in advance"
    },
    {
      aspect: "Data Requirements",
      lda: "Works with 100+ docs",
      bertopic: "Needs 200+ docs",
      embedding: "Works with 100+ docs"
    },
    {
      aspect: "Computational Cost",
      lda: "Low",
      bertopic: "High (GPU recommended)",
      embedding: "Medium"
    },
    {
      aspect: "Code Complexity",
      lda: "Medium",
      bertopic: "Low (library handles it)",
      embedding: "Low-Medium"
    },
    {
      aspect: "Coherence (Quality)",
      lda: "Good",
      bertopic: "Excellent",
      embedding: "Good-Excellent"
    }
  ];

  const evaluationMetrics = [
    {
      name: "Topic Coherence",
      description: "How well words within a topic relate to each other",
      formula: "Measure if top words in a topic appear together in documents",
      range: "0-1 (higher is better)",
      target: "> 0.60",
      interpretation: "0.50-0.55 = Poor | 0.55-0.65 = Good | 0.65+ = Excellent"
    },
    {
      name: "Topic Diversity",
      description: "How different topics are from each other",
      formula: "Measure unique vocabulary across topics",
      range: "0-1 (higher is better)",
      target: "> 0.70",
      interpretation: "No overlap = topics are distinct and well-separated"
    },
    {
      name: "Perplexity",
      description: "Model's ability to predict held-out documents",
      formula: "How well model predicts test data it hasn't seen",
      range: "Lower is better",
      target: "< 100",
      interpretation: "Measures model fit; lower = more accurate"
    }
  ];

  const realWorldExample = {
    dataset: "1000 feedback entries from tobacco product users",
    topics_discovered: [
      { name: "Device Performance", keywords: ["battery", "last", "hours", "heating", "temperature"], docs: 245 },
      { name: "Flavor & Taste", keywords: ["flavor", "taste", "variety", "smooth", "harsh"], docs: 189 },
      { name: "Shipping & Packaging", keywords: ["delivery", "package", "tracking", "damaged", "box"], docs: 156 },
      { name: "Pricing & Value", keywords: ["price", "expensive", "worth", "cost", "refund"], docs: 134 },
      { name: "Product Design", keywords: ["design", "sleek", "portable", "weight", "size"], docs: 98 },
      { name: "User Experience", keywords: ["easy", "simple", "intuitive", "confusing", "manual"], docs: 178 }
    ],
    insights: [
      "Device Performance is the dominant concern (24.5%)",
      "Shipping issues are significant (15.6%) - opportunity to improve logistics",
      "Positive design feedback (9.8%) - continue this strength"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="md:ml-64 p-6 md:p-12">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-xs font-bold text-purple-700">STEP 4: ADVANCED ANALYSIS</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Topic Modeling Deep Dive</h1>
            <p className="text-lg text-slate-600">
              Discover hidden themes and patterns in your feedback without pre-defining categories. Learn LDA, BERTopic, and embedding-based approaches.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="text-purple-600" />
              What is Topic Modeling?
            </h2>
            <p className="text-slate-700 mb-4">
              Topic modeling is an unsupervised machine learning technique that automatically discovers hidden themes in a collection of documents. Unlike classification (where you predefined categories), topic modeling finds what customers are actually talking about without you telling it what to look for.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="font-bold text-slate-900 mb-3">Real-world benefit:</p>
              <p className="text-slate-700">
                You might discover that customers are talking about "battery life" and "heating time" as related issues (same topic), even though you never created a category for it. This reveals a business opportunity you didn't know existed.
              </p>
            </div>
          </div>

          {/* Three Main Approaches */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Three Main Approaches to Topic Modeling</h2>
            <div className="space-y-6">
              {topicConcepts.map((approach, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-purple-200">
                    <h3 className="text-2xl font-bold text-slate-900">{approach.title}</h3>
                    <p className="text-slate-600 mt-1">{approach.subtitle}</p>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-700 mb-6">{approach.description}</p>

                    {/* How It Works */}
                    <div className="mb-6">
                      <h4 className="font-bold text-slate-900 mb-3">How It Works:</h4>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        {approach.howItWorks.map((step, sIdx) => (
                          <p key={sIdx} className="text-sm text-slate-700 mb-2 last:mb-0">{step}</p>
                        ))}
                      </div>
                    </div>

                    {/* Real Example */}
                    <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-3">Example:</h4>
                      <p className="text-sm text-slate-700 mb-3 font-mono">{approach.example.feedback}</p>
                      {Object.entries(approach.example.topics || approach.example).map(([key, value], eIdx) => {
                        if (key !== 'feedback' && key !== 'process') {
                          return (
                            <p key={eIdx} className="text-sm text-slate-700 mb-1">
                              <span className="font-bold">{key}:</span> {String(value)}
                            </p>
                          );
                        }
                        return null;
                      })}
                      {approach.example.process && (
                        <p className="text-sm text-slate-700 mt-2">
                          <span className="font-bold">Process:</span> {approach.example.process}
                        </p>
                      )}
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                          <CheckCircle size={18} />
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {approach.pros.map((pro, pIdx) => (
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
                          {approach.cons.map((con, cIdx) => (
                            <li key={cIdx} className="text-sm text-slate-700">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold">Best for:</span> {approach.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-3 px-3 font-bold text-slate-900">Aspect</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">LDA</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">BERTopic</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">Embedding</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-slate-900">{row.aspect}</td>
                      <td className="py-3 px-3 text-slate-700">{row.lda}</td>
                      <td className="py-3 px-3 text-slate-700">{row.bertopic}</td>
                      <td className="py-3 px-3 text-slate-700">{row.embedding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Evaluation Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Evaluate Topic Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {evaluationMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2">{metric.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{metric.description}</p>
                  
                  <div className="bg-slate-50 rounded p-3 mb-3">
                    <p className="text-xs font-bold text-slate-700 mb-1">Formula:</p>
                    <p className="text-xs text-slate-600">{metric.formula}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p><span className="font-bold text-slate-900">Range:</span> {metric.range}</p>
                    <p><span className="font-bold text-slate-900">Target:</span> <span className="text-green-700">{metric.target}</span></p>
                    <p><span className="font-bold text-slate-900">Interpretation:</span> {metric.interpretation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Example */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Lightbulb className="text-green-600" />
              Real-World Example: Tobacco Company Analysis
            </h2>
            
            <div className="bg-white rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-700 mb-4"><strong>Dataset:</strong> {realWorldExample.dataset}</p>
              <p className="font-bold text-slate-900 mb-4">Topics Discovered:</p>
              <div className="space-y-3">
                {realWorldExample.topics_discovered.map((topic, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4">
                    <p className="font-bold text-slate-900">{idx + 1}. {topic.name}</p>
                    <p className="text-sm text-slate-600 mb-2">Top keywords: {topic.keywords.join(", ")}</p>
                    <p className="text-sm text-green-700 font-bold">{topic.docs} documents ({Math.round(topic.docs / 10)}%)</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-slate-900 mb-3">Actionable Insights:</p>
              <ul className="space-y-2">
                {realWorldExample.insights.map((insight, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex gap-2">
                    <span className="text-green-600 font-bold">→</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Best Practices for Topic Modeling</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">1.</span>
                <span><strong>Start simple:</strong> Use LDA first, then try BERTopic if you have resources</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">2.</span>
                <span><strong>Validate with humans:</strong> Have team members review topics to ensure they make business sense</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">3.</span>
                <span><strong>Use coherence scores:</strong> Monitor coherence ({">"} 0.60) to ensure topic quality</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">4.</span>
                <span><strong>Update regularly:</strong> Re-run topic modeling quarterly as customer language evolves</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">5.</span>
                <span><strong>Combine with sentiment:</strong> Know not just what people talk about, but if it's positive/negative</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/sentiment-analysis" className="bg-white border-2 border-blue-500 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <p className="text-sm text-slate-600 mb-2">← Previous</p>
              <p className="font-bold text-slate-900">Sentiment Analysis</p>
            </a>
            <a href="/metrics" className="bg-blue-600 text-white rounded-lg p-6 hover:shadow-lg hover:bg-blue-700 transition-all text-center">
              <p className="text-sm text-blue-100 mb-2">Next →</p>
              <p className="font-bold">Metrics & Evaluation</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

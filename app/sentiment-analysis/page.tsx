'use client';

import { Navigation } from '@/components/navigation';
import { Smile, Meh, Frown, TrendingUp } from 'lucide-react';

export default function SentimentAnalysis() {
  const sentimentLevels = [
    {
      level: "Positive",
      icon: Smile,
      color: "green",
      score: "+0.5 to +1.0",
      description: "Customer is satisfied and expressing approval",
      examples: [
        "Love this product! Best device I've owned",
        "Excellent customer service, very responsive",
        "Worth every penny, highly recommend"
      ]
    },
    {
      level: "Neutral",
      icon: Meh,
      color: "gray",
      score: "-0.5 to +0.5",
      description: "Factual statement without strong emotion",
      examples: [
        "The device works as expected",
        "Delivery took 3 days",
        "Found the app straightforward to use"
      ]
    },
    {
      level: "Negative",
      icon: Frown,
      color: "red",
      score: "-1.0 to -0.5",
      description: "Customer is unsatisfied or frustrated",
      examples: [
        "Terrible quality, broke after a week",
        "Waited 2 hours for support response",
        "Complete waste of money"
      ]
    }
  ];

  const sentimentTechniques = [
    {
      name: "Lexicon-Based Sentiment",
      description: "Use a dictionary of words with predefined positive/negative scores",
      howItWorks: [
        "Create a dictionary: 'love' = +1, 'excellent' = +1, 'hate' = -1, 'terrible' = -1",
        "Count positive and negative words in feedback",
        "Calculate sentiment score: (positive_count - negative_count) / total_words"
      ],
      pros: [
        "Very fast and interpretable",
        "Works with small datasets",
        "No training data needed"
      ],
      cons: [
        "Misses context (e.g., 'not good' = negative but dictionary sees 'good')",
        "Struggle with sarcasm",
        "Domain-specific vocabulary not captured"
      ],
      example: "I don't love this → Algorithm sees 'love' (positive) but misses 'not'"
    },
    {
      name: "Machine Learning Classification",
      description: "Train a classifier on labeled positive/negative examples",
      howItWorks: [
        "Collect 500+ feedback examples labeled as Positive, Neutral, or Negative",
        "Convert to numerical features (TF-IDF, word embeddings)",
        "Train classifier (Naive Bayes, SVM, Neural Networks)",
        "Apply to new feedback"
      ],
      pros: [
        "Learns context automatically",
        "Handles negations ('not good' = negative)",
        "Better accuracy than lexicon (85-90%)"
      ],
      cons: [
        "Requires labeled training data",
        "Slower than lexicon-based",
        "Need domain expertise for training"
      ],
      example: "Learns that 'not good' appears in negative feedback → understands negation"
    },
    {
      name: "Deep Learning (BERT Sentiment)",
      description: "Use pre-trained transformer models fine-tuned for sentiment",
      howItWorks: [
        "Use pre-trained BERT model (trained on millions of sentences)",
        "Fine-tune on 200-500 labeled examples from your domain",
        "Get sentiment prediction with confidence score (0-1)"
      ],
      pros: [
        "State-of-the-art accuracy (92-96%)",
        "Understands complex language and context",
        "Works with minimal domain-specific data"
      ],
      cons: [
        "Computationally expensive (needs GPU)",
        "Black box model - hard to explain why",
        "Longer inference time"
      ],
      example: "Can distinguish subtle differences like 'decent product' (slightly positive) vs 'good product' (more positive)"
    }
  ];

  const realWorldExample = [
    {
      feedback: "The device stopped working after 2 months!",
      keywords: ["stopped", "working"],
      sentiment: "Negative",
      score: "-0.85",
      confidence: "98%"
    },
    {
      feedback: "Works as expected, nothing special",
      keywords: ["works", "expected"],
      sentiment: "Neutral",
      score: "0.05",
      confidence: "87%"
    },
    {
      feedback: "Amazing product, customer support was super helpful!",
      keywords: ["amazing", "helpful"],
      sentiment: "Positive",
      score: "+0.92",
      confidence: "95%"
    },
    {
      feedback: "Good battery life, though packaging could be better",
      keywords: ["good", "battery"],
      sentiment: "Mixed/Neutral-Positive",
      score: "+0.45",
      confidence: "72%"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Collect Training Data",
      description: "Label 300-500 feedback samples as Positive, Neutral, or Negative"
    },
    {
      step: 2,
      title: "Choose Method",
      description: "Start with lexicon-based for speed, upgrade to ML if accuracy matters"
    },
    {
      step: 3,
      title: "Train Model",
      description: "If using ML/DL, train on labeled data and validate on holdout set"
    },
    {
      step: 4,
      title: "Apply to All Feedback",
      description: "Score all existing and new feedback with sentiment labels"
    },
    {
      step: 5,
      title: "Track Over Time",
      description: "Monitor average sentiment by month/quarter to spot trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="md:ml-64 p-6 md:p-12">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-pink-100 rounded-full mb-4">
              <span className="text-xs font-bold text-pink-700">STEP 3: EMOTION ANALYSIS</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Sentiment Analysis</h1>
            <p className="text-lg text-slate-600">
              Determine whether feedback is Positive, Neutral, or Negative, and understand how customer satisfaction is changing over time.
            </p>
          </div>

          {/* Sentiment Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {sentimentLevels.map((sent, idx) => {
              const Icon = sent.icon;
              const colors = {
                green: "bg-green-50 border-green-200 text-green-700",
                gray: "bg-gray-50 border-gray-200 text-gray-700",
                red: "bg-red-50 border-red-200 text-red-700"
              };
              return (
                <div key={idx} className={`rounded-lg border-2 p-6 ${colors[sent.color as keyof typeof colors]}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8" />
                    <h3 className="text-xl font-bold">{sent.level}</h3>
                  </div>
                  <p className="text-sm font-mono mb-3 font-bold">{sent.score}</p>
                  <p className="text-sm mb-4">{sent.description}</p>
                  <div className="bg-white bg-opacity-60 rounded p-3">
                    <p className="text-xs font-bold mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {sent.examples.map((ex, exIdx) => (
                        <li key={exIdx} className="text-xs italic">"{ex}"</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What is Sentiment Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-pink-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Sentiment Analysis?</h2>
            <p className="text-slate-700 mb-4">
              Sentiment analysis automatically determines if a piece of feedback expresses a positive, negative, or neutral opinion about your products or services. It goes beyond just counting complaints—it reveals whether customers are satisfied or frustrated.
            </p>
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
              <p className="font-bold text-slate-900 mb-2">Business Value:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Track customer satisfaction trends over time</li>
                <li>• Identify which product categories have satisfaction issues</li>
                <li>• Prioritize urgent issues (negative feedback)</li>
                <li>• Celebrate wins (identify highly positive feedback sources)</li>
              </ul>
            </div>
          </div>

          {/* Three Approaches */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Three Ways to Analyze Sentiment</h2>
            <div className="space-y-6">
              {sentimentTechniques.map((tech, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 border-b border-pink-200">
                    <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {tech.name}</h3>
                    <p className="text-slate-600 mt-1">{tech.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-slate-900 mb-3">How It Works:</h4>
                      <ol className="space-y-2">
                        {tech.howItWorks.map((step, sIdx) => (
                          <li key={sIdx} className="text-sm text-slate-700">
                            <span className="font-bold">{sIdx + 1}.</span> {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-green-700 mb-3">✓ Pros:</h4>
                        <ul className="space-y-2">
                          {tech.pros.map((pro, pIdx) => (
                            <li key={pIdx} className="text-sm text-slate-700">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-3">✗ Cons:</h4>
                        <ul className="space-y-2">
                          {tech.cons.map((con, cIdx) => (
                            <li key={cIdx} className="text-sm text-slate-700">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold">Example:</span> {tech.example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Examples */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Real Sentiment Analysis Examples</h2>
            <div className="space-y-4">
              {realWorldExample.map((example, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <p className="text-slate-900 font-mono text-sm mb-3">"{example.feedback}"</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {example.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Sentiment</p>
                      <p className="font-bold text-slate-900">{example.sentiment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Score</p>
                      <p className="font-bold font-mono text-slate-900">{example.score}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Confidence</p>
                      <p className="font-bold text-slate-900">{example.confidence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Steps */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="text-purple-600" />
              How to Implement Sentiment Analysis
            </h2>
            <div className="space-y-4">
              {implementationSteps.map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Handling Edge Cases */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Common Challenges & Solutions</h3>
            <div className="space-y-4">
              <div className="bg-white rounded p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-slate-900 mb-2">Sarcasm Detection</p>
                <p className="text-sm text-slate-700 mb-2">Challenge: "Oh great, the device broke on day one" = negative sentiment despite "great"</p>
                <p className="text-sm text-slate-600">Solution: Use deep learning models trained on sarcastic examples</p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-slate-900 mb-2">Mixed Sentiment</p>
                <p className="text-sm text-slate-700 mb-2">"Good product but terrible customer service" = mixed feedback</p>
                <p className="text-sm text-slate-600">Solution: Combine with NLP classification to separate concerns</p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-slate-900 mb-2">Neutral Feedback</p>
                <p className="text-sm text-slate-700 mb-2">"The device works" = factual but not strongly positive or negative</p>
                <p className="text-sm text-slate-600">Solution: Allow 3-point scale (Positive, Neutral, Negative) not just 2-point</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Metrics to Track</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-900 mb-2">Overall Sentiment Score</p>
                <p className="text-3xl font-bold text-blue-600 mb-2">42%</p>
                <p className="text-sm text-slate-600">Percentage of feedback that is positive (track monthly)</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-900 mb-2">Sentiment Distribution</p>
                <p className="text-sm text-slate-600 mb-2">Positive: 35% | Neutral: 42% | Negative: 23%</p>
                <p className="text-xs text-slate-500">Understand breakdown across spectrum</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-900 mb-2">Sentiment Trend</p>
                <p className="text-sm text-slate-600">Q1: 45% → Q2: 42% → Q3: 38%</p>
                <p className="text-xs text-red-600 font-bold">⚠ Declining satisfaction</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-900 mb-2">By Category</p>
                <p className="text-sm text-slate-600 mb-2">• Product Quality: 35%</p>
                <p className="text-sm text-slate-600">• Delivery: 62%</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/nlp-classification" className="bg-white border-2 border-blue-500 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <p className="text-sm text-slate-600 mb-2">← Previous</p>
              <p className="font-bold text-slate-900">NLP Classification</p>
            </a>
            <a href="/topic-modeling" className="bg-blue-600 text-white rounded-lg p-6 hover:shadow-lg hover:bg-blue-700 transition-all text-center">
              <p className="text-sm text-blue-100 mb-2">Next →</p>
              <p className="font-bold">Topic Modeling</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

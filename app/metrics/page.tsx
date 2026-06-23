'use client';

import { Navigation } from '@/components/navigation';
import { BarChart3, AlertCircle, CheckCircle } from 'lucide-react';

export default function MetricsPage() {
  const classificationMetrics = [
    {
      metric: "Accuracy",
      formula: "(TP + TN) / (TP + TN + FP + FN)",
      meaning: "Overall correctness: what percentage of predictions were right?",
      range: "0-100%",
      target: "> 90%",
      example: "If model correctly classified 900 out of 1000 feedback = 90% accuracy"
    },
    {
      metric: "Precision",
      formula: "TP / (TP + FP)",
      meaning: "Of items predicted as category X, how many actually are X?",
      range: "0-100%",
      target: "> 85%",
      example: "If we predicted 100 as 'App Issue', and 85 actually were = 85% precision"
    },
    {
      metric: "Recall",
      formula: "TP / (TP + FN)",
      meaning: "Of all actual category X items, how many did we find?",
      range: "0-100%",
      target: "> 85%",
      example: "If there were 100 actual App Issues, and we found 85 = 85% recall"
    },
    {
      metric: "F1 Score",
      formula: "2 × (Precision × Recall) / (Precision + Recall)",
      meaning: "Harmonic mean of precision and recall - balances both",
      range: "0-1 (higher is better)",
      target: "> 0.85",
      example: "Prevents models from being good at one metric but bad at another"
    }
  ];

  const confusionMatrix = {
    description: "Shows what your model got right and wrong",
    example: [
      { actual: "Quality Issue", predicted_as: "Quality", count: 145, status: "✓ Correct" },
      { actual: "Quality Issue", predicted_as: "Delivery", count: 15, status: "✗ Wrong" },
      { actual: "Delivery Issue", predicted_as: "Delivery", count: 89, status: "✓ Correct" },
      { actual: "Delivery Issue", predicted_as: "Quality", count: 11, status: "✗ Wrong" }
    ]
  };

  const topicMetrics = [
    {
      metric: "Topic Coherence",
      description: "How well related are the top words in each topic?",
      range: "0-1 (higher is better)",
      target: "> 0.60",
      interpretation: "0.50-0.55 = Poor | 0.55-0.65 = Good | 0.65+ = Excellent",
      howToMeasure: "Measure PMI (Pointwise Mutual Information) between top words"
    },
    {
      metric: "Topic Diversity",
      description: "How different are topics from each other (not overlapping)?",
      range: "0-1 (higher is better)",
      target: "> 0.70",
      interpretation: "Low diversity = topics discuss same things | High = distinct topics",
      howToMeasure: "Measure Jaccard similarity between top words across topics"
    },
    {
      metric: "Perplexity",
      description: "How well does model predict unseen documents?",
      range: "Lower is better (no fixed scale)",
      target: "< 100",
      interpretation: "Lower perplexity = model understands topics well",
      howToMeasure: "Test model on held-out test set not seen during training"
    }
  ];

  const sentimentMetrics = [
    {
      metric: "Accuracy",
      description: "Percentage of correct sentiment predictions",
      target: "> 85%",
      note: "Standard metric for 3-class problem (Positive/Neutral/Negative)"
    },
    {
      metric: "Weighted F1",
      description: "F1 score weighted by class distribution",
      target: "> 0.80",
      note: "Better than accuracy when sentiment classes are imbalanced"
    },
    {
      metric: "Cohen's Kappa",
      description: "Agreement between model and human annotators",
      target: "> 0.70",
      note: "Shows if model makes same mistakes as humans or different ones"
    }
  ];

  const evaluationWorkflow = [
    {
      step: 1,
      title: "Hold Out Test Set",
      description: "Reserve 15-20% of data that model never sees during training",
      why: "Ensures evaluation isn't biased (model hasn't memorized test data)"
    },
    {
      step: 2,
      title: "Make Predictions",
      description: "Run model on test set to get predictions",
      why: "Compare predictions against ground truth labels"
    },
    {
      step: 3,
      title: "Calculate Metrics",
      description: "Compute accuracy, precision, recall, F1 on test predictions",
      why: "Get quantitative view of model performance"
    },
    {
      step: 4,
      title: "Analyze Errors",
      description: "Look at what model got wrong and why",
      why: "Identify patterns in errors to improve model"
    },
    {
      step: 5,
      title: "Monitor in Production",
      description: "Track metrics on real-world feedback over time",
      why: "Catch performance drops (data drift) early"
    }
  ];

  const redFlags = [
    {
      flag: "90% Accuracy on Test Set but Only 60% in Production",
      cause: "Data drift - production data is different from training data",
      solution: "Retrain model periodically with recent production data"
    },
    {
      flag: "High Precision but Low Recall",
      cause: "Model is conservative - only predicts when very confident",
      solution: "Lower confidence threshold to catch more true positives"
    },
    {
      flag: "Human Reviewers Disagree on Labels",
      cause: "Category definitions are unclear or ambiguous",
      solution: "Re-define categories more clearly with team"
    },
    {
      flag: "One Category Gets 99% Recall",
      cause: "Model is biased - over-predicting one category",
      solution: "Adjust class weights or use balanced sampling"
    },
    {
      flag: "Topic Coherence Score is 0.45",
      cause: "Topics are overlapping or not well-separated",
      solution: "Try different number of topics or use BERTopic"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="md:ml-64 p-6 md:p-12">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-xs font-bold text-green-700">STEP 5: VALIDATION</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Metrics & Evaluation</h1>
            <p className="text-lg text-slate-600">
              Learn how to measure if your AI model is performing well and what metrics matter most for your business.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart3 className="text-green-600" />
              Why Metrics Matter
            </h2>
            <p className="text-slate-700 mb-4">
              You can't improve what you don't measure. Metrics tell you if your model is actually working or just creating false confidence. They're the difference between "feels like it's working" and "we know it's working."
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-slate-900 mb-2">Key Insight:</p>
              <p className="text-slate-700">
                A model with 90% accuracy might still be terrible if it misclassifies the most important categories. Context matters.
              </p>
            </div>
          </div>

          {/* Classification Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Classification Metrics (NLP & Sentiment)</h2>
            <div className="space-y-4">
              {classificationMetrics.map((m, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{m.metric}</h3>
                    <p className="text-sm text-slate-600 mt-1">{m.meaning}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-bold text-slate-700 mb-1">FORMULA:</p>
                      <code className="text-xs font-mono text-slate-700">{m.formula}</code>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-bold text-blue-700 mb-1">TARGET:</p>
                      <p className="text-sm font-bold text-blue-900">{m.target}</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded p-3">
                    <p className="text-sm text-slate-700"><span className="font-bold">Example:</span> {m.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confusion Matrix */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Understanding the Confusion Matrix</h2>
            <p className="text-slate-700 mb-6">
              A confusion matrix shows exactly what your model got right and wrong. It's the foundation for calculating all metrics.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-3 px-3 font-bold text-slate-900">Actual</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">Predicted As</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">Count</th>
                    <th className="text-left py-3 px-3 font-bold text-slate-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {confusionMatrix.example.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3 px-3 text-slate-700">{row.actual}</td>
                      <td className="py-3 px-3 text-slate-700">{row.predicted_as}</td>
                      <td className="py-3 px-3 font-bold text-slate-900">{row.count}</td>
                      <td className="py-3 px-3">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="font-bold text-green-700 mb-2">True Positives + True Negatives = 234</p>
                <p className="text-sm text-slate-600">Model got it right</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <p className="font-bold text-red-700 mb-2">False Positives + False Negatives = 26</p>
                <p className="text-sm text-slate-600">Model got it wrong</p>
              </div>
            </div>
          </div>

          {/* Topic Modeling Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Topic Modeling Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topicMetrics.map((m, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{m.metric}</h3>
                  <p className="text-sm text-slate-600 mb-4">{m.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-bold text-slate-700">RANGE:</p>
                      <p className="text-sm text-slate-700">{m.range}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-bold text-green-700">TARGET:</p>
                      <p className="text-sm text-green-900">{m.target}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-bold text-blue-700">INTERPRETATION:</p>
                      <p className="text-xs text-blue-900">{m.interpretation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sentiment Analysis Metrics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {sentimentMetrics.map((m, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2">{m.metric}</h3>
                  <p className="text-sm text-slate-600 mb-3">{m.description}</p>
                  <div className="bg-green-50 rounded p-2 mb-2">
                    <p className="text-xs font-bold text-green-700">Target: {m.target}</p>
                  </div>
                  <p className="text-xs text-slate-600">{m.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Workflow */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Proper Evaluation Workflow</h2>
            <div className="space-y-4">
              {evaluationWorkflow.map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                    <p className="text-xs text-slate-500 mt-2">Why: {item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red Flags */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertCircle className="text-red-600" />
              Red Flags: When Metrics Tell You Something's Wrong
            </h2>
            <div className="space-y-4">
              {redFlags.map((item, idx) => (
                <div key={idx} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{item.flag}</h3>
                  <div className="mb-3 bg-white rounded p-3">
                    <p className="text-sm text-slate-600"><span className="font-bold text-red-700">Root Cause:</span> {item.cause}</p>
                  </div>
                  <p className="text-sm text-slate-700"><span className="font-bold text-green-700">Solution:</span> {item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Best Practices for Evaluation</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">1.</span>
                <span><strong>Always use a test set:</strong> Never evaluate on training data - you'll get falsely high metrics</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">2.</span>
                <span><strong>Use multiple metrics:</strong> Don't rely on accuracy alone - precision, recall, F1 tell different stories</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">3.</span>
                <span><strong>Cross-validate:</strong> Use k-fold cross-validation to get more robust metric estimates</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">4.</span>
                <span><strong>Monitor over time:</strong> Track metrics in production to catch data drift</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">5.</span>
                <span><strong>Validate with humans:</strong> Have team members review sample predictions and ground truth</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/topic-modeling" className="bg-white border-2 border-blue-500 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <p className="text-sm text-slate-600 mb-2">← Previous</p>
              <p className="font-bold text-slate-900">Topic Modeling</p>
            </a>
            <a href="/code-examples" className="bg-blue-600 text-white rounded-lg p-6 hover:shadow-lg hover:bg-blue-700 transition-all text-center">
              <p className="text-sm text-blue-100 mb-2">Next →</p>
              <p className="font-bold">Code Examples</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

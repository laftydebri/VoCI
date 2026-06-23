'use client';

import { Navigation } from '@/components/navigation';
import { Code2, Copy } from 'lucide-react';

export default function CodeExamples() {
  const codeBlocks = [
    {
      title: "1. Simple Rule-Based NLP Classification",
      language: "Python",
      description: "Quick way to classify feedback using keyword matching",
      code: `def classify_feedback(text):
    """Simple rule-based classifier"""
    text_lower = text.lower()
    
    if any(word in text_lower for word in ['crash', 'error', 'bug', 'app']):
        return 'App Issue'
    elif any(word in text_lower for word in ['late', 'delay', 'ship', 'deliver']):
        return 'Delivery'
    elif any(word in text_lower for word in ['taste', 'quality', 'defect', 'broken']):
        return 'Product Quality'
    elif any(word in text_lower for word in ['rude', 'slow', 'help', 'support']):
        return 'Customer Service'
    else:
        return 'Other'

# Usage
feedback = "The device crashed when I tried to login"
category = classify_feedback(feedback)
print(category)  # Output: App Issue`
    },
    {
      title: "2. Sentiment Analysis with TextBlob",
      language: "Python",
      description: "Analyze sentiment using pre-built library",
      code: `from textblob import TextBlob

def analyze_sentiment(text):
    """Analyze sentiment of feedback"""
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity  # -1 to +1
    
    if polarity > 0.1:
        return 'Positive', polarity
    elif polarity < -0.1:
        return 'Negative', polarity
    else:
        return 'Neutral', polarity

# Usage
feedback_list = [
    "I love this product!",
    "The device works fine",
    "Terrible quality, broke immediately"
]

for feedback in feedback_list:
    sentiment, score = analyze_sentiment(feedback)
    print(f"'{feedback}' → {sentiment} ({score:.2f})")`
    },
    {
      title: "3. NLP Classification with sklearn",
      language: "Python",
      description: "Train a machine learning classifier",
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Prepare training data
training_texts = [
    "App crashes frequently",
    "Device stopped working",
    "Delivery was late",
    "Package arrived damaged",
    "Great customer service",
    "Support team was rude"
]
training_labels = [
    "App Issue",
    "Product Quality",
    "Delivery",
    "Delivery",
    "Customer Service",
    "Customer Service"
]

# Create pipeline
clf = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('classifier', MultinomialNB())
])

# Train
clf.fit(training_texts, training_labels)

# Predict
new_feedback = "The app is broken and won't start"
category = clf.predict([new_feedback])[0]
confidence = clf.predict_proba([new_feedback]).max()
print(f"Category: {category}, Confidence: {confidence:.2%}")`
    },
    {
      title: "4. Topic Modeling with LDA",
      language: "Python",
      description: "Discover hidden topics in feedback",
      code: `from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

# Sample feedback
documents = [
    "Battery drains too quickly",
    "Device heating issues",
    "Long delivery time",
    "Package damaged",
    "Customer support was helpful"
]

# Create document-term matrix
vectorizer = CountVectorizer(max_features=100)
doc_term_matrix = vectorizer.fit_transform(documents)

# Train LDA
lda = LatentDirichletAllocation(n_components=3, random_state=42)
lda.fit(doc_term_matrix)

# Show topics
feature_names = vectorizer.get_feature_names_out()
for topic_idx, topic in enumerate(lda.components_):
    top_words = [feature_names[i] for i in topic.argsort()[-5:]]
    print(f"Topic {topic_idx}: {', '.join(top_words)}")`
    },
    {
      title: "5. BERTopic - Modern Topic Modeling",
      language: "Python",
      description: "Advanced topic modeling with transformers",
      code: `from bertopic import BERTopic

# Your feedback data
documents = [
    "Battery dies in 2 hours",
    "Device gets very hot",
    "Slow delivery to my area",
    "Package box was damaged",
    "Excellent customer support"
]

# Create and train BERTopic model
topic_model = BERTopic()
topics, probabilities = topic_model.fit_transform(documents)

# Get topic information
topic_info = topic_model.get_topic_info()
print(topic_info)

# Visualize topics
topic_model.visualize_topics().show()

# Get topic for new document
new_doc = ["App crashes frequently"]
similar_topics, similarity = topic_model.find_topics(new_doc[0])`
    },
    {
      title: "6. Complete Pipeline: Classification + Sentiment",
      language: "Python",
      description: "Full workflow combining classification and sentiment",
      code: `import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from textblob import TextBlob

# Load feedback data
df = pd.read_csv('feedback.csv')

# Pipeline for classification
class_pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('classifier', MultinomialNB())
])

# Train on labeled data
class_pipeline.fit(df['text'], df['category'])

# Add classification
df['predicted_category'] = class_pipeline.predict(df['text'])

# Add sentiment analysis
def get_sentiment(text):
    polarity = TextBlob(text).sentiment.polarity
    if polarity > 0.1:
        return 'Positive'
    elif polarity < -0.1:
        return 'Negative'
    return 'Neutral'

df['sentiment'] = df['text'].apply(get_sentiment)

# Analyze results
print(df[['text', 'predicted_category', 'sentiment']].head())
print(df.groupby(['predicted_category', 'sentiment']).size())`
    },
    {
      title: "7. Model Evaluation & Metrics",
      language: "Python",
      description: "Calculate performance metrics",
      code: `from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    confusion_matrix, classification_report
)

# Predictions vs actual
y_pred = ['App Issue', 'Delivery', 'Quality', 'Quality']
y_true = ['App Issue', 'Delivery', 'Quality', 'Delivery']

# Calculate metrics
accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred, average='weighted')
recall = recall_score(y_true, y_pred, average='weighted')
f1 = f1_score(y_true, y_pred, average='weighted')

print(f"Accuracy: {accuracy:.2%}")
print(f"Precision: {precision:.2%}")
print(f"Recall: {recall:.2%}")
print(f"F1 Score: {f1:.2%}")

# Detailed report
print(classification_report(y_true, y_pred))

# Confusion matrix
cm = confusion_matrix(y_true, y_pred)
print(cm)`
    },
    {
      title: "8. Tracking Sentiment Over Time",
      language: "Python",
      description: "Monitor sentiment trends monthly",
      code: `import pandas as pd
from datetime import datetime
from textblob import TextBlob

# Load feedback with dates
df = pd.read_csv('feedback.csv', parse_dates=['date'])

# Add sentiment
df['polarity'] = df['text'].apply(lambda x: TextBlob(x).sentiment.polarity)
df['sentiment'] = df['polarity'].apply(
    lambda x: 'Positive' if x > 0.1 else ('Negative' if x < -0.1 else 'Neutral')
)

# Group by month
df['month'] = df['date'].dt.to_period('M')

# Calculate monthly statistics
monthly_sentiment = df.groupby('month').agg({
    'polarity': 'mean',
    'sentiment': lambda x: (x == 'Positive').sum() / len(x)
}).rename(columns={'polarity': 'avg_polarity', 'sentiment': 'positive_ratio'})

print(monthly_sentiment)
print(f"Overall positive sentiment trend: {monthly_sentiment['positive_ratio']}")
`
    }
  ];

  const libraries = [
    {
      name: "TextBlob",
      purpose: "Simple sentiment analysis",
      install: "pip install textblob",
      use: "Quick sentiment scoring, beginner-friendly"
    },
    {
      name: "scikit-learn",
      purpose: "Machine learning classifiers",
      install: "pip install scikit-learn",
      use: "Train classifiers, LDA topic modeling"
    },
    {
      name: "transformers + BERT",
      purpose: "State-of-the-art NLP",
      install: "pip install transformers torch",
      use: "Advanced text understanding, fine-tuning"
    },
    {
      name: "BERTopic",
      purpose: "Modern topic modeling",
      install: "pip install bertopic",
      use: "Automatic topic discovery, visualization"
    },
    {
      name: "pandas",
      purpose: "Data manipulation",
      install: "pip install pandas",
      use: "Load, organize, analyze feedback datasets"
    },
    {
      name: "matplotlib/plotly",
      purpose: "Visualization",
      install: "pip install matplotlib plotly",
      use: "Create charts and dashboards"
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: "Install Python",
      description: "Download from python.org (version 3.8+)"
    },
    {
      step: 2,
      title: "Set Up Environment",
      description: "Create virtual environment: python -m venv venv"
    },
    {
      step: 3,
      title: "Install Libraries",
      description: "pip install pandas scikit-learn textblob bertopic"
    },
    {
      step: 4,
      title: "Prepare Data",
      description: "Create CSV with feedback data and labels"
    },
    {
      step: 5,
      title: "Run Examples",
      description: "Start with simple examples, then progress to complex"
    }
  ];

  const CodeBlock = ({ code, language }: { code: string; language: string }) => {
    return (
      <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400">{language}</span>
          <button className="text-slate-400 hover:text-slate-200 transition">
            <Copy size={16} />
          </button>
        </div>
        <pre className="text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="md:ml-64 p-6 md:p-12">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
              <span className="text-xs font-bold text-orange-700">HANDS-ON LEARNING</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Code Examples & Implementation</h1>
            <p className="text-lg text-slate-600">
              Ready-to-use Python code snippets for every step of the AI feedback analysis pipeline. Copy, paste, and customize for your needs.
            </p>
          </div>

          {/* Setup Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Code2 className="text-orange-600" />
              Getting Started
            </h2>
            
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Setup Steps:</h3>
              <div className="space-y-3">
                {setupSteps.map((item) => (
                  <div key={item.step} className="flex gap-4 bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-600 text-white font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <span className="font-bold">Tip:</span> All examples use common Python libraries. If you get import errors, run: <code className="bg-slate-100 px-2 py-1 rounded">pip install {' '} textblob scikit-learn pandas bertopic</code>
              </p>
            </div>
          </div>

          {/* Libraries Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {libraries.map((lib, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2">{lib.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{lib.purpose}</p>
                  <div className="bg-slate-50 rounded p-2 mb-2">
                    <code className="text-xs text-slate-700">{lib.install}</code>
                  </div>
                  <p className="text-xs text-slate-600">Use: {lib.use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready-to-Use Code Examples</h2>
            <div className="space-y-8">
              {codeBlocks.map((block, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900">{block.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{block.description}</p>
                  </div>
                  <div className="p-6">
                    <CodeBlock code={block.code} language={block.language} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Challenges */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Common Coding Challenges & Solutions</h3>
            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-slate-900 mb-2">🔴 Error: ModuleNotFoundError: No module named 'sklearn'</p>
                <p className="text-sm text-slate-600">Solution: Run <code className="bg-slate-100 px-2 py-1 rounded">pip install scikit-learn</code></p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-slate-900 mb-2">🔴 Error: Model accuracy is too low ({'<'} 70%)</p>
                <p className="text-sm text-slate-600">Solution: (1) Add more training data, (2) Clean data better, (3) Try different algorithm</p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-slate-900 mb-2">🔴 Warning: Imbalanced classes</p>
                <p className="text-sm text-slate-600">Solution: Use class_weight='balanced' in classifier or adjust threshold</p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-slate-900 mb-2">🔴 Issue: BERTopic is too slow</p>
                <p className="text-sm text-slate-600">Solution: Use GPU acceleration or start with LDA for quick results</p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Coding Best Practices</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-green-600">1.</span>
                <span><strong>Always split data:</strong> Never train and test on same data</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">2.</span>
                <span><strong>Version your models:</strong> Save trained models so you can compare versions</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">3.</span>
                <span><strong>Log hyperparameters:</strong> Document what settings you used</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">4.</span>
                <span><strong>Comment your code:</strong> Future you will thank present you</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">5.</span>
                <span><strong>Use pipelines:</strong> Makes code modular and reproducible</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Additional Resources</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• scikit-learn docs: https://scikit-learn.org/</li>
              <li>• BERTopic docs: https://maartengr.github.io/BERTopic/</li>
              <li>• pandas tutorial: https://pandas.pydata.org/docs/</li>
              <li>• Kaggle datasets: https://kaggle.com/datasets (free practice data)</li>
              <li>• Hugging Face models: https://huggingface.co/models</li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/metrics" className="bg-white border-2 border-blue-500 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <p className="text-sm text-slate-600 mb-2">← Previous</p>
              <p className="font-bold text-slate-900">Metrics & Evaluation</p>
            </a>
            <a href="/" className="bg-blue-600 text-white rounded-lg p-6 hover:shadow-lg hover:bg-blue-700 transition-all text-center">
              <p className="text-sm text-blue-100 mb-2">Back to →</p>
              <p className="font-bold">Overview</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

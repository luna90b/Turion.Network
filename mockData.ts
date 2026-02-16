
import { Feature, PricingPlan, ApiKey, UsageData, ApiCall } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'screenshot',
    title: 'Screenshot API',
    description: 'Capture any webpage in high quality, support for full-page, mobile viewports, and custom cropping.',
    icon: 'Camera'
  },
  {
    id: 'pdf',
    title: 'PDF Generation',
    description: 'Convert complex HTML and web pages into print-ready PDFs with pixel-perfect accuracy.',
    icon: 'FileText'
  },
  {
    id: 'scraping',
    title: 'Web Scraping',
    description: 'Extract structured data from any website without worrying about blocks or CAPTCHAs.',
    icon: 'Database'
  },
  {
    id: 'forms',
    title: 'Form Automation',
    description: 'Automatically fill out and submit forms, handle logins, and navigate complex user flows.',
    icon: 'Layout'
  },
  {
    id: 'performance',
    title: 'Performance Testing',
    description: 'Monitor real-world site speed, Core Web Vitals, and network request timings.',
    icon: 'Zap'
  },
  {
    id: 'browsers',
    title: 'Multi-browser Support',
    description: 'Run your tests across Chromium, Firefox, and WebKit to ensure cross-browser compatibility.',
    icon: 'Globe'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: 'R$ 0',
    description: 'Perfect for small personal projects and exploring our API capabilities.',
    features: ['100 requests/month', 'Standard latency', 'Community support', 'Single API key']
  },
  {
    name: 'Pro',
    price: 'R$ 49',
    highlight: true,
    description: 'Ideal for startups and growing applications that need scale.',
    features: ['10,000 requests/month', 'Low latency priority', 'Priority email support', 'Multiple API keys', 'Custom headers']
  },
  {
    name: 'Enterprise',
    price: 'R$ 299',
    description: 'Maximum reliability and support for mission-critical operations.',
    features: ['Unlimited requests', 'Dedicated infrastructure', '24/7 Phone support', 'Custom solutions', 'SLA guarantees']
  }
];

export const MOCK_API_KEYS: ApiKey[] = [
  { id: '1', name: 'Production App', key: 'sk_live_51M8Xz9G3K...', created: '2023-11-15', lastUsed: '2 mins ago' },
  { id: '2', name: 'Staging Environment', key: 'sk_test_21A4b7D8L...', created: '2023-12-01', lastUsed: '1 hour ago' },
  { id: '3', name: 'Local Dev', key: 'sk_test_99C1x2F5M...', created: '2024-01-10', lastUsed: 'Yesterday' }
];

export const USAGE_STATS: UsageData[] = [
  { date: 'Mon', requests: 420 },
  { date: 'Tue', requests: 580 },
  { date: 'Wed', requests: 490 },
  { date: 'Thu', requests: 620 },
  { date: 'Fri', requests: 750 },
  { date: 'Sat', requests: 310 },
  { date: 'Sun', requests: 280 }
];

export const RECENT_CALLS: ApiCall[] = [
  { id: 'c1', endpoint: '/v1/screenshot', status: 200, time: '2024-01-15 14:22:01', duration: '1.2s' },
  { id: 'c2', endpoint: '/v1/pdf', status: 200, time: '2024-01-15 14:18:45', duration: '2.5s' },
  { id: 'c3', endpoint: '/v1/scraper', status: 404, time: '2024-01-15 14:15:10', duration: '0.4s' },
  { id: 'c4', endpoint: '/v1/screenshot', status: 200, time: '2024-01-15 13:55:32', duration: '1.1s' },
  { id: 'c5', endpoint: '/v1/automation', status: 200, time: '2024-01-15 13:42:12', duration: '5.8s' }
];


import { Feature, PricingPlan, ApiKey, UsageData, ApiCall, Testimonial, SystemStatus } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'screenshot',
    title: 'Visual Snapshots',
    description: 'Capture high-fidelity screenshots of any web page. Support for multiple viewports, full-page scrolling, and element targeting.',
    icon: 'Camera'
  },
  {
    id: 'pdf',
    title: 'Document Generation',
    description: 'Transform complex HTML and dynamic web content into print-ready PDFs with pixel-perfect accuracy and CSS support.',
    icon: 'FileText'
  },
  {
    id: 'scraping',
    title: 'Data Extraction',
    description: 'Engineered for high-volume data retrieval. Bypass anti-bot measures and extract structured JSON from any source.',
    icon: 'Database'
  },
  {
    id: 'forms',
    title: 'Process Automation',
    description: 'Navigate complex user journeys, automate form submissions, and handle multi-step interactions seamlessly.',
    icon: 'Layout'
  },
  {
    id: 'performance',
    title: 'Core Web Vitals',
    description: 'Monitor real-world performance metrics. Track loading speeds, interactivity, and visual stability from global nodes.',
    icon: 'Zap'
  },
  {
    id: 'browsers',
    title: 'Cross-Engine Support',
    description: 'Uniform API access to Chromium, Firefox, and WebKit. Ensure your site performs across every major rendering engine.',
    icon: 'Globe'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Ideal for small scale testing and early development phases.',
    features: ['100 requests / month', 'Standard API access', 'Community support', 'Single API key']
  },
  {
    name: 'Business',
    price: '$49',
    highlight: true,
    description: 'The preferred choice for growing startups and agile teams.',
    features: ['10,000 requests / month', 'Priority throughput', 'Email support', '5 API keys', 'Custom headers']
  },
  {
    name: 'Enterprise',
    price: '$299',
    description: 'Mission-critical reliability for large scale organizations.',
    features: ['Unlimited requests', 'Dedicated infrastructure', '24/7 Phone support', 'Custom SLA', 'Direct Engineer access']
  }
];

export const MOCK_API_KEYS: ApiKey[] = [
  { id: '1', name: 'Production', key: 'sk_live_51M8Xz9G3K...', created: '2023-11-15', lastUsed: '2 minutes ago' },
  { id: '2', name: 'Staging', key: 'sk_test_21A4b7D8L...', created: '2023-12-01', lastUsed: '1 hour ago' },
  { id: '3', name: 'Developer-Local', key: 'sk_test_99C1x2F5M...', created: '2024-01-10', lastUsed: 'Yesterday' }
];

export const USAGE_STATS: UsageData[] = [
  { date: 'Jan 09', requests: 420 },
  { date: 'Jan 10', requests: 580 },
  { date: 'Jan 11', requests: 490 },
  { date: 'Jan 12', requests: 620 },
  { date: 'Jan 13', requests: 750 },
  { date: 'Jan 14', requests: 310 },
  { date: 'Jan 15', requests: 280 }
];

export const RECENT_CALLS: ApiCall[] = [
  { id: 'c1', endpoint: '/v1/screenshot', status: 200, time: '14:22:01', duration: '1.2s' },
  { id: 'c2', endpoint: '/v1/pdf', status: 200, time: '14:18:45', duration: '2.5s' },
  { id: 'c3', endpoint: '/v1/scraper', status: 404, time: '14:15:10', duration: '0.4s' },
  { id: 'c4', endpoint: '/v1/screenshot', status: 200, time: '13:55:32', duration: '1.1s' },
  { id: 'c5', endpoint: '/v1/automation', status: 200, time: '13:42:12', duration: '5.8s' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'Veloce AI',
    content: 'Turion has completely transformed our automated reporting. The PDF engine is the most reliable we have ever used.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'James Miller',
    role: 'CTO',
    company: 'Stellar Labs',
    content: 'The ability to capture screenshots with real-world rendering across multiple engines is a game changer for our QA.',
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    company: 'DataFlow',
    content: 'Scaling our data extraction was a breeze. No more CAPTCHA headaches or IP blocking issues.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const SYSTEM_STATUS: SystemStatus[] = [
  { component: 'API Gateway', status: 'operational', uptime: '99.99%' },
  { component: 'Rendering Cluster', status: 'operational', uptime: '99.95%' },
  { component: 'PDF Generator', status: 'operational', uptime: '100%' },
  { component: 'Dashboard', status: 'operational', uptime: '99.99%' }
];

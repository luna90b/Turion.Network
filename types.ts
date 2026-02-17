
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
}

export interface UsageData {
  date: string;
  requests: number;
}

export interface ApiCall {
  id: string;
  endpoint: string;
  status: number;
  time: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface SystemStatus {
  component: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
}

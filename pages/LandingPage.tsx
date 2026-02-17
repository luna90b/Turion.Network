
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  FileText, 
  Database, 
  Layout, 
  Zap, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Copy,
  ChevronRight,
  Code2,
  Play,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FEATURES, PRICING_PLANS, TESTIMONIALS } from '../mockData';

const LandingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [activeTab, setActiveTab] = useState<'screenshot' | 'pdf' | 'scraper'>('screenshot');
  const [copiedCode, setCopiedCode] = useState(false);

  const iconMap: Record<string, any> = { Camera, FileText, Database, Layout, Zap, Globe };

  const copyCode = () => {
    const code = `const response = await fetch('https://api.turion.dev/v1/screenshot', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer API_KEY' },
  body: JSON.stringify({ url: 'https://stripe.com' })
});`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const demos = {
    screenshot: {
      title: "Visual Capture",
      code: "POST /v1/screenshot\n{\n  \"url\": \"https://apple.com\",\n  \"full_page\": true\n}",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    pdf: {
      title: "PDF Generation",
      code: "POST /v1/pdf\n{\n  \"url\": \"https://github.com/profile\",\n  \"format\": \"A4\"\n}",
      preview: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80"
    },
    scraper: {
      title: "Data Extraction",
      code: "POST /v1/scrape\n{\n  \"url\": \"https://amazon.com/p/123\",\n  \"selector\": \".price\"\n}",
      preview: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80"
    }
  };

  return (
    <div className="bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-44 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-blue-50/50 via-stone-50 to-stone-50 pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-10 shadow-sm"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span>Reliable Browser Automation for Teams</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.1] mb-10"
          >
            Automate browsers <br />
            <span className="text-blue-600">with zero setup.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-stone-500 text-lg lg:text-xl leading-relaxed mb-12 font-medium"
          >
            Professional APIs for screenshots, PDFs, and data extraction. Built on top of enterprise-grade infrastructure that scales with you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center group text-lg">
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/dashboard/docs" className="w-full sm:w-auto px-10 py-4 rounded-full bg-white border border-stone-200 text-stone-900 font-bold hover:bg-stone-50 transition-all shadow-sm flex items-center justify-center text-lg">
              View API Documentation
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-col items-center"
          >
            <p className="text-stone-400 text-sm font-bold uppercase tracking-widest mb-10">Trusted by modern development teams</p>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale">
              {['Stripe', 'Vercel', 'Linear', 'GitHub', 'Framer'].map(logo => (
                <span key={logo} className="text-3xl font-black text-stone-900 tracking-tighter">{logo}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'System Uptime', value: '99.99%', icon: <Zap className="text-blue-600" /> },
              { label: 'Avg Latency', value: '840ms', icon: <Globe className="text-purple-600" /> },
              { label: 'Active Developers', value: '5k+', icon: <CheckCircle2 className="text-emerald-600" /> },
              { label: 'Monthly Requests', value: '12M+', icon: <Database className="text-orange-600" /> }
            ].map(stat => (
              <div key={stat.label} className="space-y-4 group">
                <div className="mx-auto w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-stone-900 mb-1">{stat.value}</h4>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-6">Built for Reliability.</h2>
            <p className="text-stone-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              We handle the infrastructure, proxies, and bot-detection. You focus on building your product with our simple, powerful endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div 
                  whileHover={{ y: -8 }}
                  key={feature.id} 
                  className="p-10 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group"
                >
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-600 transition-colors">
                    <Icon className="text-stone-700 w-7 h-7 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Playground Section (Demo) */}
      <section className="py-32 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-stone-900 mb-4">Try it for yourself</h2>
            <p className="text-stone-500 font-medium">Interactive code snippets showing the power of the Turion API.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-stone-200 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 border-r border-stone-100 bg-stone-50/50 flex flex-col">
              <div className="flex space-x-2 mb-10">
                {(['screenshot', 'pdf', 'scraper'] as const).map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-white text-blue-600 shadow-sm border border-stone-200' : 'text-stone-400 hover:text-stone-600'}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <button 
                    onClick={copyCode}
                    className="p-2 text-stone-400 hover:text-blue-600 transition-colors"
                  >
                    {copiedCode ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                <div className="bg-stone-900 rounded-2xl p-8 h-full font-mono text-sm overflow-auto shadow-inner">
                  <div className="flex space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                  </div>
                  <pre className="text-stone-300">
                    <code>{demos[activeTab].code}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20">
                  <Play size={18} />
                  <span>Execute Sample Request</span>
                </button>
              </div>
            </div>

            <div className="p-10 bg-white flex flex-col items-center justify-center text-center">
              <div className="w-full h-80 rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden relative shadow-inner mb-8">
                <img 
                  src={demos[activeTab].preview} 
                  alt="Preview" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-stone-900/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
                   <div className="bg-white px-6 py-3 rounded-xl font-bold text-stone-900 shadow-xl flex items-center">
                     View Full Output <ArrowRight size={18} className="ml-2" />
                   </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">{demos[activeTab].title} Result</h4>
              <p className="text-stone-500 text-sm max-w-xs font-medium">This is what a real-time response from our API cluster looks like. Clean, fast, and high quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-stone-900 mb-4">Trusted by Experts</h2>
            <p className="text-stone-500 font-medium">Join 5,000+ developers automating the web.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="p-10 rounded-[2rem] bg-white border border-stone-200 shadow-sm relative group hover:border-blue-200 transition-all">
                <div className="absolute top-10 right-10 opacity-10">
                  <Code2 size={40} className="text-blue-600" />
                </div>
                <p className="text-stone-600 text-lg italic leading-relaxed mb-10">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                  <div>
                    <h5 className="font-bold text-stone-900 text-base">{t.name}</h5>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">{t.role} @ {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-stone-900 mb-6">Simple Scaling</h2>
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-stone-900' : 'text-stone-400'}`}>Monthly</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
                className="w-14 h-7 bg-stone-100 rounded-full border border-stone-200 p-1 relative transition-all"
              >
                <div className={`w-5 h-5 bg-blue-600 rounded-full transition-all ${billingCycle === 'annually' ? 'translate-x-7' : 'translate-x-0'}`}></div>
              </button>
              <span className={`text-sm font-bold ${billingCycle === 'annually' ? 'text-stone-900' : 'text-stone-400'}`}>Annually <span className="text-blue-600 text-[10px] ml-1 bg-blue-50 px-2 py-0.5 rounded-full uppercase">Save 20%</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.name} 
                className={`p-12 rounded-[2.5rem] border ${plan.highlight ? 'bg-white border-blue-500 shadow-2xl relative' : 'bg-stone-50 border-stone-200 shadow-sm'} transition-all hover:-translate-y-2`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-5 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-extrabold text-stone-900 mb-2">{plan.name}</h3>
                <p className="text-stone-500 text-sm font-medium mb-8 leading-relaxed">{plan.description}</p>
                <div className="flex items-baseline mb-10">
                  <span className="text-5xl font-black text-stone-900">{plan.price}</span>
                  <span className="text-stone-400 font-bold ml-2">/ month</span>
                </div>
                
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-sm font-semibold text-stone-600">
                      <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/dashboard" 
                  className={`block text-center py-4 rounded-2xl font-black text-lg transition-all ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20' : 'bg-white border border-stone-200 hover:bg-stone-100 text-stone-900 shadow-sm'}`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-stone-500 font-medium mb-4">Need a custom solution or high-volume enterprise plan?</p>
            <Link to="/contact" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">Talk to an expert →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center bg-stone-900 rounded-[3rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-stone-900/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Ready to start automating?</h2>
          <p className="text-stone-400 text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
            Join the elite teams using Turion to automate their workflows. No credit card required to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/dashboard" className="px-12 py-5 rounded-full bg-white text-stone-900 font-black hover:bg-stone-100 transition-all text-lg shadow-xl">
              Create Free Account
            </Link>
            <Link to="/dashboard/docs" className="px-12 py-5 rounded-full bg-stone-800 text-white font-black hover:bg-stone-700 transition-all text-lg shadow-xl">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

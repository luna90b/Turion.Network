
import React from 'react';
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
  Code2,
  Copy
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FEATURES, PRICING_PLANS } from '../mockData';

const LandingPage: React.FC = () => {
  const iconMap: Record<string, any> = {
    Camera, FileText, Database, Layout, Zap, Globe
  };

  const copyExample = () => {
    const code = `const response = await fetch('https://api.turion.dev/v1/screenshot', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({ url: 'https://example.com' })
});`;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>V2.0 Now Live - Better Speed, More Browsers</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Turion - Browser <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Automation API
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-lg lg:text-xl leading-relaxed mb-12">
            Control browsers programmatically. Take screenshots, generate PDFs, 
            extract data, and automate workflows - all via simple REST API calls.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center group">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/dashboard/docs" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center">
              View Documentation
            </Link>
          </div>

          {/* Hero Preview Image / Mock UI */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mx-auto bg-slate-950/50 rounded-md px-4 py-1 text-[10px] text-slate-500 border border-slate-800 font-mono">
                  api.turion.dev/v1/screenshot
                </div>
              </div>
              <div className="p-4 md:p-8 bg-slate-950/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-left space-y-4">
                    <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <span>Request</span>
                    </div>
                    <pre className="bg-slate-900 p-4 rounded-xl text-xs text-slate-300 font-mono overflow-x-auto border border-slate-800">
{`POST /v1/screenshot
{
  "url": "https://stripe.com",
  "full_page": true,
  "wait_until": "networkidle0"
}`}
                    </pre>
                  </div>
                  <div className="text-left space-y-4">
                    <div className="flex items-center space-x-2 text-purple-400 font-mono text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span>Response</span>
                    </div>
                    <pre className="bg-slate-900 p-4 rounded-xl text-xs text-slate-300 font-mono overflow-x-auto border border-slate-800">
{`{
  "success": true,
  "data": {
    "image_url": "https://cdn.turion.dev/s/..."
  },
  "duration": "842ms"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Powerful Capabilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Built on top of enterprise-grade infrastructure to give you the most reliable browser automation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.id} className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
                    <Icon className="text-cyan-400 w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Example Section */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/30 backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Simple Integration</h2>
              <p className="text-slate-400 mb-8">
                Our RESTful API makes it incredibly easy to integrate browser automation into any tech stack. 
                Get started with just a few lines of code.
              </p>
              <ul className="space-y-4">
                {['No headless browser setup', 'Automatic CAPTCHA handling', 'Global proxy rotation'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-slate-300 text-sm">
                    <CheckCircle2 size={18} className="text-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/50 p-8 flex flex-col justify-center relative border-l border-slate-800">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-500">example-request.js</span>
                <button 
                  onClick={copyExample}
                  className="p-2 text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <Copy size={16} />
                </button>
              </div>
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-cyan-400">const</code> <code className="text-slate-100">response =</code> <code className="text-cyan-400">await</code> <code className="text-purple-400">fetch</code>(<code className="text-pink-400">'https://api.turion.dev/v1/screenshot'</code>, {'{'}<br />
                &nbsp;&nbsp;method: <code className="text-pink-400">'POST'</code>,<br />
                &nbsp;&nbsp;headers: {'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-pink-400">'Authorization'</code>: <code className="text-pink-400">'Bearer YOUR_API_KEY'</code><br />
                &nbsp;&nbsp;{'}'},<br />
                &nbsp;&nbsp;body: <code className="text-slate-100">JSON</code>.<code className="text-purple-400">stringify</code>({'{'} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;url: <code className="text-pink-400">'https://example.com'</code> <br />
                &nbsp;&nbsp;{'}'})<br />
                {'}'});
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Choose the plan that's right for you. No hidden fees, no complex usage limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.name} 
                className={`p-8 rounded-3xl border ${plan.highlight ? 'bg-slate-900 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden' : 'bg-slate-900/40 border-slate-800'} transition-all hover:translate-y-[-4px] duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[10px] font-bold px-4 py-1 uppercase tracking-wider rounded-bl-xl">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/dashboard" 
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to automate?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Join 1,000+ developers building faster and more reliable browser-based integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="px-10 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all">
              Start Building Now
            </Link>
            <Link to="/dashboard/docs" className="px-10 py-4 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all">
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

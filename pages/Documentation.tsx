
import React, { useState } from 'react';
import { Search, ChevronRight, Copy, Check, Info, ArrowRight, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    { id: 'getting-started', label: 'Quick Start' },
    { id: 'authentication', label: 'Security & Auth' },
    { id: 'screenshot', label: 'Screenshot API' },
    { id: 'pdf', label: 'PDF Generation' },
    { id: 'scraper', label: 'Web Scraper' },
    { id: 'rate-limits', label: 'Traffic & Limits' },
  ];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id, lang = 'bash' }: { code: string, id: string, lang?: string }) => (
    <div className="relative group my-8">
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{lang}</span>
        <button 
          onClick={() => handleCopy(code, id)}
          className="p-2 rounded-xl bg-white border border-stone-200 text-stone-500 hover:text-blue-600 shadow-sm transition-all"
        >
          {copiedCode === id ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="bg-stone-50 border border-stone-200 rounded-[1.5rem] p-8 overflow-x-auto shadow-inner">
        <code className="text-sm font-mono text-stone-700 leading-relaxed block">
          {code}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
      {/* Doc Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 space-y-1.5">
          <div className="relative mb-10 group">
             <Search size={16} className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-blue-600 transition-colors" />
             <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full bg-white border border-stone-200 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
             />
          </div>
          <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest px-4 mb-4">Core API Reference</p>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeSection === section.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'}`}
            >
              <span>{section.label}</span>
              <ChevronRight size={14} className={`${activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all`} />
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 max-w-3xl">
        <motion.div 
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          {activeSection === 'getting-started' && (
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold text-stone-900 tracking-tight">Introduction</h1>
                <p className="text-xl text-stone-500 leading-relaxed font-medium">
                  Welcome to the Turion developer documentation. Turion provides programmatic control over high-performance browser clusters globally.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex items-start space-x-6">
                 <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                   <Info size={24} />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-blue-900 mb-2">Base Endpoint URL</h4>
                   <p className="text-blue-700 font-medium mb-4">All requests should target our primary gateway. We recommend using regional subdomains for &lt;100ms latency.</p>
                   <code className="bg-white border border-blue-200 rounded-xl px-4 py-2 font-mono text-blue-600 font-bold block w-fit text-sm">
                     https://api.turion.dev/v1
                   </code>
                 </div>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-stone-900">Your First Request</h2>
                <p className="text-stone-500 font-medium leading-relaxed">The following sample demonstrates how to initiate a visual capture using common CLI tools. Ensure you have your API key ready from the dashboard.</p>
                <CodeBlock id="curl-eg" code={`curl -X POST https://api.turion.dev/v1/screenshot \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://stripe.com",
    "wait_for": "networkidle0"
  }'`} />
              </section>

              <div className="pt-10 border-t border-stone-200 flex justify-between items-center">
                <div className="text-stone-400 text-sm font-bold uppercase tracking-widest">Next Up</div>
                <button onClick={() => setActiveSection('authentication')} className="flex items-center space-x-2 text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">
                  <span>Security & Authentication</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {activeSection === 'authentication' && (
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold text-stone-900 tracking-tight">Authentication</h1>
                <p className="text-xl text-stone-500 leading-relaxed font-medium">
                  Secure your transactions using industry-standard Bearer token authentication.
                </p>
              </div>
              
              <div className="bg-stone-900 rounded-3xl p-10 text-white">
                 <h4 className="text-xl font-extrabold mb-4">Critical Security Warning</h4>
                 <p className="text-stone-400 font-medium leading-relaxed">
                   API keys should never be exposed in client-side codebases. Always proxy requests through your own backend or use temporary scoped tokens for frontend interactions.
                 </p>
              </div>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-stone-900">Header Structure</h2>
                <p className="text-stone-500 font-medium leading-relaxed">Include your key in every request as shown below:</p>
                <CodeBlock id="auth-header" lang="http" code={`GET /v1/usage
Authorization: Bearer sk_live_your_secret_key`} />
              </section>
            </div>
          )}

          {activeSection === 'screenshot' && (
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold text-stone-900 tracking-tight">Visual Capture</h1>
                <p className="text-xl text-stone-500 leading-relaxed font-medium">
                  Capture pixel-perfect snapshots of any URL with customizable viewport and wait conditions.
                </p>
              </div>
              
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-stone-900">POST /v1/screenshot</h2>
                <div className="border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 text-stone-400 font-bold uppercase tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Parameter</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Default</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                      <tr>
                        <td className="px-6 py-4 font-mono text-blue-600">url</td>
                        <td className="px-6 py-4">string</td>
                        <td className="px-6 py-4">-</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-blue-600">full_page</td>
                        <td className="px-6 py-4">boolean</td>
                        <td className="px-6 py-4">false</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-blue-600">quality</td>
                        <td className="px-6 py-4">number</td>
                        <td className="px-6 py-4">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {/* Fallback for sections coming soon */}
          {(['pdf', 'scraper', 'rate-limits'].includes(activeSection)) && (
            <div className="py-32 text-center bg-stone-50 rounded-[3rem] border border-stone-100">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                 <FileCode className="text-stone-300 w-10 h-10" />
               </div>
               <h2 className="text-3xl font-extrabold text-stone-900 mb-4">Under Active Development</h2>
               <p className="text-stone-500 font-medium max-w-sm mx-auto">We are finalizing the detailed technical documentation for this endpoint. Please consult our support team for early access.</p>
            </div>
          )}
        </motion.div>

        <div className="mt-24 pt-12 border-t border-stone-200 flex items-center justify-between">
          <p className="text-sm font-bold text-stone-400">Was this page helpful?</p>
          <div className="flex space-x-3">
             <button className="px-6 py-2.5 rounded-xl border border-stone-200 text-sm font-bold hover:bg-stone-50 transition-all">Yes</button>
             <button className="px-6 py-2.5 rounded-xl border border-stone-200 text-sm font-bold hover:bg-stone-50 transition-all">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;

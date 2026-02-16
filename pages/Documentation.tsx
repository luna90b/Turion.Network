
import React, { useState } from 'react';
import { Search, ChevronRight, Copy, Check } from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'authentication', label: 'Authentication' },
    { id: 'screenshot', label: 'Screenshot API' },
    { id: 'pdf', label: 'PDF Generation' },
    { id: 'scraper', label: 'Web Scraper' },
    { id: 'rate-limits', label: 'Rate Limits' },
  ];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string, id: string }) => (
    <div className="relative group my-6">
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={() => handleCopy(code, id)}
          className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all opacity-0 group-hover:opacity-100"
        >
          {copiedCode === id ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-x-auto">
        <code className="text-sm font-mono text-slate-300 leading-relaxed block">
          {code}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="flex gap-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Doc Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${activeSection === section.id ? 'bg-cyan-600/10 text-cyan-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              <span>{section.label}</span>
              {activeSection === section.id && <ChevronRight size={14} />}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 max-w-3xl">
        {activeSection === 'getting-started' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-white">Getting Started</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Welcome to the Turion API documentation. Turion provides a simple REST interface to control headless browsers, capture visual content, and extract data from the web.
            </p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Base URL</h2>
              <p className="text-slate-400">All API requests should be made to the following base URL:</p>
              <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 font-mono text-cyan-400 text-sm">
                https://api.turion.dev/v1
              </div>
            </section>

            <section className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-white">Quick Example</h2>
              <p className="text-slate-400">Here is a quick example using cURL to capture a screenshot:</p>
              <CodeBlock id="curl-eg" code={`curl -X POST https://api.turion.dev/v1/screenshot \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "format": "png"
  }'`} />
            </section>
          </div>
        )}

        {activeSection === 'authentication' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-white">Authentication</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Turion uses API keys to authenticate requests. You can view and manage your API keys in the dashboard.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 text-yellow-500/80 text-sm">
              <strong>Keep your API keys secret!</strong> Do not share them or use them in client-side code (browsers). Use them only on your server.
            </div>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">How to use your key</h2>
              <p className="text-slate-400">Include your API key in the <code>Authorization</code> header for every request.</p>
              <CodeBlock id="auth-header" code={`Authorization: Bearer sk_live_...`} />
            </section>
          </div>
        )}

        {activeSection === 'screenshot' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-white">Screenshot API</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Capture high-resolution screenshots of any web page. Supports full-page, element-specific, and custom viewport captures.
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Endpoint</h2>
              <div className="flex items-center space-x-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded">POST</span>
                <span className="font-mono text-slate-300 text-sm">/v1/screenshot</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Parameters</h3>
              <div className="border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950/50 text-slate-500 border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3">Field</th>
                      <th className="px-4 py-3">Type</th>
                      <th className="px-4 py-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-400">
                    <tr>
                      <td className="px-4 py-3 text-cyan-400 font-mono">url</td>
                      <td className="px-4 py-3 italic">string</td>
                      <td className="px-4 py-3">The public URL of the page to capture.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-cyan-400 font-mono">full_page</td>
                      <td className="px-4 py-3 italic">boolean</td>
                      <td className="px-4 py-3">Capture the entire scrollable height of the page. Default: false</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-cyan-400 font-mono">format</td>
                      <td className="px-4 py-3 italic">string</td>
                      <td className="px-4 py-3">Supported: png, jpeg. Default: png</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* Placeholder for other sections */}
        {(activeSection === 'pdf' || activeSection === 'scraper' || activeSection === 'rate-limits') && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Detailed Docs Coming Soon</h2>
            <p className="text-slate-500">We're currently updating this section of the documentation. Please check back later or contact support if you need immediate assistance.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documentation;

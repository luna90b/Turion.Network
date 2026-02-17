
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Copy, RefreshCw, Eye, Code, Terminal, Zap, Globe, Save } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useState('screenshot');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const runDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResult("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80");
    }, 1500);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-stone-900 mb-4">Interactive Playground</h1>
          <p className="text-lg text-stone-500 font-medium">Test our rendering engine in real-time. No API key required for testing.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-2xl overflow-hidden min-h-[600px] flex flex-col lg:flex-row">
          {/* Editor Area */}
          <div className="flex-1 p-10 border-r border-stone-100 bg-stone-50/30 flex flex-col">
            <div className="flex space-x-2 mb-8">
              {['screenshot', 'pdf', 'scraper'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-stone-400 hover:text-stone-900'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex-1 bg-stone-900 rounded-3xl p-8 relative shadow-inner font-mono text-sm group">
               <div className="flex items-center space-x-2 mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                 <Terminal size={16} className="text-stone-400" />
                 <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Editor</span>
               </div>
               <pre className="text-blue-400">
                 <code>{`POST /v1/${activeTab}\n{\n  "url": "https://apple.com",\n  "viewport": {\n    "width": 1920,\n    "height": 1080\n  }\n}`}</code>
               </pre>
               <div className="absolute bottom-6 right-6 flex items-center space-x-2">
                 <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white transition-all"><Copy size={16} /></button>
                 <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white transition-all"><Save size={16} /></button>
               </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button 
                onClick={runDemo}
                disabled={isLoading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center space-x-3"
              >
                {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <Play size={20} />}
                <span>{isLoading ? 'Processing...' : 'Run Request'}</span>
              </button>
              <button className="px-6 py-4 rounded-2xl bg-white border border-stone-200 text-stone-900 font-bold hover:bg-stone-50 transition-all shadow-sm">
                Reset
              </button>
            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1 p-10 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-stone-900">Live Output</h3>
              <div className="flex items-center space-x-4">
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">200 OK</span>
                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">842ms</span>
              </div>
            </div>

            <div className="flex-1 bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 relative group shadow-inner">
               {result ? (
                 <img src={result} alt="Result" className="w-full h-full object-cover" />
               ) : (
                 <div className="flex flex-col items-center justify-center h-full text-stone-400">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <Zap size={32} strokeWidth={1} />
                    </div>
                    <p className="font-bold">Execution result will appear here</p>
                 </div>
               )}
               {result && (
                 <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-white px-8 py-3 rounded-2xl font-black text-stone-900 shadow-2xl flex items-center">
                      <Eye size={18} className="mr-2" />
                      View High-Res
                    </button>
                 </div>
               )}
            </div>

            <div className="mt-8 bg-stone-50 border border-stone-200 rounded-2xl p-6 flex items-center justify-between">
               <div className="flex items-center space-x-4">
                 <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                   <Globe size={18} />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-stone-900">Rendered via NYC-1 Node</p>
                   <p className="text-xs text-stone-500 font-medium">Chromium 122.0.0.0</p>
                 </div>
               </div>
               <button className="text-blue-600 font-bold text-sm hover:underline decoration-2 underline-offset-4">Get Response JSON →</button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
           <div className="bg-blue-600 text-white rounded-3xl p-12 shadow-2xl shadow-blue-600/20 relative overflow-hidden inline-block w-full max-w-4xl">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Code size={120} />
              </div>
              <h3 className="text-3xl font-extrabold mb-4">Start automating for real</h3>
              <p className="text-blue-100 font-medium text-lg mb-10 max-w-xl mx-auto leading-relaxed">Join 5,000+ developers and build your first production-ready browser workflow today.</p>
              <Link to="/dashboard" className="inline-block bg-white text-blue-600 font-black px-12 py-4 rounded-full hover:bg-stone-100 transition-all shadow-xl text-lg">
                Create Free Account
              </Link>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playground;

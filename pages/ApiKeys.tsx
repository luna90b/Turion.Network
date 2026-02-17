
import React, { useState } from 'react';
import { Key, Copy, Trash2, Plus, Eye, EyeOff, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_API_KEYS } from '../mockData';

const ApiKeys: React.FC = () => {
  const [keys, setKeys] = useState(MOCK_API_KEYS);
  const [showKey, setShowKey] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleShow = (id: string) => {
    setShowKey(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyKey = (id: string, keyVal: string) => {
    navigator.clipboard.writeText(keyVal);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const deleteKey = (id: string) => {
    setKeys(keys.filter(k => k.id !== id));
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-stone-900 mb-2">API Security</h1>
          <p className="text-stone-500 font-medium text-lg">Manage your secure access tokens to authenticate with Turion endpoints.</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 px-8 py-3.5 rounded-2xl text-sm font-black text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
          <Plus size={20} />
          <span>New API Key</span>
        </button>
      </div>

      <div className="bg-white border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50/50">
                <th className="px-8 py-6 text-xs font-bold text-stone-400 uppercase tracking-widest">Identifier</th>
                <th className="px-8 py-6 text-xs font-bold text-stone-400 uppercase tracking-widest">Secret Key</th>
                <th className="px-8 py-6 text-xs font-bold text-stone-400 uppercase tracking-widest text-center">Created</th>
                <th className="px-8 py-6 text-xs font-bold text-stone-400 uppercase tracking-widest text-center">Last Used</th>
                <th className="px-8 py-6 text-xs font-bold text-stone-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <AnimatePresence>
                {keys.map((apiKey) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={apiKey.id} 
                    className="hover:bg-stone-50/30 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-stone-900">{apiKey.name}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 w-max group-hover:bg-white transition-colors">
                        <code className="text-xs text-stone-600 font-mono font-medium">
                          {showKey[apiKey.id] ? apiKey.key : 'sk_live_••••••••••••••••'}
                        </code>
                        <div className="flex items-center border-l border-stone-200 pl-3 space-x-2">
                          <button 
                            onClick={() => toggleShow(apiKey.id)}
                            className="text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            {showKey[apiKey.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-stone-500 font-semibold text-center">{apiKey.created}</td>
                    <td className="px-8 py-6 text-sm text-stone-500 font-semibold text-center">{apiKey.lastUsed}</td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={() => copyKey(apiKey.id, apiKey.key)}
                          className={`p-3 rounded-xl transition-all ${copiedId === apiKey.id ? 'bg-emerald-50 text-emerald-600' : 'text-stone-400 hover:text-blue-600 hover:bg-blue-50'}`}
                        >
                          {copiedId === apiKey.id ? <Check size={20} /> : <Copy size={20} />}
                        </button>
                        <button 
                          onClick={() => deleteKey(apiKey.id)}
                          className="p-3 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
              {keys.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-24 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="text-stone-300 w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-stone-900 mb-2">No API keys found</h4>
                      <p className="text-stone-500 text-sm max-w-xs mx-auto">Generate your first key to start making requests to the Turion clusters.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-stone-900 rounded-[2.5rem] p-10 flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <AlertTriangle size={80} className="text-white" />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
            <Key className="text-white w-6 h-6" />
          </div>
          <h4 className="text-xl font-extrabold text-white mb-4 tracking-tight">Key Rotation Policies</h4>
          <p className="text-stone-400 text-sm font-medium leading-relaxed mb-8">
            We strongly recommend rotating your production keys every 90 days. For automated environments, use our Management API to provision temporary tokens.
          </p>
          <button className="text-white font-black text-sm hover:underline decoration-2 underline-offset-4">Read Security Best Practices →</button>
        </div>
        
        <div className="bg-white border border-stone-200 rounded-[2.5rem] p-10 flex flex-col items-start">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
            <ShieldCheck className="text-blue-600 w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-stone-900 mb-4 tracking-tight">IP Whitelisting</h4>
          <p className="text-stone-500 text-sm font-medium leading-relaxed mb-8">
            Add an extra layer of security by restricting which IP addresses can use your API keys. Available for Business and Enterprise plans.
          </p>
          <button className="text-blue-600 font-bold text-sm hover:underline decoration-2 underline-offset-4">Upgrade to configure →</button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;


import React, { useState } from 'react';
import { Key, Copy, Trash2, Plus, Eye, EyeOff, Check } from 'lucide-react';
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
    if (confirm('Are you sure you want to delete this key? This action cannot be undone.')) {
      setKeys(keys.filter(k => k.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">API Keys</h1>
          <p className="text-slate-500">Manage your access tokens to authenticate with the Turion API.</p>
        </div>
        <button className="flex items-center space-x-2 bg-cyan-600 px-6 py-3 rounded-xl text-sm font-bold text-white hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20">
          <Plus size={20} />
          <span>Generate New Key</span>
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">API Key</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Used</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {keys.map((apiKey) => (
                <tr key={apiKey.id} className="hover:bg-slate-950/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-white">{apiKey.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 w-max">
                      <code className="text-xs text-slate-400 font-mono">
                        {showKey[apiKey.id] ? apiKey.key : 'sk_live_••••••••••••••••'}
                      </code>
                      <button 
                        onClick={() => toggleShow(apiKey.id)}
                        className="text-slate-600 hover:text-white transition-colors"
                      >
                        {showKey[apiKey.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{apiKey.created}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{apiKey.lastUsed}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <button 
                        onClick={() => copyKey(apiKey.id, apiKey.key)}
                        className={`p-2 rounded-lg transition-all ${copiedId === apiKey.id ? 'bg-green-500/10 text-green-400' : 'text-slate-500 hover:text-white hover:bg-slate-800'}`}
                      >
                        {copiedId === apiKey.id ? <Check size={18} /> : <Copy size={18} />}
                      </button>
                      <button 
                        onClick={() => deleteKey(apiKey.id)}
                        className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-slate-950 border border-slate-900 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
          <Key className="text-yellow-500 w-8 h-8" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-2">Security Recommendation</h4>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
            Never share your API keys or commit them to version control. If a key is compromised, delete it immediately and generate a new one. We recommend using environment variables to manage your keys.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;

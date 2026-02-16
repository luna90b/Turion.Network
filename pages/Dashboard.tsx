
import React from 'react';
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  Database,
  ArrowUpRight,
  Plus,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { USAGE_STATS, RECENT_CALLS } from '../mockData';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Requests', value: '18,421', trend: '+12.5%', color: 'text-cyan-400', icon: <Zap size={20} /> },
    { label: 'Success Rate', value: '99.9%', trend: '+0.1%', color: 'text-green-400', icon: <CheckCircle2 size={20} /> },
    { label: 'Avg Latency', value: '842ms', trend: '-18.2%', color: 'text-purple-400', icon: <Clock size={20} /> },
    { label: 'Credits Left', value: '1,579', trend: null, color: 'text-pink-400', icon: <Database size={20} /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Alex</h1>
          <p className="text-slate-500">Here's what's happening with your Turion API usage.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
            <Plus size={18} />
            <span>New API Key</span>
          </button>
          <button className="flex items-center space-x-2 bg-cyan-600 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20">
            <span>Upgrade Plan</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all hover:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${stat.color}`}>
                {stat.icon}
              </div>
              {stat.trend && (
                <div className="flex items-center text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} className="mr-1" />
                  {stat.trend}
                </div>
              )}
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Chart and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Usage Overview</h3>
            <select className="bg-slate-950 border border-slate-800 rounded-lg text-xs font-medium text-slate-400 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={USAGE_STATS}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px'}}
                  itemStyle={{color: '#22d3ee'}}
                />
                <Area type="monotone" dataKey="requests" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorRequests)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Need more?</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your Pro plan gives you up to 10k requests. Scale seamlessly as your traffic grows.
            </p>
            <button className="w-full bg-white text-slate-950 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all">
              Upgrade to Enterprise
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Documentation</h3>
            <div className="space-y-4">
              {[
                { name: 'Authentication Guide', link: '#' },
                { name: 'Screenshot API Ref', link: '#' },
                { name: 'Handling Errors', link: '#' },
              ].map((doc) => (
                <a key={doc.name} href={doc.link} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all group">
                  <span className="text-sm font-medium">{doc.name}</span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
            <button className="mt-4 w-full flex items-center justify-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2 font-medium">
              <span>View all guides</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Recent API Calls</h3>
          <button className="text-xs font-medium text-slate-400 hover:text-white transition-colors">
            View full log
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Endpoint</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {RECENT_CALLS.map((call) => (
                <tr key={call.id} className="hover:bg-slate-950/50 transition-colors">
                  <td className="px-6 py-4">
                    <code className="text-xs text-cyan-400 font-mono">{call.endpoint}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${call.status === 200 ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'}`}>
                      {call.status} {call.status === 200 ? 'OK' : 'Error'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{call.time}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{call.duration}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-slate-600 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

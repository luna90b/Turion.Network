
import React from 'react';
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  Database,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  MousePointer2,
  FileCode,
  Globe
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { USAGE_STATS, RECENT_CALLS } from '../mockData';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total API Calls', value: '18,421', trend: '+12.5%', isUp: true, color: 'text-blue-600', bg: 'bg-blue-50', icon: <Zap size={20} /> },
    { label: 'Avg Success Rate', value: '99.99%', trend: '+0.1%', isUp: true, color: 'text-emerald-600', bg: 'bg-emerald-50', icon: <CheckCircle2 size={20} /> },
    { label: 'Avg Latency', value: '842ms', trend: '-18.2%', isUp: true, color: 'text-purple-600', bg: 'bg-purple-50', icon: <Clock size={20} /> },
    { label: 'API Credits', value: '1,579', trend: null, isUp: false, color: 'text-orange-600', bg: 'bg-orange-50', icon: <Database size={20} /> },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-stone-900 mb-2">Welcome back, Alex.</h1>
          <p className="text-stone-500 font-medium text-lg">Your browser automation cluster is healthy and operational.</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center space-x-2 bg-white border border-stone-200 px-6 py-3 rounded-2xl text-sm font-bold text-stone-700 hover:bg-stone-50 transition-all shadow-sm group">
            <Plus size={18} className="text-stone-400 group-hover:text-blue-600" />
            <span>Generate Key</span>
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center space-x-2 bg-blue-600 px-6 py-3 rounded-2xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
            <span>Upgrade to Enterprise</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={stat.label} 
            className="bg-white border border-stone-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-105 transition-transform`}>
                {stat.icon}
              </div>
              {stat.trend && (
                <div className={`flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${stat.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.isUp ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                  {stat.trend}
                </div>
              )}
            </div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-extrabold text-stone-900">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Chart and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-stone-200 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-1">API Usage Analytics</h3>
              <p className="text-stone-400 text-sm font-medium">Request volume across all your active clusters.</p>
            </div>
            <div className="flex bg-stone-50 p-1 rounded-xl border border-stone-200">
              {['7d', '30d', '90d'].map((range, i) => (
                <button key={range} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${i === 0 ? 'bg-white shadow-sm text-blue-600' : 'text-stone-400 hover:text-stone-600'}`}>
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={USAGE_STATS}>
                <defs>
                  <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5F5F4" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#A8A29E', fontSize: 12, fontWeight: 600}} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#A8A29E', fontSize: 12, fontWeight: 600}} />
                <Tooltip 
                  cursor={{ stroke: '#2563EB', strokeWidth: 1 }}
                  contentStyle={{backgroundColor: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px'}}
                  itemStyle={{color: '#2563EB', fontWeight: '800'}}
                  labelStyle={{color: '#78716C', fontWeight: '700', marginBottom: '4px'}}
                />
                <Area type="monotone" dataKey="requests" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#usageGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-[2.5rem] p-10 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Quick Tools</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Capture Snapshot', icon: <MousePointer2 size={18} />, color: 'text-blue-600', bg: 'bg-blue-50' },
                { name: 'Generate PDF', icon: <FileCode size={18} />, color: 'text-purple-600', bg: 'bg-purple-50' },
                { name: 'Start Scraper', icon: <Database size={18} />, color: 'text-orange-600', bg: 'bg-orange-50' },
                { name: 'Check Nodes', icon: <Globe size={18} />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              ].map((tool) => (
                <button key={tool.name} className="flex items-center space-x-4 p-4 rounded-2xl bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-sm transition-all text-left group">
                  <div className={`p-2.5 rounded-xl ${tool.bg} ${tool.color} group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <span className="text-sm font-bold text-stone-700">{tool.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-1000"></div>
            <h3 className="text-xl font-extrabold mb-2">Need more speed?</h3>
            <p className="text-blue-100 text-sm mb-8 font-medium leading-relaxed">Dedicated clusters for 100% uptime and &lt;200ms response times.</p>
            <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center shadow-lg">
              Contact Sales <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-white border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="p-8 border-b border-stone-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-stone-900">Recent API Transactions</h3>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">Last 5 activities across all clusters</p>
          </div>
          <button className="flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            <span>Detailed Logs</span>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50/50">
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Resource Path</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Timestamp</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Process Time</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {RECENT_CALLS.map((call) => (
                <tr key={call.id} className="hover:bg-stone-50/30 transition-colors group">
                  <td className="px-8 py-5">
                    <code className="text-sm text-stone-900 font-mono font-medium">{call.endpoint}</code>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${call.status === 200 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                      {call.status} {call.status === 200 ? 'OK' : 'Error'}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-stone-500 font-medium">{call.time}</td>
                  <td className="px-8 py-5 text-sm text-stone-500 font-medium">{call.duration}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2.5 text-stone-400 hover:text-stone-900 hover:bg-white hover:shadow-sm rounded-xl transition-all">
                      <ExternalLink size={18} />
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

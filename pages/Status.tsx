
import React from 'react';
import { CheckCircle2, AlertCircle, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SYSTEM_STATUS } from '../mockData';

const Status: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />
      <div className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] border border-stone-200 shadow-xl overflow-hidden mb-12">
          <div className="bg-emerald-600 p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <ShieldCheck size={120} />
            </div>
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">All Systems Operational</h1>
            <p className="text-emerald-100 font-bold text-lg">Operational as of January 15, 2024 - 14:45 UTC</p>
          </div>

          <div className="p-12 space-y-8">
            <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-4">Component Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SYSTEM_STATUS.map(comp => (
                <div key={comp.component} className="flex items-center justify-between p-6 rounded-2xl bg-stone-50 border border-stone-100 group hover:border-emerald-200 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                    <span className="font-bold text-stone-800">{comp.component}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-1">Operational</span>
                    <span className="text-xs font-bold text-stone-400">{comp.uptime} Uptime</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: 'Avg API Latency', value: '842ms', icon: <Clock className="text-blue-600" /> },
            { label: 'Nodes Worldwide', value: '24', icon: <Globe className="text-purple-600" /> },
            { label: 'Daily Success Rate', value: '99.98%', icon: <CheckCircle2 className="text-emerald-600" /> }
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-stone-200 rounded-[2rem] p-10 shadow-sm text-center">
               <div className="mx-auto w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {stat.icon}
               </div>
               <h4 className="text-3xl font-black text-stone-900 mb-2">{stat.value}</h4>
               <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-stone-900 rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex-1">
             <h3 className="text-2xl font-extrabold mb-4">Subscribe to incident updates</h3>
             <p className="text-stone-400 font-medium leading-relaxed">Get real-time SMS and email notifications when we identify potential system degradation or outages.</p>
           </div>
           <button className="bg-white text-stone-900 font-black px-10 py-4 rounded-full hover:bg-stone-100 transition-all shadow-xl flex items-center">
             Manage Notifications <ArrowRight size={18} className="ml-2" />
           </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Status;

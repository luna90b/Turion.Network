
import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Key, 
  BarChart3, 
  BookOpen, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  Globe,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'API Keys', icon: <Key size={20} />, path: '/dashboard/keys' },
    { name: 'Usage', icon: <BarChart3 size={20} />, path: '/dashboard/stats' },
    { name: 'Documentation', icon: <BookOpen size={20} />, path: '/dashboard/docs' },
    { name: 'Billing', icon: <CreditCard size={20} />, path: '/dashboard/billing' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex text-stone-900">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-stone-200 z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/10">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">Turion</span>
            </Link>
          </div>

          <nav className="flex-1 px-4 space-y-1.5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm group ${isActive(item.path) ? 'bg-blue-50 text-blue-600' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className={`${isActive(item.path) ? 'text-blue-600' : 'text-stone-400 group-hover:text-stone-600'}`}>
                  {item.icon}
                </span>
                <span className="flex-1">{item.name}</span>
                {isActive(item.path) && <ChevronRight size={14} />}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-stone-100">
            <div className="flex items-center space-x-4 mb-6 px-2">
              <img 
                src="https://i.pravatar.cc/150?u=alex" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Alex Rivera</p>
                <p className="text-xs text-stone-500 font-medium truncate">Pro Member</p>
              </div>
            </div>
            <button className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-stone-500 hover:text-red-600 hover:bg-red-50 transition-all font-semibold text-sm">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white/70 backdrop-blur-md border-b border-stone-200 sticky top-0 z-30 flex items-center justify-between px-8">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 mr-4"
            >
              <Menu size={24} />
            </button>
            <div className="hidden sm:flex items-center bg-stone-50 border border-stone-200 rounded-full px-4 py-2 w-80 shadow-inner group focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
              <Search size={16} className="text-stone-400 mr-2 group-focus-within:text-blue-500" />
              <input 
                type="text" 
                placeholder="Search commands, keys, or logs..." 
                className="bg-transparent border-none text-sm focus:outline-none w-full text-stone-600 placeholder:text-stone-400"
              />
              <span className="text-[10px] font-bold text-stone-300 bg-white border border-stone-200 px-1.5 py-0.5 rounded ml-2">⌘K</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-2 text-sm font-bold">
              <span className="text-stone-400">Status:</span>
              <span className="flex items-center text-emerald-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Operational
              </span>
            </div>
            <button className="relative p-2 text-stone-500 hover:text-blue-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

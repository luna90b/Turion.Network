
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
  Globe
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'API Keys', icon: <Key size={20} />, path: '/dashboard/keys' },
    { name: 'Usage Stats', icon: <BarChart3 size={20} />, path: '/dashboard/stats' },
    { name: 'Documentation', icon: <BookOpen size={20} />, path: '/dashboard/docs' },
    { name: 'Billing', icon: <CreditCard size={20} />, path: '/dashboard/billing' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex text-slate-200">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 z-50 transform transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Turion</span>
            </Link>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive(item.path) ? 'bg-cyan-600/10 text-cyan-400 border border-cyan-600/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all">
              <LogOut size={20} />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-slate-950/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30 flex items-center justify-between px-6">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 w-64">
              <Search size={18} className="text-slate-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none text-sm focus:outline-none w-full text-slate-300"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border border-slate-950"></span>
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-800 pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-white">Alex Rivera</p>
                <p className="text-[10px] text-slate-500">Pro Plan</p>
              </div>
              <img 
                src="https://picsum.photos/seed/user/100/100" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-slate-700"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

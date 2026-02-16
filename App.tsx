
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ApiKeys from './pages/ApiKeys';
import Documentation from './pages/Documentation';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard Routes with Nested Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="keys" element={<ApiKeys />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="billing" element={<div className="p-8 text-center text-slate-400">Billing details coming soon...</div>} />
          <Route path="settings" element={<div className="p-8 text-center text-slate-400">Settings coming soon...</div>} />
          <Route path="stats" element={<div className="p-8 text-center text-slate-400">Full usage stats coming soon...</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

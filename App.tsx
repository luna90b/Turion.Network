
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ApiKeys from './pages/ApiKeys';
import Documentation from './pages/Documentation';
import Playground from './pages/Playground';
import Status from './pages/Status';
import DashboardLayout from './components/DashboardLayout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/status" element={<Status />} />
        <Route path="/playground" element={<Playground />} />
        
        {/* Dashboard Routes with Nested Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="keys" element={<ApiKeys />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="billing" element={<div className="p-12 text-center text-stone-500 font-medium">Billing and Subscription management.</div>} />
          <Route path="settings" element={<div className="p-12 text-center text-stone-500 font-medium">Account Settings.</div>} />
          <Route path="stats" element={<div className="p-12 text-center text-stone-500 font-medium">Detailed Analytics.</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;


import React from 'react';
import { Globe, Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-stone-900">Turion</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              The professional browser automation platform. Reliable APIs for screenshots, PDFs, and web data extraction at scale.
            </p>
            <div className="flex space-x-5">
              <Twitter className="w-5 h-5 text-stone-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-stone-400 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-900 font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><Link to="/playground" className="hover:text-blue-600 transition-colors">Live Playground</Link></li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Screenshot API</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">PDF Engine</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Data Scraper</li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><Link to="/dashboard/docs" className="hover:text-blue-600 transition-colors">Documentation</Link></li>
              <li><Link to="/status" className="hover:text-blue-600 transition-colors">System Status</Link></li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Service Terms</li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-stone-500 mb-6">Stay updated with our latest features.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-blue-500 transition-all pr-12"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-sm">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs font-medium">
          <p>© 2024 Turion Cloud Services. Built for the modern web.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <span className="cursor-pointer hover:text-stone-600 transition-colors">English (US)</span>
            <span className="cursor-pointer hover:text-stone-600 transition-colors">Help Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

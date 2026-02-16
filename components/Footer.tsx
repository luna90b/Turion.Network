
import React from 'react';
import { Globe, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">Turion</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering developers with reliable, fast, and scalable browser automation tools. Built for the modern web.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-600 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-600 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Screenshot API</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">PDF Generator</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Scraper</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Status Page</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-sm text-slate-500 mb-4">Get the latest updates on features and releases.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-full"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-r-lg transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
          <p>© 2024 Turion Dev Services. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ for developers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

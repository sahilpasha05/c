import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                <img src="/WhatsApp%20Image%202026-02-26%20at%209.22.17%20AM.jpeg" alt="QCGL" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight">Queen City Growth Lab</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Elevating brands through data-driven SEO and next-gen AI content strategies. Based in the heart of Queen City.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Local SEO &amp; Map Pack Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Google Ads Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meta Advertising (Facebook &amp; Instagram)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conversion Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI-Powered Marketing Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Queen City Growth Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
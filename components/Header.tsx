import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      {/* extra padding inside to prevent content jump since header is now flush */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">

        {/* Logo - Outside Navbar */}
        <Link
          to="/"
          className="pointer-events-auto cursor-pointer"
        >
          <div className="rounded-full shadow-md group-hover:scale-105 transition-transform overflow-hidden w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white/80 backdrop-blur-md border border-slate-200/60">
            <img src="/WhatsApp%20Image%202026-02-26%20at%209.22.17%20AM.jpeg" alt="Queen City Growth Lab" className="w-full h-full object-cover rounded-full" />
          </div>
        </Link>

        {/* Floating Round Navbar */}
        <nav className="pointer-events-auto flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-indigo-900/5 rounded-full h-16 sm:h-20 px-3 sm:px-6">
          <div className="hidden md:flex gap-2 text-sm font-semibold text-slate-600 mr-4">
            <Link to="/" className={`px-4 py-2 rounded-full transition-all ${isActive('/') ? 'bg-indigo-900 text-white scale-105' : 'hover:text-indigo-900'}`}>Home</Link>
            <Link to="/med-spa-marketing" className={`px-4 py-2 rounded-full transition-all ${isActive('/med-spa-marketing') ? 'bg-indigo-900 text-white scale-105' : 'hover:text-indigo-900'}`}>Med Spas</Link>
            <Link to="/contractor-marketing" className={`px-4 py-2 rounded-full transition-all ${isActive('/contractor-marketing') ? 'bg-indigo-900 text-white scale-105' : 'hover:text-indigo-900'}`}>Contractors</Link>
            <Link to="/attorney-marketing" className={`px-4 py-2 rounded-full transition-all ${isActive('/attorney-marketing') ? 'bg-indigo-900 text-white scale-105' : 'hover:text-indigo-900'}`}>Attorneys</Link>
            <Link to="/blog" className={`px-4 py-2 rounded-full transition-all ${isActive('/blog') ? 'bg-indigo-900 text-white scale-105' : 'hover:text-indigo-900'}`}>Blog</Link>
            <Link to="/results" className={`px-4 py-2 rounded-full transition-all ${isActive('/results') ? 'bg-indigo-900 text-white scale-105' : 'hover:text-indigo-900'}`}>Results</Link>
          </div>


          <Link to="/book" className="hidden md:flex bg-indigo-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-800 transition-all shadow-md items-center gap-2">
            <Calendar size={16} />
            <span className="inline">Book</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-indigo-900 transition-colors bg-slate-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="pointer-events-auto absolute top-full right-0 mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-4 flex flex-col gap-2 md:hidden">
            <Link to="/" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/med-spa-marketing" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/med-spa-marketing') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Med Spas</Link>
            <Link to="/contractor-marketing" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/contractor-marketing') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Contractors</Link>
            <Link to="/attorney-marketing" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/attorney-marketing') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Attorneys</Link>
            <Link to="/blog" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/blog') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link to="/results" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/results') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Results</Link>
            <Link to="/roi-calculator" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isActive('/roi-calculator') ? 'bg-indigo-900 text-white' : 'hover:bg-indigo-50 text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>Calculator</Link>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
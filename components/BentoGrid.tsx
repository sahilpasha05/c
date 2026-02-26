import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, BarChart3, TrendingUp, Zap, ArrowUpRight, Users, Target } from 'lucide-react';

const data = [
  { name: 'Month 1', value: 120 },
  { name: 'Month 2', value: 180 },
  { name: 'Month 3', value: 350 },
  { name: 'Month 4', value: 680 },
  { name: 'Month 5', value: 1200 },
  { name: 'Month 6', value: 2100 },
];

const BentoGrid: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Results First. <span className="text-slate-400">Everything Else Second.</span></h2>
            <p className="text-lg text-slate-600">
              Our clients don't pay for "SEO". They pay for booked appointments, signed contracts, and revenue.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#case-studies" className="text-indigo-900 font-bold border-b-2 border-indigo-900 pb-1 hover:text-indigo-700 hover:border-indigo-700 transition-colors">
              View ROI Calculator &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-6 h-auto md:h-[650px]">

          {/* Main Revenue Chart - Spans 2x2 */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 bg-slate-900 p-8 rounded-3xl shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-2xl text-indigo-400 border border-slate-700 shadow-lg shadow-indigo-900/50">
                  <TrendingUp size={24} />
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Client Revenue Generated</p>
                  <h3 className="text-3xl font-bold text-white">$4.2M+</h3>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Inbound Revenue Growth</h3>
              <p className="text-slate-400 text-sm mt-1">Average trajectory for new partners (Months 1-6)</p>
            </div>
            <div className="h-56 w-full mt-6 shrink-0 min-h-[224px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '12px', border: 'none', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* High Intent Leads */}
          <div className="col-span-1 md:col-span-1 bg-slate-50 p-5 md:p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center hover:border-indigo-300 transition-colors">
            <div className="p-3 md:p-4 rounded-full mb-3 md:mb-4 text-green-600 icon-3d animate-float">
              <Target size={24} className="md:w-8 md:h-8 icon-3d-inner" />
            </div>
            <div className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-2">High Intent</div>
            <p className="text-slate-500 text-sm px-2 md:px-4">We target keywords with purchase intent, not just volume.</p>
          </div>

          {/* Programmatic SEO Card */}
          <div className="col-span-1 md:col-span-1 bg-white p-5 md:p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="p-3 w-fit rounded-2xl text-indigo-900 mb-4 icon-3d animate-float">
              <Search size={24} className="icon-3d-inner" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Programmatic Scale</h3>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Dominate your city, then dominate the suburbs. We build 100s of landing pages programmatically.
              </p>
            </div>
          </div>

          {/* Wide Bottom Card: The Offer */}
          <div className="col-span-1 md:col-span-2 bg-indigo-900 p-6 md:p-8 rounded-3xl shadow-lg text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 md:w-2/3">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={20} className="text-yellow-400 animate-pulse" />
                <span className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Exclusive Market Dominance</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">One City. One Partner.</h3>
              <p className="text-indigo-200 text-sm">We grant exclusive rights to our system in your market. Secure your territory before your competitor does.</p>
            </div>
            <div className="mt-6 md:mt-0 relative z-10 w-full md:w-auto flex justify-center md:block">
              <div className="h-12 w-12 rounded-full bg-white text-indigo-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-indigo-900/50">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>

          {/* Conversion Rate Card */}
          <div className="col-span-1 md:col-span-1 md:row-span-2 bg-white p-5 md:p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
            <div className="p-3 w-fit rounded-2xl text-blue-600 mb-6 icon-3d animate-float">
              <Users size={24} className="icon-3d-inner" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Lead Quality</h3>
            <p className="text-slate-500 text-sm mb-6 flex-grow">
              Traffic means nothing if it doesn't convert. Our landing pages convert at 3x the industry average.
            </p>
            <div className="border-t border-slate-100 pt-4 mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate-400 font-medium">Industry Avg</span>
                <span className="text-xs text-slate-400 font-bold">2.3%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mb-4">
                <div className="bg-slate-300 h-2 rounded-full w-[23%]"></div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-indigo-900 font-medium">Queen City</span>
                <span className="text-xs text-indigo-900 font-bold">8.7%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full">
                <div className="bg-indigo-600 h-2 rounded-full w-[87%]"></div>
              </div>
            </div>
          </div>

          {/* Tech Audit Filler */}
          <div className="col-span-1 md:col-span-1 bg-white p-5 md:p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">50k+</div>
            <div className="text-slate-500 text-sm">Pages Crawled Weekly</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

const ROICalculator: React.FC = () => {
    const [industry, setIndustry] = useState<'medspa' | 'contractor' | 'attorney'>('medspa');
    const [ticketPrice, setTicketPrice] = useState(1500);
    const [closeRate, setCloseRate] = useState(25);
    const [leadsPerMonth, setLeadsPerMonth] = useState(30);

    const revenue = leadsPerMonth * (closeRate / 100) * ticketPrice;
    const annualRevenue = revenue * 12;

    // Presets
    const handleIndustryChange = (ind: 'medspa' | 'contractor' | 'attorney') => {
        setIndustry(ind);
        if (ind === 'medspa') {
            setTicketPrice(1500); // Avg patient value
            setCloseRate(25);
            setLeadsPerMonth(30);
        } else if (ind === 'contractor') {
            setTicketPrice(8000); // Avg roof/hvac job
            setCloseRate(15);
            setLeadsPerMonth(20);
        } else {
            setTicketPrice(3500); // Avg attorney case fee
            setCloseRate(15);
            setLeadsPerMonth(15);
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-500/20 p-2 rounded-lg">
                        <Calculator size={24} className="text-indigo-300" />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Growth Projector</h3>
                        <p className="text-indigo-200 text-xs">Estimate your potential return</p>
                    </div>
                </div>
                <div className="flex bg-slate-800 rounded-lg p-1">
                    <button
                        onClick={() => handleIndustryChange('medspa')}
                        className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${industry === 'medspa' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Med Spa
                    </button>
                    <button
                        onClick={() => handleIndustryChange('contractor')}
                        className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${industry === 'contractor' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Contractor
                    </button>
                    <button
                        onClick={() => handleIndustryChange('attorney')}
                        className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${industry === 'attorney' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Attorney
                    </button>
                </div>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Avg. {industry === 'medspa' ? 'Patient' : industry === 'attorney' ? 'Case' : 'Job'} Value ($)
                        </label>
                        <input
                            type="range"
                            min={industry === 'medspa' ? 500 : 1000}
                            max={industry === 'medspa' ? 5000 : 25000}
                            step={100}
                            value={ticketPrice}
                            onChange={(e) => setTicketPrice(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="mt-2 flex justify-between text-xs text-slate-500 font-mono">
                            <span>${industry === 'medspa' ? 500 : 1000}</span>
                            <span className="text-indigo-600 font-bold text-base bg-indigo-50 px-2 rounded">${ticketPrice.toLocaleString()}</span>
                            <span>${industry === 'medspa' ? 5000 : 25000}</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Leads Per Month
                        </label>
                        <input
                            type="range"
                            min={10}
                            max={200}
                            step={5}
                            value={leadsPerMonth}
                            onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="mt-2 flex justify-between text-xs text-slate-500 font-mono">
                            <span>10</span>
                            <span className="text-indigo-600 font-bold text-base bg-indigo-50 px-2 rounded">{leadsPerMonth}</span>
                            <span>200</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Close Rate (%)
                        </label>
                        <input
                            type="range"
                            min={5}
                            max={50}
                            step={1}
                            value={closeRate}
                            onChange={(e) => setCloseRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="mt-2 flex justify-between text-xs text-slate-500 font-mono">
                            <span>5%</span>
                            <span className="text-indigo-600 font-bold text-base bg-indigo-50 px-2 rounded">{closeRate}%</span>
                            <span>50%</span>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Monthly Revenue</p>
                            <h4 className="text-3xl font-extrabold text-slate-900 mt-1">${revenue.toLocaleString()}</h4>
                        </div>
                        <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                            <DollarSign size={24} />
                        </div>
                    </div>

                    <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="relative z-10">
                            <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-2">Projected Annual Impact</p>
                            <h4 className="text-4xl md:text-5xl font-extrabold mb-4">${annualRevenue.toLocaleString()}</h4>

                            <div className="flex items-center gap-2 text-indigo-300 text-sm">
                                <TrendingUp size={16} />
                                <span>Based on conservative estimates</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg">
                        Get This Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;

import React from 'react';
import { ArrowRight, TrendingUp, CheckCircle2, Building2, Stethoscope, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from './EditableText';

const Hero: React.FC = () => {
    const { getSectionContent } = usePageContent('Home');
    const isEditMode = useAdminEditMode();
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
            {/* Abstract Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-60 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Content: Sales Letter Style */}
                    <div className="flex-1 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold mb-8 uppercase tracking-wider shadow-sm">
                            <TrendingUp size={14} className="text-green-400" />
                            <span>Predictable Inbound Revenue Systems</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                            <EditableText page="Home" section="hero" field="title" isEditMode={isEditMode}>
                                {getSectionContent('hero', 'title', 'Stop Guessing.')}
                            </EditableText> <br />
                            <span className="text-indigo-900"><EditableText page="Home" section="hero" field="highlight" isEditMode={isEditMode}>
                                {getSectionContent('hero', 'highlight', 'Start Scaling.')}
                            </EditableText></span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light">
                            <EditableText page="Home" section="hero" field="description" isEditMode={isEditMode}>
                                {getSectionContent('hero', 'description', 'We build the high-ticket inbound engines that typically add $15k - $50k/mo in predictable revenue for local and multi-location businesses.')}
                            </EditableText>
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                <p className="text-slate-700 font-medium">
                                    <EditableText page="Home" section="hero" field="bullet1" isEditMode={isEditMode}>
                                        {getSectionContent('hero', 'bullet1', 'Sales enablement first. We care about close rate, not just traffic.')}
                                    </EditableText>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                <p className="text-slate-700 font-medium">
                                    <EditableText page="Home" section="hero" field="bullet2" isEditMode={isEditMode}>
                                        {getSectionContent('hero', 'bullet2', 'Built locally, scaled nationally. Programmatic structures that win.')}
                                    </EditableText>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                <p className="text-slate-700 font-medium">
                                    <EditableText page="Home" section="hero" field="bullet3" isEditMode={isEditMode}>
                                        {getSectionContent('hero', 'bullet3', 'Exclusive partnerships. We don\'t work with your competitors.')}
                                    </EditableText>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-indigo-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-200/50 w-full sm:w-auto">
                                Get Growth Assessment
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Vertical Selector Cards */}
                    <div className="w-full lg:w-[420px] shrink-0">
                        <p className="text-slate-500 font-semibold text-sm mb-4 uppercase tracking-widest pl-1">Select Your Industry</p>
                        <div className="space-y-4">
                            {/* Med Spa Card */}
                            <Link to="/med-spa-marketing" className="block group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-900/10 transition-all cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Stethoscope size={80} />
                                </div>
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="bg-rose-100 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                        <Stethoscope size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Med Spa</h3>
                                </div>
                                <p className="text-slate-500 text-sm mb-4 group-hover:text-slate-600 relative z-10">
                                    Fill your calendar with high-value patient appointments. Botox, CoolSculpting, and Laser treatments.
                                </p>
                                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform relative z-10">
                                    View Med Spa Systems <ArrowRight size={16} className="ml-1" />
                                </div>
                            </Link>

                            {/* Contractor Card */}
                            <Link to="/contractor-marketing" className="block group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-900/10 transition-all cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Building2 size={80} />
                                </div>
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Building2 size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Contractor</h3>
                                </div>
                                <p className="text-slate-500 text-sm mb-4 group-hover:text-slate-600 relative z-10">
                                    Hvac, Roofing, Plumbing. Get exclusive leads that are ready to buy, not price shoppers.
                                </p>
                                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform relative z-10">
                                    View Contractor Systems <ArrowRight size={16} className="ml-1" />
                                </div>
                            </Link>

                            {/* Attorney Card */}
                            <Link to="/attorney-marketing" className="block group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-900/10 transition-all cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Scale size={80} />
                                </div>
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="bg-amber-100 p-3 rounded-xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <Scale size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Attorneys</h3>
                                </div>
                                <p className="text-slate-500 text-sm mb-4 group-hover:text-slate-600 relative z-10">
                                    Personal Injury, Family Law, Criminal Defense. Exclusive leads for your firm.
                                </p>
                                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform relative z-10">
                                    View Attorney Systems <ArrowRight size={16} className="ml-1" />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
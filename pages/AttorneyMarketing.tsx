import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const AttorneyMarketing: React.FC = () => {
    const { getSectionContent } = usePageContent('AttorneyMarketing');
    const isEditMode = useAdminEditMode();
    return (
        <div className="pt-28 pb-12 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-6 uppercase tracking-wider">
                        Attorney Growth Systems
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        <EditableText page="AttorneyMarketing" section="hero" field="title" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'title', 'Sign More')}
                        </EditableText> <span className="text-amber-600"><EditableText page="AttorneyMarketing" section="hero" field="highlight" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'highlight', 'High-Value Cases')}
                        </EditableText></span>.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        <EditableText page="AttorneyMarketing" section="hero" field="description" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'description', 'Stop relying on referrals. We build automated inbound engines for Personal Injury, Family Law, and Criminal Defense firms that generate exclusive cases.')}
                        </EditableText>
                    </p>

                    <div className="flex gap-4">
                        <a href="/book" className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-lg shadow-amber-200/50">
                            Book Strategy Call
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2"><EditableText page="AttorneyMarketing" section="features" field="feature1_title" isEditMode={isEditMode}>{getSectionContent('features', 'feature1_title', 'High Intent Clients')}</EditableText></h3>
                        <p className="text-slate-500"><EditableText page="AttorneyMarketing" section="features" field="feature1_desc" isEditMode={isEditMode}>{getSectionContent('features', 'feature1_desc', 'We target "near me" keywords with immediate legal need. Capture clients when they need you most.')}</EditableText></p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2"><EditableText page="AttorneyMarketing" section="features" field="feature2_title" isEditMode={isEditMode}>{getSectionContent('features', 'feature2_title', 'Authority & Trust')}</EditableText></h3>
                        <p className="text-slate-500"><EditableText page="AttorneyMarketing" section="features" field="feature2_desc" isEditMode={isEditMode}>{getSectionContent('features', 'feature2_desc', 'Landing pages designed to establish credibility instantly and convert stressed visitors into callers.')}</EditableText></p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2"><EditableText page="AttorneyMarketing" section="features" field="feature3_title" isEditMode={isEditMode}>{getSectionContent('features', 'feature3_title', 'Case Value Tracking')}</EditableText></h3>
                        <p className="text-slate-500"><EditableText page="AttorneyMarketing" section="features" field="feature3_desc" isEditMode={isEditMode}>{getSectionContent('features', 'feature3_desc', 'Know exactly which campaigns are driving your biggest settlements and retainers.')}</EditableText></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttorneyMarketing;

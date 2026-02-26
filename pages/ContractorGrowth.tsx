import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const ContractorGrowth: React.FC = () => {
    const { getSectionContent } = usePageContent('ContractorGrowth');
    const isEditMode = useAdminEditMode();
    return (
        <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 uppercase tracking-wider">
                        Contractor Growth Systems
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        <EditableText page="ContractorGrowth" section="hero" field="title" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'title', 'Exclusive Leads for')}
                        </EditableText> <span className="text-blue-600"><EditableText page="ContractorGrowth" section="hero" field="highlight" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'highlight', 'Serious Contractors')}
                        </EditableText></span>.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        <EditableText page="ContractorGrowth" section="hero" field="description" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'description', 'HVAC, Roofing, Plumbing. We build local domination campaigns that put you in front of homeowners ready to hire.')}
                        </EditableText>
                    </p>

                    <div className="flex gap-4">
                        <a href="/book" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200/50">
                            Book Strategy Call
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2"><EditableText page="ContractorGrowth" section="features" field="feature1_title" isEditMode={isEditMode}>{getSectionContent('features', 'feature1_title', 'Exclusive Territory')}</EditableText></h3>
                        <p className="text-slate-500"><EditableText page="ContractorGrowth" section="features" field="feature1_desc" isEditMode={isEditMode}>{getSectionContent('features', 'feature1_desc', 'We work with one partner per city. Own your market completely.')}</EditableText></p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2"><EditableText page="ContractorGrowth" section="features" field="feature2_title" isEditMode={isEditMode}>{getSectionContent('features', 'feature2_title', 'High-Ticket Jobs')}</EditableText></h3>
                        <p className="text-slate-500"><EditableText page="ContractorGrowth" section="features" field="feature2_desc" isEditMode={isEditMode}>{getSectionContent('features', 'feature2_desc', 'Filter out tire kickers. We focus on homeowners looking for quality work.')}</EditableText></p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2"><EditableText page="ContractorGrowth" section="features" field="feature3_title" isEditMode={isEditMode}>{getSectionContent('features', 'feature3_title', 'Local SEO Dominance')}</EditableText></h3>
                        <p className="text-slate-500"><EditableText page="ContractorGrowth" section="features" field="feature3_desc" isEditMode={isEditMode}>{getSectionContent('features', 'feature3_desc', 'Rank for "Roofs in [City]" and hundreds of other keywords automatically.')}</EditableText></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractorGrowth;

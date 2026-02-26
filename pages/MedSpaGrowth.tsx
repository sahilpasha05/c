import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const MedSpaGrowth: React.FC = () => {
    const { getSectionContent } = usePageContent('MedSpaGrowth');
    const isEditMode = useAdminEditMode();
    return (
        <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold mb-6 uppercase tracking-wider">
                        Med Spa Growth Systems
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        <EditableText page="MedSpaGrowth" section="hero" field="title" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'title', 'Fill Your Calendar with')}
                        </EditableText> <span className="text-rose-600"><EditableText page="MedSpaGrowth" section="hero" field="highlight" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'highlight', 'High-Ticket Patients')}
                        </EditableText></span>.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        <EditableText page="MedSpaGrowth" section="hero" field="description" isEditMode={isEditMode}>
                            {getSectionContent('hero', 'description', 'Stop chasing leads. We build automated inbound engines for Botox, CoolSculpting, and Laser treatments that generate predictable revenue.')}
                        </EditableText>
                    </p>

                    <div className="flex gap-4">
                        <a href="/book" className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all shadow-lg shadow-rose-200/50">
                            Book Strategy Call
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            <EditableText page="MedSpaGrowth" section="features" field="feature1_title" isEditMode={isEditMode}>
                                {getSectionContent('features', 'feature1_title', 'High Intent Patients')}
                            </EditableText>
                        </h3>
                        <p className="text-slate-500">
                            <EditableText page="MedSpaGrowth" section="features" field="feature1_desc" isEditMode={isEditMode}>
                                {getSectionContent('features', 'feature1_desc', 'We target "near me" keywords with purchase intent. No window shoppers.')}
                            </EditableText>
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            <EditableText page="MedSpaGrowth" section="features" field="feature2_title" isEditMode={isEditMode}>
                                {getSectionContent('features', 'feature2_title', 'React & Book')}
                            </EditableText>
                        </h3>
                        <p className="text-slate-500">
                            <EditableText page="MedSpaGrowth" section="features" field="feature2_desc" isEditMode={isEditMode}>
                                {getSectionContent('features', 'feature2_desc', 'Fast-loading landing pages designed to convert mobile traffic instantly.')}
                            </EditableText>
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mb-6">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            <EditableText page="MedSpaGrowth" section="features" field="feature3_title" isEditMode={isEditMode}>
                                {getSectionContent('features', 'feature3_title', 'Revenue Tracking')}
                            </EditableText>
                        </h3>
                        <p className="text-slate-500">
                            <EditableText page="MedSpaGrowth" section="features" field="feature3_desc" isEditMode={isEditMode}>
                                {getSectionContent('features', 'feature3_desc', 'Know exactly how much revenue every dollar of ad spend generates.')}
                            </EditableText>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedSpaGrowth;

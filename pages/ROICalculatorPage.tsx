import React from 'react';
import ROICalculator from '../components/ROICalculator';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const ROICalculatorPage: React.FC = () => {
    const { getSectionContent } = usePageContent('ROICalculatorPage');
    const isEditMode = useAdminEditMode();
    return (
        <div className="pt-36 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4"><EditableText page="ROICalculatorPage" section="header" field="title" isEditMode={isEditMode}>{getSectionContent('header', 'title', 'Calculate Your Growth Potential')}</EditableText></h1>
                    <p className="text-slate-600 text-lg">
                        <EditableText page="ROICalculatorPage" section="header" field="description" isEditMode={isEditMode}>{getSectionContent('header', 'description', 'See exactly what a predictable inbound system could look like for your business bottom line.')}</EditableText>
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <ROICalculator />
                </div>
            </div>
        </div>
    );
};

export default ROICalculatorPage;

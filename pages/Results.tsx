import React from 'react';
import BentoGrid from '../components/BentoGrid';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const Results: React.FC = () => {
    const { getSectionContent } = usePageContent('Results');
    const isEditMode = useAdminEditMode();
    return (
        <div className="pt-28 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 text-center">
                    <EditableText page="Results" section="header" field="title" isEditMode={isEditMode}>{getSectionContent('header', 'title', 'Proof of Performance')}</EditableText>
                </h1>
                <p className="text-slate-600 text-center max-w-2xl mx-auto text-lg">
                    <EditableText page="Results" section="header" field="description" isEditMode={isEditMode}>{getSectionContent('header', 'description', 'We don\'t hide behind vanity metrics. Here are the revenue numbers generated for our partners.')}</EditableText>
                </p>
            </div>

            <BentoGrid />

            {/* Additional Case Study List could go here */}
        </div>
    );
};

export default Results;

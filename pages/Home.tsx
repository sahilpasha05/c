import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ROICalculator from '../components/ROICalculator';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const Home: React.FC = () => {
    const { getSectionContent } = usePageContent('Home');
    const isEditMode = useAdminEditMode();
    return (
        <main>
            <Hero />

            {/* Proof of Performance Section */}
            <BentoGrid />

            {/* ROI Calculator Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4"><EditableText page="Home" section="roi" field="title" isEditMode={isEditMode}>{getSectionContent('roi', 'title', 'Calculate Your Growth Potential')}</EditableText></h2>
                        <p className="text-slate-600 text-lg">
                            <EditableText page="Home" section="roi" field="description" isEditMode={isEditMode}>{getSectionContent('roi', 'description', 'See exactly what a predictable inbound system could look like for your business bottom line.')}</EditableText>
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <ROICalculator />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

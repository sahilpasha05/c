import React from 'react';
import { usePageContent } from '../hooks/usePageContent';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const Book: React.FC = () => {
    const { getSectionContent } = usePageContent('Book');
    const isEditMode = useAdminEditMode();

    return (
        <div className="pt-36 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4"><EditableText page="Book" section="header" field="title" isEditMode={isEditMode}>{getSectionContent('header', 'title', 'Book Your Growth Strategy Call')}</EditableText></h1>
                    <p className="text-slate-600 text-lg">
                        <EditableText page="Book" section="header" field="description" isEditMode={isEditMode}>{getSectionContent('header', 'description', 'Find a time that works for you. We\'ll audit your current setup and show you the roadmap to $50k/mo in extra revenue.')}</EditableText>
                    </p>
                </div>

                {/* Calendar Embed */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <iframe 
                        src="https://calendly.com/s91052040/30min?embed_domain=queencitygrowthlab.com&embed_type=Inline" 
                        width="100%" 
                        height="700" 
                        frameBorder="0"
                        className="w-full"
                        style={{ minHeight: '700px' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Book;

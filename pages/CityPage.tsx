import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

interface CityPageProps {
    vertical: 'medspa' | 'contractor' | 'attorney';
}

const CityPage: React.FC<CityPageProps> = ({ vertical }) => {
    const { city } = useParams<{ city: string }>();

    // Clean up city name for display (e.g., "new-york" -> "New York")
    const formattedCity = city
        ? city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Your City';

    const isMedSpa = vertical === 'medspa';
    const isAttorney = vertical === 'attorney';

    let industryName = 'Contractor';
    if (isMedSpa) industryName = 'Med Spa';
    if (isAttorney) industryName = 'Attorney';

    let serviceName = 'Lead Generation';
    if (isMedSpa) serviceName = 'Patient Acquisition';
    if (isAttorney) serviceName = 'Client Acquisition';

    return (
        <div className="pt-28 pb-12 bg-slate-50 min-h-screen">
            {/* City-Specific Hero */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                    <MapPin size={14} className="text-indigo-400" />
                    <span>{industryName} Growth in {formattedCity}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 max-w-4xl">
                    The #1 {industryName} Marketing System in <span className="text-indigo-600 underline decoration-4 decoration-indigo-200">{formattedCity}</span>.
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                    Dominating the {formattedCity} market requires more than just a website. You need a predictable {serviceName.toLowerCase()} engine that captures local demand.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-indigo-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-200/50">
                        Claim {formattedCity} Territory
                        <ArrowRight size={20} />
                    </Link>
                    <Link to={isMedSpa ? "/med-spa-marketing" : isAttorney ? "/attorney-marketing" : "/contractor-marketing"} className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                        View National Results
                    </Link>
                </div>
            </div>

            {/* Local Verification / Proof */}
            <div className="bg-white py-16 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Top {industryName}s in {formattedCity} Choose Us</h2>
                            <p className="text-slate-600 mb-6">
                                The competitive landscape in {formattedCity} is fierce. Standard SEO agencies don't understand the local nuances of the {industryName} market here. We do.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-slate-700"><strong>Exclusive Territory:</strong> We only work with one {industryName} in {formattedCity}.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-slate-700"><strong>Local Intent Data:</strong> We target keywords specific to {formattedCity} neighborhoods.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-slate-700"><strong>Revenue Tracking:</strong> See exactly how much {formattedCity} revenue we generate.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Dynamic Map/Location Placeholder */}
                        <div className="bg-slate-100 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-slate-200/50 flex flex-col items-center justify-center">
                                <MapPin size={48} className="text-slate-400 mb-2" />
                                <span className="text-slate-400 font-bold">Map of {formattedCity} Market</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityPage;

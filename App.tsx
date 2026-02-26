import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for faster initial load
const Home = lazy(() => import('./pages/Home'));
const MedSpaGrowth = lazy(() => import('./pages/MedSpaGrowth'));
const ContractorGrowth = lazy(() => import('./pages/ContractorGrowth'));
const Book = lazy(() => import('./pages/Book'));
const Results = lazy(() => import('./pages/Results'));
const ROICalculatorPage = lazy(() => import('./pages/ROICalculatorPage'));
const CityPage = lazy(() => import('./pages/CityPage'));
const AttorneyMarketing = lazy(() => import('./pages/AttorneyMarketing'));
const Blog = lazy(() => import('./pages/Blog'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-inter">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-pulse text-lg">Loading...</div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/med-spa-marketing" element={<MedSpaGrowth />} />
            <Route path="/contractor-marketing" element={<ContractorGrowth />} />
            <Route path="/attorney-marketing" element={<AttorneyMarketing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<Book />} />
            <Route path="/results" element={<Results />} />
            <Route path="/roi-calculator" element={<ROICalculatorPage />} />

            {/* Programmatic SEO Routes */}
            <Route path="/med-spa-marketing/:city" element={<CityPage vertical="medspa" />} />
            <Route path="/contractor-marketing/:city" element={<CityPage vertical="contractor" />} />
            <Route path="/attorney-marketing/:city" element={<CityPage vertical="attorney" />} />

            {/* QLC Routes */}
            <Route path="/QLC/login" element={<AdminLogin />} />
            <Route path="/QLC/dashboard" element={<AdminDashboard />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
import React, { lazy } from 'react'
import { HelmetProvider } from "react-helmet-async";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Help from './pages/help/Help';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy';
import TermsAndConditions from './pages/termsandconditions/TermsAndConditions';
import BestCAFirmsBhopal from './pages/bestCAfirmsbhopal/BestCAFirmsBhopal';
import CharteredAccountantBhopal from './pages/charteredaccountantbhopal/CharteredAccountantBhopal';
import BestCAFirmsBhopalArticleship from './pages/bestCAfirmsbhopalarticleship/BestCAFirmsBhopalArticleship';
import CAFirmsBhopalArticelship from './pages/CAfirmsbhopalarticelship/CAFirmsBhopalArticelship';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'

const NotFound = () => <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>Page Not Found Error 404!</h1>;

const AppContent = () => {
  const location = useLocation();
  const is404 = !['/',
    '/services',
    '/contact',
    '/about',
    '/help',
    '/privacy-policy',
    '/terms-and-conditions',
    '/best-ca-firms-bhopal',
    '/chartered-accountant-bhopal',
    '/best-ca-firms-bhopal-articleship',
    '/ca-firms-bhopal-articleship',
  ].includes(location.pathname);

  if (is404) {
    return <NotFound />;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <PopupForm /> */}
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/best-ca-firms-bhopal" element={<BestCAFirmsBhopal />} />
        <Route path="/chartered-accountant-bhopal" element={<CharteredAccountantBhopal />} />
        <Route path="/best-ca-firms-bhopal-articleship" element={<BestCAFirmsBhopalArticleship />} />
        <Route path="/ca-firms-bhopal-articleship" element={<CAFirmsBhopalArticelship />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <div className="scroll-container">
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  </div>
);

export default App;
import React, { lazy } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
// const Home = lazy(() => import('./pages/home/Home'));
// const Services = lazy(() => import('./pages/services/Services'))
// const Contact = lazy(() => import('./pages/contact/Contact'))
// const About = lazy(() => import('./pages/about/About'))
// const Help = lazy(() => import('./pages/help/Help'))
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Help from './pages/help/Help';

import PopupForm from './components/PopupForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'

const NotFound = () => <h1 style={{textAlign: 'center', marginTop: '3rem'}}>Page Not Found Error 404!</h1>;

const AppContent = () => {
  const location = useLocation();
  // If the route doesn't match any of the defined paths, show only the 404 page
  const is404 = !['/', '/services', '/contact', '/about', '/help'].includes(location.pathname);

  if (is404) {
    return <NotFound />;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <PopupForm />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <div className="scroll-container">
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </div>
);

export default App;








// import React from 'react'
// import { lazy } from 'react'
// import Nav from './components/Nav'
// import Footer from './components/Footer'
// const Home = lazy(() => import('./pages/home/Home'));
// const Services = lazy(() => import('./pages/services/Services'))
// const Contact = lazy(() => import('./pages/contact/Contact'))
// const About = lazy(() => import('./pages/about/About'))
// const Help = lazy(() => import('./pages/help/Help'))

// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy'
// // import TermsOfService from './pages/termsofservice/TermsOfService'
// // import Disclaimer from './pages/disclaimer/Disclaimer'
// import { BrowserRouter, Routes, Route } from 'react-router-dom' // ✅ Removed `Router`
// import ScrollToTop from './components/ScrollTop'


// const App = () => {
//   return (
//     <div className="scroll-container">
//       <BrowserRouter> {/* ✅ Wrap everything in BrowserRouter */}
//           <ToastContainer position="top-right" autoClose={3000} />
//         <ScrollToTop />
//         <Nav />
//         <Routes> {/* ✅ Use Routes instead of Router */}
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/help" element={<Help />} />
//           {/* <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
//         <Route path="/TermsofService" element={<TermsOfService />} />
//         <Route path="/Disclaimer" element={<Disclaimer />} /> */}
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

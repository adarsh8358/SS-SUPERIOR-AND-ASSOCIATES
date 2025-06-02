import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Help from './pages/help/Help'

// import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy'
// import TermsOfService from './pages/termsofservice/TermsOfService'
// import Disclaimer from './pages/disclaimer/Disclaimer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // ✅ Removed `Router`
import ScrollToTop from './components/ScrollTop'


const App = () => {
  return (
    <div className="scroll-container">
      <BrowserRouter> {/* ✅ Wrap everything in BrowserRouter */}
        <ScrollToTop />
        <Nav />
        <Routes> {/* ✅ Use Routes instead of Router */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          {/* <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsofService" element={<TermsOfService />} />
        <Route path="/Disclaimer" element={<Disclaimer />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

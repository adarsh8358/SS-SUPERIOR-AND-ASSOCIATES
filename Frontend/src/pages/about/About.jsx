import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {

  
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Firm</h1>
          <p>Your Trusted Partner for Comprehensive Financial Solutions</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="left">
              <h2>Who We Are</h2>
              <h3>Your Trusted Tax & Business Advisory Partner</h3>
              
              <div className="about-text">
                <p>
                  Founded by <strong>Mr. Shiv Kushwaha</strong>, a seasoned tax consultant and compliance
                  strategist with over 7 years of experience, our firm is <strong>headquartered</strong> in 
                  <strong> Bhopal</strong> and serves clients across India. What began as a modest practice 
                  has grown into a respected advisory firm known for its technical expertise 
                  and client-focused approach.
                </p>
                
                <p>
                  Over the years, we have built a reputation for delivering timely, accurate, 
                  and actionable solutions across a diverse portfolio including:
                </p>
                
                <ul>
                  <li>Income Tax Planning and Filing</li>
                  <li>GST Registration and Compliance</li>
                  <li>PF/ESIC Advisory Services</li>
                  <li>ROC Compliance and Filings</li>
                  <li>Business Entity Incorporation</li>
                  <li>Financial Reporting and Analysis</li>
                </ul>
                
                <hr />
                
                <p>
                  Our <strong>strength</strong> lies in a <strong>client-centric</strong> philosophy that prioritizes
                  clarity, confidentiality, and compliance at every stage. We understand that
                  each client has unique needs, which is why we reject the one-size-fits-all
                  approach in favor of customized solutions.
                </p>
                
                <p>
                  Whether you're a salaried individual seeking tax optimization, an entrepreneur
                  navigating business regulations, a startup establishing compliance frameworks,
                  or an established enterprise requiring sophisticated financial advisory,
                  we adapt our expertise to your specific circumstances.
                </p>
                
                <div className="mission-vision">
                  <div className="mission">
                    <h4>Our Mission</h4>
                    <p>To empower clients with financial clarity and compliance confidence through expert guidance and personalized service.</p>
                  </div>
                  <div className="vision">
                    <h4>Our Vision</h4>
                    <p>To become the most trusted financial advisory partner for individuals and businesses across India.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="right">
              <div className="image-container">
                <img src="/image.jpeg" alt="Our Team" />
                <div className="image-overlay">
                  <p>Mr. Shiv Kushwaha with our dedicated advisory team</p>
                </div>
              </div>
              
              <div className="achievements">
                <div className="achievement-box">
                  <h3>7.5+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="achievement-box">
                  <h3>5000+</h3>
                  <p>Clients across India</p>
                </div>
                <div className="achievement-box">
                  <h3>5.0 ★</h3>
                  <p>Rating on Google</p>
                </div>
                <div className="achievement-box">
                  <h3>250+</h3>
                  <p>Businesses Incorporated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Integrity</h3>
              <p>We maintain the highest ethical standards in all our advice and actions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✧</div>
              <h3>Expertise</h3>
              <p>Continuous learning ensures we provide technically sound solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♥</div>
              <h3>Client Focus</h3>
              <p>Your success is our priority - we listen first, then advise.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Proactive Approach</h3>
              <p>We anticipate challenges before they become problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Experience the Difference?</h2>
          <p>Schedule a consultation with our experts today</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">Contact Us</Link>
            <Link to="/services" className="cta-button secondary">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
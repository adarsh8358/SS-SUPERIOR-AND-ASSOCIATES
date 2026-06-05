import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {


  return (
    <><Helmet>
      <title>About Us | Chartered Accountant Firm in Bhopal</title>
      <meta
        name="description"
        content="Learn about SS Superior & Associates, a professional CA firm in Bhopal committed to delivering reliable tax and financial services."
      />
      <link
        rel="canonical"
        href="https://sssuperiorassociates.com/about"
      />
    </Helmet>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>About Our Firm</h1>
            <p>We are the people you can rely on for help with all your money matters and financial needs. </p>
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
                    Our company was started by <strong>Mr. Shiv Kushwaha</strong>. He is a tax consultant.
                    He knows a lot about this field. Mr. Shiv Kushwaha has been doing this
                    work for than 8 years. Our company is based in <strong>Bhopal</strong>. We help people
                    over India.
                  </p>

                  <p>
                    We have spent a lot of time building a name for ourselves by giving people what
                    they need when they need it. We do this by providing solutions that really work.
                    These solutions are, for different types of things including:
                  </p>

                  <ul>
                    <li>Income Tax Return Filing</li>
                    <li>GST Registration</li>
                    <li>PF/ESIC Advisory Services</li>
                    <li>ROC Compliance and Filings</li>
                    <li>Company Registration</li>
                    <li>Financial Reporting and Analysing</li>
                  </ul>

                  <hr />

                  <p>
                    Our strength is in putting the client. We think it is really important to be
                    clear keep things and follow the rules at every step. We know that each client
                    is different and has their needs. This is why we do not use the approach for
                    every client. Instead we make a plan that's just, for them a plan that is
                    tailored to what they need. We call this a solution. Our client-centric
                    philosophy is what guides us to do things this way.


                  </p>

                  <p>
                    We help people, with tax optimization no matter who they are. If you are someone
                    who gets a salary and you want to pay tax we can help you with that. We also
                    help business owners who are just starting out and need to know about all the
                    rules they have to follow. Startups need to follow a lot of rules so we help
                    them with that. And big companies need good financial advice so we do that
                    for them as well. We make sure our expertise fits the tax optimization
                    needs of each company like a startup or a big enterprise and even the tax
                    optimization needs of each person like a salaried individual or an
                    entrepreneur.
                  </p>

                  <div className="mission-vision">
                    <div className="mission">
                      <h4>Our Mission</h4>
                      <p>We want to help our clients understand their money and do things with the law.
                        Our experts will guide them. Give them the special attention they need. We do
                        this so our clients have clarity and feel confident they are doing everything
                        correctly.</p>
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
                    <p>Mr. Shiv Kushwaha and Team</p>
                  </div>
                </div>

                <div className="achievements">
                  <div className="achievement-box">
                    <h3>8+</h3>
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
            <h2>Our Core Value</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Integrity</h3>
                <p>We make sure our advice and actions are honest and fair.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✧</div>
                <h3>Expertise</h3>
                <p>We always keep learning so that we can give people solutions that really work from a point of view.</p>
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
    </>
  );
};

export default About;
import React from 'react';
import { Helmet } from "react-helmet-async";
import './Services.scss';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>CA Services in Bhopal | Tax, GST & Audit Experts</title>
        <meta
          name="description"
          content="Explore professional CA services in Bhopal including Income Tax, GST filing, company registration, audit, and compliance solutions."
        />
        <link
          rel="canonical"
          href="https://sssuperiorassociates.com/services"
        />
      </Helmet>

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <h1>Our Comprehensive Services</h1>
            <p>Expert solutions for all your tax, compliance, and business advisory needs</p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-intro">
              <div className="intro-text">
                <h2>SS SUPERIOR & ASSOCIATES</h2>
                <p>We provide end-to-end financial and compliance solutions tailored to your business requirements. Our expertise spans across all major regulatory and financial domains.</p>
              </div>
              <div className="intro-image">
                <img src="/services2.avif" alt="Our Services" />
              </div>
            </div>

            <div className="services-container">
              {/* GST Services */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>GST and Indirect Tax Services</h3>
                </div>
                <ul className="service-list">
                  <li>GST Registration</li>
                  <li>Monthly GST Return Filing</li>
                  <li>GST Revocation, Cancellation & Amendment</li>
                  <li>LUT Filing, Refund Claims & Advisory</li>
                  <li>E-invoice & E-way Bill Compliance</li>
                </ul>
              </div>

              {/* Income Tax Services */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Income Tax & Direct Tax Services</h3>
                </div>
                <ul className="service-list">
                  <li>Income Tax Return Filing</li>
                  <li>TDS Return Filing</li>
                  <li>Tax Audit</li>
                  <li>Capital Gain, Rental & Dividend Income Tax Advisory</li>
                  <li>Updated / Revised Return Filing</li>
                  <li>15CA/CB Compliance (for remittance)</li>
                  <li>Handling Income Tax Notices & Scrutiny</li>
                  <li>Advance Tax & Tax Planning Support</li>
                </ul>
              </div>

              {/* Company Registration */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Company & Business Registration</h3>
                </div>
                <ul className="service-list">
                  <li>Private Limited Company Registration</li>
                  <li>LLP Formation & Registration</li>
                  <li>One Person Company (OPC) Setup</li>
                  <li>Partnership Firm & Proprietorship Setup</li>
                  <li>Section 8 Company / NGO / Society Registration</li>
                  <li>MCA Annual Compliance & ROC Filing</li>
                  <li>Director KYC, MOA/ AOA Amendments</li>
                  <li>PAN, TAN, GST & Other Legal Onboarding</li>
                </ul>
              </div>

              {/* Project Report & Loan */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Project Report & Loan Assistance</h3>
                </div>
                <ul className="service-list">
                  <li>CMA Data Preparation (as per Bank Format)</li>
                  <li>Detailed Project Reports (DPR)</li>
                  <li>Term Loan & Working Capital Loan Files</li>
                  <li>Repayment Schedule, DSCR, Ratio Analysis</li>
                  <li>EMI Chart & Income Certificate for Loans</li>
                </ul>
              </div>

              {/* Startup & MSME */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Startup & MSME Support</h3>
                </div>
                <ul className="service-list">
                  <li>MSME and Udyam Registration</li>
                  <li>Startup India Registration and Guidance</li>
                  <li>Business Structuring and Advisory</li>
                  <li>Tax Benefits for Startups</li>
                  <li>Pitch Deck & Funding Assistance</li>
                </ul>
              </div>

              {/* Labour Law */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Labour Law & Payroll Compliance</h3>
                </div>
                <ul className="service-list">
                  <li>PF & ESIC Registration</li>
                  <li>Monthly Return Filing (PF/ESIC)</li>
                  <li>Professional Tax Registration & Returns</li>
                  <li>Salary Structuring & Payroll Support</li>
                  <li>Labour License Assistance</li>
                </ul>
              </div>

              {/* Accounting & Audit */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Accounting and Audit Services</h3>
                </div>
                <ul className="service-list">
                  <li>Accounting and Bookkeeping</li>
                  <li>Ledger Finalization and Reconciliation</li>
                  <li>Stock Audit & Internal Audit</li>
                  <li>Preparation of Financial Statements</li>
                  <li>MIS Reporting and Year-End Book Closure</li>
                </ul>
              </div>

              {/* Investment & Insurance */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Investment & Insurance Services</h3>
                </div>
                <ul className="service-list">
                  <li>Mutual Fund and SIP Planning</li>
                  <li>Tax-Saving Instruments</li>
                  <li>Life, Health and General Insurance</li>
                  <li>Personalized Financial Planning</li>
                </ul>
              </div>

              {/* Licenses */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Licenses and Regulatory Registrations</h3>
                </div>
                <ul className="service-list">
                  <li>FSSAI Registration or Food License</li>
                  <li>Gumasta</li>
                  <li>Import Export Code</li>
                  <li>Digital Signature Certificate</li>
                  <li>Labour License and Trade License</li>
                </ul>
              </div>

              {/* Government Services */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>Government & e-Marketplace Services</h3>
                </div>
                <ul className="service-list">
                  <li>GeM Seller Registration & Listing</li>
                  <li>Tender Filing & Bid Support</li>
                  <li>Profile Optimization & Compliance</li>
                  <li>Assistance for Vendor Empanelment</li>
                </ul>
              </div>

              {/* NRI Services */}
              <div className="service-category">
                <div className="service-header">
                  <span className="service-icon">🔹</span>
                  <h3>NRI Services</h3>
                </div>
                <ul className="service-list">
                  <li>ITR Filing for NRI Individuals</li>
                  <li>Capital Gain Tax (Property / Equity Transactions)</li>
                  <li>15CA/CB Certification & Repatriation Services</li>
                  <li>PAN & DSC Issuance for NRIs</li>
                  <li>Investment & Tax Planning for NRIs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="container">
            <h2>Need Help ?</h2>
            <p>We have people who can help you with answers that're just for you.
              Our experts are ready to assist you with solutions that are made for
              you. They want to help you find what you need. Our experts will work
              with you to get the solutions.</p>
            <div className="cta-buttons">
              {/* <button className="cta-button primary">Book a Consultation</button> */}
              <Link to="/contact" className="cta-button secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
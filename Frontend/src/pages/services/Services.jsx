import React from 'react';
import './Services.scss';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
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
                <h3>GST & Indirect Tax Services</h3>
              </div>
              <ul className="service-list">
                <li>GST Registration (Regular / Composition Scheme)</li>
                <li>Monthly / Quarterly GST Return Filing (GSTR-1, GSTR-3B, GSTR-4, GSTR-9)</li>
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
                <li>Income Tax Return Filing (Salaried, Business, NRI)</li>
                <li>TDS Return Filing & Compliance</li>
                <li>Tax Audit (u/s 44AB)</li>
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
                <li>MSME (Udyam) Registration</li>
                <li>Startup India Registration & Guidance</li>
                <li>Business Structuring & Advisory</li>
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
                <h3>Accounting & Audit Services</h3>
              </div>
              <ul className="service-list">
                <li>Monthly / Quarterly Accounting (Manual & Tally)</li>
                <li>Ledger Finalization & Reconciliation</li>
                <li>Stock Audit & Internal Audit</li>
                <li>Financial Statement Preparation</li>
                <li>MIS Reporting & Year-End Book Closure</li>
              </ul>
            </div>

            {/* Investment & Insurance */}
            <div className="service-category">
              <div className="service-header">
                <span className="service-icon">🔹</span>
                <h3>Investment & Insurance Services</h3>
              </div>
              <ul className="service-list">
                <li>Mutual Fund & SIP Planning</li>
                <li>Tax-Saving Instruments (ELSS, NPS, etc.)</li>
                <li>Life, Health & General Insurance</li>
                <li>Personalized Financial Planning</li>
              </ul>
            </div>

            {/* Licenses */}
            <div className="service-category">
              <div className="service-header">
                <span className="service-icon">🔹</span>
                <h3>Licenses & Regulatory Registrations</h3>
              </div>
              <ul className="service-list">
                <li>FSSAI (Food License) Registration</li>
                <li>MP Shop & Establishment License (Gumasta)</li>
                <li>Import Export Code (IEC)</li>
                <li>Digital Signature Certificate (DSC)</li>
                <li>Labour License & Trade License</li>
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
          <h2>Need Help With Any of These Services?</h2>
          <p>Our experts are ready to assist you with personalized solutions</p>
          <div className="cta-buttons">
            {/* <button className="cta-button primary">Book a Consultation</button> */}
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import React from 'react';
import { Helmet } from "react-helmet-async";
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
// import './Home.scss'
// import './Responsive.scss'
import logo from '../../assets/logo.svg'
import ServicesContent from '../../components/ServicesContent'
import ServicesOptions from '../../components/ServicesOptions'
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
import CareerForm from '../../components/CareerForm';

const BestCAFirmsBhopal = () => {

    const [option, setOptions] = useState(false)
    const [page, setPage] = useState("home");

    const [showCareerForm, setShowCareerForm] = useState(false);

    const mapsUrl = "https://www.google.com/maps?q=SS+SUPERIOR+%26+ASSOCIATES,+Bhopal";
    const phoneNumber = "+919111656571";
    const email = "sssuperior213@gmail.com";


    return (
        <>
            <Helmet>
                <title>Best Best CA in Bhopal | Best CA Firms in Bhopal</title>
                <meta
                    name="description"
                    content="Searching for the Best Best CA in Bhopal? We are among the Best CA Firms in Bhopal, offering trusted GST, tax planning, audit, and compliance services with personal, transparent support."
                />

                <meta
                    name="keywords"
                    content="Best Best CA in Bhopal | Best CA Firms in Bhopal"
                />
                <link
                    rel="canonical"
                    href="https://sssuperiorassociates.com/"
                />
            </Helmet>

            <div
                className="career-float-btn"
                onClick={() => setShowCareerForm(true)}
            >
                <i className="ri-briefcase-line" style={{ fontSize: '2rem' }}></i>
            </div>

            <a
                href="https://wa.me/919111656571?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float-btn"
            >
                <i className="ri-whatsapp-line"></i>
            </a>

            {/* Popup Career Form */}
            {showCareerForm && (
                <div
                    className="career-popup-overlay"
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.4)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        className="career-form-container"
                        style={{
                            background: '#fff',
                            borderRadius: '10px',
                            padding: '2rem',
                            position: 'relative',
                            width: '90%',
                            maxWidth: '400px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
                        }}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setShowCareerForm(false)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            <i className="ri-close-line"></i>
                        </button>
                        <CareerForm onClose={() => setShowCareerForm(false)} />
                    </div>
                </div>
            )}

            <main className='home'>

                <section className="hero-section">
                    <div className="top">
                        <div className="overlay">
                            <h1>CA Firm in Bhopal - SS Superior & Associates</h1>
                            <h2>Best CA Firms in Bhopal - Building Trust. Enabling Growth.</h2>
                            <p>SS Superior & Associates is the place to go for all your needs related
                                to Taxation, GST, Compliance, Audit and Business Setup services.
                                We are a trusted partner for Tax and Business Advice. We want to
                                make legal and financial things simple for people, professionals,
                                new companies and big companies.</p>
                            {/* <Link to="/contact" className="Consultnow">Consult now <i className="ri-arrow-right-line"></i></Link> */}
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">

                    <div className="left">
                        <div className="top">
                            <h3>Who We Are</h3>
                            <h2>Your Trusted Tax & Business Advisory Partner - CA Firm in Bhopal</h2>
                        </div>
                        <div className="bottom">

                            <p>
                                We are one of the Best CA Firms in Bhopal. Our work includes helping people with
                                Income Tax filing. We also do GST compliance and ROC filing. We take care
                                of PF and ESIC compliance. Our team helps with company registration and
                                financial reporting. We like to keep things simple. We give our clients
                                advice. We are completely transparent. We make sure everything is fully
                                compliant with the rules.
                            </p>

                            <hr />

                            <p>Our strength is that we think about the client first. We make sure that we
                                are clear keep things and follow the rules at every step. It does not
                                matter if you are someone who gets a salary own a business just started
                                a company. Have a big company already. We give you solutions that are
                                made for you and what you need to do and we make sure these solutions
                                meet the rules that you have to follow. We do this because our client
                                is very important, to us and we want to make sure that our client
                                gets what they need.</p>
                            <div className="button">
                                <Link to="/about" className='ReadMore' >Read More <i className="ri-arrow-right-line"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">

                        <img src="/image.jpeg" alt="Best CA in Bhopal | Best CA Firms in Bhopal | SS Superior & Associates" />

                        <div className="Experience">

                            <div className="top">

                                <div className="box1">
                                    <h3>8+</h3>
                                    <p>Years of Experience</p>
                                </div>
                                <div className="box2">
                                    <h3>5000+</h3>
                                    <p>Clients across India</p>
                                </div>
                            </div>

                            <div className="bottom">

                                <div className="box3">
                                    <h3>5.0 ★</h3>
                                    <p>Rating on Google</p>
                                </div>
                                <div className="box4">
                                    <h3>250+</h3>
                                    <p>Businesses Incorporated</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <hr />

                <section className="services-corporate">
                    <div className="container">

                        <div className="section-head">
                            <span className="tag">Our Professional Services</span>
                            <h2>Complete Chartered Accountant Services in Bhopal</h2>
                            <p>
                                We provide end-to-end CA services including Income Tax, GST filing,
                                audit, business registration, compliance management, and financial advisory.
                                Everything you need — under one trusted Best CA Firms in Bhopal.
                            </p>

                        </div>

                        <div className="services-grid">

                            {/* CA SERVICES */}

                            <div className="service-card">
                                <h3>Taxation Services</h3>
                                <ul>
                                    <li>Income Tax Return Filing</li>
                                    <li>Tax Planning & Tax Saving Strategies</li>
                                    <li>GST Registration & Return Filing</li>
                                    <li>TDS Filing & Compliance</li>
                                    <li>Tax Notices & Scrutiny Handling</li>
                                    <li>International Taxation</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Audit & Assurance</h3>
                                <ul>
                                    <li>Statutory Audit</li>
                                    <li>Tax Audit (Under Income Tax Act)</li>
                                    <li>GST Audit</li>
                                    <li>Internal Audit</li>
                                    <li>Stock Audit</li>
                                    <li>Concurrent Audit</li>
                                    <li>NGO / Trust Audit</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Business Registration and Setup</h3>
                                <ul>
                                    <li>Company Registration</li>
                                    <li>Partnership Registration</li>
                                    <li>MSME Registration</li>
                                    <li>GST Registration</li>
                                    <li>Startup India Registration</li>
                                    <li>NGO / Trust / Society Registration</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Accounting and Bookkeeping</h3>
                                <ul>
                                    <li>Bookkeeping</li>
                                    <li>Preparation of Financial Statement</li>
                                    <li>Balance Sheet and Profit & Loss Account</li>
                                    <li>Payroll Processing</li>
                                    <li>MIS Reporting</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Compliance & Regulatory Services</h3>
                                <ul>
                                    <li>ROC Compliance</li>
                                    <li>Annual Filing for Companies & LLP</li>
                                    <li>DIN & DSC Services</li>
                                    <li>RBI Compliance</li>
                                    <li>FEMA Compliance</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Financial and Advisory Services</h3>
                                <ul>
                                    <li>Project Report Preparation</li>
                                    <li>Loan & CMA Report</li>
                                    <li>Business Valuation</li>
                                    <li>Investment Advisor</li>
                                    <li>Budgeting and Financial Planning</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>NGO & Trust Services</h3>
                                <ul>
                                    <li>12A & 80G Registration</li>
                                    <li>CSR Compliance</li>
                                    <li>FCRA Registration</li>
                                    <li>NGO Audit & Compliance</li>
                                </ul>
                            </div>

                            {/* OTHER SERVICES */}

                            <div className="service-card">
                                <h3>Business Advisory and Growth Consulting</h3>
                                <ul>
                                    <li>Business Restructure</li>
                                    <li>Profit Improvement Strategies</li>
                                    <li>Cost Control & Budgeting</li>
                                    <li>Financial Forecasting</li>
                                    <li>Cash Flow Management</li>
                                    <li>Risk Management Advisory</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Loan & Banking Support</h3>
                                <ul>
                                    <li>CMA Data Preparation</li>
                                    <li>Project Report for Bank Loans</li>
                                    <li>Working Capital Assessment</li>
                                    <li>Loan Restructuring Assistance</li>
                                    <li>Bank Compliance Support</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Corporate Finance Services</h3>
                                <ul>
                                    <li>Business Valuation</li>
                                    <li>Due Diligence</li>
                                    <li>Mergers & Acquisitions Support</li>
                                    <li>Financial Modeling</li>
                                    <li>Investor Pitch Financials</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>International & NRI Services</h3>
                                <ul>
                                    <li>NRI Taxation</li>
                                    <li>FEMA Compliance</li>
                                    <li>Foreign Investment Advisor</li>
                                    <li>Transfer Pricing</li>
                                    <li>DTAA Advisory</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Litigation & Representation</h3>
                                <ul>
                                    <li>Income Tax Appeals</li>
                                    <li>GST Appeals</li>
                                    <li>Representation Before Authorities</li>
                                    <li>Tribunal Matters Support</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Virtual CFO Services</h3>
                                <ul>
                                    <li>Financial Planning</li>
                                    <li>Board-Level Reporting</li>
                                    <li>KPI Tracking</li>
                                    <li>Business Performance Analysis</li>
                                    <li>Fundraising Strategy</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Startup & MSME Advisory</h3>
                                <ul>
                                    <li>Startup Funding Support</li>
                                    <li>ESOP Structuring</li>
                                    <li>Valuation for Investors</li>
                                    <li>Compliance Roadmap</li>
                                    <li>Government Subsidy Consultation</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Investment & Wealth Advisory</h3>
                                <ul>
                                    <li>Portfolio Structuring</li>
                                    <li>Capital Gain Planning</li>
                                    <li>Retirement Planning</li>
                                    <li>Financial Goal Planning</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Certification Services</h3>
                                <ul>
                                    <li>Net Worth Certificate</li>
                                    <li>Turnover Certificate</li>
                                    <li>CA Certificate for Visa</li>
                                    <li>Fund Utilization Certificate</li>
                                    <li>Financial Projection Certificate</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Forensic & Investigation Services</h3>
                                <ul>
                                    <li>Investigation of Fraud</li>
                                    <li>Audit of Financial Forensic</li>
                                    <li>Dispute Resolutions</li>
                                    <li>Insurance Claim Certification</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                <hr />

                <section className="reach-out-section">

                    <div className="top">
                        <h3>Here to Reach-out</h3>
                        <div className="map">
                            <iframe
                                className='google-map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6532686970386!2d77.45174247435655!3d23.182851710329718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a7bc1480d1%3A0x16a4c28436739658!2sSS%20SUPERIOR%20%26%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1747120579768!5m2!1sen!2sin"
                                width="400"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>

                    <div className="bottom">

                        <div className="form">
                            <h3>Get-in-Touch</h3>

                            <ContactForm />


                        </div>
                    </div>

                </section>

                <hr />

                <div className="testimonials">
                    <Testimonials />
                </div>

                <hr />

                <section className="faq-section">
                    <div className="container">

                        <h2>Frequently Asked Questions</h2>
                        <p className="faq-intro">
                            You can get answers to the questions that people often ask about taxation, GST, audit and compliance services. - SS Superior & Associates | Best CA Firms in Bhopal
                        </p>

                        <div className="faq-item">
                            <h3>1. Why should I get an Accountant to help with my taxes and making sure I follow the rules?</h3>
                            <p>
                                A CA Firm in Bhopal can really help you. They can help reduce the amount of
                                tax you have to pay. They can also protect you from getting penalties and notices.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>2. To file your Income Tax Return you need some documents.</h3>
                            <p>
                                When you file your income tax return you usually need your PAN, Aadhaar, bank
                                statements Form 16 if you are working and financial statements for your business
                                if you are self employed.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>3. How days does it take to get a GST registration?</h3>
                            <p>
                                It usually takes around 3-5 working days to get a Goods and Services Tax registration.
                                It can take longer.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>4. Do you provide online consultation services?</h3>
                            <p>
                                We are a CA Firm in Bhopal. We help people with their taxes and businesses.
                                People from Bhopal and all over India can talk to us on the phone send us
                                an email or meet with us online. We can help with taxes, GST, checking
                                finances and giving business advice.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>5. I can definitely help with income tax notices and GST scrutiny cases?</h3>
                            <p>
                                We do this kind of thing all the time. Our Best CA Firms in Bhopal is really good, at dealing
                                with income tax notices and GST notices. We also go to tax authorities to
                                represent our clients. So what we do is we look at each case carefully
                                make sure we have all the documents. Then we represent our clients in a
                                professional way.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>6. Do you provide services outside Bhopal?</h3>
                            <p>
                                Yes. Although we are a CA Firm in Bhopal But, we serve clients across India.
                                Our digital compliance systems allow us to manage GST filing, ROC compliance,
                                business incorporation, and financial reporting for clients nationwide.
                            </p>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default BestCAFirmsBhopal;
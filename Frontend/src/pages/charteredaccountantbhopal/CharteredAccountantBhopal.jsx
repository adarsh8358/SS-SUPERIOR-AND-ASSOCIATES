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

const CharteredAccountantBhopal = () => {

    const [option, setOptions] = useState(false)
    const [page, setPage] = useState("home");

    const [showCareerForm, setShowCareerForm] = useState(false);

    const mapsUrl = "https://www.google.com/maps?q=SS+SUPERIOR+%26+ASSOCIATES,+Bhopal";
    const phoneNumber = "+919111656571";
    const email = "sssuperior213@gmail.com";


    return (
        <>
            <Helmet>
                <title>Chartered Accountant Bhopal | SS Superior & Associates</title>
                <meta
                    name="description"
                    content="Chartered Accountant Bhopal – SS Superior & Associates provides expert GST, income tax, audit, and compliance services with reliable guidance for businesses and individuals"
                />

                <meta
                    name="keywords"
                    content="Chartered Accountant Bhopal | SS Superior & Associates"
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
                            <h1>Chartered Accountant Bhopal -<br />SS Superior & Associates</h1>
                            <h2>Chartered Accountant Bhopal - Building Trust. Enabling Growth.</h2>
                            <p>SS Superior & Associates is the place to go for help with Taxation,
                                GST, Compliance, Audit and Business Setup services. We are a company
                                that people trust to give them advice on taxes and business. We
                                want to make it easy for people to deal with laws and money matters.
                                This includes individuals, professionals, new companies and big
                                companies that have been around for a while.</p>
                            {/* <Link to="/contact" className="Consultnow">Consult now <i className="ri-arrow-right-line"></i></Link> */}
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">

                    <div className="left">
                        <div className="top">
                            <h3>Who We Are</h3>
                            <h2>Your Trusted Tax And Business Advisory Partner - Chartered Accountant Bhopal</h2>
                        </div>
                        <div className="bottom">

                            <p>
                                We do income tax filing and other things like GST compliance. We also do
                                ROC filing and help with PF and ESIC compliance. We can even help you
                                register your company and do reporting.
                            </p>

                            <hr />

                            <p>Our strength is that we do things with the client in mind. We make sure to
                                be clear keep things and follow the rules at every step. It does not
                                matter if you are someone who gets a salary own a business just started
                                a company. Have a big company already. We give you solutions that are
                                made for you and what you need to do to follow the rules.</p>
                            <div className="button">
                                <Link to="/about" className='ReadMore' >Read More <i className="ri-arrow-right-line"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">

                        <img src="/image.jpeg" alt="Chartered Accountant Bhopal | SS Superior & Associates" />

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
                                We offer CA services.These services include Income Tax and GST filing.
                                We also do audits and help with business registration. Additionally
                                we manage compliance. Provide financial advice. You get all these
                                services from one trusted Chartered Accountant Bhopal.
                            </p>

                        </div>

                        <div className="services-grid">

                            {/* CA SERVICES */}

                            <div className="service-card">
                                <h3>Taxation Services</h3>
                                <ul>
                                    <li>Income Tax Return Filing</li>
                                    <li>Tax Planning and Tax Saving Strategies</li>
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
                                    <li>Registration of Partnership Firm</li>
                                    <li>MSME Registration</li>
                                    <li>GST Registration</li>
                                    <li>Startup India Registration</li>
                                    <li>NGO / Trust / Society Registration</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Accounting & Bookkeeping</h3>
                                <ul>
                                    <li>Monthly Bookkeeping</li>
                                    <li>Preparation ofFinancial Statement</li>
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
                                <h3>Financial & Advisory Services</h3>
                                <ul>
                                    <li>Project Report Preparation</li>
                                    <li>Loan & CMA Report</li>
                                    <li>Valuation of Business</li>
                                    <li>Advisory for Investment</li>
                                    <li>Budget and Financial Planning</li>
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
                                    <li>Profit Improvement Strategies</li>
                                    <li>Cost Control and Budget</li>
                                    <li>Financial Forecast</li>
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
                                    <li>Valuation of Business</li>
                                    <li>Due of Diligence</li>
                                    <li>Merger and Acquisitions</li>
                                    <li>Financial Modeling</li>
                                    <li>Investor Pitch Financials</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>International & NRI Services</h3>
                                <ul>
                                    <li>NRI Taxation</li>
                                    <li>FEMA Compliance</li>
                                    <li>Advisory for Foreign Investment</li>
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
                                    <li>Strategies for Financial Planning</li>
                                    <li>Board-Level Reporting</li>
                                    <li>KPI Tracking</li>
                                    <li>Business Performance Analysis</li>
                                    <li>Strategies for Fundraising</li>
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
                                    <li>Financial Planning</li>
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
                                    <li>Fraud Investigation</li>
                                    <li>Financial Forensic Audit</li>
                                    <li>Dispute Resolution</li>
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
                            You can get answers to common questions about taxation.
                        </p>

                        <div className="faq-item">
                            <h3>1. So you are wondering why you should hire an Accountant for tax and compliance services.</h3>
                            <p>
                                Hiring a Chartered Accountant makes sure your taxes are done right. They also make sure you
                                submit your GST returns on time. This keeps your business in line with the law. A professional
                                CA can help you pay tax. They also protect you from getting fines and notices.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>2. What documents do I need to file my Income Tax Return??</h3>
                            <p>
                                For filing your Income Tax Return (ITR) you will typically need a documents.
                                These include your Permanent Account Number (PAN) and Aadhaar number. You will
                                also need to provide bank statements. If you are salaried you need Form 16 from
                                your employer. If you run a business or are a professional you need to provide
                                statements of your business. You should also keep investment proofs handy if you
                                want to claim tax deductions. Our team will review all your documents carefully.
                                This ensures that your ITR is filed accurately. It also helps you get the tax saving
                                benefits.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>3. How long it takes to complete the GST registration process in India?</h3>
                            <p>
                                GST registration usually takes around 3 to 7 working days. The time it takes can vary
                                depending on how accurate your GST documentsre It also depends on how the government
                                processes your GST application.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>4. Do you provide online consultation services?</h3>
                            <p>
                                We are here to help as a Chartered Accountant Bhopal that people trust. Our office
                                is a place where you can come and talk to us in person. We also do meetings.
                                So people from Bhopal and all over India can call us. Send us an email. We
                                can also have meetings. We help people with taxes and things like GST and
                                audits. We also give advice on how to run a business.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>5. Can You definitely help with income tax notices and GST scrutiny cases.</h3>
                            <p>
                                Absolutely. Our firm handles income tax notices. We also handle GST notices.
                                We do representation before tax authorities. We look at each case. Then we
                                prepare the documents. After that we represent our clients in a way. Our
                                goal is to make sure our clients comply with the rules. We also work to
                                resolve the issues.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>6.  Do you offer your services in places, outside Bhopal?</h3>
                            <p>
                                Yes. Although Our Firm is in Bhopal But, we serve clients across India.
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

export default CharteredAccountantBhopal;
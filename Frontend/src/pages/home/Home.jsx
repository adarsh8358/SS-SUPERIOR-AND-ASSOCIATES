import React from 'react';
import { Helmet } from "react-helmet-async";
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './Home.scss'
import './Responsive.scss'
import logo from '../../assets/logo.svg'
import ServicesContent from '../../components/ServicesContent'
import ServicesOptions from '../../components/ServicesOptions'
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
import CareerForm from '../../components/CareerForm';

const Home = () => {

    const [option, setOptions] = useState(false)
    const [page, setPage] = useState("home");

    const [showCareerForm, setShowCareerForm] = useState(false);

    const mapsUrl = "https://www.google.com/maps?q=SS+SUPERIOR+%26+ASSOCIATES,+Bhopal";
    const phoneNumber = "+919111656571";
    const email = "sssuperior213@gmail.com";


    return (
        <>
            <Helmet>
                <title>CA in Bhopal | CA Firm in Bhopal | SS Superior & Associates</title>
                <meta
                    name="description"
                    content="Looking for a trusted CA in Bhopal ?
                     Our professional CA Firm in Bhopal provides expert
                      support in GST, income tax, audits, compliance, and
                       business growth with clear, friendly guidance."
                />

                <meta
                    name="keywords"
                    content="CA in Bhopal | CA Firm in Bhopal | SS Superior & Associates"
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
                            <h1>CA in Bhopal - SS Superior & Associates</h1>
                            <h2>CA Firm in Bhopal - Building Trust. Enabling Growth.</h2>
                            <p>SS Superior & Associates is your one-stop solution for Taxation,
                                GST, Compliance, Audit, and Business Setup services. As a
                                trusted Trusted Tax & Business Advisory Partner, we are committed to simplifying
                                complex legal and financial processes for individuals,
                                professionals, startups, and established enterprises.We
                                understand that managing taxes and regulatory requirements
                                can be overwhelming. That’s why our approach focuses on
                                clarity, accuracy, and timely execution. From income tax
                                filing and GST registration to company incorporation and
                                ongoing compliance support, we provide structured solutions
                                tailored to your specific needs.{/* Our goal is not just to
                                  offer services, but to build long-term professional
                                  relationships based on trust, transparency, and reliability.
                                  At SS Superior & Associates, we ensure that your financial
                                  matters are handled with precision, allowing you to focus
                                  on growing your business with confidence.*/}</p>
                            {/* <Link to="/contact" className="Consultnow">Consult now <i className="ri-arrow-right-line"></i></Link> */}
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">

                    <div className="left">
                        <div className="top">
                            <h3>Who We Are</h3>
                            <h2>Your Trusted Tax & Business Advisory Partner - CA in Bhopal</h2>
                        </div>
                        <div className="bottom">

                            <p>
                                <strong>CA Firm in Bhopal</strong> - We specialize in <strong>Income Tax filing, GST compliance, ROC filing,
                                    PF & ESIC compliance, company registration, and financial reporting</strong>.
                                Our approach is simple — clear advice, complete transparency, and full compliance.
                                Whether you are a salaried professional, startup founder, NGO, or established
                                business owner, we offer personalized solutions that support your long-term growth.
                            </p>

                            <hr />

                            <p>

                                Our <strong> strength</strong> lies in a <strong> client-centric</strong> approach that prioritizes
                                clarity, confidentiality, and compliance at every stage. Whether
                                you're a salaried individual, an entrepreneur, a startup, or an
                                established enterprise, we offer tailor-made solutions aligned
                                with your goals and regulatory requirements</p>
                            <div className="button">
                                <Link to="/about" className='ReadMore' >Read More <i className="ri-arrow-right-line"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">

                        <img src="/image.jpeg" alt="CA in Bhopal | CA Firm in Bhopal | SS Superior & Associates" />

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
                                Everything you need — under one trusted CA Firm in Bhopal.
                            </p>

                        </div>

                        <div className="services-grid">

                            {/* CA SERVICES */}

                            <div className="service-card">
                                <h3>Taxation Services</h3>
                                <ul>
                                    <li>ITR Filing</li>
                                    <li>Tax Planning</li>
                                    <li>GST Registration & Filing</li>
                                    <li>TDS Compliance</li>
                                    <li>Notice Handling</li>
                                    <li>International Tax</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Audit & Assurance</h3>
                                <ul>
                                    <li>Statutory Audit</li>
                                    <li>Tax Audit</li>
                                    <li>GST Audit</li>
                                    <li>Internal Audit</li>
                                    <li>Stock Audit</li>
                                    <li>NGO Audit</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Business Registration & Setup</h3>
                                <ul>
                                    <li>Pvt Ltd / LLP Registration</li>
                                    <li>Partnership Registration</li>
                                    <li>MSME Registration</li>
                                    <li>GST Registration</li>
                                    <li>Startup India</li>
                                    <li>NGO Registration</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Accounting & Bookkeeping</h3>
                                <ul>
                                    <li>Monthly Bookkeeping</li>
                                    <li>Financial Statement Preparation</li>
                                    <li>Balance Sheet & Profit & Loss Account</li>
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
                                    <li>Business Valuation</li>
                                    <li>Investment Advisory</li>
                                    <li>Budgeting & Financial Planning</li>
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
                                <h3>Business Advisory & Growth Consulting</h3>
                                <ul>
                                    <li>Business Restructuring</li>
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
                                    <li>Foreign Investment Advisory</li>
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
                                    <li>Strategic Financial Planning</li>
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

                <div className="testimonials">
                    <Testimonials />
                </div>

                <hr />

                <section className="faq-section">
                    <div className="container">

                        <h2>Frequently Asked Questions</h2>
                        <p className="faq-intro">
                            Get quick answers to common queries related to taxation, GST, audit, and compliance services.
                        </p>

                        <div className="faq-item">
                            <h3>1. Why should I hire a CA for tax and compliance services?</h3>
                            <p>
                                Hiring a qualified CA ensures your taxes are filed correctly, your GST returns
                                are submitted on time, and your business remains legally compliant.
                                A professional CA in Bhopal not only helps reduce tax liability but also
                                protects you from penalties and notices. At SS Superior & Associates,
                                we guide individuals and businesses with practical and reliable tax solutions.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>2. What documents are required for Income Tax Return (ITR) filing?</h3>
                            <p>
                                For ITR filing, you generally need PAN, Aadhaar, bank statements,
                                Form 16 (for salaried individuals), business financial statements (for professionals),
                                and investment proofs for tax deductions. Our team reviews all documents carefully
                                to ensure accurate filing and maximum tax-saving benefits.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>3. How long does GST registration take?</h3>
                            <p>
                                GST registration usually takes 3 to 7 working days, depending on document
                                accuracy and government processing time. Our CA firm in Bhopal handles
                                the complete process — from documentation to final approval — ensuring
                                a smooth and hassle-free registration.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>4. Do you provide online consultation services?</h3>
                            <p>
                                Yes, as a trusted CA in Bhopal, we provide both in-office and online consultations.
                                Clients from Bhopal and across India can connect with us via phone, email,
                                or virtual meetings for taxation, GST, audit, and business advisory services.
                                While online consultations are convenient and time-saving, we also encourage
                                face-to-face meetings for more detailed discussions and personalized financial
                                guidance whenever required.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>5. Can you handle income tax notices and GST scrutiny cases?</h3>
                            <p>
                                Absolutely. Our firm specializes in handling income tax notices, GST notices,
                                and representation before tax authorities. We analyze the case, prepare proper
                                documentation, and represent clients professionally to ensure compliance
                                and resolution.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>6. Do you provide services outside Bhopal?</h3>
                            <p>
                                Yes. Although Our CA Firm in Bhopal But, we serve clients across India.
                                Our digital compliance systems allow us to manage GST filing, ROC compliance,
                                business incorporation, and financial reporting for clients nationwide.
                            </p>
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


            </main>
        </>
    )
}

export default Home;
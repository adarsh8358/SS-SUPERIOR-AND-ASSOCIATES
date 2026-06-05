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

const CAFirmsBhopalArticelship = () => {

    const [option, setOptions] = useState(false)
    const [page, setPage] = useState("home");

    const [showCareerForm, setShowCareerForm] = useState(false);

    const mapsUrl = "https://www.google.com/maps?q=SS+SUPERIOR+%26+ASSOCIATES,+Bhopal";
    const phoneNumber = "+919111656571";
    const email = "sssuperior213@gmail.com";


    return (
        <>
            <Helmet>
                <title>CA Firms in Bhopal for Articleship | SS Superior & Associates</title>
                <meta
                    name="description"
                    content="Start your professional journey with CA Firms in Bhopal for Articleship, gaining practical exposure in audit, GST, taxation, and compliance with structured training and expert mentorship."
                />

                <meta
                    name="keywords"
                    content="CA Firms in Bhopal for Articleship | SS Superior & Associates"
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
                            <h1>CA Firms in Bhopal for Articleship -<br />SS Superior & Associates</h1>
                            <h2>CA Firms in Bhopal for Articleship - Building Trust. Enabling Growth.</h2>
                            <p>SS Superior & Associates is your one-stop shop for all Taxation, GST, Compliance,
                                Audit and Business Setup needs. We are a Tax and Business Advisory Partner. We
                                help individuals, professionals, startups and big businesses. Managing taxes
                                and rules can be really tough.</p>
                            {/* <Link to="/contact" className="Consultnow">Consult now <i className="ri-arrow-right-line"></i></Link> */}
                        </div>
                    </div>
                </section>

                <hr />

                <section className="about-section">

                    <div className="left">
                        <div className="top">
                            <h3>Who We Are</h3>
                            <h2>Your Trusted Tax and Business Advisory Partner</h2>
                        </div>
                        <div className="bottom">

                            <p>
                                We help with Income Tax filing. We also do GST compliance, ROC filing, PF and ESIC compliance,
                                company registration and financial reporting. Our approach is straightforward. We give advice.
                                We are transparent in what we do. We ensure compliance.
                            </p>

                            <hr />

                            <p>

                                Our strength is that we always think about the client first. We make sure that everything is
                                clear and private and that we follow all the rules. It does not matter if you are someone who
                                gets a salary own a business just started a company. Have a big company already. We will give
                                you solutions that're just right for you and what you need to do to follow the rules.</p>
                            <div className="button">
                                <Link to="/about" className='ReadMore' >Read More <i className="ri-arrow-right-line"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">

                        <img src="/image.jpeg" alt="CA Firms in Bhopal for Articleship | SS Superior & Associates" />

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
                <section className="articleship-section">
                    <div className="container">

                        <h2>Articleship Opportunities at SS Superior & Associates | CA Firms in Bhopal for Articleship</h2>

                        <p>
                            Articleship is an important step for Chartered Accountants. At SS Superior &
                            Associates we give CA students training in real work settings. Our firm helps
                            students gain experience in areas like taxation, GST, audits, financial reports
                            and following rules.This training is really good for students because it helps
                            students learn things and grow in their career with CA Firms in Bhopal for Articleship.
                        </p>

                        <p>
                            During their articleship students get to work on real client projects. They
                            assist in audits. Prepare income tax returns. This helps them learn how to
                            apply accounting standards and tax laws in life. Our goal is to help students
                            build technical knowledge. They need this to have skills and professional
                            confidence. These are key, to a CA career.
                        </p>

                        <div className="articleship-features">

                            <h3>What You Will Learn During Articleship</h3>

                            <ul>
                                <li>You will get to do things yourself and learn how to fill out and submit Income Tax Returns</li>
                                <li>You will learn about registering for GST filling out Income Tax returns and following all
                                    the rules and procedures that come with it like GST registration and Income Tax return filing
                                    and compliance procedures, for Income Tax returns.</li>
                                <li>Assistance in statutory, internal and tax audits</li>
                                <li>Preparation of statements and accounting reports is my main task. I focus on statements.</li>
                                <li>Understand ROC filings and corporate compliance you need to know what the Registrar of Companies is.</li>
                                <li>Client communication and professional documentation practices</li>
                            </ul>

                        </div>

                        <div className="articleship-faq">

                            <h3>Articleship Related FAQs</h3>

                            <div className="faq-item">
                                <h4>Who can apply for CA articleship?</h4>
                                <p>
                                    To be eligible you must have passed the CA Intermediate exam. You also need to be registered with the
                                    Institute of Chartered Accountants of India. The articleship is really good because it gives students
                                    training. This training goes along, with the things they learned during their Chartered Accountant
                                    studies.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h4>What kind of hands-on experience do students studying to be Chartered Accountants gain when they are on articleship?</h4>
                                <p>
                                    When students are on articleship they get to do work in areas like taxation and GST compliance and audits and
                                    accounting and business advisory services for Chartered Accountants. This practical experience helps them understand
                                    what it takes to be a pro in the field. Students gain experience, in taxation, GST compliance, audit assignments,
                                    accounting work and business advisory services. It helps them develop the skills required in the accounting field.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h4> What makes articleship crucial for CA students? Articleship is actually a must, for CA students.</h4>
                                <p>
                                    Articleship is really important because it helps CA students learn how things actually work in the world.
                                    Articleship helps CA students develop discipline and learn how to solve problems. It is a way for
                                    CA students to understand taxation and audit and compliance and how they are used in real businesses.
                                </p>
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
                                We offer CA services.

                                These services include:
                                * Income Tax
                                * GST filing
                                * Audit
                                * Business registration
                                * Compliance management
                                * Financial advisory
                                Everything you need is available with one trusted firm.
                            </p>

                        </div>

                        <div className="services-grid">

                            {/* CA SERVICES */}

                            <div className="service-card">
                                <h3>Taxation Services</h3>
                                <ul>
                                    <li>Income Tax Return Filing</li>
                                    <li>Tax Planning and Tax Saving Strategies</li>
                                    <li>GST Registration and Return Filing</li>
                                    <li>TDS Filing & Compliance</li>
                                    <li>Tax Notices & Scrutiny Handling</li>
                                    <li>International Taxation</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <h3>Audit and Assurance</h3>
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
                                <h3>Financial & Advisory Services</h3>
                                <ul>
                                    <li>Project Report Preparation</li>
                                    <li>Loan & CMA Report</li>
                                    <li>Business Valuation</li>
                                    <li>Investment Advisory</li>
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
                                    <li>Business Restructuring</li>
                                    <li>Profit Improvement Strategies</li>
                                    <li>Cost Control and Budgeting</li>
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
                            Get answers to your common tax questions.
                        </p>

                        <div className="faq-item">
                            <h3>1. Why should I hire an Accountant for tax and compliance services?</h3>
                            <p>
                                I think it is an idea to hire a Chartered Accountant because they can help
                                me with my taxes and make sure I am doing everything correctly. A Chartered
                                Accountant can file my taxes properly submit my GST returns on time and help
                                my business follow all the laws. This means I will not have to worry about
                                getting in trouble or paying money because of mistakes. A Chartered Accountant
                                at a company, like SS Superior & Associates can give me advice and help me
                                with my tax problems. They can also help me pay less in taxes and avoid getting
                                notices or penalties.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>2. What documents do you need to file your Income Tax Return?</h3>
                            <p>
                                To file your Income Tax Return you usually need your PAN, Aadhaar, bank
                                statements Form 16 if you are working and financial statements for your
                                business if you are a professional. You also need to show proofs of your
                                investments so you can get tax deductions. Our team goes through all
                                these documents carefully to make sure everything is correct. You get
                                the most tax savings, from your Income Tax Return filing.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>3. How long does it take to get a GST registration, how days does it take?</h3>
                            <p>
                                Getting a GST registration can take some time. It usually takes around 3 to 7
                                working days. The GST registration process depends on how accurate your documentsre
                                If your GST registration documents are correct it will be processed fast. The government
                                needs some days to process your GST registration. It can take a day or a few days for
                                the GST registration to be completed. The time, for GST registration varies. It is
                                usually done within a few days.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>4. Do you provide online consultation services?</h3>
                            <p>
                                We are Chartered Accountants that people trust. We meet with clients in our office.
                                We also do online meetings. People from Bhopal and all over India can call us. Send
                                us an email or we can have a virtual meeting. We help people with taxes and GST and
                                audits. We give advice on how to run their businesses. Online meetings are easy. Save
                                time.. We also like to meet people in person so we can talk about things in more detail
                                and give them advice that is just, for them when they need it. We do this for taxation
                                and GST and audit and business advisory services.
                            </p>

                        </div>

                        <div className="faq-item">
                            <h3>5. Can you handle income tax notices and GST scrutiny cases?</h3>
                            <p>
                                Yes our firm can handle income tax notices and GST scrutiny cases.
                                We are really good at handling income tax notices, GST. We also represent
                                people before tax authorities. When we get a case we look at it carefully
                                make sure we have all the papers and then we represent our clients in a
                                professional way so that everything is okay, with the tax people and the
                                case is closed. We do this for income tax notices and GST scrutiny cases.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>6. Do you provide services outside of Bhopal. Do you provide services all over India?</h3>
                            <p>
                                Yes. Although Our Firm is in Bhopal But, we serve clients across India.
                                Our digital compliance systems allow us to manage GST filing, ROC compliance,
                                business incorporation, and financial reporting for clients nationwide.
                            </p>
                        </div>

                        <div class="faq-item">
                            <h3>7. What are the CA Firms in Bhopal where I can do my articleship?</h3>
                            <p>
                                There are good CA Firms in Bhopal that give CA students a chance to get good articleship
                                experience. The CA Firms in Bhopal for articleship are really good because they teach
                                you about taxes and GST and how to do audits and other things.
                            </p>
                        </div>

                        <div class="faq-item">
                            <h3>8. How can I apply for articleship in a CA firm in Bhopal?</h3>
                            <p>
                                To apply for articleship in a CA firm in Bhopal students can do a things.
                                They can send their resume to the CA firm by email. They can also apply
                                through networks. Some students even visit the CA firm in person.
                            </p>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default CAFirmsBhopalArticelship;
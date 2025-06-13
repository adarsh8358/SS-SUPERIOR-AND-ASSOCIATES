import React from 'react';
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
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
import ContactForm from '../../components/ContactForm';

const Home = () => {

    const [option, setOptions] = useState(false)
    const [page, setPage] = useState("home");

    const mapsUrl = "https://www.google.com/maps?q=SS+SUPERIOR+%26+ASSOCIATES,+Bhopal";
    const phoneNumber = "+919111656571";
    const email = "sssuperior213@gmail.com";


    return (
        <main className='home'>



            <section className="hero-section">
                <div className="top">
                    <div className="overlay">
                        <h1>Welcome to SS Superior & Associates</h1>
                        <h2>Building Trust. Enabling Growth.</h2>
                        <p>SS Superior & Associates - A one-stop solution for Taxation,
                            GST, Compliance & Business Setup.
                            We simplify legal and financial services for individuals, professionals, and enterprises.</p>
                        <Link to="/contact" className="Consultnow">Consult now <i className="ri-arrow-right-line"></i></Link>
                    </div>
                </div>
            </section>

            <hr />

            <section className="about-section">

                <div className="left">
                    <div className="top">
                        <h1>Who We Are</h1>
                        <h2>Your Trusted Tax & Business Advisory Partner</h2>
                    </div>
                    <div className="bottom">

                        <p>Founded by <strong> Mr. Shiv Kushwaha</strong>, a seasoned tax consultant and compliance
                            strategist, the firm is <strong> headquartered</strong> in <strong> Bhopal</strong> and serves clients
                            across India. Over the years, we have built a reputation for delivering
                            timely, accurate, and actionable solutions across a diverse portfolio
                            — including <strong> income tax, GST, PF/ESIC, ROC compliance, entity
                                incorporation, and financial reporting.</strong>

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

                    <img src="/image.jpeg" alt="Image" />

                    <div className="Experience">

                        <div className="top">

                            <div className="box1">
                                <h1>7.5+</h1>
                                <p>Years of Experience</p>
                            </div>
                            <div className="box2">
                                <h1>5000+</h1>
                                <p>Clients across India</p>
                            </div>
                        </div>

                        <div className="bottom">

                            <div className="box3">
                                <h1>5.0 ★</h1>
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

            <section className="services-section">

                <div className="top">
                    <h1>Our Services</h1>
                    <p>Get expert advice tailored to your financial goals—whether you're scaling a business or managing taxes</p>
                </div>

                <div className="bottom">
                    <div className="box">
                        <div className="buttons">
                            <ServicesOptions setPage={setPage} />
                        </div>
                        <div className="services">
                            <ServicesContent page={page} />
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="reach-out-section">

                <div className="top">
                    <h1>Here to Reach-out</h1>
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
                        <h1>Get-in-Touch</h1>

                        <ContactForm />

                        {/* <form>

                            <input type="name" placeholder='fullname' />
                            <input type="text" placeholder='mob. no.' />
                            <input type="email" placeholder='example@gmail.com (optional)' />
                            <label> <input type="checkbox" /> I agree to the terms and conditions</label>
                            <textarea placeholder='Enter your quary here......'></textarea>

                            <button type='submit'>submit</button>
                            <button type='reset'>reset</button>

                        </form> */}

                    </div>
                </div>

            </section>

            <hr />

            {/* <section class="testimonials">
                <div class="container">
                    <h2>What Our Clients Say</h2>

                    <div class="testimonial-grid">
                        <div class="testimonial">
                            <p>"Their business advisory helped us streamline our finances and grow faster."</p>
                            <h4>- Sarah M., GreenLeaf Startups</h4>
                        </div>
                        <div class="testimonial">
                            <p>"Excellent tax service with clear advice. I’ve recommended them to colleagues."</p>
                            <h4>- James T., Freelance Consultant</h4>
                        </div>
                        <div class="testimonial">
                            <p>"Very reliable and knowledgeable. They saved us a lot in taxes."</p>
                            <h4>- Priya R., Business Owner</h4>
                        </div>
                    </div>
                </div>
            </section> */}


            <div className="testimonials">
                <Testimonials />
            </div>


            <hr />



        </main>
    )
}

export default Home;
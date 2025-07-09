import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss'; 
import logo from '../assets/logo.svg'; 

const Footer = () => {
  return (
    <>
    <footer className="footer-section">
            <div className="footer-container">

                {/* Column 1: About & Logo */}
                <div className="footer-column about-column">
                    <div className="logo-container">
                        <img src={logo} alt="SS Superior & Associates" className="footer-logo" />
                        <h3>SS SUPERIOR & ASSOCIATES</h3>
                    </div>
                    <p className="footer-description">
                        Your trusted partner for taxation, compliance, and business advisory services.
                        Simplifying financial complexities since 2017.
                    </p>
                    <div className="social-links">
                        <Link to="https://www.linkedin.com/in/shiv-kushwaha-57bbba190" target="_blank" rel="noopener noreferrer">
                            <i className="ri-linkedin-fill"></i>
                        </Link>
                        <Link to="https://www.instagram.com/sssuperiorandassociates" target="_blank" rel="noopener noreferrer">
                            <i className="ri-instagram-fill"></i>
                        </Link>
                        <Link to="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="ri-twitter-x-fill"></i>
                        </Link>
                        <Link to="https://wa.me/919111656571" target="_blank" rel="noopener noreferrer">
                            <i className="ri-whatsapp-fill"></i>
                        </Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/">Home</Link></li>
                        <li><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/services">Services</Link></li>
                        <li><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/contact">Contact</Link></li>
                        <li><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/about">About Us</Link></li>
                        <li><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/help">Help</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services Summary */}
                <div className="footer-column services-summary">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Income Tax Filing (ITR 1-7)</li>
                        <li>GST Registration & Returns</li>
                        <li>Company Incorporation</li>
                        <li>Accounting & Bookkeeping</li>
                        <li>PF/ESIC Compliance</li>
                        <li>Business Loan Assistance</li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className="footer-column contact-info">
                    <h3>Contact Us</h3>
                    <div className="contact-item">
                        <i className="ri-map-pin-line"></i>
                        <span>24, 1st floor, Maple High Street , in front of Ashima Mall, Bhopal, (M.P) 462026</span>
                    </div>
                    <div className="contact-item">
                        <i className="ri-phone-line"></i>
                        <Link to="tel:+919111656571">+91 9111656571</Link>
                    </div>
                    <div className="contact-item">
                        <i className="ri-mail-line"></i>
                        <Link to="mailto:sssuperior213@gmail.com">sssuperior213@gmail.com</Link>
                    </div>
                    <div className="contact-item">
                        <i className="ri-time-line"></i>
                        <span>Mon-Sat: 10:00 AM - 07:00 PM</span>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copyright-section">
                <p>© {new Date().getFullYear()} SS Superior & Associates. All Rights Reserved.</p>
                <div className="legal-links">
                    <Link >Privacy Policy</Link>
                    <span> | </span>
                    <Link >Terms of Service</Link>
                    <span> | </span>
                    <Link >Disclaimer</Link>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
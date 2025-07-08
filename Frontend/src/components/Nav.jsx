import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ✅ Removed `Router`
import './Nav.scss';
// import './ResponsiveNav.scss';
import logo from '../assets/logo.svg';

const Nav = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false)
    const [option, setOptions] = useState(false)
    const [page, setPage] = useState("home");

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const location = useLocation();

    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);


    useEffect(() => {
        // Close the mobile menu whenever the route changes
        setMenuOpen(false);
    }, [location.pathname]);


    return (
        <>
            <section className={`nav-section ${showNavbar ? 'show' : 'hide'}`}>

                <div className="top">

                    <div className="left">
                        <span> <i className="ri-phone-fill"></i>  <Link className='phone' to="tel:+919111656571">+91 9111656571</Link> </span>
                        <span> <i className="ri-at-line"></i> <Link className='email' to="mailto:sssuperior213@gmail.com">sssuperior213@gmail.com</Link></span>
                    </div>

                    <div className="right">
                        <div className="social-media">
                            <Link
                                to="https://www.linkedin.com/in/shiv-kushwaha-57bbba190"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </Link>
                            <Link
                                to="https://www.instagram.com/sssuperiorandassociates"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-pink-500 transition-colors text-2xl"
                                aria-label="Instagram"
                            >
                                <i className="ri-instagram-fill" />
                            </Link>
                            <Link
                                to="https://x.com/SHIVKUSHWA95210?t=hYFxRxRdLMiMlrmoCbkQXQ&s=08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-400 transition-colors text-2xl"
                                aria-label="Twitter"
                            >
                                <i className="ri-twitter-x-fill" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bottom">

                    <div className="left">
                        <Link
                            ref={menuRef}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to="https://sssuperiorassociates.com/" className="logo-link">
                            <img height={60} src={logo} alt="SS SUPERIOR & ASSOCIATES" />
                        </Link>
                        {/* <h1>SS SUPERIOR <br /> & ASSOCIATES</h1> */}
                    </div>

                    <div className="middle">
                        <div className="desktop-menu">
                            <NavLink
                                ref={menuRef}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                to="/"
                                style={({ isActive }) => ({
                                    color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    textDecoration: 'none',
                                    // margin: '0 10px',
                                })}
                            >
                                <strong>Home</strong>
                            </NavLink>

                            <NavLink
                                ref={menuRef}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                to="/services"
                                style={({ isActive }) => ({
                                    color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    textDecoration: 'none',
                                    // margin: '0 10px',
                                })}
                            >
                                Services <i className="ri-arrow-right-fill"></i>
                            </NavLink>

                            <NavLink
                                ref={menuRef}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                to="/contact"
                                style={({ isActive }) => ({
                                    color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    textDecoration: 'none',
                                    // margin: '0 10px',
                                })}
                            >
                                Contact <i className="ri-arrow-right-fill"></i>
                            </NavLink>

                            <NavLink
                                ref={menuRef}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                to="/about"
                                style={({ isActive }) => ({
                                    color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    textDecoration: 'none',
                                    // margin: '0 10px',
                                })}
                            >
                                About <i className="ri-arrow-right-fill"></i>
                            </NavLink>

                            <NavLink
                                ref={menuRef}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                to="/help"
                                style={({ isActive }) => ({
                                    color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    textDecoration: 'none',
                                    // margin: '0 10px',
                                })}
                            >
                                Help <i className="ri-arrow-right-fill"></i>
                            </NavLink>
                        </div>
                    </div>

                    <div className="right">
                        {/* <button className='Get-in-touch'>Get-In-Touch</button> */}
                        <button className="Get-in-touch" onClick={() => navigate('/contact')}> Get In Touch </button>
                        {/* <Link to="contact" className='Get-in-touch'>Get-in-touch</Link> */}
                        <Link to="https://wa.me/919111656571?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank">
                            <button><i className="ri-whatsapp-line"></i> +91 9111656571</button>
                        </Link>
                        <i
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={menuOpen ? "ri-close-large-line menu-toggle" : "ri-menu-line menu-toggle"}
                        ></i>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>

                {/* Mobile Menu */}
                <div ref={menuRef} className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-items">
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                // margin: '0 10px',
                            })}
                        >
                            <strong>Home</strong>
                        </NavLink>

                        <NavLink
                            ref={menuRef}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to="/services"
                            style={({ isActive }) => ({
                                color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                // margin: '0 10px',
                            })}
                        >
                            Services
                        </NavLink>

                        <NavLink
                            ref={menuRef}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                // margin: '0 10px',
                            })}
                        >
                            Contact
                        </NavLink>

                        <NavLink
                            ref={menuRef}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                // margin: '0 10px',
                            })}
                        >
                            About
                        </NavLink>

                        <NavLink
                            ref={menuRef}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to="/help"
                            style={({ isActive }) => ({
                                color: isActive ? 'rgba(230, 17, 17, 0.75)' : '#284888',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                // margin: '0 10px',
                            })}
                        >
                            Help
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nav
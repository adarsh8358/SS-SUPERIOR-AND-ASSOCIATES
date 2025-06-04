import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you would typically send the data to your backend
  //   console.log('Form submitted:', formData);
  //   alert('Thank you! We will contact you shortly.');
  //   setFormData({
  //     name: '',
  //     mobile: '',
  //     email: '',
  //     message: '',
  //     agreeTerms: false
  //   });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.mobile, // Use 'phone' to match backend schema
          email: formData.email,
          message: formData.message,
          agreeTerms: formData.agreeTerms
        })
      });
      if (res.ok) {
        toast.success('Message sent!');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: '',
          agreeTerms: false
        });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (err) {
      toast.error('Error connecting to server.');
    }
  };

  // ...rest of your component...


  return (
    <div className="help-contact">
      <h1 className="help-title">Contact</h1>
      <p className="help-subtitle">We're here to assist you with any questions or concerns</p>

      <div className="contact-options">
        <div className="contact-card">
          <div className="contact-icon phone-icon"></div>
          <h3>Phone Support</h3>
          <ul>
            <li>Mobile-1: <Link to="tel:+91 9111656571">+91 9111656571</Link></li>
            <li>Mobile-2: <Link to="tel:7898156085">+91 7898156085</Link></li>
            <li>Hours: Monday-Saturday, 10AM-7PM (EST)</li>
          </ul>
        </div>

        <div className="contact-card">
          <div className="contact-icon email-icon"></div>
          <h3>Email Support</h3>
          <ul>
            <li>General: <Link to="mailto:sssuperior213@gmail.com">sssuperior213@gmail.com</Link></li>
            <li>Technical: <Link to="mailto:support@example.com">support@example.com</Link></li>
            <li>Feedback: <Link to="mailto:feedback@example.com">feedback@example.com</Link></li>
          </ul>
        </div>

        <div className="contact-card">
          <div className="contact-icon social-icon"></div>
          <h3>Social Media</h3>
          <div className="social-links">
            <Link to="https://wa.me/919111656571?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              WhatsApp
            </Link>
            <Link to="https://www.instagram.com/sssuperiorandassociates" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              Instagram
            </Link>
            <Link to="https://www.linkedin.com/in/shiv-kushwaha-57bbba190" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              LinkedIn
            </Link>
            <Link to="https://twitter.com/OurOfficialX" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
              X/Twitter
            </Link>
          </div>
        </div>

        {/* <div className="contact-card">
          <div className="contact-icon chat-icon"></div>
          <h3>Live Chat</h3>
          <p>Available on our website during business hours</p>
          <button className="chat-btn">Start Chat</button>
        </div> */}
      </div>

      <div className="callback-form-section">
        <div className="form-container">
          <h2>Get-in-Touch</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
                pattern="[0-9]{10,15}"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeTerms">
                I agree to the terms and conditions and privacy policy
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Request Call Back
            </button>
          </form>
        </div>
      </div>

      <div className="emergency-contact">
        <h3>Emergency Contact</h3>
        <p>For urgent matters outside business hours:</p>
        <Link to="tel:+917898156085" className="emergency-phone">+91 7895156085</Link>
      </div>
    </div>
  );
};

export default Contact;
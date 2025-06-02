import React, { useState } from 'react';
import './Help.scss';

const Help = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: '',
      agreeTerms: false
    });
  };

  return (
    <div className="help-contact">
      {/* Previous content remains the same until the end */}
      
      {/* Add this new section before the closing div */}
      <div className="callback-form-section">
        <div className="form-container">
          <h2>Get a Call Back</h2>
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
    </div>
  );
};

export default Help;
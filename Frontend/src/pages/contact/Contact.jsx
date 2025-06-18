import React from 'react';
import './Contact.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'; // Add this import

const Contact = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      message: '',
      agreeTerms: false
    }
  });

  // Update handleSubmit to use react-hook-form
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`https://ss-superior-and-associates-backend.onrender.com/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.mobile, // Use 'phone' to match backend schema
          email: data.email,
          message: data.message,
          agreeTerms: data.agreeTerms
        })
      });
      if (res.ok) {
        toast.success("🎉 We've received your details! Sit tight, our team will be in touch soon.");
        reset();
      } else {
        toast.error("❌ Submission failed. Check your inputs and try again.");
      }
    } catch (err) {
      toast.error("⚠️ Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="help-contact">
      <h1 className="help-title">Contact</h1>
      <p className="help-subtitle">We're here to assist you with any questions or concerns</p>

      <div className="contact-options">
        {/* ...existing contact cards... */}
        <div className="contact-card">
          <div className="contact-icon phone-icon"></div>
          <h3>Phone Support</h3>
          <br />
          <ul>
            <li>Mobile-1: <Link to="tel:+91 9111656571">+91 9111656571</Link></li>
            <li>Mobile-2: <Link to="tel:7898156085">+91 7898156085</Link></li>
            <li>Hours: Monday-Saturday, 10AM-7PM (EST)</li>
          </ul>
        </div>
        <div className="contact-card">
          <div className="contact-icon email-icon"></div>
          <h3>Email Support</h3>
          <br />
          <ul>
            <li>General: <Link to="mailto:sssuperior213@gmail.com">sssuperior213@gmail.com</Link></li>
            <li>Technical: <Link to="mailto:support@example.com">shiv.kush2323@gmail.com</Link></li>
            {/* <li>Feedback: <Link to="mailto:feedback@example.com">feedback@example.com</Link></li> */}
          </ul>
        </div>
        <div className="contact-card">
          <div className="contact-icon social-icon"></div>
          <h3>Social Media</h3>
          <br/ >
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
      </div>

      <div className="callback-form-section">
        <div className="form-container">
          <h2>Get-in-Touch</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Full name is required' })}
                placeholder="Enter your full name"
              />
              {errors.name && <span style={{ color: 'red' }} className="error">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                {...register('mobile', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: 'Enter a valid mobile number'
                  }
                })}
                placeholder="Enter your mobile number"
              />
              {errors.mobile && <span style={{ color: 'red' }} className="error">{errors.mobile.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address'
                  }
                })}
                placeholder="Enter your email address (optional)"
              />
              {errors.email && <span style={{ color: 'red' }} className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                {...register('message')}
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreeTerms"
                {...register('agreeTerms', { required: 'You must agree to the terms' })}
              />
              <label htmlFor="agreeTerms">
                I agree to the terms and conditions and privacy policy
              </label>
              {errors.agreeTerms && <span style={{ color: 'red' }} className="error">{errors.agreeTerms.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request Call Back'}
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
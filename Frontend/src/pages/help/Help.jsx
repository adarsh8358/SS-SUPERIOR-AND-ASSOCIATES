import React from 'react';
import './Help.scss';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Help = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('http://localhost:3000/api/help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        toast.success('Thank you! We will contact you shortly.');
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
      {/* ...other content... */}
      <div className="callback-form-section">
        <div className="form-container">
          <h2>Get a Call Back</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                id="name"
                {...register('name', { required: 'Full Name is required' })}
                placeholder="Enter your full name"
              />
              {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                id="mobile"
                {...register('phone', {
                  required: 'Mobile No. is required',
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: 'Enter a valid mobile number'
                  }
                })}
                placeholder="Enter your mobile number"
              />
              {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
            </div>

            {/* <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Enter a valid email address'
                  }
                })}
                placeholder="Enter your email address (optional)"
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            </div> */}

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
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
              {errors.agreeTerms && <span style={{ color: 'red' }}>{errors.agreeTerms.message}</span>}
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
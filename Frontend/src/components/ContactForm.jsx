import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './ContactForm.scss'; // Ensure you have a CSS file for styling

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const res = await fetch(
      // `http://localhost:3000/api/contact`,
      `https://ss-superior-and-associates-backend.onrender.com/api/contact`,
      // `https://ss-superior-and-associates-backend.onrender.com/api/contact`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
      if (res.ok) {
        toast.success("✨ Success! We appreciate your interest. Let's connect soon.");
        reset();
      } else {
        toast.error("❌ Submission failed. Check your inputs and try again.");
      }
    } catch (err) {
      toast.error("⚠️ Oops! Something went wrong. Please try again later.");
    }
  };

  // Add this handler for reset
  const onReset = () => {
    reset();
    // toast.info('Form reset!');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <input
          {...register('name', { required: 'Full Name is required' })}
          placeholder="Full Name"
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}

        <input
          {...register('phone', {
            required: 'Mobile No. is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Enter a valid 10-digit mobile number'
            }
          })}
          placeholder="Mobile No."
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}

        <input
          {...register('email', {
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Enter a valid email address'
            }
          })}
          placeholder="Email (optional)"
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Enter your query here..."
        />
        {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}

        <label htmlFor="agreeTerms">
         <input
                type="checkbox"
                id="agreeTerms"
                {...register('agreeTerms', { required: 'You must agree to the terms' })}
              />
                I agree to the terms and conditions and privacy policy
              </label>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default ContactForm;
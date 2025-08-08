import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './CareerForm.scss';

const CareerForm = ({ onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const formRef = useRef(null);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

const onSubmit = async (data) => {
  try {
    const res = await fetch('https://ss-superior-and-associates-backend.onrender.com/api/careerform', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      toast.success("✨ Success! We appreciate your interest. Let's connect soon.");
      reset();
      onClose();
    } else {
      toast.error("❌ Submission failed. Check your inputs and try again.");
    }
  } catch (err) {
    toast.error("⚠️ Oops! Something went wrong. Please try again later.");
  }
};

  return (
    <div className="career-form-overlay">
      <form className="career-form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <h2>Career Application</h2>

        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Full Name"
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <input
          {...register('mobile', {
            required: 'Mobile No. is required',
            pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit mobile number' }
          })}
          placeholder="Mobile No."
        />
        {errors.mobile && <span className="error">{errors.mobile.message}</span>}

        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Enter a valid email address' }
          })}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Why do you want to join us?"
        />
        {errors.message && <span className="error">{errors.message.message}</span>}

        <label>
          <input
            type="checkbox"
            {...register('agree', { required: 'You must agree to the terms' })}
          />
          I agree to the terms and conditions
        </label>
        {errors.agree && <span className="error">{errors.agree.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CareerForm;
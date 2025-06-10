import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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
      `${process.env.REACT_APP_API_URL}/api/contact`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );
      if (res.ok) {
        toast.success('Message sent!');
        reset();
      } else {
        toast.error('Failed to send message.');
      }
    } catch (err) {
      toast.error('Error connecting to server.');
    }
  };

  // Add this handler for reset
  const onReset = () => {
    reset();
    toast.info('Form reset!');
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

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default ContactForm;
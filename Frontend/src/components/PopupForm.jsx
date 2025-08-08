import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PopupForm.scss";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Show popup with delay when website loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // delay in ms

    return () => clearTimeout(timer);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // const onSubmit = (data) => {
  //   console.log("Form Data:", data);
  //   toast.success("Form submitted successfully!");
  //   reset();
  //   setIsOpen(false);
  // };

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://ss-superior-and-associates-backend.onrender.com/api/popupform", {
      // const res = await fetch("http://localhost:3000/api/popupform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Form submitted successfully!");
        reset();
        setIsOpen(false);
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Server error");
      console.error(error);
    }
  };


  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container" ref={popupRef}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <h1>File Your ITR</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}

          <input
            type="tel"
            placeholder="Mobile"
            {...register("mobile", {
              required: "Mobile is required",
              pattern: { value: /^[0-9]{10}$/, message: "Enter valid mobile number" }
            })}
          />
          {errors.mobile && <span className="error">{errors.mobile.message}</span>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          <textarea
            placeholder="Your message"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <span className="error">{errors.message.message}</span>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              {...register("agree", { required: "You must agree" })}
            />
            I agree to the terms and conditions
          </label>
          {errors.agree && <span className="error">{errors.agree.message}</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
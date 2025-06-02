import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.scss';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rajesh Sharma",
            company: "Sharma Textiles",
            quote: "SS Superior helped us navigate complex GST filings. Their team saved us over ₹2 lakhs in penalties with their proactive approach.",
            rating: 5
        },
        {
            id: 2,
            name: "Priya Malhotra",
            company: "TechStart Inc.",
            quote: "From company registration to monthly compliance, they've been our trusted advisors for 3 years. Highly recommend their business setup services!",
            rating: 5
        },
        {
            id: 3,
            name: "Amit Patel",
            company: "Patel Foods",
            quote: "Their tax planning strategies reduced our liability by 30%. Professional, responsive, and truly care about client success.",
            rating: 4
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="header">
                    <h1>What Our Clients Say</h1>
                    <p>Trusted by 5000+ businesses across India</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="ri-star-fill"></i>
                                ))}
                            </div>
                            <p className="quote">"{testimonial.quote}"</p>
                            <div className="client-info">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta">
                    <p>Ready to experience the SS Superior difference?</p>
                    <Link to="/contact" className="cta-button">
                        Get Your Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
import React from "react";
import { Link } from "react-router-dom";
import "./ServicesContent.scss";
// import "./responsive.scss"

export default function ServicesContent({ page = "ALL" }) {
  const services = {
    ALL: [
      { id: 1, category: "GST", title: "GST Registration", icon: "📋", description: "Complete assistance with GST registration process", /*price: "₹1,999 onwards"*/ },
      { id: 2, category: "GST", title: "GST Return Filing", icon: "📊", description: "Monthly/quarterly or Annually GST return filing services", /*price: "₹1,499/month"*/ },
      { id: 3, category: "INCOME-TAX", title: "ITR Filing", icon: "💰", description: "Income Tax Return filing for individuals and businesses", /*price: "₹999 onwards"*/ },
      { id: 4, category: "ACCOUNTING-&-AUDITING", title: "Bookkeeping", icon: "🧾", description: "Here we serve Professional bookkeeping services", /*price: "₹3,999/month"*/ },
      { id: 5, category: "COMPANY-COMPLIANCES", title: "ROC Compliance", icon: "🏢", description: "Annual compliance for private limited companies", /*price: "₹12,999/year"*/ },
      { id: 6, category: "START-UP-&-MSME", title: "Startup Registration", icon: "🚀", description: "Here we serve End-to-end startup registration services", /*/*price: "₹8,999 onwards"*/ },
    ],
    GST: [
      { id: 1, title: "GST Registration", icon: "📋", description: "Complete assistance with GST registration process", /*price: "₹1,999 onwards"*/ },
      { id: 2, title: "GST Return Filing", icon: "📊", description: "Monthly/quarterly or Annually GST return filing services", /*price: "₹1,499/month"*/ },
      { id: 3, title: "GST Advisory", icon: "💡", description: /*"Expert consultation on GST matters"*/ "Specialized expert consultation on GST-related matters", /*price: "₹999/session"*/ },
      { id: 4, title: "GST Audit", icon: "🔍", description: /*"Comprehensive GST audit services"*/ "Comprehensive GST audit and compliance services", /*price: "₹5,999 onwards"*/ },
    ],
    "INCOME-TAX": [
      { id: 1, title: "ITR Filing", icon: "💰", description: "Income Tax Return filing for individuals and businesses", /*price: "₹999 onwards"*/ },
      { id: 2, title: "Tax Planning", icon: "📈", description: /*"Strategic tax saving solutions"*/ "Proven strategic tax saving solutions for businesses", /*price: "₹2,499/session"*/ },
      { id: 3, title: "TDS Compliance", icon: "⚖️", description: /*"Complete TDS filing and advisory"*/ "Complete and compliant TDS filing with expert advisory", /*price: "₹1,999/month"*/ },
    ],
    "ACCOUNTING-&-AUDITING": [
      { id: 1, title: "Bookkeeping", icon: "🧾", description: "Professional bookkeeping services", /*price: "₹3,999/month"*/ },
      { id: 2, title: "Financial Statements", icon: "📑", description: "Preparation of financial statements", /*price: "₹5,999 onwards"*/ },
      { id: 3, title: "Statutory Audit", icon: "🔎", description: "Comprehensive audit services", /*price: "₹8,999 onwards"*/ },
    ],
    "COMPANY-COMPLIANCES": [
      { id: 1, title: "ROC Compliance", icon: "🏢", description: "Annual compliance for private limited", /*price: "₹12,999/year"*/ },
      { id: 2, title: "Company Incorporation", icon: "🆕", description: "End-to-end company registration", /*price: "₹7,999 onwards"*/ },
      { id: 3, title: "Board Meetings", icon: "👥", description: "Minutes preparation and compliance", /*price: "₹2,499/meeting"*/ },
    ],
    "START-UP-&-MSME": [
      { id: 1, title: "Startup Registration", icon: "🚀", description: "End-to-end startup registration services", /*price: "₹8,999 onwards"*/ },
      { id: 2, title: "MSME Registration", icon: "🏭", description: "Udyam registration assistance", /*price: "₹1,999"*/ },
      { id: 3, title: "Startup Advisory", icon: "💼", description: "Business setup and compliance guidance", /*price: "₹3,499/session"*/ },
    ]
  };

  const currentServices = services[page] || services["ALL"];

  return (
    <div className="services-container">
      <div className="services-grid">
        {currentServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-header">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              {service.category && <span className="service-category">{service.category}</span>}
            </div>
            <p className="service-description">{service.description}</p>
            <div className="card-footer">
              <span className="service-price">{service.price}</span>
              <Link to="/services" className="read-more">read more</Link>
              <button className="enquire-btn">
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Enquire Now <i className="ri-arrow-right-line"></i>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

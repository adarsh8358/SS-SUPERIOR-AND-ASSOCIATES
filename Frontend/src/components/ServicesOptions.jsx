import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./ServicesOptions.scss";

export default function ServicesOptions({ setPage }) {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", "GST", "INCOME-TAX", "ACCOUNTING-&-AUDITING", "COMPANY-COMPLIANCES", "START-UP-&-MSME", "More >>"];

  const handleTabClick = (category) => {
    setActiveTab(category);
    setPage(category);
  };

  return (
    <div className="services-nav">
      <div className="filter-tabs">
        {categories.map((category) => (
          category === "More >>" ? (
            <Link 
              key={category}
              to="/services" // Set your desired path here
              className={`filter-btn ${activeTab === category ? "active" : ""}`}
            >
              {category.replace(/-/g, " ")}
            </Link>
          ) : (
            <button
              key={category}
              className={`filter-btn ${activeTab === category ? "active" : ""}`}
              onClick={() => handleTabClick(category)}
            >
              {category.replace(/-/g, " ")}
            </button>
          )
        ))}
      </div>
    </div>
  );
}
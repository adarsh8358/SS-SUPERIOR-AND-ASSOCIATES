import React from "react";
import { Helmet } from "react-helmet-async";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SS Superior & Associates - CA in Bhopal</title>
        <meta
          name="description"
          content="Read the Privacy Policy of SS Superior & Associates. Learn how we collect, use, and protect your personal information when you use our website and services."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="privacy-policy">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: {new Date().getFullYear()}</p>

          <p>
            At <strong>SS Superior & Associates</strong>, we value your trust and are
            committed to protecting your personal information. This Privacy Policy
            explains how we collect, use, and safeguard your data when you visit
            our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>Name, email address, and contact details submitted through forms.</li>
            <li>Business-related information provided for consultation purposes.</li>
            <li>Technical data such as IP address, browser type, and usage data.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide professional services.</li>
            <li>To improve our website and user experience.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, disclosure,
            alteration, or destruction.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. Information may only be shared if required by law or for
            regulatory compliance.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience and analyze
            website traffic. You can choose to disable cookies through your
            browser settings.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the privacy practices of such third-party sites.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to request access, correction, or deletion of
            your personal data. To make such a request, please contact us
            through our official contact page.
          </p>

          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            SS Superior & Associates through our official website.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
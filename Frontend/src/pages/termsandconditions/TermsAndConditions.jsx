import React from "react";
import { Helmet } from "react-helmet-async";
import "./TermsAndConditions.scss";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>
          Terms & Conditions | SS Superior & Associates - CA in Bhopal
        </title>
        <meta
          name="description"
          content="Read the Terms & Conditions of SS Superior & Associates. Understand the rules, regulations, and legal terms governing the use of our website and professional services."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="terms-page">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p className="last-updated">
            Last Updated: {new Date().getFullYear()}
          </p>

          <p>
            Welcome to <strong>SS Superior & Associates</strong>. By accessing
            and using our website, you agree to comply with and be bound by the
            following Terms and Conditions. If you do not agree with any part
            of these terms, please refrain from using our website or services.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            The content on this website is for general informational purposes
            only. It does not constitute professional advice unless formally
            agreed through a client engagement.
          </p>

          <h2>2. Professional Services</h2>
          <p>
            Engagement for professional services such as Taxation, GST,
            Compliance, Audit, or Business Registration will only be valid
            after formal confirmation and documentation. Website inquiries do
            not automatically create a client relationship.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, text, graphics, logos, and materials on this website
            are the property of SS Superior & Associates and may not be
            reproduced without prior written consent.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            While we strive to ensure accuracy, we do not guarantee that all
            information on this website is complete, current, or error-free.
            SS Superior & Associates shall not be liable for any direct or
            indirect losses arising from reliance on website information.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Any information shared through contact forms will be treated with
            confidentiality. However, transmission of information over the
            internet cannot be guaranteed to be completely secure.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or practices of such external sites.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of India. Any disputes shall be subject to
            the jurisdiction of courts located in Bhopal, Madhya Pradesh.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions
            at any time without prior notice. Continued use of the website
            signifies acceptance of updated terms.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            For any questions regarding these Terms & Conditions, please
            contact SS Superior & Associates through our official contact page.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
// src/Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <section
      className="section newsletter"
      aria-label="newsletter"
      style={{ backgroundImage: "url('images/newsletter-bg.jpg')" }} // Corrected style attribute style={{"backgroundImage: url('./assets/images/newsletter-bg.jpg')"}}
    >
      <div className="container">
        <p className="section-subtitle">Subscribe Newsletter</p>

        <h2 className="h2 section-title">Get Every Latest News</h2>

        <form action="" className="newsletter-form">
          <div className="input-wrapper">
            <input
              type="email"
              name="email_address"
              aria-label="Email"
              placeholder="Enter your email address"
              required
              className="email-field" // Add any CSS class for styling
            />

            <ion-icon name="mail-open-outline" aria-hidden="true"></ion-icon>
          </div>

          <button type="submit" className="btn btn-primary">
            <span className="span">Subscribe</span>

            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

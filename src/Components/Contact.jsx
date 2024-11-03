// src/Contact.jsx
import React from "react";
import Footer from "./Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="section contact" id="contact" aria-label="contact">
        <div className="container">
          <h2 className="h2 section-title">Get in Touch</h2>
          <p className="section-text">
            We’d love to hear from you! Please fill out the form below and we’ll
            get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-input"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3 className="h3 section-subtitle">Contact Information</h3>
            <p className="contact-text">
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@educonnect.com">contact@educonnect.com</a>
            </p>
            <p className="contact-text">
              <strong>Phone:</strong>{" "}
              <a href="tel:+13647657839">+1 (364) 765-7839</a>
            </p>
            <p className="contact-text">
              <strong>Address:</strong> 275 Quadra Street, Victoria Road, New
              York
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

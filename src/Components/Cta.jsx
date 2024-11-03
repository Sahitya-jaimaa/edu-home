// src/Cta.jsx
import React from "react";

const Cta = () => {
  return (
    <section
      className="section cta"
      aria-label="workshop"
      style={{ backgroundImage: "url(' images/cta-bg.png')" }}
    >
      <div className="container">
        <figure className="cta-banner">
          <img
            src=" images/cta-banner.jpg"
            width="580"
            height="380"
            loading="lazy"
            alt="cta banner"
            className="img-cover"
          />
        </figure>
        <div className="cta-content">
          <p className="section-subtitle">Free Workshop</p>
          <h2 className="h2 section-title">Join Our Free Workshops</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet,
            consect adipi scing elit, sed do eiusmod tempor incididunt ut labore
            et dolore aliqua.
          </p>
          <a href="#" className="btn btn-secondary">
            <span className="span">Upcoming Workshop</span>
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;

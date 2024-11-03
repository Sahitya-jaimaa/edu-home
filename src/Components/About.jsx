// src/About.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer"; // Make sure the path is correct

const About = () => {
  const location = useLocation();

  // Function to check if the path matches "/pagename"
  const showFooter = location.pathname.startsWith("/about");

  return (
    <>
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <img
              src="images/about-banner.jpg"
              width="450"
              height="590"
              loading="lazy"
              alt="about banner"
              className="w-100 about-img"
            />
            <img
              src="images/about-abs-1.jpg"
              width="188"
              height="242"
              loading="lazy"
              aria-hidden="true"
              className="abs-img abs-img-1"
            />
            <img
              src="images/about-abs-2.jpg"
              width="150"
              height="200"
              loading="lazy"
              aria-hidden="true"
              className="abs-img abs-img-2"
            />
          </figure>

          <div className="about-content">
            <p className="section-subtitle">Who We Are</p>
            <h2 className="h2 section-title">We Offer The Best Carrier</h2>
            <ul className="about-list">
              <li className="about-item">
                <div className="item-icon item-icon-1">
                  <img
                    src="images/about-icon-1.png"
                    width="30"
                    height="30"
                    loading="lazy"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="h3 item-title">Industry Expert Instructor</h3>
                  <p className="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmoded tempor incididunt dolore magna aliqua.
                  </p>
                </div>
              </li>
              {/* Add more items as needed */}
            </ul>

            <a href="#" className="btn btn-primary">
              <span className="span">Know About Us</span>
              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </div>
        </div>
      </section>

      {/* Conditionally render the footer */}
      {showFooter && <Footer />}
    </>
  );
};

export default About;

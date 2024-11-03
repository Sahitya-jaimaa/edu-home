import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              Educonnect
            </a>
            <p className="section-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Pinterest">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Explore</p>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/blog" className="footer-link">
                Blog & News
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQ Question
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>

          {/* Useful Links Section */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Useful Links</p>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Pricing Plan
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Instructor Profile
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/courses" className="footer-link">
                Popular Courses
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
            </li>
          </ul>

          {/* Contact Info Section */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li className="footer-item">
              <address className="footer-link">
                275 Quadra Street Victoria Road, New York
              </address>
            </li>
            <li className="footer-item">
              <a href="tel:+13647657839" className="footer-link">
                + 1 (364) 765-7839
              </a>
            </li>
            <li className="footer-item">
              <a href="tel:+13647657840" className="footer-link">
                + 1 (364) 765-7840
              </a>
            </li>
            <li className="footer-item">
              <a href="mailto:contact@Educonnect.com" className="footer-link">
                contact@Educonnect.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; Copyright 2024 Educonnect. All Rights Reserved by{" "}
            <a href="#" className="copyright-link">
              Sahitya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

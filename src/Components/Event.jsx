// src/Event.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Event = () => {
  const location = useLocation();

  // Determine if the footer should be shown
  const showFooter = location.pathname.startsWith("/event");
  return (
    <>
      <section className="section event" id="event" aria-label="event">
        <div className="container">
          <p className="section-subtitle">Upcoming Event</p>

          <h2 className="h2 section-title">Let’s Join Our Community</h2>

          <ul className="grid-list">
            <li>
              <div className="event-card">
                <figure className="card-banner">
                  <img
                    src=" images/event-1.jpg"
                    width="370"
                    height="250"
                    loading="lazy"
                    alt="Innovation & Technological Entrepreneurship Team"
                    className="img-cover"
                  />
                </figure>

                <time className="badge" datetime=" 2024-12-04">
                  04 Dec 2024
                </time>

                <div className="card-content">
                  <address className="card-address">
                    <ion-icon
                      name="location-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">Alpaca Way Anaheim, CA 92805</span>
                  </address>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Innovation & Technological Entrepreneurship Team
                    </a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span className="span">Get Ticket</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="event-card">
                <figure className="card-banner">
                  <img
                    src=" images/event-2.jpg"
                    width="370"
                    height="250"
                    loading="lazy"
                    alt="Virtual Spring Part-time Jobs Fair for Student"
                    className="img-cover"
                  />
                </figure>

                <time className="badge" datetime=" 2024-10-30">
                  30th Oct 2024
                </time>

                <div className="card-content">
                  <address className="card-address">
                    <ion-icon
                      name="location-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">
                      Ritter Avenue Detroit, MI 48226
                    </span>
                  </address>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Virtual Spring Part-time Jobs Fair for Student
                    </a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span className="span">Get Ticket</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="event-card">
                <figure className="card-banner">
                  <img
                    src=" images/event-3.jpg"
                    width="370"
                    height="250"
                    loading="lazy"
                    alt="Explorations of Regional Chief Executive Network"
                    className="img-cover"
                  />
                </figure>

                <time className="badge" datetime=" 2024-09-18">
                  18th Sep 2024
                </time>

                <div className="card-content">
                  <address className="card-address">
                    <ion-icon
                      name="location-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">Stout Street York, PA 17401</span>
                  </address>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Explorations of Regional Chief Executive Network
                    </a>
                  </h3>

                  <a href="#" className="btn-link">
                    <span className="span">Get Ticket</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Conditionally render the footer */}
      {showFooter && <Footer />}
    </>
  );
};

export default Event;

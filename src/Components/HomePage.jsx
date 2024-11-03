// src/HomePage.jsx
import React from "react";
import useToggle from "./useToggle"; // Import the custom hook
import Category from "./Category";
import About from "./About";
import Courses from "./Courses";
import Cta from "./Cta";
import Event from "./Event";
import Newsletter from "./Newsletter";

import Footer from "./Footer";
const HomePage = () => {
  useToggle(); // Call the custom hook

  return (
    <main>
      <header data-header>{/* Your header content */}</header>
      <section
        className="hero"
        id="home"
        aria-label="hero"
        style={{
          backgroundImage: `url(images/hero-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="section-subtitle">Better Learning Future With Us</p>
            <h2 className="h1 hero-title">
              Education Is About Academic Excellence
            </h2>
            <p className="hero-text">
              Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet
              ipsum a, dapibus porta velit.
            </p>
            <a href="#" className="btn btn-primary">
              <span className="span">Get Started Today</span>
              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </div>
          <figure className="hero-banner">
            <img
              src={`images/hero-banner.png`}
              width="500"
              height="500"
              loading="lazy"
              alt="hero image"
              className="w-100"
            />
            <img
              src={`images/hero-abs-1.png`}
              width="318"
              height="352"
              loading="lazy"
              aria-hidden="true"
              className="abs-img abs-img-1"
            />
            <img
              src={`images/hero-abs-2.png`}
              width="160"
              height="160"
              loading="lazy"
              aria-hidden="true"
              className="abs-img abs-img-2"
            />
          </figure>
        </div>
      </section>
      <Category /> {/* Use the Category component here */}
      <About /> {/* Use the About component here */}
      <Courses /> {/* Use the Courses component here */}
      <Cta /> {/* Use the Cta component here */}
      <Event /> {/* Use the Event component here */}
      <Newsletter /> {/* Use the Newsletter component here */}
      <Footer /> {/* Use the Footer component here */}
    </main>
  );
};

export default HomePage;

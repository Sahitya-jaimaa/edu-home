// src/Blog.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer"; // Ensure the path is correct

const Blog = () => {
  const location = useLocation();

  // Determine if the footer should be shown
  const showFooter = location.pathname.startsWith("/blog");

  return (
    <>
      <section className="section blog" id="blog" aria-label="blog">
        <div className="container">
          <h2 className="h2 section-title">Latest Blog Posts</h2>

          <div className="blog-list">
            {/* Blog Post 1 */}
            <article className="blog-item">
              <figure className="blog-banner">
                <img
                  src="images/blog-1.jpg"
                  width="450"
                  height="300"
                  loading="lazy"
                  alt="Blog Post 1"
                  className="w-100 blog-img"
                />
              </figure>
              <div className="blog-content">
                <h3 className="h3 blog-title">Understanding React Hooks</h3>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  efficitur massa quis leo fringilla, eu fermentum nisl
                  efficitur.
                </p>
                <a href="#" className="btn btn-secondary">
                  Read More
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="blog-item">
              <figure className="blog-banner">
                <img
                  src="images/blog-2.png"
                  width="450"
                  height="300"
                  loading="lazy"
                  alt="Blog Post 2"
                  className="w-100 blog-img"
                />
              </figure>
              <div className="blog-content">
                <h3 className="h3 blog-title">The Future of JavaScript</h3>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  efficitur massa quis leo fringilla, eu fermentum nisl
                  efficitur.
                </p>
                <a href="#" className="btn btn-secondary">
                  Read More
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="blog-item">
              <figure className="blog-banner">
                <img
                  src="images/blog-3.jpg"
                  width="450"
                  height="300"
                  loading="lazy"
                  alt="Blog Post 3"
                  className="w-100 blog-img"
                />
              </figure>
              <div className="blog-content">
                <h3 className="h3 blog-title">CSS Grid vs. Flexbox</h3>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  efficitur massa quis leo fringilla, eu fermentum nisl
                  efficitur.
                </p>
                <a href="#" className="btn btn-secondary">
                  Read More
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Conditionally render the footer */}
      {showFooter && <Footer />}
    </>
  );
};

export default Blog;

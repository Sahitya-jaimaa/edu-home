// src/Courses.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Courses = () => {
  const location = useLocation();

  // Determine if the footer should be shown
  const showFooter = location.pathname.startsWith("/courses");

  const coursesData = [
    {
      id: 1,
      imgSrc: "images/course-1.jpg",
      title: "Competitive Strategy Law for All Students",
      lessons: 35,
      duration: "18h 15m 44s",
      price: "Rs29.00",
      oldPrice: "Rs39.00",
      students: 47,
      level: "Intermediate",
      rating: 5,
      reviews: 18,
    },
    {
      id: 2,
      imgSrc: "images/course-2.jpg",
      title: "Machine Learning A-Z: Hands-On Python and Java",
      lessons: 48,
      duration: "18h 15m 44s",
      price: "Free",
      students: 65,
      level: "Advanced",
      rating: 5,
      reviews: 18,
    },
    {
      id: 3,
      imgSrc: "images/course-3.jpg",
      title: "Achieving Advanced Insights with Big Data",
      lessons: 80,
      duration: "18h 15m 44s",
      price: "Rs59.00",
      oldPrice: "Rs69.00",
      students: 42,
      level: "Basic",
      rating: 5,
      reviews: 18,
    },
    {
      id: 4,
      imgSrc: "images/course-4.jpg",
      title: "Education Makes a Person a Responsible Citizen",
      lessons: 31,
      duration: "18h 15m 44s",
      price: "Rs49.00",
      oldPrice: "Rs59.00",
      students: 46,
      level: "Intermediate",
      rating: 5,
      reviews: 18,
    },
    {
      id: 5,
      imgSrc: "images/course-5.jpg",
      title: "Building a Better World One Student at a Time",
      lessons: 36,
      duration: "18h 15m 44s",
      price: "Rs29.00",
      oldPrice: "Rs39.00",
      students: 91,
      level: "Advanced",
      rating: 5,
      reviews: 18,
    },
    {
      id: 6,
      imgSrc: "images/course-6.jpg",
      title: "Education is About Forming Faithful Disciples",
      lessons: 21,
      duration: "18h 15m 44s",
      price: "Rs79.00",
      oldPrice: "Rs89.00",
      students: 22,
      level: "Basic",
      rating: 5,
      reviews: 18,
    },
  ];

  return (
    <>
      <section
        className="section course"
        id="courses"
        aria-label="course"
        style={{ backgroundImage: "url('images/course-bg.jpg')" }}
      >
        <div className="container">
          <p className="section-subtitle">Popular Courses</p>
          <h2 className="h2 section-title">Our Popular Courses</h2>
          <ul className="grid-list">
            {coursesData.map((course) => (
              <li key={course.id}>
                <div className="course-card">
                  <figure className="card-banner">
                    <img
                      src={course.imgSrc}
                      width="370"
                      height="270"
                      loading="lazy"
                      alt={course.title}
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-actions">
                    <span className="badge">{course.level}</span>
                    <button
                      className="whishlist-btn"
                      aria-label="Add to wishlist"
                      data-whish-btn
                    >
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>
                  <div className="card-content">
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon
                          name="reader-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="card-meta-text">
                          {course.lessons} Lessons
                        </span>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <time
                          datetime={course.duration}
                          className="card-meta-text"
                        >
                          {course.duration}
                        </time>
                      </li>
                    </ul>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        {course.title}
                      </a>
                    </h3>
                    <div className="rating-wrapper">
                      <div className="rating">
                        {Array.from({ length: course.rating }).map(
                          (_, index) => (
                            <ion-icon key={index} name="star"></ion-icon>
                          )
                        )}
                      </div>
                      <span className="rating-text">
                        ({course.reviews} Review{course.reviews > 1 ? "s" : ""})
                      </span>
                    </div>
                    <div className="card-footer">
                      <div className="card-price">
                        <span className="span">{course.price}</span>
                        {course.oldPrice && (
                          <del className="del">{course.oldPrice}</del>
                        )}
                      </div>
                      <div className="card-meta-item">
                        <ion-icon
                          name="people-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <span className="card-meta-text">
                          {course.students} Students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary">
            <span className="span">View All Courses</span>
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </div>
      </section>
      {/* Conditionally render the footer */}
      {showFooter && <Footer />}
    </>
  );
};

export default Courses;

// src/Category.jsx
import React from "react";

const categories = [
  { title: "Personal Development", icon: "briefcase-outline", courses: 39 },
  { title: "Human Research", icon: "file-tray-full-outline", courses: 24 },
  { title: "Art & Design", icon: "color-palette-outline", courses: 39 },
  { title: "Business Management", icon: "layers-outline", courses: 39 },
  { title: "Web Development", icon: "laptop-outline", courses: 39 },
  { title: "Lifestyle", icon: "thumbs-up-outline", courses: 39 },
  { title: "Digital Marketing", icon: "headset-outline", courses: 39 },
  { title: "Data Sciences", icon: "server-outline", courses: 39 },
  { title: "Health & Fitness", icon: "medkit-outline", courses: 39 },
];

const Category = () => {
  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Course Categories</p>
        <h2 className="h2 section-title">Popular Topics To Learn</h2>
        <ul className="grid-list">
          {categories.map((category, index) => (
            <li key={index}>
              <div className="category-card">
                <div className="card-icon">
                  <ion-icon name={category.icon}></ion-icon>
                </div>
                <div>
                  <h3 className="h3 card-title">
                    <a href="#">{category.title}</a>
                  </h3>
                  <span className="card-meta">{category.courses} Course</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;

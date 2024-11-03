// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SearchPage from "./Components/SearchPage";
import HomePage from "./Components/HomePage";
// Import the custom hook
import Category from "./Components/Category";
import About from "./Components/About";
import Courses from "./Components/Courses";

import Event from "./Components/Event";
import useToggle from "./Components/useToggle";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import "./assets/css/style.css"; // Ensure this path is correct

const App = () => {
  useToggle();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add more routes for other pages here */}
      </Routes>
    </Router>
  );
};

export default App;

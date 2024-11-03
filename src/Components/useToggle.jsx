// src/useToggle.js
import { useEffect } from "react";

const useToggle = () => {
  useEffect(() => {
    const toggleElem = (elem) => {
      elem.classList.toggle("active");
    };

    // Navbar toggle
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    navTogglers.forEach((toggler) =>
      toggler.addEventListener("click", () => {
        toggleElem(navbar);
        toggleElem(overlay);
      })
    );

    // Header sticky & back to top button
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        header.classList.add("header-anim");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
        header.classList.remove("header-anim");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Search box toggle
    const searchTogglers = document.querySelectorAll("[data-search-toggler]");
    const searchBox = document.querySelector("[data-search-box]");

    searchTogglers.forEach((toggler) =>
      toggler.addEventListener("click", () => toggleElem(searchBox))
    );

    // Wishlist button toggle
    const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

    whishlistBtns.forEach((btn) =>
      btn.addEventListener("click", () => toggleElem(btn))
    );

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navTogglers.forEach((toggler) =>
        toggler.removeEventListener("click", () => toggleElem(navbar))
      );
      searchTogglers.forEach((toggler) =>
        toggler.removeEventListener("click", () => toggleElem(searchBox))
      );
      whishlistBtns.forEach((btn) =>
        btn.removeEventListener("click", () => toggleElem(btn))
      );
    };
  }, []);
};

export default useToggle;

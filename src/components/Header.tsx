"use client";

import { useState, useEffect } from "react";
import Magnetic from "@/components/Magnetic";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Active link tracking
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo" onClick={closeMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill="#6b5ce7"></path><path d="M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.19L1.29 11.4c-.22-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-2 3.2-3.78 3.2ZM11.99 2.93c-.53 0-1.06.16-1.45.47L3.61 8.96c-.56.45-.96 1.49-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.11-.7-.29-1.76-.84-2.2l-6.93-5.54c-.4-.32-.94-.48-1.47-.48Z" fill="#6b5ce7"></path></svg></a>

        <ul className="nav-links">
          <li><a href="#works" className={activeSection === "works" ? "active" : ""}>work</a></li>
          <li><a href="#about" className={activeSection === "about" ? "active" : ""}>about</a></li>
          <li><a href="#github" className={activeSection === "github" ? "active" : ""}>bits</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>contact</a></li>
        </ul>

        <Magnetic>
          <a href="#contact" className="nav-cta magnetic">
            <div className="status-dot"></div>
            open to work
          </a>
        </Magnetic>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          id="hamburger"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobileMenu">
        <a href="#works" className="mobile-link" onClick={closeMenu}>work</a>
        <a href="#about" className="mobile-link" onClick={closeMenu}>about</a>
        <a href="#experience" className="mobile-link" onClick={closeMenu}>experience</a>
        <a href="#github" className="mobile-link" onClick={closeMenu}>bits</a>
        <a href="#contact" className="mobile-link" onClick={closeMenu}>contact</a>
      </div>
    </>
  );
}

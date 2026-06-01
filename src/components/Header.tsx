"use client";

import { useState, useEffect } from "react";

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
        <a href="#" className="nav-logo" onClick={closeMenu}>hi<span>.</span></a>
        
        <ul className="nav-links">
          <li><a href="#works" className={activeSection === "works" ? "active" : ""}>work</a></li>
          <li><a href="#about" className={activeSection === "about" ? "active" : ""}>about</a></li>
          <li><a href="#github" className={activeSection === "github" ? "active" : ""}>bits</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>contact</a></li>
        </ul>
        
        <a href="#contact" className="nav-cta magnetic">
          <div className="status-dot"></div>
          open to work
        </a>
        
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

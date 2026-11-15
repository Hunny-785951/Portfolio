"use client";

import { useState, useEffect, useRef } from "react";
import Magnetic from "@/components/Magnetic";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!navRef.current) return;
      const q = gsap.utils.selector(navRef);
      const logoPaths = q(".nav-logo svg path");
      const navLinks = q(".nav-links li");
      const navCta = q(".nav-cta");

      const playNav = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

        if (logoPaths.length > 0) {
          tl.fromTo(
            logoPaths,
            { drawSVG: "0%", autoAlpha: 0 },
            { drawSVG: "100%", autoAlpha: 1, duration: 1, stagger: 0.15, ease: "power2.inOut" }
          );
        }

        if (navLinks.length > 0) {
          tl.fromTo(
            navLinks,
            { autoAlpha: 0, y: -20 },
            { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.6, ease: "power3.out" },
            "-=0.5"
          );
        }

        if (navCta.length > 0) {
          tl.fromTo(
            navCta,
            { autoAlpha: 0, scale: 0.85, y: -10 },
            { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.4"
          );
        }
      };

      if (typeof document !== "undefined" && document.body.classList.contains("loaded")) {
        playNav();
      } else {
        if (navRef.current) gsap.set(navRef.current, { autoAlpha: 0 });
        let triggered = false;
        const onLoaded = () => {
          if (triggered) return;
          triggered = true;
          if (navRef.current) gsap.set(navRef.current, { autoAlpha: 1 });
          playNav();
        };
        window.addEventListener("siteLoaded", onLoaded, { once: true });
        setTimeout(onLoaded, 2600);
      }
    },
    { scope: navRef }
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      if (targetId === "#") {
        gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power3.inOut" });
      } else {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          gsap.to(window, {
            duration: 1.1,
            scrollTo: { y: targetEl, offsetY: 70 },
            ease: "power3.inOut",
          });
        }
      }
    }
  };

  return (
    <>
      <nav id="navbar" ref={navRef} className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo" onClick={(e) => scrollToSection(e, "#")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
              stroke="#6b5ce7"
              strokeWidth="1.5"
              fill="#6b5ce7"
            ></path>
            <path
              d="M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.19L1.29 11.4c-.22-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-2 3.2-3.78 3.2ZM11.99 2.93c-.53 0-1.06.16-1.45.47L3.61 8.96c-.56.45-.96 1.49-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.11-.7-.29-1.76-.84-2.2l-6.93-5.54c-.4-.32-.94-.48-1.47-.48Z"
              stroke="#6b5ce7"
              strokeWidth="1.5"
              fill="#6b5ce7"
            ></path>
          </svg>
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="#works"
              className={activeSection === "works" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "#works")}
            >
              work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "#about")}
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#github"
              className={activeSection === "github" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "#github")}
            >
              bits
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              contact
            </a>
          </li>
        </ul>

        <Magnetic>
          <a
            href="#contact"
            className="nav-cta magnetic"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
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
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobileMenu">
        <a href="#works" className="mobile-link" onClick={(e) => scrollToSection(e, "#works")}>
          work
        </a>
        <a href="#about" className="mobile-link" onClick={(e) => scrollToSection(e, "#about")}>
          about
        </a>
        <a href="#experience" className="mobile-link" onClick={(e) => scrollToSection(e, "#experience")}>
          experience
        </a>
        <a href="#github" className="mobile-link" onClick={(e) => scrollToSection(e, "#github")}>
          bits
        </a>
        <a href="#contact" className="mobile-link" onClick={(e) => scrollToSection(e, "#contact")}>
          contact
        </a>
      </div>
    </>
  );
}

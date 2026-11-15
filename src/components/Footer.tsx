"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;
      gsap.fromTo(
        Array.from(footerRef.current.children),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: footerRef }
  );

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power4.inOut",
    });
  };

  return (
    <footer
      ref={footerRef}
      style={{
        marginTop: "-100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "48px 48px",
        gap: "28px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <a href="#" className="footer-logo" onClick={scrollToTop}>
        hi<span>.</span>
      </a>
      <div className="footer-links">
        <a
          href="https://github.com/Hunny-785951"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/himesh-s5847"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Resume
        </a>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Himesh. All rights reserved.
      </div>
    </footer>
  );
}

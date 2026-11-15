"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;
      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const q = gsap.utils.selector(gridRef);
      const tag = q(".section-tag");
      const title = q(".section-title");
      const paragraphs = q(".about-text p");
      const meta = q(".meta-row");
      const tags = q(".tech-tag");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=85%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (!isReduced) {
        // PHASE 1: Zoom IN to APPEAR while scrolling (0 -> 0.4)
        scrollTl.fromTo(
          gridRef.current,
          {
            scale: 0.75,
            autoAlpha: 0,
            filter: "blur(10px)",
            transformOrigin: "center center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.4,
            ease: "power2.out",
          },
          0
        );

        if (tag.length) {
          scrollTl.fromTo(tag, { y: -15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.25 }, 0.08);
        }
        if (title.length) {
          scrollTl.fromTo(title, { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3 }, 0.12);
        }
        if (paragraphs.length) {
          scrollTl.fromTo(paragraphs, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.3 }, 0.15);
        }
        if (meta.length) {
          scrollTl.fromTo(meta, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.25 }, 0.2);
        }
        if (tags.length) {
          scrollTl.fromTo(tags, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.03, duration: 0.25 }, 0.25);
        }

        // PHASE 2: HOLD / READABLE PHASE (0.4 -> 0.6)
        scrollTl.to({}, { duration: 0.2 });

        // PHASE 3: Continue scrolling to Zoom IN and DISAPPEAR (0.6 -> 1.0)
        scrollTl.to(
          gridRef.current,
          {
            scale: 3.5,
            autoAlpha: 0,
            filter: "blur(14px)",
            duration: 0.4,
            ease: "power2.in",
          },
          0.6
        );
      } else {
        scrollTl.fromTo(gridRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0);
        scrollTl.to({}, { duration: 0.2 });
        scrollTl.to(gridRef.current, { autoAlpha: 0, duration: 0.4 }, 0.6);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 48px",
        margin: "0",
        marginTop: "-100vh",
      }}
    >
      <div
        className="about-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="about-grid"
          ref={gridRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
        <div>
          <div className="section-tag">01 — about</div>
          <h2 className="section-title">
            A developer who
            <br />
            ships what matters.
          </h2>
        </div>

        <div>
          <div className="about-text">
            <p>
              I&apos;m a B.Tech CSE student who enjoys designing attractive and intuitive frontends and
              connecting them with robust backend systems. I have hands-on experience building
              full-stack projects using <strong>React.js</strong> and <strong>Spring Boot</strong>,
              including API development, server-side logic, and database integration.
            </p>
            <p>
              Alongside web development, I have a growing interest in <strong>Cyber Security</strong>{" "}
              and <strong>Ethical Hacking</strong>. I&apos;ve explored Linux fundamentals and security
              tools such as Nmap, Zenmap, Burp Suite, and Metasploitable to better understand how
              secure systems are built and tested.
            </p>
          </div>
          <div className="about-meta">
            <div className="meta-row">
              <div className="meta-dot"></div>Vadodara, India
            </div>
            <div className="meta-row">
              <div className="meta-dot"></div>B.Tech CSE
            </div>
            <div className="meta-row">
              <div className="meta-dot"></div>Open to work
            </div>
          </div>
          <div className="tech-tags" style={{ marginTop: "24px" }}>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Cyber Security</span>
            <span className="tech-tag">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

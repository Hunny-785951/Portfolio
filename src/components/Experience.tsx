"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const Counter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = Math.round(obj.val).toString();
          }
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className="counter">
      0
    </span>
  );
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: "TechNova Solutions",
      status: "Current",
      statusClass: "status-current",
      role: "Frontend Developer",
      period: "2024 — Present",
      desc: "Building highly interactive web applications using React and Next.js. Improved performance scores by 40%.",
    },
    {
      company: "Freelance",
      status: "Contract",
      statusClass: "status-contract",
      role: "Full Stack Developer",
      period: "2023 — 2024",
      desc: "Developed e-commerce solutions for local businesses, integrating payment gateways and managing CMS.",
    },
    {
      company: "Open Source",
      status: "Self",
      statusClass: "status-self",
      role: "Contributor",
      period: "2022 — Present",
      desc: "Active contributor to various React UI libraries, focusing on accessibility and performance optimizations.",
    },
  ];

  const stats = [
    { num: 3, plus: "+", label: "Years Experience" },
    { num: 15, plus: "+", label: "Projects Completed" },
    { num: 50, plus: "k", label: "Lines of Code" },
    { num: 10, plus: "+", label: "Happy Clients" },
    { num: 100, plus: "%", label: "Success Rate" },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;
      const q = gsap.utils.selector(contentRef);
      const tag = q(".exp-tag");
      const title = q(".exp-title");
      const items = q(".exp-item");
      const dots = q(".exp-dot");
      const lines = q(".exp-line");
      const statCards = q(".exp-stat-card");

      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
        // PHASE 1: Zoom IN to APPEAR (0 -> 0.4)
        scrollTl.fromTo(
          contentRef.current,
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

        if (tag.length) scrollTl.fromTo(tag, { y: -15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.25 }, 0.08);
        if (title.length) scrollTl.fromTo(title, { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3 }, 0.12);
        if (items.length) {
          scrollTl.fromTo(
            items,
            { y: 25, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.3, ease: "power2.out" },
            0.15
          );
        }
        if (dots.length) {
          scrollTl.fromTo(
            dots,
            { scale: 0, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, stagger: 0.06, duration: 0.25, ease: "back.out(2)" },
            0.18
          );
        }
        if (lines.length) {
          scrollTl.fromTo(
            lines,
            { scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, stagger: 0.06, duration: 0.3, ease: "power2.out" },
            0.2
          );
        }
        if (statCards.length) {
          scrollTl.fromTo(
            statCards,
            { y: 30, autoAlpha: 0, scale: 0.92 },
            { y: 0, autoAlpha: 1, scale: 1, stagger: 0.05, duration: 0.35, ease: "back.out(1.4)" },
            0.18
          );
        }

        // PHASE 2: HOLD / READ (0.4 -> 0.6)
        scrollTl.to({}, { duration: 0.2 });

        // PHASE 3: Continue scrolling to Zoom IN and DISAPPEAR (0.6 -> 1.0)
        scrollTl.to(
          contentRef.current,
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
        scrollTl.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0);
        scrollTl.to({}, { duration: 0.2 });
        scrollTl.to(contentRef.current, { autoAlpha: 0, duration: 0.4 }, 0.6);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
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
        padding: "60px 48px",
        margin: "0",
        marginTop: "-100vh",
      }}
    >
      <div
        className="experience-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="experience-inner"
          ref={contentRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
          <div className="exp-layout-grid">
            {/* Left Column: Context & Timeline */}
            <div className="exp-left-col">
              <div className="section-tag exp-tag">03 — experience</div>
              <h2 className="section-title exp-title" style={{ marginBottom: "20px" }}>
                Where I&apos;ve been.
              </h2>

              <div className="exp-list">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="exp-item" style={{ padding: "14px 0" }}>
                    <div className="exp-timeline">
                      <div className="exp-dot"></div>
                      <div className="exp-line"></div>
                    </div>
                    <div>
                      <div className="exp-meta">
                        <h3 className="exp-company">{exp.company}</h3>
                        <span className={`exp-status ${exp.statusClass}`}>{exp.status}</span>
                      </div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-period">{exp.period}</div>
                      <p className="exp-desc" style={{ marginTop: "4px", fontSize: "13px", lineHeight: "1.5" }}>
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Grid Cards for Stats */}
            <div className="exp-right-col">
              <div className="exp-stats-cards">
                {stats.map((stat, idx) => {
                  const isFeatured = idx === 4;
                  return (
                    <div
                      key={idx}
                      className={`exp-stat-card ${isFeatured ? "featured-stat" : ""}`}
                    >
                      <div className="exp-stat-top">
                        <div className="exp-stat-number">
                          <Counter target={stat.num} />
                          <span className="exp-stat-accent">{stat.plus}</span>
                        </div>
                        {isFeatured && <span className="exp-stat-badge">Top Metric</span>}
                      </div>
                      <div className="exp-stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

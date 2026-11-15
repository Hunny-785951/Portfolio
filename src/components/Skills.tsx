"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const groups = [
    {
      label: "Languages",
      items: ["C / C++", "Java", "JavaScript", "C#", "Kotlin", "Python", "PHP"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Vue.js", "HTML / CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      label: "Backend & Security",
      items: ["Spring Boot", "MySQL", "Linux", "Cyber Security", "Ethical Hacking"],
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;
      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const q = gsap.utils.selector(contentRef);
      const title = q(".skills-title");
      const skillGroups = q(".skill-group");
      const items = q(".skill-item");

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

        if (title.length) {
          scrollTl.fromTo(title, { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3 }, 0.1);
        }
        if (skillGroups.length) {
          scrollTl.fromTo(
            skillGroups,
            { y: 35, autoAlpha: 0, scale: 0.95 },
            { y: 0, autoAlpha: 1, scale: 1, stagger: 0.08, duration: 0.3, ease: "back.out(1.4)" },
            0.15
          );
        }
        if (items.length) {
          scrollTl.fromTo(
            items,
            { scale: 0.8, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, stagger: 0.015, duration: 0.25, ease: "back.out(1.5)" },
            0.2
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

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -6,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      id="skills"
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
        className="skills-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="skills-section-inner"
          ref={contentRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
          <h2 className="section-title skills-title">What I work with.</h2>

          <div className="skills-grid">
            {groups.map((group) => (
              <div
                key={group.label}
                className="skill-group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

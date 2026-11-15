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
          start: "top 90%",
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

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      const statsElements = q(".big-stat");

      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=75%",
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

        if (statsElements.length) {
          scrollTl.fromTo(
            statsElements,
            { autoAlpha: 0, y: 30, scale: 0.9 },
            { autoAlpha: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.3, ease: "back.out(1.4)" },
            0.12
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
      id="stats"
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
        className="stats-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="stats-inner"
          ref={contentRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="big-stat">
              <div className="big-num">
                <Counter target={stat.num} />
                <span className="big-num-accent">{stat.plus}</span>
              </div>
              <div className="big-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

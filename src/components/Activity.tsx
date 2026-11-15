"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Deterministic cell distribution to eliminate hydration mismatches between SSR and Client
const CELLS = Array.from({ length: 364 }, (_, i) => {
  const seed = ((i * 9301 + 49297) % 233280) / 233280;
  if (seed > 0.88) return "l4";
  if (seed > 0.72) return "l3";
  if (seed > 0.55) return "l2";
  if (seed > 0.35) return "l1";
  return "";
});

export default function Activity() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;
      const q = gsap.utils.selector(contentRef);
      const tag = q(".act-tag");
      const title = q(".gh-title");
      const sub = q(".gh-sub");
      const stats = q(".gh-stat");
      const cellsEls = q(".c-cell");

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
        if (sub.length) scrollTl.fromTo(sub, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3 }, 0.15);
        if (stats.length) {
          scrollTl.fromTo(
            stats,
            { autoAlpha: 0, y: 30, scale: 0.9 },
            { autoAlpha: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.3, ease: "back.out(1.4)" },
            0.18
          );
        }

        // 2D grid stagger for contribution cells
        if (cellsEls.length) {
          scrollTl.fromTo(
            cellsEls,
            { scale: 0, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.3,
              ease: "power2.out",
              stagger: {
                grid: [7, 52],
                from: "center",
                amount: 0.25,
              },
            },
            0.15
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
      id="github"
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
        className="github-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="github-inner"
          ref={contentRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
          {/* LEFT — title + contribution grid */}
          <div>
            <div className="section-tag act-tag">05 — activity</div>
          <h2 className="gh-title">Building in public.</h2>
          <p className="gh-sub">
            I believe in open source and consistent shipping. Here&apos;s what my GitHub looks like.
          </p>
          <div className="contribution-grid" style={{ marginTop: "24px" }}>
            {CELLS.map((level, idx) => (
              <div key={idx} className={`c-cell ${level}`}></div>
            ))}
          </div>
        </div>

        {/* RIGHT — stat cards */}
        <div>
          <div className="gh-stats">
            <div className="gh-stat">
              <div className="gh-stat-num yellow">200+</div>
              <div className="gh-stat-label">Contributions</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-num green">10+</div>
              <div className="gh-stat-label">Repositories</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-num purple">React</div>
              <div className="gh-stat-label">Main Stack</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-num blue">15+</div>
              <div className="gh-stat-label">Stars Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

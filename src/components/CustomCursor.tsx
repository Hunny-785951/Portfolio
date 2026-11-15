"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    // Use GSAP quickTo for zero-overhead, 120fps tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power3" });
    const trailXTo = gsap.quickTo(trail, "x", { duration: 0.3, ease: "power2.out" });
    const trailYTo = gsap.quickTo(trail, "y", { duration: 0.3, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      trailXTo(e.clientX);
      trailYTo(e.clientY);
    };

    // Hover states for links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic") ||
        target.closest(".c-cell") ||
        target.closest(".work-card") ||
        target.closest(".skill-group")
      ) {
        document.body.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic") ||
        target.closest(".c-cell") ||
        target.closest(".work-card") ||
        target.closest(".skill-group")
      ) {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        style={{ left: 0, top: 0, position: "fixed", pointerEvents: "none" }}
      ></div>
      <div
        id="cursor-trail"
        ref={trailRef}
        style={{ left: 0, top: 0, position: "fixed", pointerEvents: "none" }}
      ></div>
    </>
  );
}

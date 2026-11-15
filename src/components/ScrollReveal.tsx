"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isReduced) {
        gsap.utils.toArray<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children > *").forEach((el) => {
          gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
          el.classList.add("visible");
        });
        return;
      }

      // Standard reveal (slide up & fade in)
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              onEnter: () => el.classList.add("visible"),
            },
          }
        );
      });

      // Reveal from Left
      const revealsLeft = gsap.utils.toArray<HTMLElement>(".reveal-left");
      revealsLeft.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              onEnter: () => el.classList.add("visible"),
            },
          }
        );
      });

      // Reveal from Right
      const revealsRight = gsap.utils.toArray<HTMLElement>(".reveal-right");
      revealsRight.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              onEnter: () => el.classList.add("visible"),
            },
          }
        );
      });

      // Reveal with Scale
      const revealsScale = gsap.utils.toArray<HTMLElement>(".reveal-scale");
      revealsScale.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { scale: 0.88, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              onEnter: () => el.classList.add("visible"),
            },
          }
        );
      });

      // Stagger children
      const staggerParents = gsap.utils.toArray<HTMLElement>(".stagger-children");
      staggerParents.forEach((el) => {
        if (!el) return;
        const validChildren = Array.from(el.children).filter(Boolean);
        if (validChildren.length > 0) {
          gsap.fromTo(
            validChildren,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                onEnter: () => el.classList.add("visible"),
              },
            }
          );
        }
      });
    });

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return null;
}

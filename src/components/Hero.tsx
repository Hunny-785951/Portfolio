"use client";

import { useRef } from "react";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const arrowPathRef = useRef<SVGPathElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const tl = gsap.timeline({
        delay: isReduced ? 0.05 : 0.2,
        defaults: { ease: "power3.out" },
      });

      // Zoom IN animation to hero section to reveal the context
      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          {
            scale: isReduced ? 1 : 0.82,
            opacity: 0,
            y: isReduced ? 0 : 40,
            filter: isReduced ? "none" : "blur(8px)",
            transformOrigin: "center center",
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: isReduced ? 0.4 : 1.4,
            ease: "power3.out",
          }
        );
      }

      // Counter-zoom on background grid for depth
      if (gridRef.current) {
        tl.fromTo(
          gridRef.current,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
          0
        );
      }

      // Staggered reveal of hero left column
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          0.2
        );
      }

      const textTargets = [
        greetingRef.current,
        introRef.current,
        nameRef.current,
        subRef.current,
      ].filter(Boolean);

      if (textTargets.length > 0) {
        tl.fromTo(
          textTargets,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: "power3.out" },
          0.3
        );
      }

      if (actionsRef.current) {
        tl.fromTo(
          actionsRef.current,
          { opacity: 0, y: 25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
          0.6
        );
      }

      if (socialsRef.current && socialsRef.current.children.length > 0) {
        tl.fromTo(
          Array.from(socialsRef.current.children),
          { opacity: 0, scale: 0, y: 15 },
          { opacity: 1, scale: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "back.out(2)" },
          0.7
        );
      }

      // DrawSVG on CTA button arrow path
      if (arrowPathRef.current) {
        tl.fromTo(
          arrowPathRef.current,
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.8, ease: "power2.inOut" },
          0.8
        );
      }

      // Hero right column: 3D photo zoom-in & stats pop
      if (photoCardRef.current) {
        tl.fromTo(
          photoCardRef.current,
          { opacity: 0, scale: 0.82, rotateY: -12, rotateX: 6, y: 35 },
          { opacity: 1, scale: 1, rotateY: 0, rotateX: 0, y: 0, duration: 1.3, ease: "power3.out" },
          0.35
        );
      }

      if (statsGridRef.current && statsGridRef.current.children.length > 0) {
        tl.fromTo(
          Array.from(statsGridRef.current.children),
          { opacity: 0, y: 25, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.8, ease: "back.out(1.5)" },
          0.65
        );
      }

      // Scroll hint entrance
      if (scrollHintRef.current) {
        tl.fromTo(
          scrollHintRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.9
        );
      }

      // Continuous ambient glowing tweens
      if (glow1Ref.current) {
        gsap.to(glow1Ref.current, {
          x: 35,
          y: -30,
          scale: 1.1,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (glow2Ref.current) {
        gsap.to(glow2Ref.current, {
          x: -30,
          y: 35,
          scale: 1.15,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Scroll-driven Zoom IN until section completely disappears
      if (heroRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        if (contentRef.current) {
          scrollTl.fromTo(
            contentRef.current,
            {
              scale: 1,
              autoAlpha: 1,
              filter: "blur(0px)",
              transformOrigin: "center center",
            },
            {
              scale: isReduced ? 1.1 : 4.5,
              autoAlpha: 0,
              filter: isReduced ? "none" : "blur(16px)",
              ease: "power1.inOut",
              immediateRender: false,
            },
            0
          );
        }

        if (photoCardRef.current && !isReduced) {
          scrollTl.fromTo(
            photoCardRef.current,
            {
              scale: 1,
              rotateY: 0,
              rotateX: 0,
            },
            {
              scale: 1.5,
              rotateY: 15,
              rotateX: -10,
              ease: "power1.inOut",
              immediateRender: false,
            },
            0
          );
        }

        if (gridRef.current && !isReduced) {
          scrollTl.fromTo(
            gridRef.current,
            {
              scale: 1,
              autoAlpha: 1,
            },
            {
              scale: 2.8,
              autoAlpha: 0,
              ease: "power1.inOut",
              immediateRender: false,
            },
            0
          );
        }

        const glows = [glow1Ref.current, glow2Ref.current].filter(Boolean);
        if (glows.length > 0 && !isReduced) {
          scrollTl.fromTo(
            glows,
            {
              scale: 1,
              autoAlpha: 1,
            },
            {
              scale: 3.2,
              autoAlpha: 0,
              ease: "power1.in",
              immediateRender: false,
            },
            0
          );
        }

        if (scrollHintRef.current) {
          scrollTl.to(
            scrollHintRef.current,
            {
              autoAlpha: 0,
              y: 25,
              duration: 0.25,
              ease: "power1.out",
            },
            0
          );
        }
      }
    },
    { scope: heroRef }
  );

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-grid" ref={gridRef}></div>
        <div className="hero-glow-1 parallax-slow" ref={glow1Ref}></div>
        <div className="hero-glow-2 parallax-fast" ref={glow2Ref}></div>
      </div>

      <div className="hero-content" ref={contentRef}>
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <div className="hero-badge" ref={badgeRef}>
            <div className="status-dot"></div>
            Full - Stack Developer · Vadodara, India
          </div>

          <div className="hero-greeting" ref={greetingRef}>
            Namaste, Visitors
          </div>
          <div className="hero-intro" ref={introRef}>
            I&apos;m
          </div>
          <h1 className="hero-name" ref={nameRef}>
            Himesh Solanki
          </h1>

          <p className="hero-sub" ref={subRef}>
            I craft <strong>clean, fast, and thoughtful</strong> web experiences using{" "}
            <strong>React, TypeScript,</strong> and <strong>Tailwind CSS</strong>.
          </p>

          <div className="hero-actions" ref={actionsRef}>
            <Magnetic>
              <a href="#works" className="btn-primary magnetic">
                View my work
                <svg className="icon" viewBox="0 0 16 16" fill="none">
                  <path
                    ref={arrowPathRef}
                    className="hero-arrow-path"
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary magnetic"
              >
                Download CV
              </a>
            </Magnetic>
          </div>

          <div className="hero-socials" ref={socialsRef}>
            <Magnetic>
              <a
                href="https://github.com/Hunny-785951"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box magnetic"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://linkedin.com/in/himesh-s5847"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box magnetic"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:himeshs159587@gmail.com"
                className="social-box magnetic"
                title="Email"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <div className="hero-photo-card" ref={photoCardRef}>
            <a href="/profile.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="/profile.jpg"
                alt="Himesh Solanki"
                className="hero-photo"
                width={440}
                height={440}
                priority
              />
            </a>
          </div>

          <div className="hero-stats-grid" ref={statsGridRef}>
            <div className="h-stat-card">
              <div className="h-stat-label">Projects shipped</div>
              <div className="h-stat-val purple">3+</div>
            </div>
            <div className="h-stat-card">
              <div className="h-stat-label">Years building</div>
              <div className="h-stat-val purple">5+</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint" ref={scrollHintRef}>
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

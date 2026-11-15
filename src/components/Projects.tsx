"use client";

import { useRef } from "react";
import Magnetic from "@/components/Magnetic";
import { gsap, useGSAP } from "@/lib/gsap";

interface ProjectItem {
  title: string;
  desc: string;
  label: string;
  labelClass?: string;
  thumbClass: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  svgIcon: React.ReactNode;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Cab Booking System",
    desc: "A complete cab booking system handling user ride requests, driver management, and database connectivity.",
    label: "Full Stack",
    labelClass: "label-full",
    thumbClass: "thumb-ecommerce",
    stack: ["React.js", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/Hunny-785951/cab-booking-project",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.6">
        <rect x="10" y="18" width="40" height="30" rx="3" stroke="#8b7cf6" strokeWidth="1.5" />
        <path d="M10 24h40" stroke="#8b7cf6" strokeWidth="1" />
        <rect x="16" y="30" width="12" height="12" rx="2" fill="#8b7cf6" opacity="0.3" />
        <rect x="32" y="30" width="12" height="4" rx="1" fill="#8b7cf6" opacity="0.2" />
        <rect x="32" y="37" width="8" height="4" rx="1" fill="#8b7cf6" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Dream Coders",
    desc: "A collaborative coding platform and community site for developers to share and build projects together.",
    label: "Live App",
    labelClass: "label-live",
    thumbClass: "thumb-task",
    stack: ["React.js", "JavaScript", "Vercel"],
    liveUrl: "https://dream-coders.vercel.app",
    githubUrl: "https://github.com/Hunny-785951/Dream-Coders",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.6">
        <path d="M20 30l6 6 14-14" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="30" r="20" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    title: "Recruitment Portal",
    desc: "A comprehensive recruitment portal connecting employers and job seekers with job posting and application features.",
    label: "Work in Progress",
    labelClass: "label-wip",
    thumbClass: "thumb-portfolio-t",
    stack: ["PHP / Laravel", "Blade", "JavaScript", "Tailwind"],
    githubUrl: "https://github.com/Hunny-785951/Jobs_-_Recruitment_Portal",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.6">
        <rect x="20" y="15" width="20" height="30" rx="2" stroke="#f97316" strokeWidth="1.5" />
        <path d="M25 25h10M25 30h7" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Admin Dashboard",
    desc: "An interactive administrative dashboard for data visualization and management.",
    label: "Frontend",
    labelClass: "label-full",
    thumbClass: "thumb-dashboard",
    stack: ["JavaScript", "React"],
    githubUrl: "https://github.com/Hunny-785951/Admin-Dashboard",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.6">
        <rect x="10" y="15" width="40" height="30" rx="3" stroke="#10b981" strokeWidth="1.5" />
        <path d="M10 22h40M15 30h10M15 38h20" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Job Portal",
    desc: "A job platform connecting employers and job seekers with streamlined applications.",
    label: "Full Stack",
    labelClass: "label-full",
    thumbClass: "thumb-portfolio-t",
    stack: ["JavaScript", "Node.js"],
    githubUrl: "https://github.com/Hunny-785951/Job_Portal",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.6">
        <path d="M20 20h20M20 30h15M20 40h10" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Social Media Dashboard",
    desc: "An analytics dashboard for social media tracking and engagement visualization.",
    label: "Frontend",
    labelClass: "label-full",
    thumbClass: "thumb-task",
    stack: ["JavaScript", "React"],
    githubUrl: "https://github.com/Hunny-785951/Social_Media_Dashboard",
    svgIcon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.6">
        <circle cx="30" cy="30" r="15" stroke="#0ea5e9" strokeWidth="2" />
        <path d="M30 20v10l7 7" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const zoomWrapperRef = useRef<HTMLDivElement>(null);
  const spiralStageRef = useRef<HTMLDivElement>(null);
  const armContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardWrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !zoomWrapperRef.current || !spiralStageRef.current) return;
      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const arms = armContainersRef.current.filter(Boolean) as HTMLDivElement[];
      const cardWraps = cardWrapRefs.current.filter(Boolean) as HTMLDivElement[];
      const totalCards = arms.length;
      if (totalCards === 0) return;

      const isMobile = window.innerWidth < 768;
      const radius = isMobile ? 340 : (window.innerWidth < 1200 ? 480 : 540);
      const angleStep = isMobile ? 32 : 36;
      const yStep = isMobile ? 55 : 80;

      // Position each arm in true 3D cylindrical spiral coordinates
      arms.forEach((arm, i) => {
        const angle = i * angleStep;
        const yOffset = i * yStep;
        arm.style.transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) translateY(${yOffset}px)`;
      });

      // Master scroll-driven timeline matching site-wide zoom flow
      // Extended runway (+350%) and dampened scrub (1.2) for a significantly slower, smoother rotation speed
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (!isReduced) {
        // PHASE 1: ZOOM IN TO APPEAR (0.0 -> 0.16)
        // Zooms the ENTIRE section seamlessly into view (matches Hero, About, Skills, Experience)
        scrollTl.fromTo(
          zoomWrapperRef.current,
          {
            scale: 0.8,
            autoAlpha: 0,
            filter: "blur(8px)",
            transformOrigin: "center center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.16,
            ease: "power2.out",
          },
          0
        );

        // Blueprint SVG animation
        const svgElements = zoomWrapperRef.current.querySelectorAll(
          ".work-thumb-inner svg path, .work-thumb-inner svg rect, .work-thumb-inner svg circle"
        );
        if (svgElements.length > 0) {
          scrollTl.fromTo(
            svgElements,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.15, stagger: 0.015, ease: "power2.inOut" },
            0.04
          );
        }

        // PHASE 2: 3D SPIRAL SCROLL ROTATION (0.16 -> 0.84)
        // Calmer, gentler rotation speed spread over a wider scroll timeline
        const totalRotation = (totalCards - 1) * angleStep;
        const totalYTravel = (totalCards - 1) * yStep;
        const rotationStart = 0.16;
        const rotationDuration = 0.68;

        scrollTl.to(
          spiralStageRef.current,
          {
            rotationY: -totalRotation,
            y: -totalYTravel,
            duration: rotationDuration,
            ease: "none",
          },
          rotationStart
        );

        // Visibility & focus choreography for cards along the spiral
        cardWraps.forEach((wrap, i) => {
          const peakProgress = rotationStart + (i / (totalCards - 1)) * rotationDuration;
          const segment = rotationDuration / (totalCards - 1);

          if (i === 0) {
            // Card 0 starts in focus, transitions to 0.75 opacity as spiral turns
            gsap.set(wrap, { autoAlpha: 1, scale: 1.04 });
            scrollTl.to(
              wrap,
              {
                autoAlpha: 0.75,
                scale: 0.9,
                duration: segment * 0.5,
                ease: "power1.in",
              },
              peakProgress
            );
          } else {
            // Subsequent cards sharpen to full focus when passing center
            gsap.set(wrap, { autoAlpha: 0.75, scale: 0.9 });
            scrollTl.to(
              wrap,
              {
                autoAlpha: 1,
                scale: 1.04,
                duration: segment * 0.5,
                ease: "power1.out",
              },
              Math.max(rotationStart, peakProgress - segment * 0.5)
            );

            if (i < totalCards - 1) {
              scrollTl.to(
                wrap,
                {
                  autoAlpha: 0.75,
                  scale: 0.9,
                  duration: segment * 0.5,
                  ease: "power1.in",
                },
                peakProgress
              );
            }
          }
        });

        // PHASE 3: ZOOM IN AND DISAPPEAR (0.84 -> 1.0)
        // Seamless exit zoom of the entire section into Experience (matches Hero, About, Skills)
        scrollTl.to(
          zoomWrapperRef.current,
          {
            scale: 3.5,
            autoAlpha: 0,
            filter: "blur(14px)",
            duration: 0.16,
            ease: "power2.in",
          },
          0.84
        );
      } else {
        scrollTl.fromTo(zoomWrapperRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0);
        scrollTl.to({}, { duration: 0.4 });
        scrollTl.to(zoomWrapperRef.current, { autoAlpha: 0, duration: 0.3 }, 0.7);
      }

      // Interactive 3D tilt on card hover
      cardWraps.forEach((wrap) => {
        const card = wrap.querySelector(".work-card") as HTMLElement;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            y: -6,
            scale: 1.02,
            duration: 0.2,
            ease: "power1.out",
            transformPerspective: 1000,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="works"
      ref={sectionRef}
      style={{
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        marginTop: "-100vh",
      }}
    >
      {/* Unified 2D Zoom Wrapper: handles entrance and exit zooms cleanly without 3D context-flattening drops */}
      <div
        ref={zoomWrapperRef}
        className="works-zoom-wrapper"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center center",
          overflow: "visible",
          willChange: "transform, opacity, filter",
        }}
      >
        {/* Top Header */}
        <div
          className="works-header"
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            right: "0",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 48px",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pointerEvents: "auto",
          }}
        >
          <div>
            <div className="section-tag">02 — work</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Selected work.
            </h2>
          </div>

        </div>

        {/* 3D Spiral Stage Container: permanent 3D space, never flattened */}
        <div
          className="spiral-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1400px",
            perspectiveOrigin: "center center",
            overflow: "visible",
          }}
        >
          <div
            className="spiral-stage"
            ref={spiralStageRef}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformStyle: "preserve-3d",
            }}
          >
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                ref={(el) => {
                  armContainersRef.current[i] = el;
                }}
                className="spiral-arm"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transformStyle: "preserve-3d",
                  pointerEvents: "auto",
                }}
              >
                <div
                  ref={(el) => {
                    cardWrapRefs.current[i] = el;
                  }}
                  className="spiral-card-wrapper"
                  style={{
                    width: "min(340px, 82vw)",
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                    backfaceVisibility: "visible",
                  }}
                >
                  <div className="work-card">
                    <div className="work-thumb">
                      <div className={`work-thumb-inner ${project.thumbClass}`}>
                        <div className="grid-lines"></div>
                        {project.svgIcon}
                      </div>
                      <div className={`work-label ${project.labelClass || ""}`}>{project.label}</div>
                    </div>

                    <div className="work-body">
                      <div className="work-title">{project.title}</div>
                      <div className="work-desc">{project.desc}</div>

                      <div className="work-stack">
                        {project.stack.map((tech) => (
                          <span key={tech} className="stack-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="work-links">
                        {project.liveUrl && (
                          <Magnetic>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="work-link"
                            >
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                                <path
                                  d="M1 6h10M6 1c-2 1-3 3-3 5s1 4 3 5M6 1c2 1 3 3 3 5s-1 4-3 5"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                />
                              </svg>
                              Live App
                            </a>
                          </Magnetic>
                        )}

                        <Magnetic>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-link"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub
                          </a>
                        </Magnetic>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "Himesh transformed our vague ideas into a stunning, high-performing website. His attention to detail is unmatched.",
      name: "Sarah Jenkins",
      role: "Product Manager",
      avatarClass: "av-1",
      initials: "SJ",
    },
    {
      text: "One of the best frontend developers I've worked with. He writes clean code and truly cares about the user experience.",
      name: "David Chen",
      role: "Tech Lead",
      avatarClass: "av-2",
      initials: "DC",
    },
    {
      text: "Fast, reliable, and incredibly talented. The new interactive features he built increased our user engagement by 40%.",
      name: "Elena Rodriguez",
      role: "Startup Founder",
      avatarClass: "av-3",
      initials: "ER",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;
      const q = gsap.utils.selector(contentRef);
      const tag = q(".testi-tag");
      const title = q(".testi-title");
      const pill = q(".testi-trust-pill");
      const cards = q(".testimonial-card");
      const stars = q(".star");

      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Generous 160% scroll runway so user has plenty of scroll travel to view the section
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (!isReduced) {
        // PHASE 1: Quick & Snappy Entrance (0.0 -> 0.16)
        scrollTl.fromTo(
          contentRef.current,
          {
            scale: 0.88,
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

        if (tag.length) {
          scrollTl.fromTo(tag, { y: -12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.12 }, 0.02);
        }
        if (title.length) {
          scrollTl.fromTo(title, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.14 }, 0.03);
        }
        if (pill.length) {
          scrollTl.fromTo(pill, { y: -12, autoAlpha: 0, scale: 0.9 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.14 }, 0.03);
        }
        if (cards.length) {
          scrollTl.fromTo(
            cards,
            { autoAlpha: 0, y: 20, scale: 0.96 },
            { autoAlpha: 1, y: 0, scale: 1, stagger: 0.03, duration: 0.14, ease: "power2.out" },
            0.04
          );
        }
        if (stars.length) {
          scrollTl.fromTo(
            stars,
            { scale: 0, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, stagger: 0.01, duration: 0.1, ease: "back.out(2)" },
            0.06
          );
        }

        // PHASE 2: LONG, STABLE HOLD / READ ZONE (0.16 -> 0.84)
        // 68% of the entire section scroll remains comfortably locked, stable, and completely readable
        scrollTl.to({}, { duration: 0.68 });

        // PHASE 3: Seamless Exit Zoom (0.84 -> 1.0)
        scrollTl.to(
          contentRef.current,
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
        scrollTl.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.16 }, 0);
        scrollTl.to({}, { duration: 0.68 });
        scrollTl.to(contentRef.current, { autoAlpha: 0, duration: 0.16 }, 0.84);
      }

      (cards as HTMLElement[]).forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            y: -5,
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
            duration: 0.6,
            ease: "power3.out",
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
      id="testimonials"
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
        padding: "32px 48px",
        margin: "0",
        marginTop: "-100vh",
      }}
    >
      <div
        className="testimonials-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="testimonials-inner"
          ref={contentRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
          <div className="testi-header">
            <div>
              <div className="section-tag testi-tag">04 — feedback</div>
              <h2 className="section-title testi-title" style={{ marginBottom: "0" }}>
                What people say.
              </h2>
            </div>
            <div className="testi-trust-pill">
              <span className="trust-dot"></span>
              <span className="trust-stars">★★★★★</span>
              <span className="trust-score">5.0</span>
              <span>· Verified Feedback</span>
            </div>
          </div>

          <div className="testimonials-grid" ref={containerRef}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card cursor-none">
                <div className="testi-card-top">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="testi-quote-icon">&ldquo;</span>
                </div>
                <p className="testimonial-text">&quot;{t.text}&quot;</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${t.avatarClass}`}>{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
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

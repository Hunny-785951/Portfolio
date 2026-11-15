"use client";

import { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;
      const q = gsap.utils.selector(contentRef);
      const tag = q(".contact-tag");
      const title = q(".contact-title");
      const desc = q(".contact-desc");
      const channels = q(".contact-channel-card");
      const paths = q(".mail-icon-path");
      const fields = q(".form-field");
      const submitBtn = q(".submit-btn");
      const footerBar = q(".contact-footer-bar");

      const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=60%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (!isReduced) {
        // PHASE 1: Zoom IN to APPEAR (0.0 -> 0.28)
        scrollTl.fromTo(
          contentRef.current,
          {
            scale: 0.84,
            autoAlpha: 0,
            filter: "blur(8px)",
            transformOrigin: "center center",
          },
          {
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.28,
            ease: "power2.out",
          },
          0
        );

        if (tag.length) scrollTl.fromTo(tag, { y: -12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.16 }, 0.04);
        if (title.length) scrollTl.fromTo(title, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.2 }, 0.06);
        if (desc.length) scrollTl.fromTo(desc, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.2 }, 0.08);
        if (channels.length) {
          scrollTl.fromTo(
            channels,
            { y: 15, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.2 },
            0.1
          );
        }
        if (paths.length) {
          scrollTl.fromTo(
            paths,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.2, stagger: 0.04, ease: "power2.inOut" },
            0.12
          );
        }
        if (fields.length) {
          scrollTl.fromTo(
            fields,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.22, ease: "power2.out" },
            0.1
          );
        }
        if (submitBtn.length) {
          scrollTl.fromTo(
            submitBtn,
            { scale: 0.92, autoAlpha: 0, y: 12 },
            { scale: 1, autoAlpha: 1, y: 0, duration: 0.22, ease: "back.out(1.5)" },
            0.16
          );
        }
        if (footerBar.length) {
          scrollTl.fromTo(
            footerBar,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.2 },
            0.18
          );
        }

        // PHASE 2: HOLD / PERMANENT INTERACTIVE STATE (0.28 -> 1.0)
        scrollTl.to({}, { duration: 0.72 });
      } else {
        scrollTl.fromTo(contentRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0);
        scrollTl.to({}, { duration: 0.7 });
      }
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (submitBtnRef.current) {
      gsap.to(submitBtnRef.current, { scale: 0.96, duration: 0.2 });
    }

    setTimeout(() => {
      setStatus("success");
      if (submitBtnRef.current) {
        gsap.fromTo(
          submitBtnRef.current,
          { scale: 0.95 },
          { scale: 1, duration: 0.4, ease: "back.out(2)" }
        );
      }

      setTimeout(() => {
        setStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power4.inOut",
    });
  };

  return (
    <section
      id="contact"
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
        padding: "32px 48px 20px",
        margin: "0",
        marginTop: "-100vh",
      }}
    >
      <div
        className="contact-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <div
          className="contact-merged-wrapper"
          ref={contentRef}
          style={{
            width: "100%",
            transformOrigin: "center center",
          }}
        >
          {/* Main 2-Column Contact Row */}
          <div className="contact-grid">
            <div className="contact-left">
              <div className="section-tag contact-tag">06 — contact</div>
              <h2 className="contact-title">
                Let&apos;s build something
                <br />
                together.
              </h2>
              <p className="contact-desc">
                Have a project in mind, a role to fill, or just want to say hi? I&apos;m currently open
                to new opportunities and would love to chat.
              </p>

              <div className="contact-channels">
                <a
                  href="mailto:himeshs159587@gmail.com"
                  className="contact-channel-card magnetic"
                >
                  <div className="channel-icon-wrap">
                    <svg
                      className="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className="mail-icon-path"
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      ></path>
                      <polyline className="mail-icon-path" points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="channel-label">Email Directly</span>
                    <span className="channel-val">himeshs159587@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/himesh-s5847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card magnetic"
                >
                  <div className="channel-icon-wrap">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <span className="channel-label">Connect & Network</span>
                    <span className="channel-val">LinkedIn Profile</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    required
                    disabled={status !== "idle"}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                    disabled={status !== "idle"}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    required
                    disabled={status !== "idle"}
                  ></textarea>
                </div>
                <button
                  ref={submitBtnRef}
                  type="submit"
                  className="submit-btn magnetic"
                  disabled={status !== "idle"}
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <svg
                        className="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <svg
                        className="icon"
                        style={{ animation: "spin 1s linear infinite" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                      </svg>
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <svg
                        className="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Message Sent!
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Integrated Footer Bar */}
          <div className="contact-footer-bar">
            <div className="footer-bar-left">
              <a href="#" className="footer-logo magnetic" onClick={scrollToTop}>
                hi<span>.</span>
              </a>
              <span className="footer-status-pill">
                <span className="footer-pulse-dot"></span>
                Available for freelance & full-time roles
              </span>
            </div>

            <div className="footer-bar-right">
              <div className="footer-links">
                <a
                  href="https://github.com/Hunny-785951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/himesh-s5847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Resume
                </a>
              </div>
              <div className="footer-copy">
                © {new Date().getFullYear()} Himesh. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

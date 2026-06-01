"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow-1 parallax-slow"></div>
        <div className="hero-glow-2 parallax-fast"></div>
      </div>

      <div className="hero-content">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <div className="hero-badge">
            <div className="status-dot"></div>
            Full - Stack Developer · Vadodara, India
          </div>

          <div className="hero-greeting">Namaste, Visitors</div>
          <div className="hero-intro">I&apos;m</div>
          <h1 className="hero-name">Himesh Solanki</h1>

          <p className="hero-sub">
            I craft <strong>clean, fast, and thoughtful</strong> web experiences using <strong>React, TypeScript,</strong> and <strong>Tailwind CSS</strong>.
          </p>

          <div className="hero-actions">
            <a href="#works" className="btn-primary magnetic">
              View my work
              <svg className="icon" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary magnetic">
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Hunny-785951" target="_blank" rel="noopener noreferrer" className="social-box magnetic" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>
            <a href="https://linkedin.com/in/himesh-s5847" target="_blank" rel="noopener noreferrer" className="social-box magnetic" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="mailto:himeshs159587@gmail.com" className="social-box magnetic" title="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" /></svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <div className="hero-photo-card">
            <a href="/profile.png" target="_blank" rel="noopener noreferrer">
              <Image src="/profile.png" alt="Himesh Solanki" className="hero-photo" width={440} height={440} priority />
            </a>
          </div>

          <div className="hero-stats-grid">
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

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

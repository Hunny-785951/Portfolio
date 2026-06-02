"use client";

import { useEffect } from "react";
import Magnetic from "@/components/Magnetic";

export default function Projects() {
  useEffect(() => {
    // 3D Tilt effect
    const cards = document.querySelectorAll(".work-card, .testimonial-card");
    
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const card = mouseEvent.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    cards.forEach(card => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="works">
      <div className="works-inner">
        <div className="works-header">
          <div>
            <div className="section-tag reveal">02 — work</div>
            <h2 className="section-title reveal" style={{ marginBottom: 0 }}>Selected work.</h2>
          </div>
          <Magnetic>
            <a href="#" className="view-all-link reveal">
              View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </Magnetic>
        </div>

        <div className="works-grid stagger-children">
          {/* Card 1 */}
          <div className="work-card">
            <div className="work-thumb">
              <div className="work-thumb-inner thumb-ecommerce">
                <div className="grid-lines"></div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.4">
                  <rect x="10" y="18" width="40" height="30" rx="3" stroke="#8b7cf6" strokeWidth="1.5"/>
                  <path d="M10 24h40" stroke="#8b7cf6" strokeWidth="1"/>
                  <rect x="16" y="30" width="12" height="12" rx="2" fill="#8b7cf6" opacity="0.3"/>
                  <rect x="32" y="30" width="12" height="4" rx="1" fill="#8b7cf6" opacity="0.2"/>
                  <rect x="32" y="37" width="8" height="4" rx="1" fill="#8b7cf6" opacity="0.2"/>
                </svg>
              </div>
              <div className="work-label label-full">Full Stack</div>
            </div>
            <div className="work-body">
              <div className="work-title">Cab Booking System</div>
              <div className="work-desc">A complete cab booking system handling user ride requests, driver management, and database connectivity.</div>
              <div className="work-stack">
                <span className="stack-tag">React.js</span>
                <span className="stack-tag">Spring Boot</span>
                <span className="stack-tag">MySQL</span>
              </div>
              <div className="work-links">
                <Magnetic>
                  <a href="https://github.com/Hunny-785951/cab-booking-project" target="_blank" rel="noopener noreferrer" className="work-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="work-card">
            <div className="work-thumb">
              <div className="work-thumb-inner thumb-task">
                <div className="grid-lines"></div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.4">
                  <path d="M20 30l6 6 14-14" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="30" cy="30" r="20" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4"/>
                </svg>
              </div>
              <div className="work-label label-live">Live App</div>
            </div>
            <div className="work-body">
              <div className="work-title">Recruitment Portal</div>
              <div className="work-desc">A comprehensive recruitment portal connecting employers and job seekers with job posting and application features.</div>
              <div className="work-stack">
                <span className="stack-tag">PHP / Laravel</span>
                <span className="stack-tag">Blade</span>
                <span className="stack-tag">JavaScript</span>
                <span className="stack-tag">Tailwind</span>
              </div>
              <div className="work-links">
                <Magnetic>
                  <a href="https://jobs-recruitment-portal.vercel.app" target="_blank" rel="noopener noreferrer" className="work-link">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 6h10M6 1c-2 1-3 3-3 5s1 4 3 5M6 1c2 1 3 3 3 5s-1 4-3 5" stroke="currentColor" strokeWidth="1"/></svg>
                    Live App
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://github.com/Hunny-785951/Jobs_-_Recruitment_Portal" target="_blank" rel="noopener noreferrer" className="work-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="work-card">
            <div className="work-thumb">
              <div className="work-thumb-inner thumb-portfolio-t">
                <div className="grid-lines"></div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.4">
                  <rect x="20" y="15" width="20" height="30" rx="2" stroke="#f97316" strokeWidth="1.5"/>
                  <path d="M25 25h10M25 30h7" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="work-label label-wip">Work in Progress</div>
            </div>
            <div className="work-body">
              <div className="work-title">Dream Coders</div>
              <div className="work-desc">A collaborative coding platform and community site for developers to share and build projects together.</div>
              <div className="work-stack">
                <span className="stack-tag">React.js</span>
                <span className="stack-tag">JavaScript</span>
                <span className="stack-tag">Vercel</span>
              </div>
              <div className="work-links">
                <Magnetic>
                  <a href="https://dream-coders.vercel.app" target="_blank" rel="noopener noreferrer" className="work-link">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 6h10M6 1c-2 1-3 3-3 5s1 4 3 5M6 1c2 1 3 3 3 5s-1 4-3 5" stroke="currentColor" strokeWidth="1"/></svg>
                    Live App
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://github.com/Hunny-785951/Dream-Coders" target="_blank" rel="noopener noreferrer" className="work-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    GitHub
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

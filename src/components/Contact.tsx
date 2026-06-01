"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      
      // Reset form after a few seconds
      setTimeout(() => {
        setStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-left reveal-left">
          <div className="section-tag">06 — contact</div>
          <h2>Let&apos;s build something<br />together.</h2>
          <p>
            Have a project in mind, a role to fill, or just want to say hi? I&apos;m currently open to new opportunities and would love to chat.
          </p>
          
          <div style={{ marginTop: "32px" }}>
            <a href="mailto:himeshs159587@gmail.com" className="contact-detail magnetic" style={{ display: "inline-flex" }}>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              himeshs159587@gmail.com
            </a>
            <br />
            <a href="https://linkedin.com/in/himesh-s5847" target="_blank" rel="noopener noreferrer" className="contact-detail magnetic" style={{ display: "inline-flex", alignItems: "center" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ marginRight: "12px" }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="reveal-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="John Doe" required disabled={status !== "idle"} />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="john@example.com" required disabled={status !== "idle"} />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea className="form-input form-textarea" placeholder="Tell me about your project..." required disabled={status !== "idle"}></textarea>
            </div>
            <button type="submit" className="submit-btn magnetic" disabled={status !== "idle"}>
              {status === "idle" && (
                <>
                  Send Message
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </>
              )}
              {status === "sending" && (
                <>
                  <svg className="icon" style={{ animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Message Sent!
                </>
              )}
            </button>
          </form>
          
          <style>{`
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      </div>
    </section>
  );
}

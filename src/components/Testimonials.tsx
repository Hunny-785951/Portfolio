"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".testimonial-card");
    
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

  const testimonials = [
    {
      text: "Himesh transformed our vague ideas into a stunning, high-performing website. His attention to detail is unmatched.",
      name: "Sarah Jenkins",
      role: "Product Manager",
      avatarClass: "av-1",
      initials: "SJ"
    },
    {
      text: "One of the best frontend developers I've worked with. He writes clean code and truly cares about the user experience.",
      name: "David Chen",
      role: "Tech Lead",
      avatarClass: "av-2",
      initials: "DC"
    },
    {
      text: "Fast, reliable, and incredibly talented. The new interactive features he built increased our user engagement by 40%.",
      name: "Elena Rodriguez",
      role: "Startup Founder",
      avatarClass: "av-3",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials">
      <div className="section-tag reveal">04 — feedback</div>
      <h2 className="section-title reveal">What people say.</h2>
      
      <div className="testimonials-grid stagger-children reveal-up" ref={containerRef}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card cursor-none">
            <div className="stars">
              {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
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
    </section>
  );
}

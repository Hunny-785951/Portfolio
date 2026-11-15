"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Marquee() {
  const items = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Spring Boot",
    "Node.js",
    "MySQL",
    "Figma",
    "REST APIs",
    "Git & GitHub",
    "PHP / Laravel",
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Seamless infinite horizontal loop
      const tween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none",
      });

      // Scroll velocity influence via ScrollTrigger
      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const boost = gsap.utils.clamp(-5, 5, velocity / 350);
          const targetTimeScale = boost < 0 ? -1 + boost : 1 + boost;

          gsap.to(tween, {
            timeScale: targetTimeScale,
            duration: 0.25,
            overwrite: "auto",
          });

          // Smoothly settle back to default forward speed
          gsap.to(tween, {
            timeScale: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    },
    { scope: marqueeRef }
  );

  return (
    <div className="marquee-wrapper" ref={marqueeRef}>
      <div className="marquee-track" ref={trackRef}>
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

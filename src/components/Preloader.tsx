"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.add("loaded");
        window.dispatchEvent(new CustomEvent("siteLoaded"));
        setDone(true);
      },
    });

    tl.fromTo(
      loaderRef.current,
      { scale: 0.8, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)" }
    )
      .to(".loader .box", {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      })
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power3.inOut",
        delay: 0.2,
      });
  }, { scope: containerRef });

  if (done) return null;

  return (
    <div className="preloader-wrapper" ref={containerRef}>
      <div className="loader" ref={loaderRef}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <mask id="clipping">
              <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
              <polygon points="25,25 75,25 50,75" fill="white"></polygon>
              <polygon points="50,25 75,75 25,75" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
            </mask>
          </defs>
        </svg>
        <div className="box"></div>
      </div>
    </div>
  );
}

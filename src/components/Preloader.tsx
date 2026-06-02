"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Wait for the loader-fill animation
    const timer = setTimeout(() => {
      setFading(true);
      document.body.classList.add("loaded");
      
      // Let the fade out transition finish before unmounting
      setTimeout(() => {
        setDone(true);
      }, 800);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div className={`preloader-wrapper ${fading ? "fade-out" : ""}`}>
      <div className="loader">
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

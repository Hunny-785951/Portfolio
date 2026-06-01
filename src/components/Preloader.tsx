"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Wait for the loader-fill animation (0.9s) + some buffer before fading out
    const timer = setTimeout(() => {
      setDone(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={done ? "done" : ""}>
      <div className="loader-inner">
        <div className="loader-logo">hi<span>.</span></div>
        <div className="loader-bar"><div className="loader-fill"></div></div>
      </div>
    </div>
  );
}

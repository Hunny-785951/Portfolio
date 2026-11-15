"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Magnetic({
  children,
}: {
  children: React.ReactElement;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    gsap.to(ref.current, {
      x: middleX * 0.28,
      y: middleY * 0.28,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", display: "inline-block" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

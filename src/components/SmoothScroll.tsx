"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";

function LenisScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

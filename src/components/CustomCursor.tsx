"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update cursor position directly without requestAnimationFrame for zero latency
      if (cursor) {
        cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      }
    };

    const animateTrail = () => {
      // Easing for the trail
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;

      if (trail) {
        trail.style.transform = `translate(calc(${trailX}px - 50%), calc(${trailY}px - 50%))`;
      }
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener("mousemove", onMouseMove);
    const animationFrame = requestAnimationFrame(animateTrail);

    // Hover states for links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.magnetic') || target.closest('.c-cell')) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.magnetic') || target.closest('.c-cell')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    // Magnetic logic for elements with .magnetic
    // Magnetic logic for elements with .magnetic
    
    const moveMagnetic = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      target.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    
    const resetMagnetic = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'translate(0px, 0px)';
    };

    const initMagnetic = () => {
      document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mousemove', moveMagnetic as EventListener);
        el.addEventListener('mouseleave', resetMagnetic as EventListener);
      });
    };
    
    initMagnetic();

    // Re-initialize magnetic on mutations (e.g. navigation)
    const observer = new MutationObserver(() => {
      // Remove old listeners
      document.querySelectorAll('.magnetic').forEach(el => {
        el.removeEventListener('mousemove', moveMagnetic as EventListener);
        el.removeEventListener('mouseleave', resetMagnetic as EventListener);
      });
      initMagnetic();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      document.querySelectorAll('.magnetic').forEach(el => {
        el.removeEventListener('mousemove', moveMagnetic as EventListener);
        el.removeEventListener('mouseleave', resetMagnetic as EventListener);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}></div>
      <div id="cursor-trail" ref={trailRef} style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}></div>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const duration = 2000; // 2 seconds
          const stepTime = Math.max(duration / target, 10); // minimum 10ms
          
          const timer = setInterval(() => {
            current += Math.ceil(target / (duration / stepTime));
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, stepTime);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="counter">{count}</span>;
};

export default function StatsStrip() {
  const stats = [
    { num: 3, plus: "+", label: "Years Experience" },
    { num: 15, plus: "+", label: "Projects Completed" },
    { num: 50, plus: "k", label: "Lines of Code" },
    { num: 10, plus: "+", label: "Happy Clients" },
    { num: 100, plus: "%", label: "Success Rate" },
  ];

  return (
    <section id="stats">
      <div className="stats-inner stagger-children reveal">
        {stats.map((stat, idx) => (
          <div key={idx} className="big-stat">
            <div className="big-num">
              <Counter target={stat.num} />
              <span className="big-num-accent">{stat.plus}</span>
            </div>
            <div className="big-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

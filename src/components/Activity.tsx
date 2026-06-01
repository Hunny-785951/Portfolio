"use client";

import { useEffect, useState } from "react";

export default function Activity() {
  const [cells, setCells] = useState<string[]>(Array(364).fill(""));

  useEffect(() => {
    const generatedCells = Array.from({ length: 364 }, () => {
      const rand = Math.random();
      if (rand > 0.9) return "l4";
      if (rand > 0.75) return "l3";
      if (rand > 0.6) return "l2";
      if (rand > 0.4) return "l1";
      return "";
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCells(generatedCells);
  }, []);

  return (
    <section id="github">
      <div className="github-inner">
        {/* LEFT — title + contribution grid */}
        <div className="reveal-left">
          <div className="section-tag">05 — activity</div>
          <h2 className="gh-title">Building in public.</h2>
          <p className="gh-sub">
            I believe in open source and consistent shipping.
            Here&apos;s what my GitHub looks like.
          </p>
          <div className="contribution-grid" style={{ marginTop: "24px" }}>
            {cells.map((level, idx) => (
              <div key={idx} className={`c-cell ${level}`}></div>
            ))}
          </div>
        </div>

        {/* RIGHT — stat cards */}
        <div className="reveal-right">
          <div className="gh-stats">
            <div className="gh-stat">
              <div className="gh-stat-num yellow">200+</div>
              <div className="gh-stat-label">Contributions</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-num green">10+</div>
              <div className="gh-stat-label">Repositories</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-num purple">React</div>
              <div className="gh-stat-label">Main Stack</div>
            </div>
            <div className="gh-stat">
              <div className="gh-stat-num blue">15+</div>
              <div className="gh-stat-label">Stars Earned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

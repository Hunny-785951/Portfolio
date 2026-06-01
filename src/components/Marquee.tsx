"use client";

export default function Marquee() {
  const items = [
    "React.js", "TypeScript", "Tailwind CSS", "Spring Boot", "Node.js", 
    "MySQL", "Figma", "REST APIs", "Git & GitHub", "PHP / Laravel"
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track" id="marqueeTrack">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="marquee-item">{item}</div>
        ))}
      </div>
    </div>
  );
}

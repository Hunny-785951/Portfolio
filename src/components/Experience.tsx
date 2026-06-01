export default function Experience() {
  const experiences = [
    {
      company: "TechNova Solutions",
      status: "Current",
      statusClass: "status-current",
      role: "Frontend Developer",
      period: "2024 — Present",
      desc: "Building highly interactive web applications using React and Next.js. Improved performance scores by 40%."
    },
    {
      company: "Freelance",
      status: "Contract",
      statusClass: "status-contract",
      role: "Full Stack Developer",
      period: "2023 — 2024",
      desc: "Developed e-commerce solutions for local businesses, integrating payment gateways and managing CMS."
    },
    {
      company: "Open Source",
      status: "Self",
      statusClass: "status-self",
      role: "Contributor",
      period: "2022 — Present",
      desc: "Active contributor to various React UI libraries, focusing on accessibility and performance optimizations."
    }
  ];

  return (
    <section id="experience">
      <div className="section-tag reveal">03 — experience</div>
      <h2 className="section-title reveal">Where I&apos;ve been.</h2>
      
      <div className="exp-list reveal-up stagger-children">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-item">
            <div className="exp-timeline">
              <div className="exp-dot"></div>
              <div className="exp-line"></div>
            </div>
            <div>
              <div className="exp-meta">
                <h3 className="exp-company">{exp.company}</h3>
                <span className={`exp-status ${exp.statusClass}`}>{exp.status}</span>
              </div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-period">{exp.period}</div>
              <p className="exp-desc" style={{ marginTop: "12px" }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

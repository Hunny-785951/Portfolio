export default function Skills() {
  const groups = [
    {
      label: "Languages",
      items: ["C / C++", "Java", "JavaScript", "C#", "Kotlin", "Python", "PHP"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Vue.js", "HTML / CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      label: "Backend & Security",
      items: ["Spring Boot", "MySQL", "Linux", "Cyber Security", "Ethical Hacking"],
    },
  ];

  return (
    <section id="skills">
      <div className="skills-section-inner">
        <h2 className="section-title reveal">What I work with.</h2>

        <div className="skills-grid stagger-children">
          {groups.map((group) => (
            <div key={group.label} className="skill-group">
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
